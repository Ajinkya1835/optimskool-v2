import LegalPage from "@/components/legal-page";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Terms of Service | OptimSkool",
  description:
    "Review the terms governing access to the OptimSkool website, demonstrations and school ERP services.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="These terms govern use of the OptimSkool website and any services supplied under an agreement with your institution."
      sections={[
        {
          title: "Use of the Website",
          paragraphs: [
            "You may use this website to evaluate OptimSkool, request information and contact our team. You must not misuse the website, interfere with its operation or attempt unauthorized access.",
          ],
        },
        {
          title: "Service Agreements",
          paragraphs: [
            "ERP subscriptions, pricing, enabled modules, implementation timelines and support commitments are defined in the proposal or agreement accepted by the institution.",
            "Custom development and third-party integrations may have additional requirements, charges and delivery terms.",
          ],
        },
        {
          title: "Intellectual Property",
          paragraphs: [
            "OptimSkool software, branding, website content and related materials remain the property of their respective owners. No ownership rights are transferred except where an agreement expressly states otherwise.",
          ],
        },
        {
          title: "Availability and Liability",
          paragraphs: [
            "We work to provide reliable services, but availability may be affected by maintenance, third-party systems or events beyond reasonable control.",
            "Liability is limited to the extent permitted by applicable law and any written service agreement.",
          ],
        },
        {
          title: "Contact",
          paragraphs: [
            "Questions about these terms can be sent to support@metagrad.in.",
          ],
        },
      ]}
    />
  );
}
