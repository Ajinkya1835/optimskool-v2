// app/sitemap.ts

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    "https://optimskool.com";

  const routes = [
    "",
    "/school-erp-software",
    "/attendance-management-system",
    "/fee-management-system",
    "/exam-management-system",
    "/student-management-system",
    "/payroll-management-system",
    "/transport-management-system",
    "/inventory-management-system",
    "/certificate-management-system",
    "/admission-management",
    "/leave-management-system",
    "/reports-analytics",
    "/result-management-system",
    "/custom-school-erp-solutions",
    "/pricing",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === ""
        ? "daily"
        : "weekly",
    priority:
      route === ""
        ? 1
        : route ===
            "/school-erp-software"
          ? 0.95
          : 0.8,
  }));
}