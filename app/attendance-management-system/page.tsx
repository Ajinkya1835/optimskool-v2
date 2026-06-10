import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Attendance Management System",
  description:
    "Track student and staff attendance with analytics, leave management and attendance calendar.",
};

const features = [
  {
    icon: "📅",
    title: "Attendance Calendar",
    desc:
      "Monitor monthly attendance through a structured calendar system.",
  },
  {
    icon: "✅",
    title: "Present / Absent Tracking",
    desc:
      "Track attendance instantly with centralized monitoring.",
  },
  {
    icon: "⏰",
    title: "Late Attendance Monitoring",
    desc:
      "Identify late attendance patterns efficiently.",
  },
  {
    icon: "📝",
    title: "Half Day & Leave Tracking",
    desc:
      "Manage leaves and attendance exceptions.",
  },
  {
    icon: "🎉",
    title: "Holiday Management",
    desc:
      "Automatically configure holidays and weekends.",
  },
  {
    icon: "📊",
    title: "Attendance Reports",
    desc:
      "Generate monthly reports and attendance analytics.",
  },
];

const stats = [
  {
    number: "99%",
    label: "Attendance Accuracy",
  },
  {
    number: "24/7",
    label: "Monitoring",
  },
  {
    number: "Real-time",
    label: "Attendance Updates",
  },
  {
    number: "Monthly",
    label: "Attendance Reports",
  },
];

export default function AttendancePage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-24">

          <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-blue-200/40 blur-[140px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.9fr_1.35fr]">

            {/* LEFT */}
            <div>

              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                Attendance Management
              </span>

              <h1 className="mt-7 text-5xl font-bold tracking-tight text-slate-950 lg:text-7xl">
                Smart Attendance
                Management for
                Schools
              </h1>

              <p className="mt-7 text-lg leading-8 text-slate-600">
                Manage attendance,
                leaves, holidays,
                late entries and
                attendance reports
                through one centralized
                attendance management
                platform.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "Attendance Calendar",
                  "Leave Tracking",
                  "Monthly Reports",
                  "Holiday Management",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="overflow-hidden rounded-[44px] border border-slate-200 bg-gradient-to-br from-white to-slate-100 p-3 shadow-[0_40px_120px_rgba(15,23,42,0.12)] ring-1 ring-slate-200">

              <img
                src="/images/attendance-dashboard.png"
                alt="Attendance Dashboard"
                className="w-full rounded-[40px]"
              />
            </div>

          </div>
        </section>

        {/* FEATURES */}
        <section className="bg-slate-50 py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">

              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                Attendance Features
              </span>

              <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-950">
                Everything Needed
                for Attendance
                Management
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                OptimSkool provides
                a complete attendance
                ecosystem for schools,
                teachers and
                administration teams.
              </p>

            </div>

            <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

              {features.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="text-3xl">
                    {item.icon}
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* WORKFLOW */}
        <section className="bg-white py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">

              <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                Attendance Workflow
              </span>

              <h2 className="mt-6 text-5xl font-bold text-slate-950">
                Simple Attendance
                Workflow
              </h2>

              <p className="mt-5 text-lg text-slate-600">
                Streamline attendance
                tracking from daily
                marking to reporting
                through one centralized
                workflow.
              </p>

            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-4">

              {[
                "Mark Attendance",
                "Track Calendar",
                "Generate Reports",
                "Manage Leaves",
              ].map((step, index) => (
                <div
                  key={step}
                  className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                    {index + 1}
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-slate-900">
                    {step}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* DASHBOARD */}
        <section className="bg-slate-50 py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">

              <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                Attendance Dashboard
              </span>

              <h2 className="mt-6 text-5xl font-bold text-slate-950">
                Real-time Attendance
                Calendar & Tracking
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Monitor attendance,
                absences, holidays,
                leaves and attendance
                percentages through
                a centralized dashboard.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <h3 className="text-4xl font-bold text-blue-600">
                    {item.number}
                  </h3>

                  <p className="mt-3 text-slate-600">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 overflow-hidden rounded-[44px] border border-slate-200 bg-white p-5 shadow-[0_40px_120px_rgba(15,23,42,0.12)]">

              <img
                src="/images/attendance-dashboard.png"
                alt="Attendance Analytics"
                className="w-full rounded-[32px]"
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