import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Certificate Management System",
  description:
    "Generate migration, transfer, character certificates and student documents instantly with OptimSkool Certificate Management System.",
  alternates: {
    canonical: "/certificate-management-system",
  },
};

const features = [
  {
    title: "Migration Certificate",
    description:
      "Generate migration certificates digitally with student details and institution verification.",
  },
  {
    title: "Character Certificate",
    description:
      "Create conduct and character certificates instantly with customizable remarks.",
  },
  {
    title: "Transfer Certificate",
    description:
      "Manage transfer certificates and student leaving records efficiently.",
  },
  {
    title: "Student Verification",
    description:
      "Quickly search and verify student information before certificate generation.",
  },
  {
    title: "Document Templates",
    description:
      "Use standardized templates for official school documents and certificates.",
  },
  {
    title: "Printable PDFs",
    description:
      "Generate print-ready documents with downloadable PDF support.",
  },
  {
    title: "Certificate History",
    description:
      "Track issued certificates and maintain centralized student document records.",
  },
  {
    title: "Digital Record Keeping",
    description:
      "Store and manage certificates securely from one ERP dashboard.",
  },
];

const workflow = [
  "Search Student",
  "Select Certificate",
  "Fill Details",
  "Generate Document",
  "Print / Download",
];

const stats = [
  { value: "100%", label: "Digital Documentation" },
  { value: "Instant", label: "Certificate Creation" },
  { value: "Real-time", label: "Student Verification" },
  { value: "24/7", label: "Document Access" },
];

export default function CertificateManagementPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-purple-50 py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.2fr]">

            <div>
              <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
                Certificate Management System
              </span>

              <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-900 lg:text-7xl">
                Smart Certificate &
                Student Document
                Management
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Generate migration,
                transfer and character
                certificates digitally with
                centralized document workflows,
                student verification and
                print-ready records.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Migration Certificate",
                  "Transfer Certificate",
                  "Character Certificate",
                  "Printable Documents",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* ✅ Replaced <img> with <Image> */}
            <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
              <Image
                src="/images/certificate-dashboard.png"
                alt="Certificate Management Dashboard"
                width={1200}
                height={750}
                className="w-full rounded-[30px]"
              />
            </div>

          </div>
        </section>

        {/* FEATURES */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">
              <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
                Certificate Features
              </span>

              <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
                Everything Needed for
                Smart Certificate
                Management
              </h2>

              <p className="mt-5 text-lg text-slate-600">
                OptimSkool simplifies
                certificate generation,
                student document tracking
                and official school paperwork
                through one centralized ERP platform.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-[0_20px_60px_rgba(139,92,246,0.12)]"
                >
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-violet-600">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* WORKFLOW */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">

            <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
              Certificate Workflow
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-900">
              Simple Certificate Generation Workflow
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Generate official school certificates digitally.
            </p>

            <div className="mt-16 grid gap-8 md:grid-cols-3 lg:grid-cols-5">
              {workflow.map((step, index) => (
                <div
                  key={step}
                  className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-violet-500 text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 font-semibold text-slate-900">{step}</h3>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* DASHBOARD */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
              Certificate Dashboard
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
              Real-time Certificate &
              Student Document Tracking
            </h2>

            <p className="mt-5 max-w-3xl text-lg text-slate-600">
              Monitor certificate generation,
              student records, document history
              and printable files from one
              centralized dashboard.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <h3 className="text-3xl font-black text-violet-600">{stat.value}</h3>
                  <p className="mt-2 text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* ✅ Replaced <img> with <Image> */}
            <div className="mt-14 overflow-hidden rounded-[40px] border border-slate-200 bg-white p-4 shadow-[0_40px_120px_rgba(15,23,42,0.12)]">
              <Image
                src="/images/certificate-dashboard.png"
                alt="Certificate Management Analytics Dashboard"
                width={1600}
                height={900}
                className="w-full rounded-[30px]"
              />
            </div>

          </div>
        </section>

        <FAQ
          title="Frequently Asked Questions"
          description="Learn more about certificate and student document workflows."
          faqs={[
            {
              question: "Can schools generate certificates digitally?",
              answer:
                "Yes, schools can generate migration, transfer and character certificates digitally.",
            },
            {
              question: "Can student details be verified before printing?",
              answer:
                "Yes, OptimSkool allows quick student verification before certificate creation.",
            },
            {
              question: "Can certificates be printed instantly?",
              answer: "Yes, documents are print-ready and downloadable instantly.",
            },
            {
              question: "Can schools track certificate history?",
              answer: "Yes, certificate records and document history are stored centrally.",
            },
            {
              question: "Does OptimSkool support multiple certificate types?",
              answer:
                "Yes, schools can manage transfer, migration and character certificates efficiently.",
            },
          ]}
        />

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}