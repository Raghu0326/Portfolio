export interface Project {
  id: string;
  title: string;
  category: string;
  tools: string;
  image: string; // cover image
  fullDescription: string;
  gallery: string[];
  artstationUrl?: string; // Optional link to view original ArtStation post
}

export const projects: Project[] = [
  {
    id: "varion",
    title: "Varion: The Fading Path",
    category: "Lead Artist (UE5 Environments, VFX & Character)",
    tools: "Unreal Engine 5, Niagara VFX, ZBrush, Maya, Nuke",
    image: "/images/preview/varion.jpg", 
    fullDescription: "A detailed character project focusing on head sculpting and retopology, seamlessly integrated into a full greenscreen composite using Nuke. Highlights facial anatomy and expression with high-fidelity surface modeling—initially sculpted in ZBrush and retopologized in Maya. The actors are placed into immersive, stylized Unreal Engine (UE5) environments featuring fading villages and collapsing landscapes. Designed real-time VFX using Niagara for game-state triggers like color-drain effects.",
    artstationUrl: "https://www.artstation.com/artwork/YB1k2P", // ArtStation link
    gallery: [
      "https://cdnb.artstation.com/p/assets/images/images/094/445/143/large/om-hirpara-screenshot-2025-10-14-110255.webp?1765427845",
      "https://cdnb.artstation.com/p/assets/images/images/094/445/773/large/om-hirpara-screenshot-2025-10-14-110221.webp?1765427926"
    ]
  },
  {
    id: "unholy-game-jam",
    title: "Unholy Game Jam",
    category: "Game Art Direction",
    tools: "Unreal Engine, Maya, Lighting, Animation, Substance 3D Painter, Nuke, Houdini, Gaea",
    image: "/images/preview/unholy.webp",
    fullDescription: "A short cinematic sequence created using Unreal Engine 5. This project explores dark atmosphere, tension, and supernatural horror through lighting, animation, and environment storytelling. Character animation was created and refined in Maya, while assets were carefully kitbashed from Epic Games Marketplace/KitBash3D to create a haunting experience.",
    artstationUrl: "https://www.artstation.com/artwork/qebbwa",
    gallery: [
      "https://cdnb.artstation.com/p/assets/images/images/094/446/315/large/om-hirpara-screenshot-2025-12-10-232733.webp?1765431461",
      "https://cdna.artstation.com/p/assets/images/images/094/446/320/large/om-hirpara-screenshot-2025-10-26-125742.webp?1765431470",
      "https://cdnb.artstation.com/p/assets/images/images/094/446/343/large/om-hirpara-screenshot-2025-12-11-003856.webp?1765431551"
    ]
  },
  {
    id: "fighter-jet-combat",
    title: "Fighter Jet Combat",
    category: "VFX / Compositing",
    tools: "Houdini, Nuke, Unreal Engine, Motion Trails",
    image: "/images/preview/fighter jet1.jpg",
    fullDescription: "High-octane VFX sequence featuring fighter jet combat. Showcases complex particle systems and fast-paced motion trails integrated inside Nuke.",
    gallery: []
  },
  {
    id: "urban-alleyway",
    title: "Urban Alleyway",
    category: "3D Environment",
    tools: "Maya, Arnold, Substance Painter, ZBrush, Unreal Engine 5, Photoshop",
    image: "/images/preview/urban ally.jpg",
    fullDescription: "A moody, semi-realistic urban backstreet inspired by Japanese alleyways. Made collaboratively in Maya and Arnold. Built with a focus on clean topology, modularity, and cinematic lighting. It emphasizes composition and storytelling through carefully placed props, creating a lived-in feel for animation or game-ready scenes.",
    artstationUrl: "https://www.artstation.com/artwork/g0bb6E",
    gallery: [
      "https://cdnb.artstation.com/p/assets/images/images/089/537/577/large/om-hirpara-chatgpt-image-jun-2-2025-07-03-39-pm.jpg?1751255192",
      "https://cdnb.artstation.com/p/assets/images/images/089/537/583/large/om-hirpara-screenshot-2025-06-03-010041.jpg?1751255288"
    ]
  },
  {
    id: "in-warzone",
    title: "In Warzone",
    category: "VFX Sequence",
    tools: "Camera Tracking, Matte Painting, Keying, Nuke",
    image: "/images/preview/in warzone.jpg",
    fullDescription: "Green screen compositing and manual tracking VFX shot. This project showcases compositing work in Nuke, focusing on a full green screen replacement and manual 2D tracking workflow. It includes keying, tracking, and color integration to produce a seamless final shot while maintaining consistent lighting and color accuracy.",
    artstationUrl: "https://www.artstation.com/artwork/oJrrqm",
    gallery: [
      "https://cdna.artstation.com/p/assets/images/images/094/445/882/large/om-hirpara-screenshot-2025-10-14-110052.webp?1765430095",
      "https://cdna.artstation.com/p/assets/images/images/094/445/906/large/om-hirpara-screenshot-2025-12-10-234606.webp?1765430155",
      "https://cdnb.artstation.com/p/assets/images/images/094/445/951/large/om-hirpara-screenshot-2025-10-14-110137.webp?1765430335"
    ]
  }
];
