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
    category: "Lead Artist (Environment, VFX & Character Work)",
    tools: "Unreal Engine 5, Niagara VFX, ZBrush, Maya, Nuke",
    image: "/images/preview/varion.jpg", 
    fullDescription: "Cinematic world-building and visual effects for a stylized action-driven experience. Focused on facial anatomy and expression with high-fidelity surface modeling integrated into a full greenscreen composite. The actors are placed into immersive, atmospheric environments featuring fading villages and collapsing landscapes. Atmosphere, action, and final visual polish brought together in a cinematic workflow.",
    artstationUrl: "https://www.artstation.com/artwork/YB1k2P", // ArtStation link
    gallery: [
      "https://cdnb.artstation.com/p/assets/images/images/094/445/143/large/om-hirpara-screenshot-2025-10-14-110255.webp?1765427845",
      "https://cdnb.artstation.com/p/assets/images/images/094/445/773/large/om-hirpara-screenshot-2025-10-14-110221.webp?1765427926"
    ]
  },
  {
    id: "unholy-game-jam",
    title: "Unholy Game Jam",
    category: "Visual Development, Effects & Final Polish",
    tools: "Unreal Engine, Maya, Lighting, Animation, Substance 3D Painter, Nuke, Houdini, Gaea",
    image: "/images/preview/unholy.webp",
    fullDescription: "Environment creation, motion design, and final-shot development. This project explores dark atmosphere, tension, and supernatural horror through lighting, animation, and environment storytelling. Features compelling creative character animation and carefully crafted cinematic assets to create a haunting experience.",
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
    category: "VFX, Environment Art & Animation",
    tools: "Houdini, Nuke, Unreal Engine, Motion Trails",
    image: "/images/preview/fighter jet1.jpg",
    fullDescription: "Visual storytelling through effects, animation, and polished presentation. High-octane sequence featuring complex particle systems, fast-paced motion trails, and dynamic visual integration for maximum impact.",
    gallery: []
  },
  {
    id: "urban-alleyway",
    title: "Urban Alleyway",
    category: "Environment Art & Visual Direction",
    tools: "Maya, Arnold, Substance Painter, ZBrush, Unreal Engine 5, Photoshop",
    image: "/images/preview/urban ally.jpg",
    fullDescription: "Environment creation, motion design, and final-shot development. A moody, atmospheric urban backstreet inspired by Japanese alleyways. Built with a focus on cinematic lighting, strong composition, and storytelling through carefully placed props, creating a lived-in feel for animation or interactive scenes.",
    artstationUrl: "https://www.artstation.com/artwork/g0bb6E",
    gallery: [
      "https://cdnb.artstation.com/p/assets/images/images/089/537/577/large/om-hirpara-chatgpt-image-jun-2-2025-07-03-39-pm.jpg?1751255192",
      "https://cdnb.artstation.com/p/assets/images/images/089/537/583/large/om-hirpara-screenshot-2025-06-03-010041.jpg?1751255288"
    ]
  },
  {
    id: "in-warzone",
    title: "In Warzone",
    category: "Visual Development, Effects & Final Polish",
    tools: "Camera Tracking, Matte Painting, Keying, Nuke",
    image: "/images/preview/in warzone.jpg",
    fullDescription: "Visual storytelling through effects, animation, and polished presentation. Features a full green screen replacement and tracking workflow. Includes seamless compositing and color integration to produce a final shot that maintains consistent lighting, precise detail, and cinematic accuracy.",
    artstationUrl: "https://www.artstation.com/artwork/oJrrqm",
    gallery: [
      "https://cdna.artstation.com/p/assets/images/images/094/445/882/large/om-hirpara-screenshot-2025-10-14-110052.webp?1765430095",
      "https://cdna.artstation.com/p/assets/images/images/094/445/906/large/om-hirpara-screenshot-2025-12-10-234606.webp?1765430155",
      "https://cdnb.artstation.com/p/assets/images/images/094/445/951/large/om-hirpara-screenshot-2025-10-14-110137.webp?1765430335"
    ]
  }
];
