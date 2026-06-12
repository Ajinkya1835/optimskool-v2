const testimonials = [
  {
    name: "School Principal",
    role: "Educational Institution",
    text:
      "OptimSkool simplified our daily operations. Attendance, fees and academic management are now streamlined in one dashboard.",
    initials: "SP",
  },
  {
    name: "Administrator",
    role: "School Management",
    text:
      "Managing student records and fee collection became much easier. The system saves our staff hours every week.",
    initials: "AD",
  },
  {
    name: "Academic Coordinator",
    role: "Educational Institution",
    text:
      "Exam management and reporting are now completely digital. OptimSkool reduced manual work significantly.",
    initials: "AC",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-32">

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-blue-200/25 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
            Testimonials
          </div>

          <h2 className="mt-8 text-5xl font-black tracking-[-0.04em] text-slate-900 lg:text-6xl">
            What Schools Say
            <br />
            About OptimSkool
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-500">
            Schools and institutions trust
            OptimSkool to simplify daily
            operations and automate
            administration workflows.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-7 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="group relative overflow-hidden rounded-[38px] border border-blue-100 bg-white p-8 shadow-[0_20px_60px_rgba(37,99,235,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(37,99,235,0.14)]"
            >

              {/* Glow */}
              <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-blue-100/40 blur-[70px]" />

              {/* Stars */}
              <div className="relative flex items-center gap-1 text-yellow-400">
                ⭐ ⭐ ⭐ ⭐ ⭐
              </div>

              {/* Quote */}
              <p className="relative mt-6 text-lg leading-8 text-slate-500">
                “{item.text}”
              </p>

              {/* Bottom */}
              <div className="relative mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 font-bold text-slate-700 shadow-sm">
                  {item.initials}
                </div>

                <div>
                  <h4 className="font-black text-slate-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {item.role}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Trust Stats */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-center">

          <div>
            <h3 className="text-4xl font-black text-slate-900">
              20+
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Schools Managed
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-slate-900">
              99.9%
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              System Uptime
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-slate-900">
              24/7
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Support Access
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}