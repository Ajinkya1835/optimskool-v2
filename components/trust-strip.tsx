export default function TrustStrip() {
  const items = [
    {
      title: "Built for Indian Schools",
      icon: "🇮🇳",
    },
    {
      title:
        "Attendance • Fees • Exams • Payroll",
      icon: "🏫",
    },
    {
      title:
        "Cloud-Based ERP Platform",
      icon: "☁️",
    },
    {
      title:
        "Real-Time Analytics",
      icon: "📊",
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-blue-100 bg-gradient-to-r from-blue-50 via-white to-cyan-50 py-8">

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[250px] w-[500px] -translate-x-1/2 rounded-full bg-blue-200/20 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="flex flex-wrap items-center justify-center gap-5 lg:grid lg:grid-cols-4 lg:gap-6">

          {items.map((item) => (
            <div
              key={item.title}
              className="group flex min-h-[88px] flex-1 items-center gap-4 rounded-[28px] border border-blue-100 bg-white px-5 py-5 shadow-[0_10px_35px_rgba(37,99,235,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(37,99,235,0.10)]"
            >

              {/* Icon */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] bg-gradient-to-br from-blue-100 to-cyan-100 text-2xl shadow-sm transition group-hover:scale-105">
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <p className="text-sm font-semibold leading-6 text-slate-700">
                  {item.title}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}