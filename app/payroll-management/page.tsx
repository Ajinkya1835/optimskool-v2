import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Payroll Management System",

  description:
    "Automate payroll processing, salary management, deductions and payslip generation with OptimSkool Payroll Management System.",

  alternates: {
    canonical: "/payroll-management-system",
  },
};

const features = [
  {
    title: "Payroll Processing",
    description:
      "Automate monthly payroll calculations and salary processing for school staff.",
  },
  {
    title: "Salary Breakdown",
    description:
      "Manage gross salary, deductions, payouts and department-wise salary structures.",
  },
  {
    title: "Payslip Management",
    description:
      "Generate and manage digital payslips instantly for teaching and non-teaching staff.",
  },
  {
    title: "Deduction Tracking",
    description:
      "Track salary deductions, penalties and attendance-linked payroll deductions.",
  },
  {
    title: "Department-wise Reports",
    description:
      "Analyze payroll by teaching staff, administration and departments.",
  },
  {
    title: "Attendance-linked Payroll",
    description:
      "Connect attendance and leave tracking with salary management.",
  },
  {
    title: "Staff Salary Analytics",
    description:
      "Monitor payouts, salary trends and staff payroll history in real-time.",
  },
  {
    title: "Monthly Payroll Reports",
    description:
      "Generate downloadable payroll and financial reports instantly.",
  },
];

const workflow = [
  "Add Staff",
  "Configure Salary",
  "Process Payroll",
  "Generate Payslip",
  "Track Payments",
];

const stats = [
  {
    value: "100%",
    label: "Payroll Automation",
  },
  {
    value: "Instant",
    label: "Payslip Generation",
  },
  {
    value: "Real-time",
    label: "Salary Tracking",
  },
  {
    value: "24/7",
    label: "Payroll Access",
  },
];

export default function PayrollManagementPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-slate-50 py-20 lg:py-28">

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.25fr]">

            <div>

              <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
                Payroll Management System
              </span>

              <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-900 lg:text-7xl">
                Smart Payroll &
                Staff Salary
                Management
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Automate payroll processing,
                payslips, salary breakdowns,
                deductions and staff payouts
                through one centralized payroll
                management system.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Salary Management",
                  "Payslip Generation",
                  "Payroll Analytics",
                  "Deduction Tracking",
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

            <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white p-2 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">

              <img
                src="/images/payroll-dashboard.png"
                alt="Payroll Dashboard"
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
                Payroll Features
              </span>

              <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
                Everything Needed for
                Smart Payroll
                Management
              </h2>

              <p className="mt-5 text-lg text-slate-600">
                OptimSkool simplifies salary
                management, payroll processing,
                deductions and staff financial
                reporting through one centralized ERP system.
              </p>

            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-amber-200 hover:shadow-[0_20px_60px_rgba(251,191,36,0.15)]"
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
              Payroll Workflow
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-900">
              Simple Payroll Management Workflow
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Process salaries, deductions and
              staff payroll efficiently.
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
              Payroll Dashboard
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
              Real-time Payroll Summary &
              Salary Analytics
            </h2>

            <p className="mt-5 max-w-3xl text-lg text-slate-600">
              Monitor staff salaries,
              deductions, payroll summaries
              and department-wise payouts
              from one centralized payroll dashboard.
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
                src="/images/payroll-dashboard.png"
                alt="Payroll Dashboard"
                className="w-full rounded-[30px]"
              />

            </div>

          </div>
        </section>

        <FAQ
          title="Frequently Asked Questions"
          description="Learn more about payroll and salary management workflows."
          faqs={[
            {
              question:
                "Can schools automate payroll processing?",
              answer:
                "Yes, OptimSkool automates salary calculations, deductions and payroll workflows.",
            },
            {
              question:
                "Can payslips be generated digitally?",
              answer:
                "Yes, schools can generate digital payslips instantly for staff members.",
            },
            {
              question:
                "Does OptimSkool track salary deductions?",
              answer:
                "Yes, payroll deductions and attendance-linked salary calculations are supported.",
            },
            {
              question:
                "Can payroll be linked to attendance?",
              answer:
                "Yes, attendance and leave records can be integrated into payroll processing.",
            },
            {
              question:
                "Can schools analyze salary reports?",
              answer:
                "Yes, department-wise payroll reports and payroll analytics are available.",
            },
          ]}
        />

        <FinalCTA />

      </main>

      <Footer />
    </>
  );
}