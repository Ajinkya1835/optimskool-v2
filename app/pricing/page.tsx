import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FinalCTA from "@/components/final-cta";
import FAQ from "@/components/faq";
import Link from "next/link";

export const metadata: Metadata = {
  title: "School ERP Pricing",

  description:
    "Affordable school ERP pricing based on student count and required features. Flexible monthly plans for schools of every size.",

  alternates: {
    canonical: "/pricing",
  },
};

const plans = [
  {
    name: "Basic",
    price: "₹3",
    subtitle: "Per Student / Month",
    description:
      "Perfect for small schools starting digital transformation.",

    students: "Up to 500 Students",

    features: [
      "Student Management",
      "Attendance Management",
      "Examination Module",
      "Basic Parent Access",
      "Basic Reports",
      "Free Maintenance",
      "Email Support",
    ],
  },

  {
    name: "Professional",
    price: "₹5",
    subtitle: "Per Student / Month",
    description:
      "Best for growing schools needing advanced ERP features.",

    students: "Up to 2,000 Students",

    popular: true,

    features: [
      "Everything in Basic",
      "Fee Management",
      "Payroll Management",
      "Result Management",
      "Transport Management",
      "Certificate Management",
      "Advanced Reports",
      "Priority Support",
      "Multi Admin Access",
    ],
  },

  {
    name: "Enterprise",
    price: "Custom",
    subtitle: "Custom Pricing",

    description:
      "For institutions needing advanced workflows and custom ERP development.",

    students: "Unlimited Students",

    features: [
      "All ERP Modules",
      "Unlimited Students",
      "Custom Features",
      "Custom Workflows",
      "API Integrations",
      "WhatsApp / SMS Integration",
      "Biometric / RFID Support",
      "Dedicated Onboarding",
      "Premium Support",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24 lg:py-32">

          <div className="mx-auto max-w-7xl px-6 text-center">

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              OptimSkool Pricing
            </span>

            <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-black tracking-tight text-slate-900 lg:text-7xl">
              Affordable Pricing
              <br />
              For Every School
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
              Flexible pricing based on
              student count, ERP features
              and institution requirements.
              Pay only for what your
              school actually needs.
            </p>

          </div>

        </section>

        {/* PRICING CARDS */}
        <section className="bg-white py-24">

          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3">

            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-[40px] border p-10 shadow-sm transition hover:-translate-y-2 hover:shadow-xl ${
                  plan.popular
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-slate-200 bg-white"
                }`}
              >

                {plan.popular && (
                  <div className="absolute right-6 top-6 rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-600">
                    Most Popular
                  </div>
                )}

                <h2 className="text-3xl font-black">
                  {plan.name}
                </h2>

                <p
                  className={`mt-3 text-sm ${
                    plan.popular
                      ? "text-blue-100"
                      : "text-slate-500"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mt-8 flex items-end gap-2">

                  <span className="text-6xl font-black">
                    {plan.price}
                  </span>

                  <span
                    className={`pb-2 text-sm ${
                      plan.popular
                        ? "text-blue-100"
                        : "text-slate-500"
                    }`}
                  >
                    {plan.subtitle}
                  </span>

                </div>

                <div
                  className={`mt-6 rounded-2xl px-5 py-4 text-sm font-medium ${
                    plan.popular
                      ? "bg-white/10 text-blue-50"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {plan.students}
                </div>

                <div className="mt-8 space-y-4">

                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1 text-lg">
                        ✓
                      </span>

                      <span>
                        {feature}
                      </span>
                    </div>
                  ))}

                </div>

                <Link
                  href="/contact"
                  className={`mt-10 inline-flex w-full items-center justify-center rounded-2xl px-6 py-4 text-lg font-semibold transition ${
                    plan.popular
                      ? "bg-white text-blue-600 hover:bg-slate-100"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  Request Demo
                </Link>

              </div>
            ))}

          </div>

        </section>

        {/* BILLING INFO */}
        <section className="bg-slate-50 py-24">

          <div className="mx-auto max-w-6xl px-6">

            <div className="text-center">

              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                Billing Information
              </span>

              <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
                How Billing Works
              </h2>

            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-2">

              {[
                {
                  title:
                    "Per Student Monthly Pricing",
                  text:
                    "Pricing is charged based on active student count and selected ERP plan.",
                },
                {
                  title:
                    "Feature-Based Access",
                  text:
                    "More features and higher student thresholds become available in advanced plans.",
                },
                {
                  title:
                    "Free Maintenance Included",
                  text:
                    "Bug fixes, maintenance, performance improvements and standard updates are included.",
                },
                {
                  title:
                    "Custom Feature Billing",
                  text:
                    "New modules, integrations, workflow changes or institution-specific requirements may involve additional charges.",
                },
                {
                  title:
                    "Month-End Billing",
                  text:
                    "Custom feature usage or advanced integrations may be billed monthly based on usage.",
                },
                {
                  title:
                    "Enterprise Flexibility",
                  text:
                    "Enterprise institutions can request custom pricing and bundled ERP solutions.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-8 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </section>

        <FAQ
          title="Frequently Asked Questions"
          description="Everything you need to know about OptimSkool pricing."
          faqs={[
            {
              question:
                "How is pricing calculated?",
              answer:
                "Pricing is based on active student count and selected ERP features.",
            },
            {
              question:
                "Are maintenance charges included?",
              answer:
                "Yes. Standard maintenance and updates are included in subscription pricing.",
            },
            {
              question:
                "Do custom features cost extra?",
              answer:
                "Yes. Institution-specific features, integrations or advanced modifications may involve additional charges.",
            },
            {
              question:
                "Can schools upgrade plans later?",
              answer:
                "Yes. Schools can upgrade plans and enable more ERP modules anytime.",
            },
            {
              question:
                "Is Enterprise pricing fixed?",
              answer:
                "No. Enterprise pricing depends on institution size and custom requirements.",
            },
          ]}
        />

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}