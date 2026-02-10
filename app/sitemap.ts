import { MetadataRoute } from "next";

const BASE_URL = "https://www.cncarpentry.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const services = [
    "fitted-wardrobes",
    "media-walls",
    "alcove-units",
    "van-conversions",
    "door-hanging",
    "decking-fencing",
    "flooring",
    "skirting-architrave",
  ];

  const areas = ["bath", "keynsham", "bradford-on-avon", "frome"];

  const servicePages = services.map((service) => ({
    url: `${BASE_URL}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const areaPages = areas.map((area) => ({
    url: `${BASE_URL}/areas/${area}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/areas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...servicePages,
    ...areaPages,
  ];
}
