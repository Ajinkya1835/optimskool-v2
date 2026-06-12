export default function LogoStrip() {
  return (
    <section className="relative overflow-hidden border-y border-blue-100 bg-gradient-to-b from-white to-slate-50 py-20">

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-blue-200/25 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center">

          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
            Trusted by Institutions
          </span>

          <h2 className="mt-8 text-4xl font-black tracking-[-0.04em] text-slate-900 lg:text-5xl">
            Trusted by Educational
            Institutions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-500">
            Schools and institutions trust
            OptimSkool to streamline daily
            operations and administration.
          </p>

        </div>

        {/* Logo cards */}
        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">

          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="group flex h-28 items-center justify-center rounded-[32px] border border-blue-100 bg-white p-6 shadow-[0_15px_40px_rgba(37,99,235,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)]"
            >

              {/* Replace with actual logos later */}
              <div className="flex flex-col items-center">

                <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-gradient-to-br from-blue-100 to-cyan-100 text-xl shadow-sm transition group-hover:scale-105">
                  🏫
                </div>

                <span className="mt-3 text-sm font-medium text-slate-500">
                  School Logo
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}