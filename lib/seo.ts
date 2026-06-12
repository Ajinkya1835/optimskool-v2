import type { Metadata } from "next";

type SEOProps = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export const SITE_URL =
  "https://optimskool.com";

export const OG_IMAGE =
  "https://optimskool.com/images/og-image.png";

export function generateMetadata({
  title,
  description,
  path,
  keywords = [],
}: SEOProps): Metadata {
  const fullUrl =
    `${SITE_URL}${path}`;

  return {
    title,
    description,

    keywords: [
      "school ERP software",
      "school management software",
      "school ERP software India",
      "education ERP software",
      "school LMS",
      "attendance management system",
      "fee management system",
      "school management system India",
      ...keywords,
    ],

    metadataBase: new URL(
      SITE_URL
    ),

    alternates: {
      canonical: fullUrl,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview":
          "large",
        "max-snippet": -1,
        "max-video-preview":
          -1,
      },
    },

    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: "OptimSkool",
      locale: "en_IN",
      type: "website",

      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt:
            "OptimSkool School ERP Software",
        },
      ],
    },

    twitter: {
      card:
        "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}