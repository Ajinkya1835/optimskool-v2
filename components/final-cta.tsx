import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative z-10 overflow-hidden">

      {/* CTA */}
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-28 text-white">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-blue-300">
            OptimSkool ERP
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight lg:text-6xl">
            Simplify School
            Administration with{" "}
            <span className="text-blue-400">
              OptimSkool
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Digitize attendance,
            examinations, fees,
            reports, payroll and
            student management
            through one centralized
            school ERP platform.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

            <Link
              href="/contact"
              className="rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-500"
            >
              Contact Us
            </Link>

            <Link
              href="/pricing"
              className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
            >
              View Pricing
            </Link>

          </div>

        </div>
      </div>

      {/* STATS */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 py-16">

        <div className="mx-auto grid max-w-7xl gap-10 px-6 text-center md:grid-cols-3">

          <div>
            <h3 className="text-5xl font-black text-white">
              20+
            </h3>

            <p className="mt-3 text-lg font-medium !text-white/90">
              Institutions Trust Us
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-black text-white">
              99.9%
            </h3>

            <p className="mt-3 text-lg font-medium !text-white/90">
              Uptime Guarantee
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-black text-white">
              24/7
            </h3>

            <p className="mt-3 text-lg font-medium !text-white/90">
              Support Available
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}