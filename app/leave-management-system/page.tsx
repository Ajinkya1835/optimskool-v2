import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Leave Management System",

  description:
    "Manage student and staff leave requests, approvals and attendance integration with OptimSkool Leave Management System.",

  alternates: {
    canonical: "/leave-management-system",
  },
};

const features = [
  {
    title: "Staff Leave Management",
    description:
      "Manage teacher and staff leave requests through one centralized workflow.",
  },
  {
    title: "Student Leave Requests",
    description:
      "Digitally manage student leave applications and approvals.",
  },
  {
    title: "Leave Approval Workflow",
    description:
      "Approve or reject leave requests instantly through an organized system.",
  },
  {
    title: "Attendance Integration",
    description:
      "Automatically sync approved leaves with attendance records.",
  },
  {
    title: "Leave Balance Tracking",
    description:
      "Track leave quotas and remaining leave balances efficiently.",
  },
  {
    title: "Approval Dashboard",
    description:
      "View pending, approved and rejected requests in one place.",
  },
  {
    title: "Automated Notifications",
    description:
      "Keep staff and students informed about leave approvals instantly.",
  },
  {
    title: "Leave Reports",
    description:
      "Generate structured leave summaries and approval reports.",
  },
];

const workflow = [
  "Apply Leave",
  "Review Request",
  "Approve / Reject",
  "Update Attendance",
  "Generate Reports",
];

const stats = [
  {
    value: "100%",
    label: "Digital Leave Workflow",
  },
  {
    value: "Instant",
    label: "Approval Tracking",
  },
  {
    value: "Real-time",
    label: "Attendance Sync",
  },
  {
    value: "24/7",
    label: "Leave Access",
  },
];

export default function LeaveManagementPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 lg:py-28">

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.2fr]">

            <div>

              <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
                Leave Management System
              </span>

              <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-900 lg:text-7xl">
                Smart Leave &
                Approval
                Management
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Simplify student and staff leave
                management with approval workflows,
                attendance integration and
                centralized leave tracking.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Leave Approvals",
                  "Attendance Sync",
                  "Approval Workflow",
                  "Leave Reports",
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
                src="/images/leave-dashboard.png"
                alt="Leave Dashboard"
                className="w-full rounded-[30px]"
              />

            </div>

          </div>
        </section>

        {/* FEATURES */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">

              <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
                Leave Features
              </span>

              <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
                Everything Needed for
                Smart Leave
                Management
              </h2>

              <p className="mt-5 text-lg text-slate-600">
                OptimSkool simplifies leave approvals,
                attendance syncing and staff/student
                leave workflows through one centralized ERP platform.
              </p>

            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-amber-200 hover:shadow-[0_20px_60px_rgba(251,146,60,0.12)]"
                >
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600">
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

            <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
              Leave Workflow
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-900">
              Simple Leave Approval Workflow
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Apply, review and approve leave requests digitally.
            </p>

            <div className="mt-16 grid gap-8 md:grid-cols-3 lg:grid-cols-5">

              {workflow.map((step, index) => (
                <div
                  key={step}
                  className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-lg font-bold text-white">
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

            <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
              Leave Dashboard
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
              Real-time Leave Tracking &
              Approval Management
            </h2>

            <p className="mt-5 max-w-3xl text-lg text-slate-600">
              Monitor approvals, pending requests,
              attendance integration and leave reports
              from one centralized dashboard.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <h3 className="text-3xl font-black text-amber-600">
                    {stat.value}
                  </h3>

                  <p className="mt-2 text-slate-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 overflow-hidden rounded-[40px] border border-slate-200 bg-white p-4 shadow-[0_40px_120px_rgba(15,23,42,0.12)]">

              <img
                src="/images/leave-dashboard.png"
                alt="Leave Dashboard"
                className="w-full rounded-[30px]"
              />

            </div>

          </div>
        </section>

        <FAQ
          title="Frequently Asked Questions"
          description="Learn more about leave approval workflows."
          faqs={[
            {
              question:
                "Can schools manage leave digitally?",
              answer:
                "Yes, schools can manage staff and student leave requests digitally.",
            },
            {
              question:
                "Can leave approvals be automated?",
              answer:
                "Yes, approvals and rejection workflows are handled digitally.",
            },
            {
              question:
                "Does leave sync with attendance?",
              answer:
                "Yes, approved leave records can be integrated with attendance.",
            },
            {
              question:
                "Can schools track leave balances?",
              answer:
                "Yes, leave quotas and balances can be monitored centrally.",
            },
            {
              question:
                "Can leave reports be generated?",
              answer:
                "Yes, detailed leave reports and summaries are available.",
            },
          ]}
        />

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}