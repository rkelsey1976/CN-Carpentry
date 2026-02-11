export interface AreaData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  description: string;
  longDescription: string;
  nearbyAreas: string[];
  popularServices: string[];
  image: string;
  imageAlt: string;
}

export const areas: AreaData[] = [
  {
    slug: "bath",
    name: "Bath",
    metaTitle: "Carpenter in Bath | CN Carpentry - Fitted Furniture & Joinery",
    metaDescription:
      "Professional carpenter in Bath city centre & surrounding areas. Fitted wardrobes, media walls, alcove units, van conversions, flooring & more. Fully insured. Free quotes. Call 07948 643391.",
    heroHeading: "Your Local Carpenter in Bath",
    heroSubheading:
      "Serving Bath city centre and all surrounding neighbourhoods with professional carpentry and joinery services.",
    description:
      "CN Carpentry is proud to serve homeowners and businesses across Bath. Whether you live in the city centre, Bathwick, Widcombe, Larkhall, Oldfield Park, or Bear Flat, we are your go-to local carpenter for everything from door hanging to bespoke fitted furniture.",
    longDescription:
      "Bath is a city full of character, with a mix of Georgian townhouses, Victorian terraces, and modern homes - each with their own carpentry challenges. We understand the quirks of Bath properties: uneven walls, period features that need matching, alcoves crying out for fitted shelving, and bedrooms that deserve properly built wardrobes. As a Bath-based carpenter, we offer quick response times, competitive pricing, and the kind of local knowledge that makes a difference. We are fully insured, provide free quotes within 24 hours, and guarantee the quality of our workmanship on every job.",
    nearbyAreas: ["Keynsham", "Bradford-on-Avon", "Frome", "Midsomer Norton", "Radstock"],
    popularServices: [
      "fitted-wardrobes",
      "media-walls",
      "alcove-units",
      "van-conversions",
      "door-hanging",
      "flooring",
      "skirting-architrave",
      "decking-fencing",
    ],
    image: "/area-bath.jpg",
    imageAlt: "Pulteney Bridge in Bath, Somerset",
  },
  {
    slug: "keynsham",
    name: "Keynsham",
    metaTitle: "Carpenter in Keynsham | CN Carpentry - Local & Reliable",
    metaDescription:
      "Looking for a carpenter in Keynsham? CN Carpentry offers fitted wardrobes, media walls, alcove units, flooring, door hanging & more. Fully insured. Free quotes. Call 07948 643391.",
    heroHeading: "Carpenter in Keynsham",
    heroSubheading:
      "Reliable carpentry services for Keynsham homeowners. Just a short drive from Bath, we cover Keynsham and all nearby areas.",
    description:
      "Keynsham sits right between Bath and Bristol, making it an easy area for us to cover. We work with homeowners across Keynsham, Saltford, and the surrounding villages, providing the full range of carpentry services from quick repairs to bespoke fitted furniture.",
    longDescription:
      "Keynsham has a great mix of housing - from older properties in the town centre to newer estates on the outskirts. Whatever style of home you have, we can help with fitted wardrobes, alcove units, media walls, flooring, door hanging, and everything in between. We treat every Keynsham job with the same care and attention we bring to all our work. You get a free quote within 24 hours, competitive pricing with no hidden extras, and a fully insured tradesperson who turns up on time and leaves your home tidy.",
    nearbyAreas: ["Bath", "Saltford", "Brislington", "Whitchurch", "Pensford"],
    popularServices: [
      "fitted-wardrobes",
      "media-walls",
      "alcove-units",
      "door-hanging",
      "flooring",
      "skirting-architrave",
    ],
    image: "/area-keynsham.jpg",
    imageAlt: "The Old Manor House in Keynsham, Somerset",
  },
  {
    slug: "bradford-on-avon",
    name: "Bradford-on-Avon",
    metaTitle: "Carpenter in Bradford-on-Avon | CN Carpentry",
    metaDescription:
      "Carpenter in Bradford-on-Avon. Bespoke fitted furniture, alcove units, media walls, flooring & general carpentry. Experience with period properties. Free quotes. Call 07948 643391.",
    heroHeading: "Carpenter in Bradford-on-Avon",
    heroSubheading:
      "Expert carpentry for Bradford-on-Avon's character homes. From period-sensitive work to modern fitted furniture.",
    description:
      "Bradford-on-Avon is one of the most beautiful towns in Wiltshire, packed with historic stone cottages, converted mills, and charming period homes. We understand the care and precision needed when working in older properties and can match existing features while delivering modern fitted solutions.",
    longDescription:
      "Working in Bradford-on-Avon means understanding period properties. Walls are rarely straight, floors often slope, and there is usually a mix of original features that need respecting. We specialise in making bespoke fitted furniture that works with these quirks rather than against them - alcove units that follow the line of an uneven wall, wardrobes that tuck under sloping ceilings, and skirting that matches original profiles. Whether your home is a listed stone cottage on the hillside or a modern build near the station, we bring the same quality and attention to detail. Free quotes, fully insured, and always happy to advise on what will work best for your space.",
    nearbyAreas: ["Bath", "Trowbridge", "Melksham", "Corsham", "Westbury"],
    popularServices: [
      "fitted-wardrobes",
      "alcove-units",
      "skirting-architrave",
      "door-hanging",
      "flooring",
      "media-walls",
    ],
    image: "/area-bradford.jpg",
    imageAlt: "Town Bridge in Bradford-on-Avon, Wiltshire",
  },
  {
    slug: "frome",
    name: "Frome",
    metaTitle: "Carpenter in Frome | CN Carpentry - Bespoke & General",
    metaDescription:
      "Carpenter in Frome, Somerset. Fitted wardrobes, media walls, alcove units, van conversions, flooring & more. Bespoke solutions for Frome homes. Free quotes. Call 07948 643391.",
    heroHeading: "Carpenter in Frome",
    heroSubheading:
      "Serving Frome and the surrounding Somerset countryside with quality carpentry and bespoke fitted furniture.",
    description:
      "Frome is a thriving independent town with a fantastic mix of old and new properties. From the cobbled streets of Cheap Street to the new-build estates, we provide carpentry services to suit every home in and around Frome.",
    longDescription:
      "Frome has a creative, independent spirit and its homes reflect that - from converted warehouses and Victorian workers' cottages to barn conversions in the surrounding countryside. We love working in Frome because no two jobs are the same. Whether you need alcove shelving in a period terrace, a media wall in a modern home, or a full van conversion for your weekend adventures, we bring skilled craftsmanship and a personal service. We cover Frome itself plus nearby villages like Beckington, Rode, Norton St Philip, and beyond. Same great service: free quotes within 24 hours, fully insured, and quality guaranteed.",
    nearbyAreas: ["Bath", "Midsomer Norton", "Radstock", "Westbury", "Shepton Mallet"],
    popularServices: [
      "fitted-wardrobes",
      "media-walls",
      "alcove-units",
      "van-conversions",
      "door-hanging",
      "flooring",
    ],
    image: "/area-frome.jpg",
    imageAlt: "Cheap Street in Frome, Somerset",
  },
  {
    slug: "midsomer-norton",
    name: "Midsomer Norton",
    metaTitle: "Carpenter in Midsomer Norton | CN Carpentry - Quality Joinery",
    metaDescription:
      "Professional carpenter in Midsomer Norton. Fitted wardrobes, media walls, alcove units, flooring, door hanging & more. Fully insured, free quotes. Call 07948 643391.",
    heroHeading: "Carpenter in Midsomer Norton",
    heroSubheading:
      "Trusted carpentry services for Midsomer Norton and the Somer Valley. Quality craftsmanship, competitive prices.",
    description:
      "CN Carpentry provides a full range of carpentry services to homeowners across Midsomer Norton. From the High Street to the surrounding estates, we are your reliable local carpenter for everything from bespoke media walls to everyday door hanging and flooring.",
    longDescription:
      "Midsomer Norton sits at the heart of the Somer Valley, with a strong community feel and a lovely mix of stone-built houses, terraced cottages, and modern family homes. We know the area well and understand the needs of local properties - whether it is fitting alcove shelving in a traditional terrace or building a sleek media wall in a newer home. Our service is personal and professional: free quotes within 24 hours, fully insured, and we always leave your home clean and tidy. We cover Midsomer Norton itself plus Welton, Westfield, and surrounding villages.",
    nearbyAreas: ["Radstock", "Bath", "Frome", "Keynsham"],
    popularServices: [
      "fitted-wardrobes",
      "media-walls",
      "alcove-units",
      "door-hanging",
      "flooring",
      "skirting-architrave",
    ],
    image: "/area-midsomer-norton.jpg",
    imageAlt: "High Street in Midsomer Norton, Somerset",
  },
  {
    slug: "radstock",
    name: "Radstock",
    metaTitle: "Carpenter in Radstock | CN Carpentry - Local Carpentry Services",
    metaDescription:
      "Carpenter in Radstock, Somerset. Fitted wardrobes, alcove units, media walls, flooring, decking & more. Experienced with local properties. Free quotes. Call 07948 643391.",
    heroHeading: "Carpenter in Radstock",
    heroSubheading:
      "Quality carpentry for Radstock homes. Based nearby, we offer fast response times and competitive prices.",
    description:
      "Radstock is a former mining town with bags of character, and we are proud to serve its residents. Whether you live in the town centre, Clandown, or one of the surrounding villages, CN Carpentry delivers reliable, high-quality carpentry tailored to your home.",
    longDescription:
      "Radstock has a rich history and a mix of housing styles - from stone-built miners' cottages to more modern developments. Each type of property brings its own challenges, and we have the experience to handle them all. Uneven walls? No problem. Low ceilings? We will work around them. Need fitted furniture that makes the most of an awkward space? That is exactly what we do. We bring the same quality to every job in Radstock, big or small. Free quotes, fully insured, and always on time.",
    nearbyAreas: ["Midsomer Norton", "Bath", "Frome", "Westbury"],
    popularServices: [
      "fitted-wardrobes",
      "alcove-units",
      "media-walls",
      "door-hanging",
      "flooring",
      "decking-fencing",
    ],
    image: "/area-radstock.jpg",
    imageAlt: "Radstock mine wheel and museum, Somerset",
  },
  {
    slug: "corsham",
    name: "Corsham",
    metaTitle: "Carpenter in Corsham | CN Carpentry - Bespoke Fitted Furniture",
    metaDescription:
      "Carpenter in Corsham, Wiltshire. Bespoke fitted wardrobes, alcove units, media walls, skirting & architrave. Experience with period properties. Free quotes. Call 07948 643391.",
    heroHeading: "Carpenter in Corsham",
    heroSubheading:
      "Expert carpentry services for Corsham and surrounding Wiltshire villages. Period-sensitive work and modern solutions.",
    description:
      "Corsham is one of the most picturesque towns in Wiltshire, with its stunning Cotswold stone High Street and beautiful period properties. CN Carpentry understands the care required when working in heritage homes, and we combine traditional craftsmanship with modern techniques to deliver outstanding results.",
    longDescription:
      "Working in Corsham means respecting the character of the town. Many homes here are built from local Bath stone and feature original details that deserve careful attention. We specialise in bespoke fitted furniture that complements period features - alcove units that follow the lines of old walls, wardrobes built under sloped ceilings, and skirting boards that match original profiles. Whether your home overlooks the High Street, sits near Corsham Court, or is part of a newer development on the edge of town, we bring the same quality and dedication. Free quotes within 24 hours, fully insured, and every job guaranteed.",
    nearbyAreas: ["Bradford-on-Avon", "Bath", "Trowbridge", "Melksham"],
    popularServices: [
      "fitted-wardrobes",
      "alcove-units",
      "skirting-architrave",
      "door-hanging",
      "flooring",
      "media-walls",
    ],
    image: "/area-corsham.jpg",
    imageAlt: "Corsham High Street, Wiltshire",
  },
  {
    slug: "trowbridge",
    name: "Trowbridge",
    metaTitle: "Carpenter in Trowbridge | CN Carpentry - Fitted Furniture & Joinery",
    metaDescription:
      "Carpenter in Trowbridge, Wiltshire. Fitted wardrobes, media walls, alcove units, flooring, decking & more. Quality carpentry at competitive prices. Free quotes. Call 07948 643391.",
    heroHeading: "Carpenter in Trowbridge",
    heroSubheading:
      "Professional carpentry services for Trowbridge and across west Wiltshire. Quality workmanship, fair prices.",
    description:
      "As the county town of Wiltshire, Trowbridge has a great range of housing - from the historic centre around Castle Street and Fore Street to the modern estates in Paxcroft Mead and beyond. CN Carpentry covers all of Trowbridge with a full range of carpentry and joinery services.",
    longDescription:
      "Trowbridge is a busy, growing town and its homes reflect that diversity. Victorian terraces near the town centre, post-war semis in established neighbourhoods, and new-build family homes on the outskirts all have different carpentry needs, and we cater to them all. Need a media wall in a modern lounge? Fitted wardrobes in a period bedroom? Decking for a new-build garden? We have you covered. We combine speed with quality - because we know that living in a building site is no fun. Free quotes, fully insured, and we always leave your home clean.",
    nearbyAreas: ["Bradford-on-Avon", "Corsham", "Melksham", "Westbury"],
    popularServices: [
      "fitted-wardrobes",
      "media-walls",
      "alcove-units",
      "flooring",
      "decking-fencing",
      "door-hanging",
    ],
    image: "/area-trowbridge.jpg",
    imageAlt: "Castle Street in Trowbridge, Wiltshire",
  },
];

export function getAreaBySlug(slug: string): AreaData | undefined {
  return areas.find((a) => a.slug === slug);
}
