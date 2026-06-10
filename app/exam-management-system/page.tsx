import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Exam Management System",

  description:
    "Manage examinations, schedules, hall tickets, results and performance analytics with OptimSkool Exam Management System.",

  alternates: {
    canonical: "/exam-management-system",
  },
};

const features = [
  {
    title: "Exam Scheduling",
    description:
      "Create and organize mid-term, annual and custom examinations digitally.",
  },
  {
    title: "Session-wise Exams",
    description:
      "Manage exams according to academic sessions and term structures.",
  },
  {
    title: "Exam Calendar",
    description:
      "Schedule exam start dates, deadlines and timelines efficiently.",
  },
  {
    title: "Publish / Unpublish Exams",
    description:
      "Control exam visibility instantly with publish status management.",
  },
  {
    title: "Hall Ticket Generation",
    description:
      "Generate and manage exam hall tickets digitally.",
  },
  {
    title: "Timetable Management",
    description:
      "Organize exam schedules and subject-wise planning effortlessly.",
  },
  {
    title: "Result Management",
    description:
      "Generate results, report cards and performance records centrally.",
  },
  {
    title: "Marks & Analytics",
    description:
      "Track student academic performance with detailed analytics.",
  },
];

const workflow = [
  "Create Exam",
  "Schedule Dates",
  "Publish Timetable",
  "Generate Hall Tickets",
  "Declare Results",
];

const stats = [
  {
    value: "100%",
    label: "Digital Exam Workflow",
  },
  {
    value: "24/7",
    label: "Exam Access",
  },
  {
    value: "Real-time",
    label: "Exam Tracking",
  },
  {
    value: "Instant",
    label: "Result Processing",
  },
];

export default function ExamManagementPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-violet-50 py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

            <div>
              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                Exam Management System
              </span>

              <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-900 lg:text-7xl">
                Smart Examination
                Management for
                Schools
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Create, schedule and manage examinations digitally with centralized exam planning, scheduling, hall tickets, results and performance tracking.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Exam Scheduling",
                  "Hall Tickets",
                  "Timetable",
                  "Results",
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

            <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
              <img
                src="/images/exam-dashboard.png"
                alt="OptimSkool Exam Dashboard"
                className="w-full rounded-[28px]"
              />
            </div>

          </div>
        </section>

        {/* FEATURES */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">
              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                Exam Features
              </span>

              <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
                Everything Needed for Smart
                Examination Management
              </h2>

              <p className="mt-5 text-lg text-slate-600">
                OptimSkool simplifies exam scheduling, hall ticket generation, result processing and academic tracking through one centralized ERP platform.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_60px_rgba(37,99,235,0.10)]"
                >
                  <h3 className="text-lg font-bold text-slate-900 transition group-hover:text-blue-600">
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
              Exam Workflow
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-900">
              Simple Examination Workflow
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Create exams, schedule timelines and manage results seamlessly.
            </p>

            <div className="mt-16 grid gap-8 md:grid-cols-3 lg:grid-cols-5">
              {workflow.map((step, index) => (
                <div
                  key={step}
                  className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
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
              Exam Dashboard
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
              Real-time Exam Scheduling &
              Management
            </h2>

            <p className="mt-5 max-w-3xl text-lg text-slate-600">
              Monitor scheduled exams, academic sessions, publishing status and timelines from one centralized examination dashboard.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[28px] border border-slate-200 bg-slate-50 p-8"
                >
                  <h3 className="text-3xl font-black text-blue-600">
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
                src="/images/exam-dashboard.png"
                alt="Exam Dashboard"
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