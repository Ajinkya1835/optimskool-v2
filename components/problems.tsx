import Link from "next/link";

const problems = [
  {
    title: "Manual Attendance",
    description:
      "Stop managing registers manually. Track attendance digitally with real-time visibility.",
    icon: "📋",
    stat: "80% Time Saved",
  },
  {
    title: "Fee Collection Chaos",
    description:
      "Automate reminders, fee tracking and reports without paperwork confusion.",
    icon: "💳",
    stat: "100% Automated",
  },
  {
    title: "Disconnected Operations",
    description:
      "Manage academics, payroll, transport and communication from one platform.",
    icon: "⚡",
    stat: "One Dashboard",
  },
];

export default function Problems() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-32">

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-200/30 blur-[140px]" />
      <div className="absolute right-0 top-40 h-[300px] w-[350px] rounded-full bg-cyan-200/20 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-5 py-2 text-sm font-semibold text-red-600 shadow-sm">
            School Challenges
          </span>

          <h2 className="mx-auto mt-8 max-w-5xl text-5xl font-black tracking-[-0.04em] text-slate-900 lg:text-7xl lg:leading-[0.95]">
            Still Managing School
            <br />
            Operations Manually?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-500 lg:text-xl">
            Outdated systems waste staff
            time, increase paperwork and
            slow down school administration.
            OptimSkool automates everything
            in one intelligent platform.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-7 lg:grid-cols-3">

          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group relative overflow-hidden rounded-[38px] border border-blue-100 bg-white p-8 shadow-[0_20px_60px_rgba(37,99,235,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(37,99,235,0.14)]"
            >

              {/* Glow */}
              <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-blue-100/40 blur-[70px]" />

              {/* Top */}
              <div className="relative flex items-start justify-between">

                <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br from-blue-100 to-cyan-100 text-3xl shadow-sm">
                  {problem.icon}
                </div>

                <div className="rounded-full border border-red-200 bg-red-50 px-4 py-1 text-xs font-semibold text-red-600">
                  {problem.stat}
                </div>

              </div>

              {/* Content */}
              <div className="relative mt-8">

                <h3 className="text-2xl font-black text-slate-900 transition group-hover:text-blue-600">
                  {problem.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-500">
                  {problem.description}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Trust */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-500">
          <span>✓ Attendance</span>
          <span>✓ Fee Collection</span>
          <span>✓ Exams & Results</span>
          <span>✓ Payroll</span>
          <span>✓ Parent Communication</span>
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">

          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-[0_8px_30px_rgba(37,99,235,0.35)] transition hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_40px_rgba(6,182,212,0.45)]"
          >
            Request Demo
          </Link>

          <Link
            href="/school-erp-software"
            className="rounded-full border border-blue-200 bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
          >
            Explore Platform
          </Link>

        </div>

      </div>
    </section>
  );
}