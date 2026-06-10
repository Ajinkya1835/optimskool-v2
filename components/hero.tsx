import Link from "next/link";

const modules = [
  "Admissions",
  "Attendance",
  "Fees",
  "Examinations",
  "Payroll",
  "Certificates",
  "Reports",
  "Inventory",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24 lg:py-32">

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-200/40 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT */}
        <div>

          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Complete School ERP Platform
          </span>

          <h1 className="mt-7 text-5xl font-bold tracking-tight text-slate-900 lg:text-7xl">
            Complete School ERP
            Software for Smarter
            <span className="text-blue-600">
              {" "}Management
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            Manage admissions,
            attendance, fees,
            examinations, payroll,
            certificates, inventory,
            student records and school
            administration through one
            centralized ERP platform.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/contact"
              className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Request Demo
            </Link>

            <Link
              href="/school-erp-software"
              className="rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Explore ERP
            </Link>

          </div>

          <div className="mt-10 flex flex-wrap gap-3">

            {modules.map((item) => (
              <div
                key={item}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="overflow-hidden rounded-[40px] border border-slate-200 bg-white p-5 shadow-[0_40px_120px_rgba(15,23,42,0.15)]">

          <div className="mb-4 flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-300" />
            <div className="h-3 w-3 rounded-full bg-yellow-300" />
            <div className="h-3 w-3 rounded-full bg-green-300" />
          </div>

          <img
            src="/images/dashboard-preview.png"
            alt="OptimSkool Dashboard"
            className="rounded-[30px] border border-slate-200"
          />
        </div>
      </div>
    </section>
  );
}