import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://optimskool.in"),

  title: {
    default:
      "OptimSkool | School ERP Software for Attendance, Fees & Student Management",
    template: "%s | OptimSkool",
  },

  description:
    "Complete School ERP software for attendance, fees, exams, report cards, payroll and administration — all in one platform.",

  keywords: [
    "school ERP software",
    "school management software",
    "attendance management software",
    "school fee management software",
    "student management system",
    "school ERP India",
  ],

  openGraph: {
    title:
      "OptimSkool | Complete School ERP Software for Schools",
    description:
      "Manage attendance, fees, exams, report cards and administration in one platform.",
    url: "https://optimskool.in",
    siteName: "OptimSkool",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "OptimSkool | School ERP Software",
    description:
      "Manage attendance, fees, exams and administration in one platform.",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://optimskool.in",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "OptimSkool",
  applicationCategory: "School ERP Software",
  operatingSystem: "Web",
  provider: {
    "@type": "Organization",
    name: "OptimOps",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}