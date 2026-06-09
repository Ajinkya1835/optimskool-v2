import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-3">

          {/* Brand */}
          <div>

            <Link
              href="/"
              className="text-3xl font-bold"
            >
              Optim
              <span className="text-blue-500">
                Skool
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-slate-400">
              School ERP platform for
              attendance, fees,
              examinations, student
              management and academic
              administration.
            </p>
          </div>

          {/* Solutions */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              Solutions
            </h3>

            <ul className="mt-5 space-y-3 text-slate-400">

              <li>
                <Link href="/school-erp-software">
                  School ERP
                </Link>
              </li>

              <li>
                <Link href="/attendance-management-system">
                  Attendance
                </Link>
              </li>

              <li>
                <Link href="/fee-management-system">
                  Fee Management
                </Link>
              </li>

              <li>
                <Link href="/exam-management-system">
                  Exam Management
                </Link>
              </li>

              <li>
                <Link href="/result-management-system">
                  Result Management
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              Get Started
            </h3>

            <p className="mt-5 text-slate-400">
              Interested in OptimSkool?
              Request a product demo.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white hover:bg-blue-700"
            >
              Request Demo
            </Link>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          © 2026 OptimSkool.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}