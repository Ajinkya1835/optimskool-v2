import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title:
"OptimSkool | School ERP Software India & LMS Platform",

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

  metadataBase: new URL(
    "https://optimskool.com"
  ),

  openGraph: {
    title:
"OptimSkool | School ERP Software India & LMS Platform",

    description:
      "Smart School ERP Software for Modern Institutions.",

    url:
      "https://optimskool.com",

    siteName:
      "OptimSkool",

    images: [
      {
        url:
          "/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],

    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}