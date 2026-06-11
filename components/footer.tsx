import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#061327] text-white">

      

      {/* MAIN FOOTER */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-16 lg:grid-cols-3">

          {/* LEFT */}
          <div>

            <h2 className="text-5xl font-bold">
              Optim<span className="text-blue-500">
                Skool
              </span>
            </h2>

            <p className="mt-8 max-w-md text-lg leading-8 text-slate-300">
              Empowering educational
              institutions with
              intelligent Smart
              Education Platform
              solutions.
            </p>

          </div>

          {/* PRODUCT LINKS */}
          <div>

            <h3 className="text-2xl font-semibold">
              Product
            </h3>

            <div className="mt-8 flex flex-col gap-5 text-slate-300">

              <Link
                href="/features"
                className="hover:text-white"
              >
                Features
              </Link>

              <Link
                href="/school-erp-software"
                className="hover:text-white"
              >
                School ERP
              </Link>

              <Link
                href="/attendance-management-system"
                className="hover:text-white"
              >
                Attendance
              </Link>

              <Link
                href="/fee-management-system"
                className="hover:text-white"
              >
                Fee Management
              </Link>

              <Link
                href="/exam-management-system"
                className="hover:text-white"
              >
                Exam Management
              </Link>

            </div>
          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-2xl font-semibold">
              Contact
            </h3>

            <div className="mt-8 space-y-8 text-slate-300">

              <div>
                <p className="text-sm uppercase tracking-wide text-slate-300">
                  Email
                </p>

                <p className="mt-2 text-lg text-white">
                  sales@metagrad.in
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-slate-300">
                  Phone
                </p>

                <p className="mt-2 text-lg text-white">
                  +91 8102775670
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-slate-300">
                  Support
                </p>

                <p className="mt-2 text-lg text-white">
                  support@metagrad.in
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-20 border-t border-slate-800 pt-10">

          <div className="flex flex-col items-center justify-between gap-5 text-center text-slate-300 md:flex-row">

            <p>
              © 2026 OptimSkool.
              All rights reserved.
            </p>

            <div className="flex gap-8">

              <Link href="#">
                Privacy Policy
              </Link>

              <Link href="#">
                Terms of Service
              </Link>

              <Link href="#">
                Cookie Policy
              </Link>

            </div>

          </div>
        </div>
      </section>
    </footer>
  );
}