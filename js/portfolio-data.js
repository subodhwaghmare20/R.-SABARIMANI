// Portfolio Data for R. Sabarimani - Graphic Designer
const PORTFOLIO_DATA = {
  profile: {
    name: "R. Sabarimani",
    tagline: "Graphic Designer & Motion Visualizer",
    shortBio: "Passionate Graphic Designer & Visual Content Creator with expertise in brand identity, social media creatives, high-impact marketing posters, and dynamic motion graphics. Currently handling complete visual branding and Instagram management at QSpiders Coimbatore, while serving international clients in real estate retouching and streetwear brand identity.",
    instagram: {
      username: "@_creative.dreamer",
      url: "https://www.instagram.com/_creative.dreamer?jplx=eWZmbmR0bmM2ZWM0"
    },
    instituteInstagram: {
      username: "@qspiderscoimbatore",
      url: "https://www.instagram.com/qspiderscoimbatore/"
    },
    email: "sabaridesigner76@gmail.com",
    phone: "+91 6382658438",
    phoneRaw: "6382658438",
    whatsappUrl: "https://wa.me/916382658438?text=Hi%20Sabarimani,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!",
    location: "Vadavalli, Coimbatore, Tamil Nadu, India",
    resumeFile: "Collection/Gd Resume -E.jpg.jpeg",
    stats: [
      { number: "500+", label: "Student Testimonials & Creatives" },
      { number: "150+", label: "Placement & Campaign Designs" },
      { number: "50+", label: "Viral Motion Reels & Promos" },
      { number: "100%", label: "Client Satisfaction Rate" }
    ],
    skills: [
      { name: "Graphic Design", category: "Core Design", level: 95 },
      { name: "Social Media Design", category: "Core Design", level: 96 },
      { name: "Branding & Visual Identity", category: "Core Design", level: 92 },
      { name: "Poster & Flyer Design", category: "Core Design", level: 94 },
      { name: "YouTube & Video Thumbnails", category: "Core Design", level: 92 },
      { name: "Logo Design & Typography", category: "Core Design", level: 90 },
      { name: "Video Editing", category: "Motion", level: 94 },
      { name: "Motion Graphics & Reels", category: "Motion", level: 90 },
      { name: "Kinetic Text Animation", category: "Motion", level: 92 },
      { name: "Real Estate Photo Retouching", category: "Editing", level: 88 }
    ],
    software: [
      { name: "Adobe Photoshop", icon: "photoshop", level: 96, desc: "Image manipulation, composite posters, photo retouching & digital mockups" },
      { name: "Adobe Illustrator", icon: "illustrator", level: 94, desc: "Vector graphics, custom typography, logo design & brand identity systems" },
      { name: "Adobe Premiere Pro", icon: "premiere", level: 92, desc: "Long-form & short-form video editing, audio mixing, color correction" },
      { name: "Adobe InDesign", icon: "indesign", level: 88, desc: "Editorial layout, multi-page print collateral & catalog design" },
      { name: "CapCut Pro", icon: "capcut", level: 95, desc: "High-paced viral social reels, kinetic text animation, speed ramps & sound design" },
      { name: "CorelDRAW", icon: "coreldraw", level: 86, desc: "Vector printing, commercial signage & print-ready flex layouts" }
    ],
    education: [
      {
        degree: "Bachelor of Graphic Design",
        institution: "Adoro Multimedia, Coimbatore",
        period: "2024 – 2025",
        description: "Specialized training in advanced graphic layout, brand design, motion typography, commercial printing, and video post-production."
      },
      {
        degree: "Bachelor of Commerce",
        institution: "SRS College of Arts & Science",
        period: "2021 – 2024",
        description: "Foundational business, marketing principles, consumer psychology, and commercial project management."
      }
    ],
    experience: [
      {
        role: "Graphic Designer & Content Creator",
        company: "Test Yantra Software Solutions | QSpiders",
        location: "Coimbatore, India",
        period: "2024 – Present",
        responsibilities: [
          "Independently manage the institute's official Instagram page and complete daily visual creative strategy.",
          "Design high-converting placement success posters, new batch announcement banners, trainer branding, and interview requirement posters.",
          "Produce, edit, and animate engaging promotional reels, kinetic text animations, and event coverage videos.",
          "Direct and edit video testimonials from 500+ successful placed students.",
          "Maintain crisp visual branding consistency across offline banners, digital flyers, and multi-channel campaigns."
        ]
      },
      {
        role: "Real Estate Image Retouching Specialist",
        company: "US-Based Real Estate Clients",
        location: "Remote / Freelance",
        period: "2024",
        responsibilities: [
          "Retouched high-end interior and exterior property photographs for luxury real estate listings.",
          "Conducted exposure correction, sky replacements, natural shadow/highlight balancing, and lens distortion corrections.",
          "Delivered print and MLS-ready visual assets maintaining clean, realistic, high-fidelity architectural quality."
        ]
      }
    ]
  },

  // Case Study Data for "RESTORE" Streetwear Brand
  featuredCaseStudy: {
    title: "RESTORE — Streetwear Brand Identity & Custom Emblem",
    subtitle: "From hand-drawn sketch to vector precision, custom brutalist lettering, and 3D apparel mockups.",
    client: "RESTORE Apparel / Private Client",
    year: "2024",
    tools: ["Adobe Illustrator", "Sketching", "Photoshop 3D Mockup", "CapCut Video"],
    videoUrl: "Collection/WhatsApp Video 2026-11-24 at 10.45.34 PM.mp4",
    summary: "The client wanted a bold, edgy streetwear brand identity featuring raw 'freaky' custom lettering and an aggressive, iconic symbol. Sabarimani conceptualized the logo in pencil, built custom vector typography with thorns and sharp geometry in Adobe Illustrator, paired it with a fierce eagle emblem inside a circular badge, and presented photorealistic mockups across denim jackets, neon storefront signage, and luxury merchandise packaging.",
    steps: [
      {
        step: "01",
        title: "Pencil Ideation & Lettering",
        desc: "Hand-sketching sharp, gothic, metal-inspired typography for 'RESTORE' with custom barbed serifs to achieve the exact raw street culture aesthetic."
      },
      {
        step: "02",
        title: "Vector Construction in Illustrator",
        desc: "Tracing the sketch using the Pen Tool, defining geometric line anchors, and testing circular badge backings with segmented arcs."
      },
      {
        step: "03",
        title: "Eagle Mascot Emblem Integration",
        desc: "Pairing a stylized predatory eagle illustration with piercing crimson eyes, balancing the heavy red lettering against the cool slate-blue emblem."
      },
      {
        step: "04",
        title: "Commercial 3D Product Mockups",
        desc: "Rendering real-world merchandise applications: oversized embroidered denim jacket back patch, glowing neon acrylic retail facade, and matte black tote bag."
      }
    ]
  },

  // Full Gallery Items: Images & Videos
  items: [
    // --- VIDEOS ---
    {
      id: "vid-restore",
      type: "video",
      category: "branding",
      categoryLabel: "Brand & Logo Design",
      title: "RESTORE — Brand Identity & Logo Design Process",
      fileUrl: "Collection/WhatsApp Video 2026-11-24 at 10.45.34 PM.mp4",
      aspect: "vertical",
      client: "RESTORE Apparel",
      tools: ["Adobe Illustrator", "Sketching", "Photoshop", "CapCut"],
      tags: ["Logo Design", "Streetwear", "Custom Typography", "3D Mockups", "Case Study"],
      description: "Full design documentation from hand-drawn concept sketch to vector geometry, custom typography, eagle emblem illustration, and realistic product mockups on denim jackets and neon retail signage."
    },
    {
      id: "vid-hackathon",
      type: "video",
      category: "motion",
      categoryLabel: "Motion & Reels",
      title: "Hackathon 2026 — High-Octane Launch Reel",
      fileUrl: "Collection/WhatsApp Video 2026-11-24 at 10.41.26 PM.mp4",
      aspect: "vertical",
      client: "QSpiders Coimbatore",
      tools: ["Adobe Premiere Pro", "CapCut", "Motion Typography"],
      tags: ["Kinetic Typography", "Event Promo", "Fast Cuts", "Sound Sync", "Viral Reel"],
      description: "Fast-paced promotional reel featuring seamless print-to-digital transitions, metallic 3D title animation ('HACKATHON 2026'), live classroom atmosphere, and dynamic Tamil voiceover sync."
    },
    {
      id: "vid-premium-batch",
      type: "video",
      category: "motion",
      categoryLabel: "Motion & Reels",
      title: "Premium IT Batch Announcement Reel",
      fileUrl: "Collection/WhatsApp Video 2026-11-24 at 10.41.27 PM.mp4",
      aspect: "vertical",
      client: "QSpiders Coimbatore",
      tools: ["CapCut Pro", "Premiere Pro", "Text Animation"],
      tags: ["Reel Editing", "Kinetic Callouts", "Classroom Energy", "CTA Outro"],
      description: "High-engagement social reel utilizing bold kinetic text overlays ('BATCH SIZE', 'EXPERT MENTORS', 'PLACEMENT FOCUSED', 'LIVE PROJECTS') synchronized to driving beats with a clear call-to-action."
    },
    {
      id: "vid-mascot-sheru",
      type: "video",
      category: "motion",
      categoryLabel: "Motion & Reels",
      title: "'Sheru' The Lion Mascot Campaign",
      fileUrl: "Collection/WhatsApp Video 2026-11-24 at 10.41.31 PM (1).mp4",
      aspect: "vertical",
      client: "QSpiders Coimbatore",
      tools: ["Video Editing", "Color Grading", "CapCut Pro"],
      tags: ["Creative Campaign", "Mascot Video", "Campus Tour", "Viral Format"],
      description: "Entertaining campus storytelling campaign blending mascot character acting with cinematic slow-motion walkthrough, student interaction, and high-energy background music for maximum social reach."
    },
    {
      id: "vid-spiderman-web",
      type: "video",
      category: "motion",
      categoryLabel: "Motion & Reels",
      title: "Spiderman Web-Slinging Placement Reveal",
      fileUrl: "Collection/WhatsApp Video 2026-11-24 at 10.41.31 PM.mp4",
      aspect: "vertical",
      client: "QSpiders Coimbatore",
      tools: ["VFX Editing", "POV Video", "CapCut Pro"],
      tags: ["Creative VFX", "POV Reel", "Placement Reveal", "Engagement Hook"],
      description: "Creative POV transition video using superhero web-slinging visual effects to reveal student placement records and the institute's hall of fame walls."
    },
    {
      id: "vid-mock-interview",
      type: "video",
      category: "motion",
      categoryLabel: "Motion & Reels",
      title: "Manual Testing Mock Interview Series Reel",
      fileUrl: "Collection/WhatsApp Video 2026-11-24 at 10.40.06 PM.mp4",
      aspect: "vertical",
      client: "QSpiders Coimbatore",
      tools: ["Premiere Pro", "CapCut", "Audio Design"],
      tags: ["Mock Interview", "Documentary Style", "Social Reel", "Outro Animation"],
      description: "Authentic on-ground documentary reel covering real mock interview sessions, multi-camera angle editing, background score balancing, and custom animated Instagram follow outro."
    },

    // --- IMAGES: SOCIAL MEDIA, POSTERS & PLACEMENT CREATIVES ---
    {
      id: "img-placed-gokul",
      type: "image",
      category: "social",
      categoryLabel: "Social Media & Campaigns",
      title: "Student Placement Spotlight — Gokul",
      fileUrl: "Collection/WhatsApp Image 2026-11-24 at 10.41.29 PM.jpeg",
      aspect: "portrait",
      client: "QSpiders Coimbatore",
      tools: ["Adobe Photoshop", "Adobe Illustrator"],
      tags: ["Placement Poster", "Student Spotlight", "Confetti Effect", "Campaign Design"],
      description: "Student placement success announcement creative designed for QSpiders celebrating student Gokul's recruitment as Software Engineer Trainee. Features celebratory golden confetti, bold typographic hierarchy, and custom badge chips."
    },
    {
      id: "img-placed-kaveen",
      type: "image",
      category: "social",
      categoryLabel: "Social Media & Campaigns",
      title: "Proudly Placed! Kaveen .M — 7 LPA Package",
      fileUrl: "Collection/WhatsApp Image 2026-11-24 at 10.41.28 PM (1).jpeg",
      aspect: "portrait",
      client: "QSpiders Coimbatore",
      tools: ["Adobe Photoshop", "Adobe Illustrator"],
      tags: ["Placement Poster", "7 LPA", "Corporate Branding", "Student Spotlight"],
      description: "Clean placement creative for Kaveen .M placed as Associate Developer with a 7 LPA package. Designed with balanced corporate blue and orange brand colors, framed candidate photo, and clear degree identifiers."
    },
    {
      id: "img-milestone-nikil",
      type: "image",
      category: "social",
      categoryLabel: "Social Media & Campaigns",
      title: "Milestone Achieved! Nikil Kumar — Quality Analyst",
      fileUrl: "Collection/WhatsApp Image 2026-11-24 at 10.41.29 PM (1).jpeg",
      aspect: "portrait",
      client: "QSpiders Coimbatore",
      tools: ["Adobe Illustrator", "Photoshop"],
      tags: ["Milestone Creative", "Geometric Accent", "Clean Layout"],
      description: "Geometric circular focal design honoring Nikil Kumar from Kathir College of Engineering placed as Quality Analyst. Uses bold serif headline typography and modern color blocking."
    },
    {
      id: "img-trainer-pavan-batch",
      type: "image",
      category: "social",
      categoryLabel: "Social Media & Campaigns",
      title: "New Batch Announcement — Attend Free Demo",
      fileUrl: "Collection/WhatsApp Image 2026-11-24 at 10.40.44 PM.jpeg",
      aspect: "portrait",
      client: "QSpiders Coimbatore",
      tools: ["Adobe Illustrator", "Photoshop"],
      tags: ["Batch Launch", "Trainer Branding", "Corporate Poster", "Lead Gen"],
      description: "High-impact batch announcement poster featuring Branch Head Trainer Pavan Sir. Incorporates 3D megaphone badges, program bullet lists (Java, Python, Testing, Data Science), and prominent contact badges."
    },
    {
      id: "img-trainer-pavan-october",
      type: "image",
      category: "social",
      categoryLabel: "Social Media & Campaigns",
      title: "Free Main Class Demo — October Batch",
      fileUrl: "Collection/WhatsApp Image 2026-11-24 at 10.41.28 PM.jpeg",
      aspect: "portrait",
      client: "QSpiders Coimbatore",
      tools: ["Adobe Illustrator", "Photoshop"],
      tags: ["Batch Poster", "Corporate Flyer", "Orange Aesthetic"],
      description: "Crisp white & energetic orange promotional flyer designed to drive walk-in demo attendees, featuring clear calendar date callouts, trainer portrait cutout, and feature benefit badges."
    },
    {
      id: "img-trainer-pavan-august",
      type: "image",
      category: "social",
      categoryLabel: "Social Media & Campaigns",
      title: "New Batch Announcement — August Session",
      fileUrl: "Collection/WhatsApp Image 2026-11-24 at 10.41.30 PM (1).jpeg",
      aspect: "portrait",
      client: "QSpiders Coimbatore",
      tools: ["Adobe Illustrator", "Photoshop"],
      tags: ["Batch Poster", "Curved Layout", "Lead Gen"],
      description: "Modern promotional creative with curved diagonal layout, clean arrow bullet points, and high-visibility phone number CTA bars."
    },
    {
      id: "img-batch-pavan-july",
      type: "image",
      category: "social",
      categoryLabel: "Social Media & Campaigns",
      title: "Classroom Demo Batch — July Session",
      fileUrl: "Collection/WhatsApp Image 2026-11-24 at 11.07.10 PM.jpeg",
      aspect: "portrait",
      client: "QSpiders Coimbatore",
      tools: ["Adobe Illustrator", "Photoshop"],
      tags: ["Batch Announcement", "Corporate Blue & Orange", "Event Creative"],
      description: "Framed portrait layout highlighting trainer expertise, course roadmap breakdown, and official QSpiders branding elements."
    },
    {
      id: "img-session-software-testing",
      type: "image",
      category: "social",
      categoryLabel: "Social Media & Campaigns",
      title: "Career Intelligence Session — Software Testing",
      fileUrl: "Collection/WhatsApp Image 2026-11-24 at 10.41.32 PM.jpeg",
      aspect: "portrait",
      client: "QSpiders Coimbatore",
      tools: ["Adobe Illustrator", "Photoshop"],
      tags: ["Speaker Branding", "Webinar Poster", "Event Creative"],
      description: "Keynote session flyer for Industry Expert Debrup Sir on Software Testing career intelligence. Utilizes modern rounded pill containers and crisp typography."
    },
    {
      id: "img-session-core-java",
      type: "image",
      category: "social",
      categoryLabel: "Social Media & Campaigns",
      title: "Career Intelligence Session — Core Java",
      fileUrl: "Collection/WhatsApp Image 2026-11-24 at 10.43.20 PM.jpeg",
      aspect: "portrait",
      client: "QSpiders Coimbatore",
      tools: ["Adobe Illustrator", "Photoshop"],
      tags: ["Java Event", "3D Tech Iconography", "Speaker Poster"],
      description: "Vibrant demo batch poster with 3D glowing Java cup emblem, trainer spotlight on Divyesh Gadilohar, and clean informative schedule layout."
    },
    {
      id: "img-birthday-pavan",
      type: "image",
      category: "social",
      categoryLabel: "Social Media & Campaigns",
      title: "Executive Birthday Tribute — Pavan Yadhav Sir",
      fileUrl: "Collection/WhatsApp Image 2026-11-24 at 10.44.54 PM.jpeg",
      aspect: "portrait",
      client: "QSpiders Coimbatore",
      tools: ["Adobe Photoshop", "Typography Art"],
      tags: ["Executive Tribute", "Typography Art", "Celebration Creative"],
      description: "Minimalist executive birthday tribute poster blending bold vertical lettering, golden atmospheric lighting, subtle confetti bokeh, and clean executive framing."
    },
    {
      id: "img-building-it-careers",
      type: "image",
      category: "social",
      categoryLabel: "Social Media & Campaigns",
      title: "Building IT Careers in Coimbatore — City Launch Post",
      fileUrl: "Collection/WhatsApp Image 2026-11-24 at 11.08.50 PM.jpeg",
      aspect: "square",
      client: "QSpiders Coimbatore",
      tools: ["Adobe Photoshop", "Adobe Illustrator"],
      tags: ["City Launch", "Instagram Post", "Course Catalog"],
      description: "Clean Instagram square creative announcing new batch schedules and comprehensive course offerings including Full Stack, Testing, Data Science, and BFSI."
    },

    // --- THUMBNAILS & DIGITAL BANNERS ---
    {
      id: "img-thumb-sonali",
      type: "image",
      category: "thumbnails",
      categoryLabel: "Thumbnails & Banners",
      title: "Academic Excellence Thumbnail — Sonali V Bangera (93.69%)",
      fileUrl: "Collection/WhatsApp Image 2026-11-24 at 11.03.43 PM.jpeg",
      aspect: "landscape",
      client: "QSpiders Coimbatore",
      tools: ["Adobe Photoshop", "Thumbnail Design"],
      tags: ["YouTube Thumbnail", "16:9 Banner", "High CTR", "Academic Record"],
      description: "High-clickthrough 16:9 thumbnail format celebrating 93.69% BCA-CS achievement. Utilizes high-contrast orange typography, dark vector illustration grid background, and vibrant subject cutout."
    },
    {
      id: "img-thumb-parushni",
      type: "image",
      category: "thumbnails",
      categoryLabel: "Thumbnails & Banners",
      title: "Graduate Trainee Success Banner — Parushni P S",
      fileUrl: "Collection/WhatsApp Image 2026-11-24 at 11.06.09 PM.jpeg",
      aspect: "landscape",
      client: "QSpiders Coimbatore",
      tools: ["Adobe Photoshop", "Digital Compositing"],
      tags: ["Digital Banner", "16:9 Thumbnail", "Tech Collage", "Student Success"],
      description: "Dynamic digital showcase banner featuring modern tech workspace collage, coding screen assets, AI brain graphic, and professional student photo integration."
    },

    // --- REAL ESTATE & PHOTO RETOUCHING ---
    {
      id: "img-resume-preview",
      type: "image",
      category: "resume",
      categoryLabel: "Official Resume & Credentials",
      title: "Official Resume — Sabarimani .R Graphic Designer",
      fileUrl: "Collection/Gd Resume -E.jpg.jpeg",
      aspect: "portrait",
      client: "Professional Portfolio",
      tools: ["Adobe InDesign", "Photoshop"],
      tags: ["Resume", "Qualifications", "Experience", "Skills"],
      description: "Official professional resume sheet detailing education, skill sets, software proficiencies, contact channels, and agency experience."
    }
  ],

  // Categories for filtering
  categories: [
    { id: "all", label: "All Work" },
    { id: "motion", label: "Motion & Reels (6)" },
    { id: "branding", label: "Brand & Logo Design" },
    { id: "social", label: "Social Media & Campaigns (8)" },
    { id: "thumbnails", label: "Thumbnails & Banners (2)" }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
