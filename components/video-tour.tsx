export default function VideoTour() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
            Product Tour
          </div>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            See OptimSkool in Action
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Explore how OptimSkool simplifies attendance, fees,
            exams, payroll and school administration.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-[36px] border border-slate-200 bg-white p-5 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
          <div className="aspect-video rounded-[28px] border-2 border-dashed border-slate-300 bg-slate-100 flex items-center justify-center text-center">
            <div>
              <h3 className="text-xl font-semibold text-slate-700">
                Product Video Placeholder
              </h3>

              <p className="mt-2 text-slate-500">
                Add ERP walkthrough video later
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}