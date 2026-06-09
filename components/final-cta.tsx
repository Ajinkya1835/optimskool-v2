import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28 text-white">

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-blue-300">
          OptimSkool ERP
        </span>

        <h2 className="mt-7 text-4xl font-bold tracking-tight lg:text-6xl">
          Simplify School
          Administration with
          <span className="text-blue-400">
            {" "}OptimSkool
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Manage attendance,
          examinations, fees,
          results and student
          records through one
          centralized ERP system.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/contact"
            className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700"
          >
            Request Demo
          </Link>

          <Link
            href="/school-erp-software"
            className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            Explore Platform
          </Link>

        </div>
      </div>
    </section>
  );
}