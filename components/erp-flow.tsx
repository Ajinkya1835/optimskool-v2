const flow = [
  {
    title: "Student Management",
    desc: "Centralized student profiles, admissions and records.",
    icon: "👨‍🎓",
  },
  {
    title: "Attendance",
    desc: "Real-time attendance tracking with smart reports.",
    icon: "🗓️",
  },
  {
    title: "Fee Collection",
    desc: "Automated invoices, reminders and payment tracking.",
    icon: "💳",
  },
  {
    title: "Exams",
    desc: "Manage exams, schedules and grading workflows.",
    icon: "📝",
  },
  {
    title: "Results",
    desc: "Generate digital report cards instantly.",
    icon: "📊",
  },
  {
    title: "Analytics",
    desc: "Powerful dashboards for data-driven decisions.",
    icon: "📈",
  },
];

export default function ErpFlow() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-28">

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-blue-200/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
            One Connected Platform
          </span>

          <h2 className="mt-8 text-5xl font-black tracking-[-0.04em] text-slate-900 lg:text-6xl">
            Everything Connected
            <br />
            In One Smart ERP
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">
            OptimSkool centralizes every
            school operation into one
            intelligent workflow — from
            admissions to analytics.
          </p>

        </div>

        {/* Flow Cards */}
        <div className="mt-20 grid gap-6 lg:grid-cols-3">

          {flow.map((step, i) => (
            <div
              key={step.title}
              className="group relative overflow-hidden rounded-[34px] border border-blue-100 bg-white p-8 shadow-[0_20px_60px_rgba(37,99,235,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(37,99,235,0.14)]"
            >

              {/* Top glow */}
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-blue-100/50 blur-[50px] transition group-hover:bg-cyan-100/60" />

              {/* Step */}
              <div className="mb-6 flex items-center justify-between">

                <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br from-blue-100 to-cyan-100 text-3xl shadow-sm">
                  {step.icon}
                </div>

                <div className="rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-xs font-bold text-blue-600">
                  Step {i + 1}
                </div>

              </div>

              {/* Content */}
              <h3 className="text-2xl font-black text-slate-900">
                {step.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-500">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}