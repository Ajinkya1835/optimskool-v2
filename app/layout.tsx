import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://optimskool.in"
  ),

  title: {
    default:
      "OptimSkool | School ERP Software",
    template:
      "%s | OptimSkool",
  },

  description:
    "School ERP software for attendance, fee management, examinations, student records and administration.",

  keywords: [
    "school ERP software",
    "attendance management system",
    "fee management system",
    "exam management system",
    "student management system",
  ],

  robots: {
    index: true,
    follow: true,
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