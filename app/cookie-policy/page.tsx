import LegalPage from "@/components/legal-page";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Cookie Policy | OptimSkool",
  description:
    "Learn how OptimSkool uses cookies to improve website functionality, analytics and user experience.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro="This Cookie Policy explains how OptimSkool uses cookies and similar technologies to improve website performance, security and visitor experience."
      sections={[
        {
          title: "What Are Cookies?",
          paragraphs: [
            "Cookies are small text files stored on your device when you visit a website. They help websites function properly, remember preferences and improve browsing experience.",
          ],
        },
        {
          title: "How OptimSkool Uses Cookies",
          paragraphs: [
            "We may use cookies to maintain website security, improve performance and understand how visitors interact with the website. Cookies may also help remember preferences and optimize page experience.",
          ],
        },
        {
          title: "Types of Cookies We May Use",
          paragraphs: [
            "Essential cookies help core website functionality such as navigation and security. Analytics cookies may help us understand website traffic and improve content. Preference cookies may remember visitor settings for a better experience.",
          ],
        },
        {
          title: "Managing Cookies",
          paragraphs: [
            "You can manage, disable or remove cookies through your browser settings. Please note that disabling certain cookies may impact website functionality and user experience.",
          ],
        },
        {
          title: "Third-Party Services",
          paragraphs: [
            "Some analytics or embedded services may use cookies to provide functionality and understand visitor interactions. These third parties manage cookies according to their own privacy practices.",
          ],
        },
        {
          title: "Contact Us",
          paragraphs: [
            "If you have questions regarding this Cookie Policy or how cookies may be used, contact us at support@metagrad.in.",
          ],
        },
      ]}
    />
  );
}