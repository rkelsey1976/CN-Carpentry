export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  description: string;
  longDescription: string;
  features: string[];
  faqs: { q: string; a: string }[];
  image: string;
  imageAlt: string;
  gallery: GalleryImage[];
  category: "general" | "bespoke";
  relatedSlugs: string[];
}

export const services: ServiceData[] = [
  {
    slug: "fitted-wardrobes",
    title: "Fitted Wardrobes in Bath",
    shortTitle: "Fitted Wardrobes",
    metaTitle: "Fitted Wardrobes Bath | Bespoke Built-In Wardrobes",
    metaDescription:
      "Custom fitted wardrobes in Bath & surrounding areas. Maximise storage, perfectly tailored to your space. Free quotes, fully insured. Call CN Carpentry on 07948 643391.",
    heroHeading: "Bespoke Fitted Wardrobes",
    heroSubheading:
      "Beautifully crafted, custom-built wardrobes designed to maximise every inch of your bedroom space.",
    description:
      "Our fitted wardrobes are built to measure, designed around your room's exact dimensions and your storage needs. Whether you want sliding doors, hinged doors, or open wardrobe systems, we craft each piece to fit perfectly.",
    longDescription:
      "A fitted wardrobe transforms your bedroom, providing clean lines, maximum storage, and a premium feel. Unlike off-the-shelf furniture, our wardrobes are built into the exact shape of your room - handling sloping ceilings, chimney breasts, and awkward alcoves with ease. We work with you to design the interior layout: hanging rails at the right height, shelving for folded clothes, drawers for accessories, and shoe racks if needed. Every wardrobe is built on-site using quality materials and finished to a high standard.",
    features: [
      "Built to measure for a perfect fit",
      "Handles sloping ceilings & awkward spaces",
      "Choice of sliding or hinged doors",
      "Custom interior layouts - rails, shelves, drawers",
      "Wide range of finishes and colours",
      "Clean, professional installation",
      "Free design consultation and quote",
    ],
    faqs: [
      {
        q: "How long does it take to fit a wardrobe?",
        a: "A typical single wardrobe takes 2-3 days. A full wall of fitted wardrobes usually takes 3-5 days depending on complexity.",
      },
      {
        q: "Can you fit wardrobes in rooms with sloping ceilings?",
        a: "Absolutely. We specialise in making the most of tricky spaces - sloping ceilings, alcoves, and chimney breasts are no problem.",
      },
      {
        q: "Do you supply the materials?",
        a: "Yes, we handle everything from design to materials to installation. We source quality materials and can offer different finishes to match your room.",
      },
    ],
    image: "/fitted-wardrobe-1.jpg",
    imageAlt: "Bespoke fitted wardrobe by CN Carpentry in Bath",
    gallery: [
      { src: "/fitted-wardrobe-1.jpg", alt: "Bespoke fitted wardrobe with shaker-style doors open showing interior", caption: "Fitted wardrobe with integrated drawers and shelving" },
      { src: "/fitted-wardrobe-2.jpg", alt: "Full wall sliding door fitted wardrobe in a modern bedroom", caption: "Sliding door wardrobes designed to maximise storage" },
      { src: "/fitted-wardrobe-3.jpg", alt: "Inside of a bespoke wardrobe showing organised hanging rails, drawers and shoe rack", caption: "Custom interior layouts tailored to your needs" },
    ],
    category: "bespoke",
    relatedSlugs: ["alcove-units", "media-walls", "skirting-architrave"],
  },
  {
    slug: "media-walls",
    title: "Media Walls in Bath",
    shortTitle: "Media Walls",
    metaTitle: "Media Walls Bath | Custom TV Feature Walls",
    metaDescription:
      "Bespoke media walls in Bath. Custom TV feature walls with integrated storage, lighting & cable management. Free quotes. Call CN Carpentry on 07948 643391.",
    heroHeading: "Custom Media Walls",
    heroSubheading:
      "Stunning TV feature walls with integrated storage, lighting, and seamless cable management.",
    description:
      "A media wall is the modern centrepiece of any living room. We design and build bespoke media walls that house your TV, soundbar, gaming consoles, and more - all with hidden cables and integrated LED lighting.",
    longDescription:
      "Our media walls are fully bespoke, designed around your TV size and your room layout. We can incorporate floating shelves, cupboard storage, electric fireplace recesses, and LED strip lighting. Everything is finished to a high standard with clean lines and concealed wiring. Whether you want a full wall feature or a more subtle unit, we work with you to create something that looks incredible and is completely practical.",
    features: [
      "Designed around your TV and room layout",
      "Integrated LED strip lighting",
      "Hidden cable management throughout",
      "Storage cupboards and floating shelves",
      "Electric fireplace recess options",
      "Soundbar and speaker integration",
      "Professional finish with clean lines",
    ],
    faqs: [
      {
        q: "Can you include an electric fireplace in the media wall?",
        a: "Yes, we can design a recess for most standard electric fireplaces. Just let us know the model and we will build it in.",
      },
      {
        q: "How are the cables hidden?",
        a: "We route all cables through the wall or through concealed channels within the unit. Everything is planned before we start so there are zero visible wires.",
      },
      {
        q: "How long does a media wall take?",
        a: "Most media walls take 5-7 days from start to finish, depending on complexity and features like lighting or fireplace recesses.",
      },
    ],
    image: "/carpentry-work-1.png",
    imageAlt: "Custom media wall with integrated lighting by CN Carpentry",
    gallery: [
      { src: "/carpentry-work-1.png", alt: "Media wall with integrated lighting", caption: "Full media wall with LED strip lighting and storage" },
      { src: "/media-wall-2.jpg", alt: "Media wall with electric fireplace and LED-lit shelving", caption: "Media wall with integrated electric fireplace and accent lighting" },
      { src: "/media-wall-3.jpg", alt: "Dark grey modern media wall with wood accent panel", caption: "Contemporary media wall with concealed storage throughout" },
    ],
    category: "bespoke",
    relatedSlugs: ["alcove-units", "fitted-wardrobes", "flooring"],
  },
  {
    slug: "alcove-units",
    title: "Alcove Units in Bath",
    shortTitle: "Alcove Units",
    metaTitle: "Alcove Units Bath | Fitted Shelving & Cupboards",
    metaDescription:
      "Bespoke alcove units in Bath. Custom shelving, cupboards & bookcases fitted into alcoves. Maximise dead space. Free quotes. Call CN Carpentry 07948 643391.",
    heroHeading: "Fitted Alcove Units",
    heroSubheading:
      "Transform wasted alcove space into beautiful, functional storage with custom-built shelving and cupboards.",
    description:
      "Alcoves either side of a chimney breast are often wasted space. We build fitted shelving, cupboards, and display units that slot perfectly into these spaces, giving your room a polished, built-in look.",
    longDescription:
      "Our alcove units are designed and built to the exact dimensions of your alcoves. We can create a combination of open shelving for display, closed cupboards for hidden storage, and drawers for smaller items. Whether you want a traditional look with detailed mouldings or a sleek modern finish, we tailor the design to your taste. Alcove units add real character and value to a room and are one of our most popular services.",
    features: [
      "Built to the exact dimensions of your alcoves",
      "Mix of open shelving and closed storage",
      "Traditional or contemporary styling",
      "Floating shelf options available",
      "Integrated lighting on request",
      "Quality materials and finishes",
      "Adds character and value to your home",
    ],
    faqs: [
      {
        q: "Can you match existing skirting and architrave?",
        a: "Yes, we can match or complement your existing skirting profiles and architrave so the units look like they have always been there.",
      },
      {
        q: "How long do alcove units take to build?",
        a: "A pair of alcove units (one either side of a chimney breast) typically takes 3-5 days.",
      },
      {
        q: "Can I have both shelves and cupboards?",
        a: "Absolutely. Most customers opt for cupboards at the bottom with open shelving above, but we can design any combination you like.",
      },
    ],
    image: "/alcove-shelving.png",
    imageAlt: "Fitted alcove shelving and cupboards by CN Carpentry in Bath",
    gallery: [
      { src: "/alcove-shelving.png", alt: "Alcove shelving with cupboards", caption: "Open shelving with cupboard storage below" },
      { src: "/alcove-unit-1.png", alt: "Fitted alcove unit", caption: "Custom built unit fitted into alcove space" },
      { src: "/alcove-unit-2.png", alt: "Alcove unit with drawers and shelving", caption: "Integrated storage with clean lines" },
    ],
    category: "bespoke",
    relatedSlugs: ["fitted-wardrobes", "media-walls", "skirting-architrave"],
  },
  {
    slug: "van-conversions",
    title: "Van Conversions in Bath",
    shortTitle: "Van Conversions",
    metaTitle: "Van Conversions Bath | Camper & Van Racking",
    metaDescription:
      "Professional van conversions & van racking in Bath. Camper van fit-outs, bespoke cabinetry, LED lighting. A service most carpenters don't offer! Call 07948 643391.",
    heroHeading: "Van Racking & Camper Conversions",
    heroSubheading:
      "A service most carpenters don't offer. Custom van racking for tradespeople and full camper conversions.",
    description:
      "Whether you need practical van racking for your trade or a full camper van conversion for weekend adventures, we bring the same quality carpentry skills to your vehicle as we do to your home.",
    longDescription:
      "Our van conversion service covers two main areas. For tradespeople, we build custom van racking systems with shelving, tool holders, and secure storage designed around how you actually work. For camper conversions, we create full interior fit-outs including sleeping platforms, kitchen units, seating, overhead storage, and integrated LED lighting. Every conversion is designed bespoke to your van and your requirements. This is a unique offering - very few carpenters in the Bath area provide this service.",
    features: [
      "Custom van racking for any trade",
      "Full camper van interior fit-outs",
      "Sleeping platforms and kitchen units",
      "Bespoke cabinetry and worktops",
      "Integrated LED lighting systems",
      "Secure storage solutions",
      "Works with all popular van types",
    ],
    faqs: [
      {
        q: "Which van types do you work with?",
        a: "We work with all popular vans including Transit, Sprinter, Crafter, Vivaro, Transporter, and more. Each conversion is designed for the specific vehicle.",
      },
      {
        q: "How long does a camper conversion take?",
        a: "A basic van racking job can be done in 2-3 days. A full camper conversion typically takes 1-3 weeks depending on the specification.",
      },
      {
        q: "Do you do the electrics as well?",
        a: "We handle all the carpentry and cabinetry. For electrical work we can recommend trusted electricians we work with regularly.",
      },
    ],
    image: "/van-conversion.png",
    imageAlt: "Camper van conversion with custom cabinetry by CN Carpentry",
    gallery: [
      { src: "/van-conversion.png", alt: "Camper van interior cabinetry", caption: "Full camper fit-out with bespoke cabinetry" },
      { src: "/van-conversion-2.jpg", alt: "Custom van racking with organised tool storage and drawers", caption: "Bespoke van racking for tradespeople" },
      { src: "/van-conversion-3.jpg", alt: "Camper van kitchen and seating area with birch plywood cabinetry", caption: "Camper conversion with kitchen unit and fold-out table" },
    ],
    category: "bespoke",
    relatedSlugs: ["fitted-wardrobes", "flooring", "decking-fencing"],
  },
  {
    slug: "door-hanging",
    title: "Door Hanging in Bath",
    shortTitle: "Door Hanging",
    metaTitle: "Door Hanging Bath | Door Fitting & Adjustments",
    metaDescription:
      "Professional door hanging & adjustments in Bath. Internal & external doors fitted, trimmed, and adjusted. Fast, reliable service. Call CN Carpentry 07948 643391.",
    heroHeading: "Door Hanging & Adjustments",
    heroSubheading:
      "Professional door fitting, trimming, and adjustments. Get doors that hang perfectly every time.",
    description:
      "From hanging brand new internal doors to adjusting ones that stick or don't close properly, we provide a fast, reliable door fitting service across Bath and surrounding areas.",
    longDescription:
      "Hanging a door properly is one of those jobs that looks simple but requires real skill to get right. A poorly hung door will stick, scrape, or leave uneven gaps. We ensure every door we fit hangs perfectly, with even gaps all round, smooth operation, and proper latch alignment. We can hang new internal doors, replace old ones, trim doors for new flooring, fit door furniture (handles, hinges, locks), and adjust doors that have dropped or are sticking. We also fit fire doors to regulation standards.",
    features: [
      "Internal and external door fitting",
      "Door trimming for new flooring",
      "Adjustments to sticking or dropped doors",
      "Handle, hinge, and lock fitting",
      "Fire door installation to regulations",
      "Even gaps and smooth operation guaranteed",
      "Fast turnaround on most jobs",
    ],
    faqs: [
      {
        q: "How long does it take to hang a door?",
        a: "A single internal door typically takes 1-2 hours. If you have multiple doors, we can usually do 3-4 in a day.",
      },
      {
        q: "Can you trim a door for new carpet or flooring?",
        a: "Yes, we can trim the bottom of your existing doors to clear new flooring. This is a very common job for us.",
      },
      {
        q: "Do you supply the doors?",
        a: "We can help you source doors, but most customers prefer to choose their own. We are happy to advise on what works best.",
      },
    ],
    image: "/door-hanging-1.jpg",
    imageAlt: "Interior door professionally fitted by CN Carpentry in Bath",
    gallery: [
      { src: "/door-hanging-1.jpg", alt: "White four-panel internal door hung in a British home with oak flooring", caption: "Interior door fitted with even gaps and smooth operation" },
      { src: "/door-hanging-2.jpg", alt: "Three matching white panel doors professionally hung in a hallway", caption: "Multiple doors hung with consistent finish throughout" },
      { src: "/door-hanging-3.jpg", alt: "Carpenter planing a wooden door edge on trestles with wood shavings", caption: "Precision trimming for a perfect fit every time" },
    ],
    category: "general",
    relatedSlugs: ["skirting-architrave", "flooring", "fitted-wardrobes"],
  },
  {
    slug: "decking-fencing",
    title: "Decking & Fencing in Bath",
    shortTitle: "Decking & Fencing",
    metaTitle: "Decking & Fencing Bath | Garden Carpentry",
    metaDescription:
      "Professional decking and fencing services in Bath. Custom garden decking, fence panels, gates & repairs. Fully insured. Call CN Carpentry 07948 643391.",
    heroHeading: "Decking & Fencing",
    heroSubheading:
      "Quality outdoor carpentry for your garden. Custom decking areas and fencing built to last.",
    description:
      "We build quality garden decking and fencing that stands up to the British weather. From a simple patio deck to full garden fencing and gates, we deliver solid outdoor carpentry you can rely on.",
    longDescription:
      "Our decking service covers everything from small balcony areas to large multi-level decking with steps and rails. We use treated timber that is built to withstand the elements, and we can advise on the best materials for your budget and requirements. For fencing, we install panel fencing, closeboard fencing, picket fencing, and custom gates. We also carry out fence repairs - replacing broken panels, rotten posts, or storm-damaged sections. All our outdoor work is built to last.",
    features: [
      "Custom decking in all sizes",
      "Treated timber for long life",
      "Panel, closeboard, and picket fencing",
      "Gate construction and fitting",
      "Fence repairs and panel replacement",
      "Steps, rails, and balustrades",
      "Built to withstand British weather",
    ],
    faqs: [
      {
        q: "What timber do you use for decking?",
        a: "We typically use pressure-treated softwood for durability and value. We can also source hardwood or composite decking if you prefer.",
      },
      {
        q: "Can you repair a fence rather than replace it?",
        a: "Yes, if only a few panels or posts are damaged, we can replace just those sections rather than the whole fence. We will always advise on the most cost-effective approach.",
      },
      {
        q: "How long does decking take to build?",
        a: "A standard patio deck takes 2-4 days. Larger or multi-level projects may take a week or more.",
      },
    ],
    image: "/decking-1.jpg",
    imageAlt: "Timber garden decking installed by CN Carpentry in Bath",
    gallery: [
      { src: "/decking-1.jpg", alt: "Freshly built timber garden decking with table and chairs in a British garden", caption: "Custom timber decking built to last" },
      { src: "/decking-2.jpg", alt: "Multi-level garden decking with steps, spindle railings and flower planters", caption: "Raised decking with steps and balustrade" },
      { src: "/decking-3.jpg", alt: "New closeboard timber fence and arched garden gate in a British garden", caption: "Closeboard fencing with matching garden gate" },
    ],
    category: "general",
    relatedSlugs: ["flooring", "door-hanging", "skirting-architrave"],
  },
  {
    slug: "flooring",
    title: "Flooring in Bath",
    shortTitle: "Flooring",
    metaTitle: "Flooring Installation Bath | Laminate, Engineered & Hardwood",
    metaDescription:
      "Professional flooring installation in Bath. Laminate, engineered wood, and hardwood floors fitted. Neat finish guaranteed. Call CN Carpentry 07948 643391.",
    heroHeading: "Flooring Installation",
    heroSubheading:
      "Professional fitting of laminate, engineered wood, and hardwood flooring with a flawless finish.",
    description:
      "We fit all types of wood and laminate flooring to a high standard. Whether it is a single room or a whole house, you get level floors, tight joints, and a professional finish.",
    longDescription:
      "Flooring can transform the feel of your home, and a professional fit makes all the difference. We install laminate, engineered wood, and solid hardwood flooring across Bath and surrounding areas. Our service includes subfloor preparation, underlay, fitting to all room shapes including around doorframes and pipes, and finishing with scotia or beading. We take the time to acclimatise the flooring, lay it in the correct direction, and ensure expansion gaps are properly managed. The result is a floor that looks great and lasts.",
    features: [
      "Laminate, engineered, and hardwood fitting",
      "Subfloor preparation and levelling",
      "Underlay included in service",
      "Neat cuts around doorframes and pipes",
      "Scotia and beading finishing",
      "Door trimming included if needed",
      "Whole house or single room jobs",
    ],
    faqs: [
      {
        q: "Do you also trim the doors after fitting new flooring?",
        a: "Yes, door trimming is part of our flooring service. We will make sure all your doors open and close smoothly over the new floor.",
      },
      {
        q: "Can you fit flooring on uneven subfloors?",
        a: "We can prepare and level subfloors before laying the flooring. This is essential for a good result and we include it in our quote if needed.",
      },
      {
        q: "How long does it take to floor a room?",
        a: "A typical room takes 1 day. A whole house can take 3-5 days depending on the number of rooms and any prep work needed.",
      },
    ],
    image: "/flooring-hallway.png",
    imageAlt: "Laminate flooring installation in a hallway by CN Carpentry in Bath",
    gallery: [
      { src: "/flooring-hallway.png", alt: "Laminate flooring fitted in a hallway with staircase", caption: "Hallway flooring with neat finish around stairs and skirting" },
      { src: "/flooring-2.jpg", alt: "Engineered oak flooring in a bright living room", caption: "Wide plank oak flooring professionally installed" },
      { src: "/flooring-3.jpg", alt: "Light grey laminate flooring fitted in a bedroom", caption: "Laminate flooring with clean finishing to skirting" },
    ],
    category: "general",
    relatedSlugs: ["skirting-architrave", "door-hanging", "fitted-wardrobes"],
  },
  {
    slug: "skirting-architrave",
    title: "Skirting & Architrave in Bath",
    shortTitle: "Skirting & Architrave",
    metaTitle: "Skirting & Architrave Bath | Professional Fitting",
    metaDescription:
      "Skirting board and architrave fitting in Bath. Replacement, matching, and new installations. Neat mitre joints, professional finish. Call CN Carpentry 07948 643391.",
    heroHeading: "Skirting & Architrave Fitting",
    heroSubheading:
      "The finishing touches that make a room look complete. Precise fitting with perfect mitre joints.",
    description:
      "Skirting boards and architrave are the details that frame a room. We fit, replace, and match skirting and architrave to give your rooms a polished, finished look.",
    longDescription:
      "Good skirting and architrave work is all about precision. We ensure tight mitre joints on every corner, seamless joins on long runs, and a finish that looks like it has always been there. We can match existing profiles if you are renovating one room, or supply and fit new skirting throughout. Our service includes removal of old skirting, preparation of walls, cutting and fitting, and filling and caulking ready for decoration. We work with all standard profiles and can source specialist or period mouldings if needed.",
    features: [
      "New skirting and architrave fitting",
      "Replacement of damaged or tired skirting",
      "Matching existing profiles for renovations",
      "Tight mitre joints on every corner",
      "Period and specialist profiles available",
      "Filling and caulking included",
      "Ready for decoration when we leave",
    ],
    faqs: [
      {
        q: "Can you match my existing skirting profile?",
        a: "In most cases, yes. We carry standard profiles and can source specialist or period mouldings. If it is a very unusual profile, we may be able to have it made.",
      },
      {
        q: "Do you remove the old skirting?",
        a: "Yes, removal and disposal of old skirting is included in our service. We also prep the walls before fitting the new boards.",
      },
      {
        q: "Is the skirting ready to paint when you finish?",
        a: "We fill all nail holes and caulk the top edge so it is ready for you (or your decorator) to paint straight away.",
      },
    ],
    image: "/skirting-1.jpg",
    imageAlt: "Professional skirting and architrave fitting by CN Carpentry",
    gallery: [
      { src: "/skirting-1.jpg", alt: "White ogee skirting board and architrave around a door frame", caption: "Clean mitre joints and a professional finish" },
      { src: "/skirting-2.jpg", alt: "Hallway with newly fitted white skirting boards and oak flooring", caption: "Continuous skirting with neat joints throughout" },
      { src: "/skirting-3.jpg", alt: "Close-up of white architrave mitre joint at door frame corner", caption: "Precision architrave work with perfect mitre joints" },
    ],
    category: "general",
    relatedSlugs: ["door-hanging", "flooring", "alcove-units"],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): ServiceData[] {
  return slugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean) as ServiceData[];
}
