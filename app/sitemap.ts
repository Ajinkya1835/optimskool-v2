import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://optimskool.com";
  const now = new Date();

  return [
    { url: baseUrl, priority: 1, lastModified: now },
    { url: `${baseUrl}/school-erp-software`, priority: 1, lastModified: now },
    { url: `${baseUrl}/features`, priority: 0.9, lastModified: now },
    { url: `${baseUrl}/pricing`, priority: 0.9, lastModified: now },
    { url: `${baseUrl}/contact`, priority: 0.9, lastModified: now },
    { url: `${baseUrl}/custom-school-erp-solutions`, priority: 0.8, lastModified: now },
    { url: `${baseUrl}/admission-management`, priority: 0.8, lastModified: now },
    { url: `${baseUrl}/attendance-management-system`, priority: 0.8, lastModified: now },
    { url: `${baseUrl}/fee-management-system`, priority: 0.8, lastModified: now },
    { url: `${baseUrl}/exam-management-system`, priority: 0.8, lastModified: now },
    { url: `${baseUrl}/student-management-system`, priority: 0.8, lastModified: now },
    { url: `${baseUrl}/certificate-management-system`, priority: 0.7, lastModified: now },
    { url: `${baseUrl}/result-management-system`, priority: 0.7, lastModified: now },
    // ✅ Fixed: was /payroll-management-system, actual folder is /payroll-management
    { url: `${baseUrl}/payroll-management`, priority: 0.7, lastModified: now },
    { url: `${baseUrl}/transport-management-system`, priority: 0.7, lastModified: now },
    { url: `${baseUrl}/inventory-management-system`, priority: 0.7, lastModified: now },
    { url: `${baseUrl}/leave-management-system`, priority: 0.7, lastModified: now },
    { url: `${baseUrl}/reports-analytics`, priority: 0.7, lastModified: now },
  ];
}