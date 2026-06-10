import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";

export const metadata: Metadata = {
  title:
    "School ERP Software | School Management System India",

  description:
    "OptimSkool is an all-in-one school ERP software and LMS platform designed to manage admissions, attendance, fees, payroll, transport, academics and communication for schools.",

  alternates: {
    canonical:
      "/school-erp-software",
  },
};

const modules = [
  {
    title:
      "Attendance Management",
    text:
      "Track classroom attendance, leave records and holidays digitally.",
    href:
      "/attendance-management-system",
  },
  {
    title:
      "Fee Management",
    text:
      "Collect fees, generate invoices and manage school billing.",
    href:
      "/fee-management-system",
  },
  {
    title:
      "Exam Management",
    text:
      "Schedule exams, hall tickets and result workflows effortlessly.",
    href:
      "/exam-management-system",
  },
  {
    title:
      "Student Management",
    text:
      "Manage admissions, records and academic information centrally.",
    href:
      "/student-management-system",
  },
  {
    title:
      "Payroll Management",
    text:
      "Automate salary processing, staff payroll and deductions.",
    href:
      "/payroll-management-system",
  },
  {
    title:
      "Transport Management",
    text:
      "Manage routes, buses and student transportation.",
    href:
      "/transport-management-system",
  },
  {
    title:
      "Inventory Management",
    text:
      "Track books, uniforms, assets and supplies efficiently.",
    href:
      "/inventory-management-system",
  },
  {
    title:
      "Certificate Management",
    text:
      "Generate migration, transfer and character certificates digitally.",
    href:
      "/certificate-management-system",
  },
];

