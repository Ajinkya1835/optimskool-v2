/* UPDATED HERO.tsx */

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white pt-44 pb-32">

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Premium Glows */}
      <div className="absolute left-1/2 -top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-200/40 blur-[120px]" />
      <div className="absolute right-0 top-40 h-[350px] w-[420px] rounded-full bg-cyan-200/35 blur-[100px]" />
      <div className="absolute left-0 top-72 h-[300px] w-[350px] rounded-full bg-teal-200/30 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
          Built for Modern Schools & Institutions
        </div>

        {/* Heading */}
        <h1 className="mx-auto mt-8 max-w-6xl text-5xl font-black tracking-[-0.05em] text-slate-900 sm:text-7xl lg:text-[88px] lg:leading-[0.95]">
          Run Your School
          <br />
          Like a{" "}
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
            Modern Institution
          </span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-500 lg:text-xl">
          Attendance, fees, academics,
          payroll and communication —
          managed through one intelligent
          ERP dashboard.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-[0_8px_30px_rgba(37,99,235,0.35)] transition hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_40px_rgba(6,182,212,0.45)]"
          >
            Request Demo
          </Link>

          <Link
            href="/school-erp-software"
            className="rounded-full border border-blue-200 bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
          >
            Explore Platform
          </Link>

        </div>

        {/* TRUST */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-500">
          <span>✓ Attendance</span>
          <span>✓ Fee Management</span>
          <span>✓ Exams & Results</span>
          <span>✓ Payroll</span>
        </div>

        {/* Dashboard */}
        <div className="relative mt-20">

          {/* Glow */}
          <div className="absolute left-1/2 top-1/2 h-[460px] w-[1050px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/20 blur-[120px]" />

          <div className="relative mx-auto max-w-[1450px]">

            {/* Left Floating Card */}
            <div className="absolute -left-8 top-16 z-20 hidden rounded-[30px] border border-blue-100 bg-white p-6 shadow-[0_15px_40px_rgba(37,99,235,0.10)] lg:block">

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-gradient-to-br from-blue-100 to-cyan-100 text-xl">
                  🏫
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-400">
                    Schools Managed
                  </p>

                  <p className="text-3xl font-black text-slate-900">
                    20+
                  </p>
                </div>
              </div>

            </div>

            {/* Right Floating Card */}
            <div className="absolute -right-8 top-28 z-20 hidden rounded-[30px] border border-teal-100 bg-white p-6 shadow-[0_15px_40px_rgba(20,184,166,0.12)] lg:block">

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-gradient-to-br from-teal-100 to-cyan-100 text-xl">
                  ⚡
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-400">
                    System Uptime
                  </p>

                  <p className="text-3xl font-black text-teal-500">
                    99.9%
                  </p>
                </div>
              </div>

            </div>

            {/* Dashboard Card */}
            <div className="relative overflow-hidden rounded-[44px] border border-blue-100 bg-white p-4 shadow-[0_40px_120px_rgba(37,99,235,0.15)]">

              {/* Browser */}
              <div className="mb-4 flex items-center gap-2 border-b border-slate-100 px-2 pb-4">

                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />

                <div className="ml-4 rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-xs font-semibold text-blue-600">
                  OptimSkool ERP Dashboard
                </div>

              </div>

              <Image
                src="/images/hero-dashboard.png"
                alt="OptimSkool Dashboard"
                width={1800}
                height={1000}
                priority
                className="w-full rounded-[34px] object-cover"
              />

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}