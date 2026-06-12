/* app/features/page.tsx */

import Link from "next/link";
import Image from "next/image";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";

const features = [
  {
    title: "Attendance Management",
    desc:
      "Track attendance with live reports and student monitoring.",
    icon: "🗂️",
    href:
      "/attendance-management-system",
  },
  {
    title: "Fee Management",
    desc:
      "Manage invoices, dues and fee collection digitally.",
    icon: "🏛️",
    href:
      "/fee-management-system",
  },
  {
    title: "Exam Management",
    desc:
      "Schedule exams and generate report cards instantly.",
    icon: "📘",
    href:
      "/exam-management-system",
  },
  {
    title: "Student Management",
    desc:
      "Manage student profiles and academic records.",
    icon: "👔",
    href:
      "/student-management-system",
  },
  {
    title: "Payroll Management",
    desc:
      "Automate salaries and staff payroll workflows.",
    icon: "💼",
    href:
      "/payroll-management-system",
  },
  {
    title: "Transport Management",
    desc:
      "Track buses, routes and transport operations.",
    icon: "🚌",
    href:
      "/transport-management-system",
  },
  {
    title: "Inventory Management",
    desc:
      "Track books, uniforms and school assets.",
    icon: "🧩",
    href:
      "/inventory-management-system",
  },
  {
    title: "Certificate Management",
    desc:
      "Generate migration and student certificates instantly.",
    icon: "🛡️",
    href:
      "/certificate-management-system",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white text-slate-900">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white pt-44 pb-28">

          <div className="absolute inset-0 bg-grid opacity-40" />

          <div className="absolute left-1/2 -top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-200/35 blur-[120px]" />
          <div className="absolute right-0 top-40 h-[350px] w-[400px] rounded-full bg-cyan-200/25 blur-[100px]" />

          <div className="relative mx-auto max-w-7xl px-6 text-center">

            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
              OptimSkool Features
            </span>

            <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.04em] text-slate-900 lg:text-7xl">
              Everything Your
              School Needs
              In One Platform
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-500 lg:text-xl">
              Powerful school ERP modules
              built to simplify administration,
              improve efficiency and automate
              school operations.
            </p>

          </div>
        </section>

        {/* DASHBOARD */}
        <section className="pb-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="relative">

              <div className="absolute left-1/2 top-1/2 h-[380px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/20 blur-[120px]" />

              <div className="relative overflow-hidden rounded-[42px] border border-blue-100 bg-white p-3 shadow-[0_40px_120px_rgba(37,99,235,0.15),0_0_0_1px_rgba(59,130,246,0.08)]">

                <div className="mb-3 flex items-center gap-2 border-b border-slate-100 px-2 pb-3">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />

                  <div className="ml-4 rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-xs font-medium text-blue-600">
                    OptimSkool ERP Dashboard
                  </div>
                </div>

                <Image
                  src="/images/hero-dashboard.png"
                  alt="OptimSkool Features"
                  width={1600}
                  height={900}
                  className="rounded-[28px]"
                  priority
                />

              </div>

            </div>

          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24">

          <div className="absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-blue-200/20 blur-[120px]" />

          <div className="mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">

              <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
                School ERP Modules
              </span>

              <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-6xl">
                Powerful Features
                For Every
                School Workflow
              </h2>

            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {features.map((feature) => (
                <Link
                  key={feature.title}
                  href={feature.href}
                  className="group relative overflow-hidden rounded-[34px] border border-blue-100 bg-white p-7 shadow-[0_12px_45px_rgba(37,99,235,0.08)] transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_24px_70px_rgba(37,99,235,0.14)]"
                >

                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-200/30 blur-[60px]" />

                  <div className="flex items-start justify-between">

                    <div className="flex h-16 w-16 items-center justify-center rounded-[22px] border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 text-[34px] shadow-sm">
                      {feature.icon}
                    </div>

                    <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                      Active
                    </div>

                  </div>

                  <div className="mt-7">

                    <h3 className="text-[28px] font-black leading-[1.15] tracking-[-0.03em] text-slate-900 transition group-hover:text-blue-600">
                      {feature.title}
                    </h3>

                    <p className="mt-4 text-[16px] leading-8 text-slate-500">
                      {feature.desc}
                    </p>

                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">

                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      Cloud Enabled
                    </div>

                    <div className="font-semibold text-blue-600 transition group-hover:translate-x-1">
                      Explore →
                    </div>

                  </div>

                </Link>
              ))}

            </div>

          </div>
        </section>

        {/* WHY */}
        <section className="bg-white py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">

              <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
                Why OptimSkool
              </span>

              <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-6xl">
                More Than Just
                School Software
              </h2>

            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-4">

              {[
                {
                  title: "99.9% Uptime",
                  desc:
                    "Reliable cloud infrastructure.",
                },
                {
                  title: "Smart Automation",
                  desc:
                    "Reduce repetitive admin work.",
                },
                {
                  title: "24/7 Support",
                  desc:
                    "Dedicated expert assistance.",
                },
                {
                  title: "Enterprise Security",
                  desc:
                    "Protected student and staff data.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[32px] border border-blue-100 bg-white p-8 shadow-[0_14px_50px_rgba(37,99,235,0.08)]"
                >

                  <h3 className="text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-500">
                    {item.desc}
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