import {
  CalendarCheck,
  CreditCard,
  GraduationCap,
  Wallet,
  BarChart3,
  Users,
  Bus,
  BellRing,
  ArrowRight,
} from "lucide-react";

import Link from "next/link";

const modules = [
  {
    title: "Attendance Management",
    description:
      "Track attendance, classroom presence and absentee analytics in real-time.",
    icon: CalendarCheck,
    href: "/attendance-management-system",
    stats: "98% Accuracy",
    gradient: "from-blue-100 to-cyan-100",
  },
  {
    title: "Fee Management",
    description:
      "Collect fees digitally with reminders, invoices and smart reporting.",
    icon: CreditCard,
    href: "/fee-management-system",
    stats: "₹10L+ Managed",
    gradient: "from-emerald-100 to-teal-100",
  },
  {
    title: "Examinations",
    description:
      "Conduct exams, publish marksheets and monitor academic progress.",
    icon: GraduationCap,
    href: "/exam-management-system",
    stats: "100% Digital",
    gradient: "from-violet-100 to-indigo-100",
  },
  {
    title: "Payroll & HR",
    description:
      "Automate payroll, staff records and salary management.",
    icon: Wallet,
    href: "/payroll-management-system",
    stats: "24/7 Access",
    gradient: "from-orange-100 to-amber-100",
  },
  {
    title: "Analytics & Reports",
    description:
      "Generate real-time academic and operational reports.",
    icon: BarChart3,
    href: "/reports-analytics",
    stats: "Live Insights",
    gradient: "from-sky-100 to-cyan-100",
  },
  {
    title: "Student Management",
    description:
      "Maintain student admissions, records and communication.",
    icon: Users,
    href: "/school-erp-software",
    stats: "Centralized",
    gradient: "from-pink-100 to-rose-100",
  },
  {
    title: "Transport Tracking",
    description:
      "Manage buses, routes and transportation workflows.",
    icon: Bus,
    href: "/school-erp-software",
    stats: "Smart Routes",
    gradient: "from-yellow-100 to-orange-100",
  },
  {
    title: "Broadcast & Alerts",
    description:
      "Send notices and updates instantly to staff and parents.",
    icon: BellRing,
    href: "/school-erp-software",
    stats: "Instant Updates",
    gradient: "from-cyan-100 to-blue-100",
  },
];

export default function ModulesGrid() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-28">

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Glow */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-200/25 blur-[120px]" />
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-200/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
            ERP Modules
          </div>

          <h2 className="mt-8 text-5xl font-black tracking-[-0.04em] text-slate-900 lg:text-6xl">
            Everything Your School
            <br />
            Needs in One Platform
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-500">
            Replace disconnected systems
            with one centralized school ERP
            designed for modern institutions.
          </p>

        </div>

        {/* Grid */}
        <div className="mt-20 grid gap-6 lg:grid-cols-12">

          {modules.map((module, index) => {
            const Icon = module.icon;

            const large =
              index === 0 ||
              index === 1 ||
              index === 4;

            return (
              <Link
                key={module.title}
                href={module.href}
                className={`group relative overflow-hidden rounded-[38px] border border-blue-100 bg-white p-7 shadow-[0_20px_60px_rgba(37,99,235,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(37,99,235,0.14)]
                ${
                  large
                    ? "lg:col-span-6"
                    : "lg:col-span-3"
                }`}
              >

                {/* Glow */}
                <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-blue-100/40 blur-[70px]" />

                {/* Top */}
                <div className="relative flex items-start justify-between">

                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br ${module.gradient} shadow-sm`}
                  >
                    <Icon className="h-7 w-7 text-slate-700" />
                  </div>

                  <div className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-xs font-semibold text-emerald-600">
                    {module.stats}
                  </div>

                </div>

                {/* Content */}
                <div className="relative mt-8">

                  <h3 className="text-2xl font-black text-slate-900 transition group-hover:text-blue-600">
                    {module.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-500">
                    {module.description}
                  </p>

                </div>

                {/* Bottom */}
                <div className="relative mt-8 flex items-center gap-2 text-sm font-semibold text-blue-600">

                  Explore Module

                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />

                </div>

              </Link>
            );
          })}

        </div>

      </div>
    </section>
  );
}