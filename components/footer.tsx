import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[350px] w-[500px] -translate-x-1/2 rounded-full bg-blue-200/20 blur-[120px]" />

      <section className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* BRAND */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center"
            >
              <Image
                src="/logo-full2.png"
                alt="OptimSkool School ERP"
                width={300}
                height={80}
                priority
                className="h-[72px] w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-sm leading-8 text-slate-600">
              OptimSkool is a
              School ERP Software
              in India designed to
              simplify attendance,
              academics, payroll,
              admissions,
              examinations and
              fee management
              through one
              centralized platform.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-slate-500">
              <span>
                ✓ Attendance
              </span>

              <span>
                ✓ Fees
              </span>

              <span>
                ✓ Payroll
              </span>

              <span>
                ✓ Exams
              </span>
            </div>
          </div>

          {/* ERP MODULES */}
          <div className="lg:col-span-3">
            <h3 className="font-black text-slate-900">
              ERP Modules
            </h3>

            <div className="mt-5 flex flex-col gap-4 text-slate-600">
              <Link
                href="/school-erp-software"
                className="transition hover:text-blue-600"
              >
                School ERP
              </Link>

              <Link
                href="/attendance-management-system"
                className="transition hover:text-blue-600"
              >
                Attendance
                Management
              </Link>

              <Link
                href="/fee-management-system"
                className="transition hover:text-blue-600"
              >
                Fee Management
              </Link>

              <Link
                href="/exam-management-system"
                className="transition hover:text-blue-600"
              >
                Exam Management
              </Link>

              <Link
                href="/result-management-system"
                className="transition hover:text-blue-600"
              >
                Result Management
              </Link>

              <Link
                href="/admission-management"
                className="transition hover:text-blue-600"
              >
                Admission
                Management
              </Link>

              <Link
                href="/transport-management-system"
                className="transition hover:text-blue-600"
              >
                Transport
                Management
              </Link>
            </div>
          </div>

          {/* COMPANY */}
          <div className="lg:col-span-2">
            <h3 className="font-black text-slate-900">
              Company
            </h3>

            <div className="mt-5 flex flex-col gap-4 text-slate-600">
              <Link
                href="/pricing"
                className="transition hover:text-blue-600"
              >
                Pricing
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-blue-600"
              >
                Contact
              </Link>

              <Link
                href="/custom-school-erp-solutions"
                className="transition hover:text-blue-600"
              >
                Custom ERP
              </Link>

              <Link
                href="/privacy-policy"
                className="transition hover:text-blue-600"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-of-service"
                className="transition hover:text-blue-600"
              >
                Terms Of Service
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-3">
            <h3 className="font-black text-slate-900">
              Contact
            </h3>

            <div className="mt-5 space-y-5 text-slate-600">
              <div>
                <p className="text-sm font-semibold text-slate-400">
                  Email
                </p>

                <p className="mt-1 font-medium">
                  sales@metagrad.in
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-400">
                  Phone
                </p>

                <p className="mt-1 font-medium">
                  +91 8102775670
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-[0_8px_30px_rgba(37,99,235,0.20)] transition hover:brightness-105"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-slate-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 lg:flex-row lg:text-left">
            <p>
              ©{" "}
              {new Date().getFullYear()}{" "}
              OptimSkool. All
              rights reserved.
            </p>

            <p>
              School ERP Software
              For Modern Schools
              In India
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}