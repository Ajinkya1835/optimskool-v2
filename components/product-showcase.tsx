const modules = [
  {
    title: "Attendance Management",
    description:
      "Track daily attendance, monitor absentee trends and generate reports instantly.",
    type: "image",
  },
  {
    title: "Fee Management",
    description:
      "Manage fee collections, dues and payment tracking without manual spreadsheets.",
    type: "image",
  },
  {
    title: "Exams & Result Management",
    description:
      "Schedule exams, manage marks and generate report cards efficiently.",
    type: "video",
  },
  {
    title: "Payroll & Staff Management",
    description:
      "Simplify payroll processing, employee records and staff administration.",
    type: "image",
  },
];

export default function ProductShowcase() {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-blue-100 blur-[120px] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
            Product Showcase
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            Everything You Need to Run a Modern School
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            From attendance and fees to exams and payroll —
            OptimSkool centralizes every school workflow in one platform.
          </p>
        </div>

        <div className="mt-28 space-y-32">
          {modules.map((module, index) => (
            <div
              key={module.title}
              className={`grid items-center gap-14 lg:grid-cols-2 ${
                index % 2 !== 0
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }`}
            >
              <div>
                <div className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                  Module {index + 1}
                </div>

                <h3 className="mt-5 text-3xl font-bold text-slate-900 lg:text-4xl">
                  {module.title}
                </h3>

                <p className="mt-5 max-w-lg text-lg leading-8 text-slate-600">
                  {module.description}
                </p>

                <button className="mt-8 font-medium text-blue-600 hover:text-blue-700">
                  Learn More →
                </button>
              </div>

              {/* Media Placeholder */}
              <div className="group relative">
                <div className="absolute inset-0 rounded-[32px] bg-blue-200 blur-3xl opacity-20" />

                <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
                  <div className="aspect-video rounded-[24px] border-2 border-dashed border-slate-300 bg-slate-100 flex items-center justify-center text-center p-6">
                    <div>
                      <div className="text-lg font-semibold text-slate-700">
                        {module.type === "video"
                          ? "Video Placeholder"
                          : "Screenshot Placeholder"}
                      </div>

                      <p className="mt-2 text-sm text-slate-500">
                        Add {module.title}{" "}
                        {module.type === "video"
                          ? "demo video"
                          : "dashboard screenshot"} later
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}