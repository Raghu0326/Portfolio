import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";
import { Decal } from "@react-three/drei";

const textureLoader = new THREE.TextureLoader();

// Each logo entry: url, decal scale [x, y, z] tuned per logo aspect ratio
const logoEntries = [
  {
    url: "/images/logo/418-4188935_substance-painter-2019-logo-hd-png-download-removebg-preview.png",
    decalScale: [1.3, 1.3, 1.3] as [number, number, number], // Substance Painter
  },
  {
    url: "/images/logo/Autodesk-Maya-Logo-2016.png",
    decalScale: [2.0, 1.4, 2.0] as [number, number, number], // Maya (increased size significantly!)
  },
  {
    url: "/images/logo/DaVinci_Resolve_Studio.png",
    decalScale: [1.2, 1.2, 1.2] as [number, number, number], // DaVinci
  },
  {
    url: "/images/logo/Houdini_black_color.png",
    decalScale: [1.1, 0.81, 1.1] as [number, number, number], // Houdini
  },
  {
    url: "/images/logo/Unreal_Engine_logo_and_wordmark.png",
    decalScale: [1.4, 0.84, 1.4] as [number, number, number], // Unreal
  },
  {
    url: "/images/logo/img_0317-removebg-preview.png",
    decalScale: [1.2, 1.2, 1.2] as [number, number, number],
  },
  {
    url: "/images/logo/nukex-removebg-preview.png",
    decalScale: [1.2, 0.85, 1.2] as [number, number, number], // Nuke
  },
];

const textures = logoEntries.map((entry) => textureLoader.load(entry.url));
textures.forEach((texture) => {
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 16;
});

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

// 20 spheres total, we will loop through the 7 logos so no spheres are blank
const LOGO_COUNT = logoEntries.length; // 7
const TOTAL_SPHERES = 20;

// Pre-compute deterministic scales (seeded by index, not random on each render)
const sphereScales = [
  0.98, 0.85, 0.81, 0.94, 1.02, 0.77, 0.98, // first 7 spheres
  0.85, 0.94, 0.72, 1.02, 0.81, 0.89, 0.85, // second 7 spheres
  0.77, 0.89, 0.94, 0.81, 0.98, 0.85,        // next 6 spheres
];

