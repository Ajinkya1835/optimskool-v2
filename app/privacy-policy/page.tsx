import LegalPage from "@/components/legal-page";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Privacy Policy | OptimSkool",
  description:
    "Learn how OptimSkool collects, uses, protects and manages information submitted through its website and school ERP services.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains how OptimSkool handles information provided through our website, demo requests and school ERP services."
      sections={[
        {
          title: "Information We Collect",
          paragraphs: [
            "We may collect contact information, institution details, product requirements and messages that you submit through our forms or direct communications.",
            "When institutions use OptimSkool, additional information may be processed according to the agreed service scope and the institution's instructions.",
          ],
        },
        {
          title: "How We Use Information",
          paragraphs: [
            "We use submitted information to respond to enquiries, provide demonstrations, deliver and support our services, improve product performance and maintain service security.",
            "We do not sell personal information. Information is shared only with service providers or authorities when necessary to operate the service or comply with law.",
          ],
        },
        {
          title: "Data Security and Retention",
          paragraphs: [
            "We use reasonable administrative and technical safeguards designed to protect information from unauthorized access, alteration or disclosure.",
            "Information is retained only for as long as needed for the purpose for which it was collected, contractual obligations and applicable legal requirements.",
          ],
        },
        {
          title: "Contact",
          paragraphs: [
            "For privacy questions or requests, contact support@metagrad.in.",
          ],
        },
      ]}
    />
  );
}
