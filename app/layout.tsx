import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OptimSkool | School ERP Software India",

  description:
    "OptimSkool is an all-in-one school ERP software and LMS platform for educational institutions. Manage attendance, fees, academics, payroll, transport and communication from one dashboard.",

  keywords: [
    "school ERP software",
    "school management software",
    "school ERP software India",
    "school ERP",
    "LMS for schools",
    "school management system",
    "education ERP",
  ],

  metadataBase: new URL("https://optimskool.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "OptimSkool School ERP",
    description: "Smart School ERP Software for Modern Institutions.",
    url: "https://optimskool.com",
    siteName: "OptimSkool",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "OptimSkool | School ERP Software India",
    description: "Smart School ERP Software for Modern Institutions.",
    images: ["/images/og-image.png"],
  },
};

// JSON-LD schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "OptimSkool",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://optimskool.com",
  description:
    "All-in-one school ERP software and LMS platform for educational institutions in India.",
  offers: {
    "@type": "Offer",
    price: "3",
    priceCurrency: "INR",
  },
  publisher: {
    "@type": "Organization",
    name: "OptimSkool",
    url: "https://optimskool.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}