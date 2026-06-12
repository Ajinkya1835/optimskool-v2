/* app/school-erp-software/page.tsx */

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
    "School ERP Software in India | School Management System | OptimSkool",

  description:
    "OptimSkool School ERP Software helps schools manage attendance, fees, admissions, payroll, transport, academics, examinations and communication from one centralized platform.",

  keywords: [
    "school ERP software",
    "school management system",
    "school ERP software India",
    "best school ERP",
    "school LMS software",
    "education ERP software",
    "attendance management system",
    "fee management system",
  ],

  alternates: {
    canonical:
      "/school-erp-software",
  },

  openGraph: {
    title:
      "Best School ERP Software in India | OptimSkool",
    description:
      "Manage attendance, fees, admissions, payroll and academics with OptimSkool School ERP.",
    url:
      "https://optimskool.com/school-erp-software",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt:
          "OptimSkool School ERP Software Dashboard",
      },
    ],
  },
};

const modules = [
  {
    title:
      "Attendance Management",
    text:
      "Track attendance, absentee records and classroom activity digitally.",
    href:
      "/attendance-management-system",
    icon: "🗂️",
  },
  {
    title:
      "Fee Management",
    text:
      "Collect fees digitally with invoices, reminders and reports.",
    href:
      "/fee-management-system",
    icon: "🏛️",
  },
  {
    title:
      "Exam Management",
    text:
      "Manage examinations, marksheets and grading workflows.",
    href:
      "/exam-management-system",
    icon: "📘",
  },
  {
    title:
      "Student Management",
    text:
      "Manage admissions, student records and academics centrally.",
    href:
      "/student-management-system",
    icon: "👨‍🎓",
  },
  {
    title:
      "Payroll Management",
    text:
      "Automate staff salary, deductions and payroll records.",
    href:
      "/payroll-management-system",
    icon: "💼",
  },
  {
    title:
      "Transport Management",
    text:
      "Track buses, routes and student transportation efficiently.",
    href:
      "/transport-management-system",
    icon: "🚌",
  },
  {
    title:
      "Admission Management",
    text:
      "Digitize admissions and streamline enrollment processes.",
    href:
      "/admission-management",
    icon: "🎓",
  },
  {
    title:
      "Result Management",
    text:
      "Generate marksheets and academic reports digitally.",
    href:
      "/result-management-system",
    icon: "📑",
  },
];

export default function SchoolERPPage() {
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
        "School ERP Software",
      path:
        "/school-erp-software",
    },
  ]}
/>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white pt-44 pb-24">
          <div className="absolute inset-0 bg-grid opacity-40" />

          <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-200/35 blur-[140px]" />
          <div className="absolute right-0 top-20 h-[350px] w-[400px] rounded-full bg-cyan-200/25 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="max-w-5xl">
              <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
                All-In-One School ERP
              </span>

              <h1 className="mt-8 text-5xl font-black leading-[0.95] tracking-[-0.04em] text-slate-900 lg:text-7xl">
                Best School ERP
                <br />
                Software For
                <br />
                Modern Institutions
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-500 lg:text-xl">
                OptimSkool is an
                intelligent
                <strong className="text-slate-900">
                  {" "}
                  school ERP software
                </strong>{" "}
                built for schools,
                colleges and educational
                institutions to manage
                attendance, fees,
                admissions, payroll,
                examinations and
                communication from one
                centralized dashboard.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-[0_8px_30px_rgba(37,99,235,0.35)] transition hover:brightness-105"
                >
                  Book Free Demo
                </Link>

                <Link
                  href="/pricing"
                  className="rounded-full border border-blue-200 bg-white px-8 py-4 font-semibold text-blue-600 shadow-sm transition hover:bg-blue-50"
                >
                  View Pricing
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap gap-4 text-sm font-medium">
                {[
                  "Attendance Tracking",
                  "Fee Management",
                  "Payroll System",
                  "Exam Management",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-blue-100 bg-white px-5 py-3 text-slate-600 shadow-sm"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-20">
              <div className="relative overflow-hidden rounded-[42px] border border-blue-100 bg-white p-3 shadow-[0_40px_120px_rgba(37,99,235,0.12)]">
                <Image
                  src="/images/hero-dashboard.png"
                  alt="School ERP software dashboard for attendance fee payroll and examination management"
                  width={1400}
                  height={900}
                  priority
                  className="w-full rounded-[28px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* MODULES */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
                School ERP Modules
              </span>

              <h2 className="mt-8 text-5xl font-black text-slate-900">
                Everything Needed
                <br />
                To Run A School
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">
                OptimSkool provides a
                complete school
                management system with
                attendance tracking,
                fee collection, payroll,
                student records,
                transport management
                and real-time analytics.
              </p>
            </div>

            <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {modules.map((module) => (
                <Link
                  key={module.title}
                  href={module.href}
                  className="group rounded-[34px] border border-blue-100 bg-white p-7 shadow-[0_12px_45px_rgba(37,99,235,0.08)] transition hover:-translate-y-2"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br from-blue-50 to-cyan-50 text-[34px]">
                    {module.icon}
                  </div>

                  <h3 className="mt-7 text-2xl font-black text-slate-900 group-hover:text-blue-600">
                    {module.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-500">
                    {module.text}
                  </p>

                  <div className="mt-6 font-semibold text-blue-600">
                    Explore →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SEO CONTENT */}
        <section className="bg-white py-28">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-5xl font-black text-slate-900">
              Why Schools Need
              School ERP Software
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-9 text-slate-500">
              <p>
                Managing attendance,
                fee collection, payroll,
                examinations and student
                records manually creates
                delays, paperwork and
                operational confusion.
                School ERP software helps
                educational institutions
                centralize operations into
                one digital platform.
              </p>

              <p>
                OptimSkool helps schools
                automate attendance,
                admissions, communication,
                fee reminders and academic
                workflows through a
                centralized cloud-based
                dashboard designed for
                Indian schools.
              </p>
            </div>
          </div>
        </section>

        <FAQ
          title="School ERP Software FAQs"
          description="Common questions schools ask before choosing an ERP system."
          faqs={[
            {
              question:
                "What is school ERP software?",
              answer:
                "School ERP software helps institutions manage attendance, fees, examinations, payroll and communication from one centralized dashboard.",
            },
            {
              question:
                "Can OptimSkool manage school fees?",
              answer:
                "Yes, OptimSkool provides digital fee collection, invoices, reminders and payment reporting.",
            },
            {
              question:
                "Is OptimSkool suitable for Indian schools?",
              answer:
                "Yes, OptimSkool is designed specifically for schools and educational institutions in India.",
            },
            {
              question:
                "Does OptimSkool include attendance management?",
              answer:
                "Yes, schools can digitally manage classroom attendance, leave and absentee reports.",
            },
          ]}
        />

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}