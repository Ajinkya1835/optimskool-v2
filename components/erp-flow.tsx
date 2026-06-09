const flow = [
  "Student Management",
  "Attendance",
  "Fee Collection",
  "Exams",
  "Results",
  "Analytics",
];

export default function ErpFlow() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        
        <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
          One Connected Platform
        </span>

        <h2 className="mt-6 text-4xl font-bold text-slate-900">
          Everything Connected in One ERP
        </h2>

        <p className="mt-4 text-lg text-slate-600">
          OptimSkool centralizes school workflows into one seamless system.
        </p>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
          {flow.map((step, i) => (
            <div
              key={step}
              className="flex items-center gap-4"
            >
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 font-medium text-slate-900">
                {step}
              </div>

              {i !== flow.length - 1 && (
                <span className="hidden text-slate-400 md:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
