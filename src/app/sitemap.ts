import type { MetadataRoute } from "next";

const baseUrl = "https://fanecaexpeditions.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
    },
    {
      url: `${baseUrl}/quiz`,
      lastModified,
    },
    {
      url: `${baseUrl}/quiz/results`,
      lastModified,
    },
    {
      url: `${baseUrl}/calendar`,
      lastModified,
    },
    {
      url: `${baseUrl}/concierge`,
      lastModified,
    },
  ];
}