export default function SchoolERPPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24 lg:py-32">

          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

            {/* LEFT */}
            <div>

              <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
                All-In-One School ERP Platform
              </span>

              <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-slate-900 lg:text-7xl">
                Smart School ERP
                Software for
                Modern Institutions
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
                OptimSkool is a complete{" "}
                <strong>
                  school management
                  software
                </strong>{" "}
                and{" "}
                <strong>
                  LMS platform
                </strong>{" "}
                built for modern educational
                institutions.

                Manage admissions,
                attendance, academics,
                fees, payroll, transport,
                examinations and communication —
                all from one centralized ERP dashboard.
              </p>

              <div className="mt-10 flex flex-wrap gap-5">

                <Link
                  href="/contact"
                  className="rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
                >
                  Request Demo
                </Link>

                <Link
                  href="/pricing"
                  className="rounded-2xl border border-slate-300 px-8 py-4 text-lg font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  View Pricing
                </Link>

              </div>

              <div className="mt-12 flex flex-wrap gap-8 text-sm font-medium text-slate-600">

                <span>
                  ✓ School ERP Software
                </span>

                <span>
                  ✓ LMS for Schools
                </span>

                <span>
                  ✓ Real-time Reports
                </span>

              </div>

            </div>

            {/* RIGHT */}
            <div className="relative">

              <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-2xl">

                <Image
                  src="/images/erp-dashboard.webp"
                  alt="OptimSkool ERP Dashboard"
                  width={1400}
                  height={900}
                  className="h-auto w-full object-cover"
                  priority
                />

              </div>

            </div>

          </div>
        </section>

        {/* TRUSTED */}
        <section className="border-y border-slate-200 bg-slate-50 py-20">

          <div className="mx-auto max-w-7xl px-6 text-center">

            <h2 className="text-2xl font-bold text-slate-900">
              Trusted by Growing Schools
              & Institutions
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
              Join institutions transforming
              school administration with
              centralized ERP workflows and
              real-time operational visibility.
            </p>

            <div className="mt-14 grid gap-6 md:grid-cols-4">

              {[
                "20+ Institutions",
                "99.9% Uptime",
                "24/7 Support",
                "70% Less Admin Work",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <p className="text-2xl font-bold text-slate-900">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* WHY OPTIMSKOOL */}
        <section className="bg-white py-28">

          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

            <div>

              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                Why OptimSkool
              </span>

              <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">
                One Platform For
                Complete School
                Management
              </h2>

              <p className="mt-8 text-lg leading-9 text-slate-600">
                OptimSkool centralizes every
                aspect of your educational
                institution into a single,
                powerful platform.

                From admissions to academics,
                fees to finance, and staff to
                student management —
                experience complete operational
                visibility with real-time data.
              </p>

              <p className="mt-6 text-lg leading-9 text-slate-600">
                Say goodbye to scattered
                spreadsheets and disconnected
                systems. Reduce administrative
                workload by up to{" "}
                <strong>
                  70%
                </strong>{" "}
                and focus on what truly matters:
                education excellence.
              </p>

            </div>

            <div className="rounded-[40px] border border-slate-200 bg-gradient-to-br from-blue-50 to-green-50 p-10 shadow-xl">

              <div className="grid grid-cols-2 gap-6">

                {[
                  {
                    number:
                      "95%",
                    label:
                      "Efficiency Gain",
                  },
                  {
                    number:
                      "24/7",
                    label:
                      "Access",
                  },
                  {
                    number:
                      "100%",
                    label:
                      "Cloud-Based",
                  },
                  {
                    number:
                      "Real-time",
                    label:
                      "Reports",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[26px] bg-white p-8 text-center shadow-md"
                  >
                    <h3 className="text-4xl font-black text-blue-600">
                      {item.number}
                    </h3>

                    <p className="mt-3 text-slate-600">
                      {item.label}
                    </p>
                  </div>
                ))}

              </div>

            </div>

          </div>
        </section>

        {/* MODULES */}
        <section className="bg-slate-50 py-28">

          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">

              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                School ERP Modules
              </span>

              <h2 className="mt-6 text-5xl font-black text-slate-900">
                Everything Needed
                To Run Your Institution
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Digitize school operations
                with powerful ERP modules
                designed for institutions
                of every size.
              </p>

            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {modules.map((module) => (
                <Link
                  key={module.title}
                  href={module.href}
                  className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >

                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600">
                    {module.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {module.text}
                  </p>

                  <div className="mt-8 font-semibold text-blue-600">
                    Learn More →
                  </div>

                </Link>
              ))}

            </div>

          </div>
        </section>
        
        {/* COMPARISON */}
        <section className="bg-white py-28">

          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">

              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                Why Schools Switch
              </span>

              <h2 className="mt-6 text-5xl font-black text-slate-900">
                Move Beyond
                Traditional School Management
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Replace spreadsheets,
                paperwork and disconnected systems
                with one centralized ERP platform.
              </p>

            </div>

            <div className="mt-16 overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-xl">

              <Image
                src="/images/erp-comparison.webp"
                alt="School ERP Comparison"
                width={1600}
                height={900}
                className="w-full object-cover"
              />

            </div>

          </div>

        </section>

        {/* TESTIMONIALS */}
        <section className="bg-slate-50 py-28">

          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">

              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                Testimonials
              </span>

              <h2 className="mt-6 text-5xl font-black text-slate-900">
                Schools Love OptimSkool
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Helping institutions reduce
                workload, improve communication
                and manage operations efficiently.
              </p>

            </div>

            <div className="mt-16 overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-xl">

              <Image
                src="/images/testimonials.webp"
                alt="School Testimonials"
                width={1600}
                height={900}
                className="w-full object-cover"
              />

            </div>

          </div>

        </section>

        {/* FAQ */}
        <FAQ
          title="Frequently Asked Questions"
          description="Everything you need to know about OptimSkool School ERP Software."
          faqs={[
            {
              question:
                "What is OptimSkool?",
              answer:
                "OptimSkool is an all-in-one school ERP software and LMS platform designed to help schools manage attendance, academics, fees, payroll, transport and communication efficiently.",
            },
            {
              question:
                "Can schools choose only required modules?",
              answer:
                "Yes. Schools can enable only the ERP features they need and scale later.",
            },
            {
              question:
                "Is OptimSkool suitable for schools in India?",
              answer:
                "Yes. OptimSkool is designed specifically for educational institutions and school operations in India.",
            },
            {
              question:
                "Does OptimSkool support custom features?",
              answer:
                "Yes. We provide custom ERP modules, integrations and institution-specific workflows.",
            },
            {
              question:
                "How is pricing calculated?",
              answer:
                "Pricing is based on active student count, selected modules and any custom requirements.",
            },
          ]}
        />

        <FinalCTA />

      </main>

      <Footer />
    </>
  );
}
