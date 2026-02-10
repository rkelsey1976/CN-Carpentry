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
];

export function getAreaBySlug(slug: string): AreaData | undefined {
  return areas.find((a) => a.slug === slug);
}
