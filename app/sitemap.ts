import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    "https://optimskool.in";

  return [
    {
      url: baseUrl,
      priority: 1,
    },

    {
      url: `${baseUrl}/school-erp-software`,
      priority: 0.9,
    },

    {
      url: `${baseUrl}/attendance-management-system`,
      priority: 0.9,
    },

    {
      url: `${baseUrl}/fee-management-system`,
      priority: 0.9,
    },

    {
      url: `${baseUrl}/exam-management-system`,
      priority: 0.9,
    },

    {
      url: `${baseUrl}/student-management-system`,
      priority: 0.9,
    },
  ];
}