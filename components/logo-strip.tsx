export default function LogoStrip() {
  return (
    <section className="border-y border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
          Trusted by Educational Institutions
        </p>

        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="flex h-20 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-slate-400"
            >
              School Logo
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}