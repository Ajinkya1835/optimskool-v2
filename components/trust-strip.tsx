export default function TrustStrip() {
  const items = [
    "Built for Indian Schools",
    "Cloud-Based ERP",
    "Attendance • Fees • Exams • Payroll",
  ];

  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-6 py-5 text-sm font-medium text-slate-600 lg:justify-between">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2"
          >
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
