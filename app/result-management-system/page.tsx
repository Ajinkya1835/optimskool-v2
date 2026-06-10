import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Result Management System",

  description:
    "Track student grades, academic progress, exam results and performance analytics with OptimSkool Result Management System.",

  alternates: {
    canonical: "/result-management-system",
  },
};

const features = [
  {
    title: "Result Management",
    description:
      "Manage student academic results digitally through one centralized platform.",
  },
  {
    title: "Grade Tracking",
    description:
      "Track grades, marks and subject-wise performance efficiently.",
  },
  {
    title: "Mid-Term & Annual Results",
    description:
      "Generate and manage results for all academic examinations.",
  },
  {
    title: "Student Search & Filters",
    description:
      "Quickly find student records using classroom and exam filters.",
  },
  {
    title: "Performance Analytics",
    description:
      "Track academic performance trends and student progress.",
  },
  {
    title: "Academic Reports",
    description:
      "Generate structured reports for student performance tracking.",
  },
  {
    title: "Class-wise Results",
    description:
      "Manage and organize results according to classrooms and exams.",
  },
  {
    title: "Automated Result Processing",
    description:
      "Reduce manual work with faster result creation workflows.",
  },
];

const workflow = [
  "Select Class",
  "Choose Exam",
  "Add Results",
  "Generate Report",
  "Track Performance",
];

const stats = [
  {
    value: "100%",
    label: "Digital Result Workflow",
  },
  {
    value: "Real-time",
    label: "Performance Tracking",
  },
  {
    value: "24/7",
    label: "Academic Access",
  },
  {
    value: "Instant",
    label: "Result Processing",
  },
];

export default function ResultManagementPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-blue-50 py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1fr_1.1fr]">

            <div>
              <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
                Result Management System
              </span>

              <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-900 lg:text-7xl">
                Smart Result
                Management for
                Schools
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Track student records, attendance, grades and academic progress effortlessly through centralized result workflows that save hours of manual work.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Result Tracking",
                  "Grade Management",
                  "Performance Analytics",
                  "Academic Reports",
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

            <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)] lg:scale-105">

  <img
  src="/images/result-dashboard.png"
  alt="Result Dashboard"
  className="w-full rounded-[28px] object-cover"
/>

</div>

          </div>
        </section>

        {/* FEATURES */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">
              <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
                Result Features
              </span>

              <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
                Everything Needed for
                Smart Result
                Management
              </h2>

              <p className="mt-5 text-lg text-slate-600">
                OptimSkool simplifies result processing, grade tracking, academic reporting and student performance analysis through one centralized ERP platform.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-[0_20px_60px_rgba(124,58,237,0.10)]"
                >
                  <h3 className="text-lg font-bold text-slate-900 transition group-hover:text-violet-600">
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
              Result Workflow
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-900">
              Simple Result Management Workflow
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Select classrooms, add results and track academic performance seamlessly.
            </p>

            <div className="mt-16 grid gap-8 md:grid-cols-3 lg:grid-cols-5">
              {workflow.map((step, index) => (
                <div
                  key={step}
                  className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-lg font-bold text-white">
                    {index + 1}
                  </div>

                  <h3 className="mt-5 font-semibold text-slate-900">
                    {step}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* DASHBOARD */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              Result Dashboard
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
              Real-time Academic Result
              Tracking & Performance
              Management
            </h2>

            <p className="mt-5 max-w-3xl text-lg text-slate-600">
              Monitor class-wise results, exam performance, grades and academic progress from one centralized dashboard.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[28px] border border-slate-200 bg-slate-50 p-8"
                >
                  <h3 className="text-3xl font-black text-violet-600">
                    {stat.value}
                  </h3>

                  <p className="mt-2 text-slate-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 overflow-hidden rounded-[40px] border border-slate-200 bg-slate-50 p-6 shadow-[0_40px_120px_rgba(15,23,42,0.12)]">
              <img
                src="/images/result-dashboard.png"
                alt="Result Dashboard"
                className="w-full rounded-[28px]"
              />
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