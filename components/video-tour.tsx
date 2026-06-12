export default function VideoTour() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-32">

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Glows */}
      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-blue-200/25 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-200/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
            Product Demo
          </div>

          <h2 className="mt-8 text-5xl font-black tracking-[-0.04em] text-slate-900 lg:text-6xl">
            See OptimSkool
            <br />
            in Action
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-500">
            Watch how OptimSkool helps
            schools manage attendance,
            fee collection, examinations
            and administration from one
            intelligent dashboard.
          </p>

        </div>

        {/* Video */}
        <div className="relative mx-auto mt-20 max-w-6xl">

          {/* Glow */}
          <div className="absolute inset-0 rounded-[50px] bg-blue-200/20 blur-[100px]" />

          {/* Floating Left */}
          <div className="absolute -left-8 top-14 z-20 hidden rounded-[30px] border border-blue-100 bg-white p-6 shadow-[0_20px_50px_rgba(37,99,235,0.10)] lg:block">

            <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-blue-100 to-cyan-100 text-2xl">
              ▶️
            </div>

            <p className="mt-4 text-sm font-medium text-slate-400">
              Product Walkthrough
            </p>

            <p className="mt-1 text-2xl font-black text-slate-900">
              25+ Modules
            </p>

          </div>

          {/* Floating Right */}
          <div className="absolute -right-8 top-24 z-20 hidden rounded-[30px] border border-teal-100 bg-white p-6 shadow-[0_20px_50px_rgba(20,184,166,0.12)] lg:block">

            <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-teal-100 to-cyan-100 text-2xl">
              ⚡
            </div>

            <p className="mt-4 text-sm font-medium text-slate-400">
              Live Operations
            </p>

            <p className="mt-1 text-2xl font-black text-teal-500">
              24/7
            </p>

          </div>

          {/* Video Card */}
          <div className="relative overflow-hidden rounded-[44px] border border-blue-100 bg-white p-4 shadow-[0_30px_100px_rgba(37,99,235,0.12)]">

            {/* Browser Bar */}
            <div className="mb-4 flex items-center gap-2 border-b border-slate-100 px-2 pb-4">

              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />

              <div className="ml-4 rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-xs font-semibold text-blue-600">
                OptimSkool Tour
              </div>

            </div>

            {/* Video */}
            <div className="overflow-hidden rounded-[34px] bg-slate-100">

              <video
                className="w-full rounded-[34px]"
                controls
                preload="metadata"
              >
                <source
                  src="/videos/optimskool-demo.mp4"
                  type="video/mp4"
                />

                Your browser does not support
                the video tag.
              </video>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}