import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = "2026-08-18";

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/jurien-bay-accommodation/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/jurien-bay-restaurant/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/activities/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
