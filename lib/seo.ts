import type { Metadata } from "next";

type SEOProps = {
  title: string;
  description: string;
  path: string;
};

export const SITE_URL = "https://optimskool.com";
export const OG_IMAGE = "/images/og-image.png";

export function generateMetadata({
  title,
  description,
  path,
}: SEOProps): Metadata {
  return {
    title,
    description,

    metadataBase: new URL(SITE_URL),

    alternates: {
      canonical: path,
    },

    openGraph: {
      title,
      description,
      url: path,
      siteName: "OptimSkool",
      type: "website",
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "OptimSkool Complete School ERP Software",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}
