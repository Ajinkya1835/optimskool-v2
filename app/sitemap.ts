import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    "https://optimskool.com";

  return [
    {
      url: baseUrl,
      priority: 1,
    },
    {
      url:
        `${baseUrl}/school-erp-software`,
      priority: 1,
    },
    {
      url:
        `${baseUrl}/features`,
      priority: 0.9,
    },
    {
      url:
        `${baseUrl}/pricing`,
      priority: 0.9,
    },
    {
      url:
        `${baseUrl}/contact`,
      priority: 0.9,
    },
    {
      url:
        `${baseUrl}/attendance-management-system`,
    },
    {
      url:
        `${baseUrl}/fee-management-system`,
    },
    {
      url:
        `${baseUrl}/exam-management-system`,
    },
    {
      url:
        `${baseUrl}/result-management-system`,
    },
    {
      url:
        `${baseUrl}/student-management-system`,
    },
    {
      url:
        `${baseUrl}/payroll-management-system`,
    },
    {
      url:
        `${baseUrl}/transport-management-system`,
    },
    {
      url:
        `${baseUrl}/inventory-management-system`,
    },
    {
      url:
        `${baseUrl}/certificate-management-system`,
    },
    {
      url:
        `${baseUrl}/leave-management-system`,
    },
    {
      url:
        `${baseUrl}/custom-school-erp-solutions`,
    },
  ];
}