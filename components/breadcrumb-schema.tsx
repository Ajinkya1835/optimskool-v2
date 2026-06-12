type Props = {
  items: {
    name: string;
    path: string;
  }[];
};

const SITE_URL =
  "https://optimskool.com";

export default function BreadcrumbSchema({
  items,
}: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context":
            "https://schema.org",

          "@type":
            "BreadcrumbList",

          itemListElement:
            items.map(
              (
                item,
                index
              ) => ({
                "@type":
                  "ListItem",

                position:
                  index + 1,

                name:
                  item.name,

                item:
                  `${SITE_URL}${item.path}`,
              })
            ),
        }),
      }}
    />
  );
}