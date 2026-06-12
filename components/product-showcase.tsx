import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const modules = [
  {
    title: "Attendance Management",
    description:
      "Track attendance, absentee trends and classroom activity in real time.",
    image:
      "/images/attendance-dashboard.png",
    href:
      "/attendance-management-system",
    stat: "98% Accuracy",
    badge: "Attendance",
  },

  {
    title: "Fee Management",
    description:
      "Digitally manage dues, invoices and fee collection workflows.",
    image:
      "/images/fee-report-dashboard.png",
    href:
      "/fee-management-system",
    stat: "₹10L+ Managed",
    badge: "Finance",
  },

  {
    title: "Examinations & Results",
    description:
      "Manage exams, marks and structured student reports.",
    image:
      "/images/exam-dashboard.png",
    href:
      "/exam-management-system",
    stat: "100% Digital",
    badge: "Academics",
  },
];

export default function ProductShowcase() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-32">

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Glow */}
      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-blue-200/25 blur-[120px]" />
      <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-cyan-200/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
            Product Showcase
          </div>

          <h2 className="mt-8 text-5xl font-black tracking-[-0.04em] text-slate-900 lg:text-6xl">
            Explore Powerful
            <br />
            ERP Modules
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-500">
            Everything required to manage
            attendance, fees, academics
            and school administration
            from one intelligent dashboard.
          </p>

        </div>

        {/* Modules */}
        <div className="mt-24 space-y-28">

          {modules.map((module, index) => (
            <div
              key={module.title}
              className={`grid items-center gap-16 lg:grid-cols-2 ${
                index % 2 !== 0
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }`}
            >

              {/* Text */}
              <div className="max-w-xl">

                <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
                  {module.badge}
                </div>

                <h3 className="mt-8 text-5xl font-black leading-tight tracking-[-0.03em] text-slate-900">
                  {module.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-500">
                  {module.description}
                </p>

                {/* Features */}
                <div className="mt-8 flex flex-wrap gap-3">

                  {[
                    "Real-Time Data",
                    "Cloud Access",
                    "Detailed Reports",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-slate-700"
                    >
                      ✓ {item}
                    </div>
                  ))}

                </div>

                {/* Bottom */}
                <div className="mt-10 flex flex-wrap items-center gap-5">

                  <div className="rounded-[30px] border border-blue-100 bg-white px-6 py-5 shadow-sm">

                    <p className="text-sm font-medium text-slate-400">
                      Live Stats
                    </p>

                    <p className="mt-1 text-3xl font-black text-slate-900">
                      {module.stat}
                    </p>

                  </div>

                  <Link
                    href={module.href}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-5 text-lg font-semibold text-white shadow-[0_8px_30px_rgba(37,99,235,0.35)] transition hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_40px_rgba(6,182,212,0.45)]"
                  >
                    Explore Module
                    <ArrowRight className="h-5 w-5" />
                  </Link>

                </div>

              </div>

              {/* Image */}
              <div className="relative">

                {/* Glow */}
                <div className="absolute inset-0 rounded-[60px] bg-blue-200/20 blur-[100px]" />

                {/* Frame */}
                <div className="relative overflow-hidden rounded-[42px] border border-blue-100 bg-white p-4 shadow-[0_30px_100px_rgba(37,99,235,0.12)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_40px_120px_rgba(37,99,235,0.18)]">

                  {/* Browser bar */}
                  <div className="mb-4 flex items-center gap-2 border-b border-slate-100 px-2 pb-4">

                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />

                    <div className="ml-4 rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-xs font-semibold text-blue-600">
                      {module.title}
                    </div>

                  </div>

                  <Image
                    src={module.image}
                    alt={module.title}
                    width={1600}
                    height={900}
                    className="h-auto w-full rounded-[28px] object-cover"
                  />

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}