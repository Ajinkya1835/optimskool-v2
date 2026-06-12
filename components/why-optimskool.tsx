import {
  ShieldCheck,
  BarChart3,
  Clock3,
  Users,
  CheckCircle2,
  Database,
} from "lucide-react";

const features = [
  {
    title: "Centralized ERP",
    description:
      "Manage attendance, academics, payroll and administration from one platform.",
    icon: Database,
    gradient: "from-blue-100 to-cyan-100",
  },
  {
    title: "Real-Time Analytics",
    description:
      "Track fees, attendance and performance through live dashboards.",
    icon: BarChart3,
    gradient: "from-emerald-100 to-teal-100",
  },
  {
    title: "Save Admin Time",
    description:
      "Reduce repetitive work and automate school operations efficiently.",
    icon: Clock3,
    gradient: "from-orange-100 to-amber-100",
  },
  {
    title: "Secure Platform",
    description:
      "Enterprise-grade security with protected student and school records.",
    icon: ShieldCheck,
    gradient: "from-violet-100 to-indigo-100",
  },
];

const stats = [
  "Attendance Tracking",
  "Fee Management",
  "Payroll System",
  "Exam Analytics",
  "Parent Communication",
  "Digital Reports",
];

export default function WhyOptimSkool() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-32">

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Glow */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-200/25 blur-[120px]" />
      <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-200/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="max-w-3xl">

          <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
            Why OptimSkool
          </div>

          <h2 className="mt-8 text-5xl font-black tracking-[-0.04em] text-slate-900 lg:text-6xl lg:leading-[0.95]">
            Built for Schools
            <br />
            That Want Smarter
            Operations
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
            Replace fragmented tools
            and manual processes with
            one intelligent ERP platform
            designed for modern schools.
          </p>

        </div>

        {/* Layout */}
        <div className="mt-20 grid gap-7 lg:grid-cols-12">

          {/* Left Big Card */}
          <div className="relative overflow-hidden rounded-[40px] border border-blue-100 bg-white p-8 shadow-[0_20px_70px_rgba(37,99,235,0.08)] lg:col-span-5">

            {/* Glow */}
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-blue-100/40 blur-[90px]" />

            <div className="relative">

              <div className="flex h-20 w-20 items-center justify-center rounded-[28px] bg-gradient-to-br from-blue-100 to-cyan-100 shadow-sm">
                <Users className="h-10 w-10 text-slate-700" />
              </div>

              <h3 className="mt-8 text-5xl font-black leading-tight text-slate-900">
                One ERP.
                <br />
                Total Control.
              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-500">
                Everything your school
                needs — attendance,
                examinations, fees,
                payroll, communication
                and advanced analytics.
              </p>

              {/* Mini Stats */}
              <div className="mt-10 grid grid-cols-2 gap-4">

                <div className="rounded-[28px] border border-green-100 bg-green-50 p-5">

                  <p className="text-sm font-medium text-slate-500">
                    System Uptime
                  </p>

                  <p className="mt-1 text-3xl font-black text-green-600">
                    99.9%
                  </p>

                </div>

                <div className="rounded-[28px] border border-blue-100 bg-blue-50 p-5">

                  <p className="text-sm font-medium text-slate-500">
                    Automation
                  </p>

                  <p className="mt-1 text-3xl font-black text-slate-900">
                    Smart
                  </p>

                </div>

              </div>

            </div>
          </div>

          {/* Right Grid */}
          <div className="grid gap-6 lg:col-span-7 lg:grid-cols-2">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-[34px] border border-blue-100 bg-white p-7 shadow-[0_20px_60px_rgba(37,99,235,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(37,99,235,0.14)]"
                >

                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br ${feature.gradient} shadow-sm transition group-hover:scale-105`}
                  >
                    <Icon className="h-7 w-7 text-slate-700" />
                  </div>

                  <h3 className="mt-6 text-2xl font-black text-slate-900 transition group-hover:text-blue-600">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-8 text-slate-500">
                    {feature.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

        {/* Bottom Chips */}
        <div className="mt-14 flex flex-wrap gap-4">

          {stats.map((item) => (
            <div
              key={item}
              className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50"
            >

              <CheckCircle2 className="h-4 w-4 text-green-500" />

              {item}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}