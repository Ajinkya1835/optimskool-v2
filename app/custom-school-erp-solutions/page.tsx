/* app/custom-school-erp-solutions/page.tsx */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";
import BreadcrumbSchema from "@/components/breadcrumb-schema";

export const metadata: Metadata = {
  title:
    "Custom School ERP Solutions | Tailored School Software | OptimSkool",

  description:
    "Build custom school ERP software tailored to your institution. Automate admissions, attendance, payroll, fees, examinations and workflows with OptimSkool.",

  keywords: [
    "custom school ERP",
    "custom school management software",
    "school ERP software India",
    "tailored ERP for schools",
    "education ERP software",
    "school automation software",
  ],

  alternates: {
    canonical:
      "/custom-school-erp-solutions",
  },

  openGraph: {
    title:
      "Custom School ERP Solutions | OptimSkool",
    description:
      "Get custom-built ERP solutions for schools and educational institutions.",
    url:
      "https://optimskool.com/custom-school-erp-solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt:
          "Custom School ERP Solutions",
      },
    ],
  },
};

export default function CustomSchoolERPPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white text-slate-900">
        <BreadcrumbSchema
  items={[
    {
      name: "Home",
      path: "/",
    },
    {
      name:
        "Custom School ERP Solutions",
      path:
        "/custom-school-erp-solutions",
    },
  ]}
/>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white pt-44 pb-28">
          <div className="absolute inset-0 bg-grid opacity-40" />

          <div className="absolute left-1/2 -top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-200/35 blur-[120px]" />

          <div className="absolute right-0 top-40 h-[350px] w-[400px] rounded-full bg-cyan-200/25 blur-[100px]" />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="max-w-5xl">
              <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
                Custom ERP Development
              </span>

              <h1 className="mt-8 text-5xl font-black leading-[0.95] tracking-[-0.04em] text-slate-900 lg:text-7xl">
                Custom School ERP
                <br />
                Solutions For
                <br />
                Modern Institutions
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-500 lg:text-xl">
                Every institution has
                different workflows.
                OptimSkool helps schools
                build
                <strong className="text-slate-900">
                  {" "}
                  custom ERP solutions
                </strong>{" "}
                tailored for attendance,
                admissions, payroll,
                communication, transport,
                examinations and unique
                administrative workflows.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-[0_8px_30px_rgba(37,99,235,0.35)] transition hover:brightness-105"
                >
                  Get Free Consultation
                </Link>

                <Link
                  href="/pricing"
                  className="rounded-full border border-blue-200 bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
                >
                  View Pricing
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                {[
                  "Custom Modules",
                  "Workflow Automation",
                  "Cloud ERP",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-blue-100 bg-white px-5 py-3 text-sm font-medium text-slate-600 shadow-sm"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard */}
            <div className="relative mt-20">
              <div className="absolute left-1/2 top-1/2 h-[380px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/20 blur-[120px]" />

              <div className="relative overflow-hidden rounded-[42px] border border-blue-100 bg-white p-3 shadow-[0_40px_120px_rgba(37,99,235,0.15)]">
                <Image
                  src="/images/custom-erp-dashboard.png"
                  alt="Custom school ERP software dashboard with attendance payroll and admissions modules"
                  width={1400}
                  height={900}
                  className="w-full rounded-[28px]"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
                Why Custom ERP
              </span>

              <h2 className="mt-8 text-5xl font-black text-slate-900">
                ERP Designed Around
                <br />
                Your Institution
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">
                No two schools operate
                the same way. OptimSkool
                customizes ERP workflows
                according to institutional
                requirements and internal
                administration systems.
              </p>
            </div>

            <div className="mt-20 grid gap-6 lg:grid-cols-4">
              {[
                {
                  title:
                    "Custom Modules",
                  desc:
                    "Build institution-specific ERP modules.",
                },
                {
                  title:
                    "Workflow Automation",
                  desc:
                    "Automate repetitive school operations.",
                },
                {
                  title:
                    "Scalable Platform",
                  desc:
                    "Expand features as your institution grows.",
                },
                {
                  title:
                    "Dedicated Support",
                  desc:
                    "Technical guidance and ERP consultation.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[34px] border border-blue-100 bg-white p-8 shadow-[0_20px_60px_rgba(37,99,235,0.08)]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br from-blue-100 to-cyan-100 text-3xl">
                    ⚙️
                  </div>

                  <h3 className="mt-7 text-2xl font-black text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO CONTENT */}
        <section className="bg-white py-28">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-5xl font-black text-slate-900">
              Why Choose Custom
              School ERP Software?
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-9 text-slate-500">
              <p>
                Standard ERP systems
                often fail to match
                unique institutional
                requirements. Schools may
                require specialized fee
                structures, admission
                workflows, examination
                patterns or transport
                systems.
              </p>

              <p>
                OptimSkool builds custom
                school ERP software
                tailored to your exact
                operations. Institutions
                can automate internal
                workflows, reduce manual
                paperwork and improve
                overall administration
                efficiency.
              </p>
            </div>
          </div>
        </section>

        <FAQ
          title="Custom School ERP FAQs"
          description="Questions schools ask before building a custom ERP solution."
          faqs={[
            {
              question:
                "Can OptimSkool build custom ERP modules?",
              answer:
                "Yes, schools can request custom ERP modules according to institutional workflows and administration needs.",
            },
            {
              question:
                "Can ERP workflows be customized?",
              answer:
                "Yes, attendance, payroll, admissions, communication and examination workflows can be customized.",
            },
            {
              question:
                "Is custom ERP suitable for large institutions?",
              answer:
                "Yes, custom ERP systems are ideal for institutions with unique operational requirements.",
            },
            {
              question:
                "Does OptimSkool provide support?",
              answer:
                "Yes, OptimSkool provides technical guidance, onboarding and dedicated ERP support.",
            },
          ]}
        />

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}