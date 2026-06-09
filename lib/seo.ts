import { Metadata } from "next";

type SEOProps = {
  title: string;
  description: string;
  path: string;
};

const SITE_URL = "https://optimskool.in";

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
      url: `${SITE_URL}${path}`,
      siteName: "OptimSkool",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}