// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  "https://optimskool.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "OptimSkool | Best School ERP Software in India",
    template:
      "%s | OptimSkool",
  },

  description:
    "OptimSkool is an all-in-one School ERP Software in India to manage attendance, fees, exams, payroll, admissions, transport, academics and communication through one intelligent dashboard.",

  keywords: [
    "school ERP software",
    "school management software",
    "school ERP software India",
    "school ERP system",
    "best school ERP software",
    "school LMS",
    "attendance management system",
    "fee management system",
    "school management system India",
    "education ERP software",
  ],

  authors: [
    {
      name: "OptimSkool",
    },
  ],

  creator: "OptimSkool",
  publisher: "OptimSkool",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "OptimSkool",
    title:
      "Best School ERP Software in India | OptimSkool",
    description:
      "Manage attendance, fees, admissions, payroll, exams and school administration using OptimSkool School ERP.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt:
          "OptimSkool School ERP Software",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Best School ERP Software in India | OptimSkool",
    description:
      "Manage attendance, fees, exams, payroll and academics with OptimSkool ERP.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context":
                "https://schema.org",
              "@type":
                "SoftwareApplication",
              name: "OptimSkool",
              applicationCategory:
                "EducationalApplication",
              operatingSystem: "Web",
              url: siteUrl,
              description:
                "OptimSkool is a School ERP software for attendance, fees, payroll, examinations and school administration.",
              brand: {
                "@type": "Brand",
                name: "OptimSkool",
              },
              provider: {
                "@type":
                  "Organization",
                name: "OptimSkool",
                url: siteUrl,
              },
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context":
                "https://schema.org",
              "@type":
                "Organization",
              name: "OptimSkool",
              url: siteUrl,
              logo: `${siteUrl}/logo.png`,
              sameAs: [],
              contactPoint: {
                "@type":
                  "ContactPoint",
                contactType:
                  "customer support",
                email:
                  "support@metagrad.in",
              },
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}