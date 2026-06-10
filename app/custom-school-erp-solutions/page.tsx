import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FinalCTA from "@/components/final-cta";
import FAQ from "@/components/faq";

export const metadata: Metadata = {
  title: "Custom School ERP Solutions",

  description:
    "Need custom school ERP features? OptimSkool provides custom modules, integrations and feature development based on your institution requirements.",

  alternates: {
    canonical:
      "/custom-school-erp-solutions",
  },
};

const customFeatures = [
  {
    title:
      "Custom Attendance Logic",
    description:
      "Need biometric attendance, RFID cards or custom shift rules? We can build attendance workflows specific to your institution.",
  },
  {
    title:
      "Custom Fee Structures",
    description:
      "Create complex fee systems, transport fees, hostel charges, installment plans and custom financial logic.",
  },
  {
    title:
      "Reports & Dashboards",
    description:
      "Get institution-specific reports, analytics dashboards and administrative insights built for your workflow.",
  },
  {
    title:
      "Parent & Student Apps",
    description:
      "Add custom parent communication, announcements, attendance tracking and student portals.",
  },
  {
    title:
      "Certificates & Documents",
    description:
      "Need unique certificates, IDs, migration formats or document automation? We can customize it.",
  },
  {
    title:
      "SMS / WhatsApp Integration",
    description:
      "Automate notifications, attendance alerts, fee reminders and communication systems.",
  },
  {
    title:
      "API & Third-Party Integrations",
    description:
      "Integrate payment gateways, biometrics, accounting software or external systems.",
  },
  {
    title:
      "Completely Custom Modules",
    description:
      "Need a unique workflow for your institution? We build custom modules based on your exact needs.",
  },
];

const process = [
  "Requirement Discussion",
  "Feature Planning",
  "Development",
  "Testing",
  "Deployment",
];

export default function CustomERPSolutionsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24 lg:py-32">

          <div className="mx-auto max-w-7xl px-6 text-center">

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              Custom ERP Development
            </span>

            <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-black tracking-tight text-slate-900 lg:text-7xl">
              Need a Custom Feature?
              <br />
              We Build It For Your School.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
              Every institution works differently.
              OptimSkool provides fully customized
              ERP modules, integrations and
              feature development based on your
              school’s unique requirements.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              {[
                "Custom Features",
                "Institution Specific Workflows",
                "API Integrations",
                "Dedicated Support",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>
        </section>

        {/* WHY CUSTOM */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">

              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                Why Schools Choose Custom ERP
              </span>

              <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
                Your School Is Unique.
                Your ERP Should Be Too.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Most ERP systems force institutions
                to adapt to software limitations.
                OptimSkool works differently —
                we adapt the software to your
                institution’s workflow.
              </p>

            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {customFeatures.map(
                (feature) => (
                  <div
                    key={feature.title}
                    className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
                  >
                    <h3 className="text-xl font-bold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {
                        feature.description
                      }
                    </p>
                  </div>
                )
              )}

            </div>

          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-slate-50 py-24">

          <div className="mx-auto max-w-7xl px-6 text-center">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Custom Development Process
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-900">
              How We Build
              Custom Features
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              A simple, transparent process
              to turn your institution’s
              requirements into working ERP solutions.
            </p>

            <div className="mt-16 grid gap-8 md:grid-cols-3 lg:grid-cols-5">

              {process.map(
                (step, index) => (
                  <div
                    key={step}
                    className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                      {index + 1}
                    </div>

                    <h3 className="mt-5 font-semibold text-slate-900">
                      {step}
                    </h3>
                  </div>
                )
              )}

            </div>

          </div>

        </section>

        {/* PRICING NOTE */}
        <section className="bg-white py-24">

          <div className="mx-auto max-w-5xl px-6">

            <div className="rounded-[40px] border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-12 text-center shadow-sm">

              <h2 className="text-4xl font-black text-slate-900">
                Pricing Based On
                Requirement Complexity
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Custom feature pricing depends
                on complexity, integrations,
                development time and institution requirements.
                Contact us to discuss your needs
                and get a personalized estimate.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">

                <div className="rounded-2xl bg-white px-6 py-4 shadow-sm">
                  Small Features
                </div>

                <div className="rounded-2xl bg-white px-6 py-4 shadow-sm">
                  Medium Modules
                </div>

                <div className="rounded-2xl bg-white px-6 py-4 shadow-sm">
                  Enterprise Customization
                </div>

              </div>

            </div>

          </div>

        </section>

        <FAQ
          title="Frequently Asked Questions"
          description="Everything you need to know about custom ERP development."
          faqs={[
            {
              question:
                "Can OptimSkool add custom features?",
              answer:
                "Yes. We build custom ERP modules based on institution-specific requirements.",
            },
            {
              question:
                "How is pricing decided?",
              answer:
                "Pricing depends on complexity, integrations and development effort.",
            },
            {
              question:
                "Can payment gateways or APIs be integrated?",
              answer:
                "Yes. We support payment gateways, biometrics, WhatsApp APIs and third-party integrations.",
            },
            {
              question:
                "Can existing workflows be customized?",
              answer:
                "Yes. We adapt workflows according to school operations.",
            },
            {
              question:
                "How long does custom development take?",
              answer:
                "Timelines depend on complexity and scope of requirements.",
            },
          ]}
        />

        <FinalCTA />

      </main>

      <Footer />
    </>
  );
}