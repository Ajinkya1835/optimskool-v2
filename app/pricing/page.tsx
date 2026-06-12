/* app/pricing/page.tsx */

import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FinalCTA from "@/components/final-cta";
import FAQ from "@/components/faq";

import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata =
  generateMetadata({
    title:
      "School ERP Pricing | OptimSkool",

    description:
      "Explore affordable pricing plans for OptimSkool School ERP Software including attendance, payroll, fees and examinations.",

    path: "/pricing",

    keywords: [
      "school ERP pricing",
      "school management software pricing",
      "school ERP cost",
      "school software pricing",
      "ERP pricing for schools",
    ],
  });



const plans = [
  {
    name: "Basic",
    price: "₹3",
    subtitle: "Per Student / Month",
    students: "Up to 500 Students",
    description:
      "Perfect for schools starting digital transformation.",
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
    students: "Up to 2,000 Students",
    popular: true,
    description:
      "Best for growing schools needing advanced ERP automation.",
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
    students: "Unlimited Students",
    description:
      "For institutions needing advanced workflows and custom ERP development.",
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

      <main className="relative overflow-hidden bg-[linear-gradient(to_bottom,#f5f9ff,#ffffff)] text-slate-900">

        {/* background */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#2563eb_1px,transparent_1px),linear-gradient(to_bottom,#2563eb_1px,transparent_1px)] bg-[size:56px_56px]" />

        {/* HERO */}
        <section className="relative overflow-hidden pt-36 pb-16">

          <div className="absolute left-1/2 -top-28 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-blue-300/30 blur-[120px]" />
          <div className="absolute right-0 top-24 h-[260px] w-[260px] rounded-full bg-cyan-300/20 blur-[100px]" />

          <div className="relative mx-auto max-w-6xl px-6 text-center">

            <span className="inline-flex rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur-xl">
              ✨ OptimSkool Pricing
            </span>

            <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-black leading-[0.95] tracking-[-0.05em] lg:text-6xl">

              Affordable Pricing

              <span className="block bg-gradient-to-r from-blue-700 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                For Every School
              </span>

            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 lg:text-lg">
              Flexible school ERP pricing
              based on student count and
              institution requirements.
            </p>

          </div>
        </section>

        {/* PRICING */}
        <section className="relative pb-20">

          <div className="mx-auto grid max-w-6xl gap-5 px-6 lg:grid-cols-3">

            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`group relative overflow-hidden rounded-[30px] border p-6 transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? "scale-[1.02] border-cyan-200 bg-gradient-to-b from-cyan-50 via-blue-50 to-white shadow-[0_20px_60px_rgba(6,182,212,0.16)]"
                    : "border-blue-100 bg-white/90 shadow-[0_12px_40px_rgba(37,99,235,0.08)] backdrop-blur-xl hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)]"
                }`}
              >

                {/* pattern */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* top border */}
                <div className="absolute left-0 top-0 h-[4px] w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500" />

                {plan.popular && (
                  <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-1 text-[10px] font-bold text-white shadow-lg">
                    POPULAR
                  </div>
                )}

                <div className="relative">

                  <h2 className="text-2xl font-black text-slate-900">
                    {plan.name}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {plan.description}
                  </p>

                  <div className="mt-6 flex items-end gap-2">

                    <span className="bg-gradient-to-r from-slate-900 via-blue-700 to-cyan-500 bg-clip-text text-4xl font-black text-transparent">
                      {plan.price}
                    </span>

                    <span className="pb-1 text-xs text-slate-400">
                      {plan.subtitle}
                    </span>

                  </div>

                  <div className="mt-4 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-3 text-xs font-semibold text-slate-700">
                    {plan.students}
                  </div>

                  <div className="mt-5 space-y-3">

                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 rounded-xl border border-blue-100 bg-gradient-to-r from-white to-blue-50/60 px-3 py-3 shadow-sm transition duration-300 hover:border-cyan-200"
                      >

                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-xs font-bold text-green-600">
                          ✓
                        </span>

                        <span className="text-sm font-medium text-slate-700">
                          {feature}
                        </span>

                      </div>
                    ))}

                  </div>

                  <Link
                    href="/contact"
                    className={`mt-6 flex justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 text-white shadow-[0_10px_30px_rgba(37,99,235,0.24)] hover:scale-[1.01]"
                        : "border border-blue-200 bg-white text-blue-700 shadow-sm hover:bg-blue-50"
                    }`}
                  >
                    Request Demo
                  </Link>

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* HOW BILLING WORKS */}
        <section className="relative overflow-hidden py-16">

          <div className="absolute left-0 top-0 h-[240px] w-[240px] rounded-full bg-blue-200/20 blur-[120px]" />
          <div className="absolute right-0 bottom-0 h-[240px] w-[240px] rounded-full bg-cyan-200/20 blur-[120px]" />

          <div className="relative mx-auto max-w-6xl px-6">

            <div className="text-center">

              <span className="inline-flex rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur-xl">
                Billing Information
              </span>

              <h2 className="mt-5 text-3xl font-black text-slate-900 lg:text-5xl">
                How Pricing Works
              </h2>

            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">

              {[
                "Pricing based on active student count",
                "Choose only modules your school needs",
                "Maintenance & updates included",
                "Custom ERP features billed separately",
                "Enterprise plans are fully flexible",
                "Scale anytime as your school grows",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-blue-100 bg-gradient-to-b from-white to-blue-50/40 p-5 shadow-[0_10px_30px_rgba(37,99,235,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(37,99,235,0.14)]"
                >
                  <p className="text-sm font-semibold leading-6 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </section>

        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}