import LegalPage from "@/components/legal-page";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Cookie Policy | OptimSkool",
  description:
    "Learn how OptimSkool may use essential, preference and analytics cookies on its website.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro="This policy describes cookies and similar technologies that may be used when you visit the OptimSkool website."
      sections={[
        {
          title: "What Cookies Are",
          paragraphs: [
            "Cookies are small files stored by a browser to remember preferences, support website functionality and help understand how a website is used.",
          ],
        },
        {
          title: "How We May Use Cookies",
          paragraphs: [
            "Essential cookies may support security and basic website operation. Preference cookies may remember choices. Analytics cookies may help us understand page performance and improve the visitor experience.",
          ],
        },
        {
          title: "Managing Cookies",
          paragraphs: [
            "You can control or delete cookies through your browser settings. Disabling essential cookies may affect some website functionality.",
          ],
        },
        {
          title: "Contact",
          paragraphs: [
            "For questions about cookie use, contact support@metagrad.in.",
          ],
        },
      ]}
    />
  );
}
