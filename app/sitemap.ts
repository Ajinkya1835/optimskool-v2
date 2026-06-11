import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://optimskool.com";
  const lastModified = new Date("2026-06-11");

  return [
    { url: baseUrl, priority: 1, lastModified },
    { url: `${baseUrl}/school-erp-software`, priority: 1, lastModified },
    { url: `${baseUrl}/features`, priority: 0.9, lastModified },
    { url: `${baseUrl}/pricing`, priority: 0.9, lastModified },
    { url: `${baseUrl}/contact`, priority: 0.9, lastModified },
    { url: `${baseUrl}/custom-school-erp-solutions`, priority: 0.8, lastModified },
    { url: `${baseUrl}/admission-management`, priority: 0.8, lastModified },
    { url: `${baseUrl}/attendance-management-system`, priority: 0.8, lastModified },
    { url: `${baseUrl}/fee-management-system`, priority: 0.8, lastModified },
    { url: `${baseUrl}/exam-management-system`, priority: 0.8, lastModified },
    { url: `${baseUrl}/student-management-system`, priority: 0.8, lastModified },
    { url: `${baseUrl}/certificate-management-system`, priority: 0.7, lastModified },
    { url: `${baseUrl}/result-management-system`, priority: 0.7, lastModified },
    { url: `${baseUrl}/payroll-management-system`, priority: 0.7, lastModified },
    { url: `${baseUrl}/transport-management-system`, priority: 0.7, lastModified },
    { url: `${baseUrl}/inventory-management-system`, priority: 0.7, lastModified },
    { url: `${baseUrl}/leave-management-system`, priority: 0.7, lastModified },
    { url: `${baseUrl}/reports-analytics`, priority: 0.7, lastModified },
    { url: `${baseUrl}/privacy-policy`, priority: 0.3, lastModified },
    { url: `${baseUrl}/terms-of-service`, priority: 0.3, lastModified },
    { url: `${baseUrl}/cookie-policy`, priority: 0.3, lastModified },
  ];
}
