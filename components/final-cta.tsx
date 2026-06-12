import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-28">

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-200/35 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        <div className="relative overflow-hidden rounded-[44px] border border-blue-100 bg-white p-10 text-center shadow-[0_30px_100px_rgba(37,99,235,0.10)] lg:p-16">

          {/* Decorative glow */}
          <div className="absolute -top-10 left-1/2 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-cyan-100/50 blur-[100px]" />

          <div className="relative">

            {/* Badge */}
            <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
              OptimSkool ERP
            </div>

            {/* Heading */}
            <h2 className="mt-8 text-5xl font-black tracking-[-0.04em] text-slate-900 lg:text-6xl lg:leading-[1]">
              Simplify School
              <br />
              Administration
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500 lg:text-xl">
              Manage attendance, fees,
              payroll, examinations and
              student administration
              through one intelligent
              ERP platform.
            </p>

            {/* Benefits */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">

              {[
                "Attendance",
                "Fee Management",
                "Examinations",
                "Payroll",
                "Student Analytics",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  ✓ {item}
                </div>
              ))}

            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap justify-center gap-4">

              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-[0_8px_30px_rgba(37,99,235,0.35)] transition hover:brightness-105 hover:shadow-[0_8px_40px_rgba(6,182,212,0.45)]"
              >
                Request Demo
              </Link>

              <Link
                href="/pricing"
                className="rounded-full border border-blue-200 bg-white px-8 py-4 font-semibold text-blue-600 shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
              >
                View Pricing
              </Link>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}