// Pre-compute deterministic starting positions spread wider apart
const spherePositions: [number, number, number][] = [
  [-5, -20, -4],
  [3, -24, -6],
  [-2, -28, -2],
  [6, -18, -8],
  [-6, -26, 0],
  [1, -22, -10],
  [4, -30, -5],
  [-4, -19, -7],
  [5, -27, -3],
  [-3, -23, -9],
  [2, -31, -1],
  [-1, -17, -6],
  [0, -29, -8],
  [7, -21, -4],
  [8, -15, -2],
  [-7, -25, -5],
  [1, -30, -3],
  [-2, -18, -10],
  [5, -20, -7],
  [-5, -28, -8],
];

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  startPosition: [number, number, number];
  material: THREE.MeshPhysicalMaterial;
  texture?: THREE.Texture;
  decalScale?: [number, number, number];
  isActive: boolean;
  isLinedUp: boolean;
  index: number;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  startPosition,
  material,
  texture,
  decalScale,
  isActive,
  isLinedUp,
  index,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  const { viewport } = useThree();

  // Define target grid position (7 unique logos in 2 rows, rest drop off screen)
  const targetPos = useMemo(() => {
    if (index >= LOGO_COUNT) {
      // Hide duplicate logos by dropping them far down
      return new THREE.Vector3(0, -50, 0);
    }

    if (viewport.width < 8) {
      // Mobile vertical! 2 balls per row -> 4 rows (2, 2, 2, 1)
      if (index < 2) return new THREE.Vector3((index - 0.5) * 2.2, 4.0, 0);
      if (index < 4) return new THREE.Vector3((index - 2.5) * 2.2, 1.0, 0);
      if (index < 6) return new THREE.Vector3((index - 4.5) * 2.2, -2.0, 0);
      return new THREE.Vector3(0, -5.0, 0);
    } else if (viewport.width < 12) {
      // Tablet! 3 balls per row -> (3, 3, 1)
      if (index < 3) return new THREE.Vector3((index - 1) * 2.6, 3.0, 0);
      if (index < 6) return new THREE.Vector3((index - 4) * 2.6, -0.5, 0);
      return new THREE.Vector3(0, -4.0, 0);
    } else {
      // 4 balls on top row, 3 balls on bottom row
      if (index < 4) {
        // Row 1 (indices 0, 1, 2, 3) 
        return new THREE.Vector3((index - 1.5) * 3.0, 1.5, 0);
      } else {
        // Row 2 (indices 4, 5, 6)
        return new THREE.Vector3((index - 5) * 3.0, -1.8, 0);
      }
    }
  }, [index, viewport.width]);

  const targetQuat = useMemo(() => new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, 0)), []);

  useFrame((_state, delta) => {
    if (!isActive) return;
    delta = Math.min(0.1, delta);

    if (isLinedUp) {
      if (api.current) {
        // Smoothly lerp towards grid
        const currPos = api.current.translation();
        const nextPos = new THREE.Vector3(currPos.x, currPos.y, currPos.z).lerp(targetPos, 0.05);
        api.current.setTranslation(nextPos, true);
        api.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
        api.current.setAngvel({ x: 0, y: 0, z: 0 }, true);

        const currRot = api.current.rotation();
        const nextRot = new THREE.Quaternion(currRot.x, currRot.y, currRot.z, currRot.w).slerp(targetQuat, 0.05);
        api.current.setRotation(nextRot, true);
      }
    } else {
      // Normal dynamic physics impulse behavior (Spring-based clustering)
      // By NOT normalizing the translation vector, the inward force falls to 0 
      // as they reach the center, preventing them from eternally crushing together!
      const currentTrans = api.current!.translation();
      const impulse = vec
        .copy(currentTrans)
        .multiply(
          new THREE.Vector3(
            -10 * delta * scale,
            -30 * delta * scale,
            -10 * delta * scale
          )
        );

      api.current?.applyImpulse(impulse, true);
    }
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      restitution={0.2}
      position={startPosition}
      rotation={[0.3, 1, 1]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale * 1.3]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
      >
        {texture && decalScale && (
          <>
            <Decal
              position={[0, 0, 1]}
              rotation={[0, 0, 0]}
              scale={decalScale}
            >
              <meshStandardMaterial
                map={texture}
                transparent
                depthWrite={false}
                polygonOffset
                polygonOffsetFactor={-4}
              />
            </Decal>
            <Decal
              position={[0, 0, -1]}
              rotation={[0, Math.PI, 0]}
              scale={decalScale}
            >
              <meshStandardMaterial
                map={texture}
                transparent
                depthWrite={false}
                polygonOffset
                polygonOffsetFactor={-4}
              />
            </Decal>
          </>
        )}
      </mesh>
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );
    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLinedUp, setIsLinedUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const techStackEl = document.querySelector(".techstack");
      if (techStackEl) {
        const rect = techStackEl.getBoundingClientRect();
        setIsActive(rect.top < window.innerHeight);
      } else {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setIsActive(scrollY > 500);
      }
    };
    document.querySelectorAll(".header a").forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", () => {
        const interval = setInterval(() => {
          handleScroll();
        }, 10);
        setTimeout(() => {
          clearInterval(interval);
        }, 1000);
      });
    });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const material = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: "#ffffff",
      emissive: "#222222",
      metalness: 0.1,
      roughness: 0.4,
      clearcoat: 0.8,
    });
  }, []);

  return (
    <div className="techstack">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '6vh', position: 'relative', zIndex: 10, pointerEvents: 'none' }}>
        <h2 style={{ pointerEvents: 'auto' }}> My Toolbox</h2>
        <button
          onClick={() => setIsLinedUp(!isLinedUp)}
          style={{
            marginTop: '15px',
            pointerEvents: 'auto',
            padding: '12px 30px',
            background: 'transparent',
            border: '2px solid white',
            color: 'white',
            borderRadius: '50px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            zIndex: 10
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = 'black'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'white'; }}
        >
          {isLinedUp ? "Scatter Skills" : "See All Skills"}
        </button>
      </div>

      <Canvas
        shadows
        dpr={[1, 1.5]}
        gl={{ alpha: true, stencil: false, depth: false, antialias: false, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
        className="tech-canvas"
      >
        <ambientLight intensity={1} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          color="white"
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <directionalLight position={[0, 5, -4]} intensity={2} />
        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive && !isLinedUp} />
          {Array.from({ length: TOTAL_SPHERES }).map((_, i) => {
            const logoIndex = i % LOGO_COUNT;
            return (
              <SphereGeo
                key={i}
                index={i}
                scale={sphereScales[i]}
                startPosition={spherePositions[i]}
                material={material}
                texture={textures[logoIndex]}
                decalScale={logoEntries[logoIndex].decalScale}
                isActive={isActive}
                isLinedUp={isLinedUp}
              />
            );
          })}
        </Physics>
        <Environment
          files="/models/char_enviorment.hdr"
          environmentIntensity={0.5}
          environmentRotation={[0, 4, 2]}
        />
        <EffectComposer enableNormalPass={false}>
          <N8AO color="#0f002c" aoRadius={2} intensity={1.15} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default TechStack;
