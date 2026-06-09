const benefits = [
  {
    title: "Reduce Administrative Workload",
    desc: "Automate repetitive tasks and simplify school management.",
  },
  {
    title: "Centralized School Operations",
    desc: "Manage attendance, fees, payroll and academics in one place.",
  },
  {
    title: "Real-Time Reporting",
    desc: "Access school performance and operational insights instantly.",
  },
  {
    title: "Simple for Staff",
    desc: "Easy workflows for administrators, teachers and management.",
  },
];

export default function WhyOptimSkool() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Why Schools Choose OptimSkool
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Built for Modern School Management
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
