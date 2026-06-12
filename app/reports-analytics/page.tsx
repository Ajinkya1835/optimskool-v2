
/* app/reports-analytics/page.tsx */

import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";

export default function ReportsAnalyticsPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#070B14] text-white">

        {/* HERO */}
        <section className="relative overflow-hidden pt-40 pb-24">

          <div className="absolute inset-0 bg-grid opacity-60" />
          <div className="hero-glow left-1/2 top-0 -translate-x-1/2" />

          <div className="relative mx-auto max-w-7xl px-6">

            <div className="max-w-5xl">

              <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
                Reports & Analytics System
              </span>

              <h1 className="mt-8 text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white lg:text-7xl">
                Real-Time School
                Reports &
                Analytics
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400 lg:text-xl">
                Get deep insights into
                attendance, fees, academics,
                staff performance and school
                operations with intelligent
                analytics dashboards.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-[0_0_60px_rgba(37,99,235,0.45)] transition hover:bg-blue-500"
                >
                  Request Demo
                </Link>

                <Link
                  href="/pricing"
                  className="rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-base font-semibold text-slate-200 backdrop-blur-xl transition hover:bg-white/[0.08]"
                >
                  View Pricing
                </Link>

              </div>

              <div className="mt-12 flex flex-wrap gap-4 text-sm font-medium text-slate-300">

                {[
                  "Live Reports",
                  "Performance Analytics",
                  "Real-Time Insights",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3"
                  >
                    ✓ {item}
                  </div>
                ))}

              </div>

            </div>

            {/* Dashboard */}
            <div className="relative mt-20">

              <div className="absolute left-1/2 top-1/2 h-[380px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />

              <div className="relative overflow-hidden rounded-[42px] border border-cyan-500/20 bg-white/[0.03] p-3 shadow-[0_50px_180px_rgba(0,0,0,0.55)] backdrop-blur-2xl">

                <div className="mb-3 flex items-center gap-2 border-b border-white/10 px-2 pb-3">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />

                  <div className="ml-4 rounded-full bg-white/[0.05] px-4 py-1 text-xs text-slate-500">
                    Reports Dashboard
                  </div>
                </div>

                <Image
                  src="/images/hero-dashboard.png"
                  alt="Reports Dashboard"
                  width={1400}
                  height={900}
                  className="w-full rounded-[28px]"
                  priority
                />

              </div>

            </div>

          </div>
        </section>

        {/* FEATURES */}
        <section className="relative overflow-hidden bg-[#0A1020] py-24">

          <div className="absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">

              <div className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
                Smart Analytics Features
              </div>

              <h2 className="mt-6 text-4xl font-black tracking-tight text-white lg:text-6xl">
                Everything Needed
                For Smarter
                School Decisions
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                Track performance, monitor
                operations and make data-driven
                decisions using real-time
                analytics and reports.
              </p>

            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-12">

              {/* Left Big Card */}
              <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-sky-500/5 p-8 backdrop-blur-xl lg:col-span-5">

                <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-[100px]" />

                <div className="relative">

                  <div className="rounded-[24px] bg-cyan-500/20 p-4 w-fit">
                    <p className="text-3xl">
                      📊
                    </p>
                  </div>

                  <h3 className="mt-8 text-4xl font-black text-white">
                    Intelligent
                    School
                    Analytics
                  </h3>

                  <p className="mt-5 text-lg leading-8 text-slate-300">
                    Visualize attendance,
                    academics, fees and
                    operational performance
                    with live reports.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-3">

                    {[
                      "Live Reports",
                      "Insights",
                      "Performance",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-300"
                      >
                        {item}
                      </div>
                    ))}

                  </div>

                </div>
              </div>

              {/* Right Cards */}
              <div className="grid gap-6 lg:col-span-7 lg:grid-cols-2">

                {[
                  {
                    title: "Attendance Analytics",
                    desc:
                      "Monitor attendance trends and absentee reports.",
                  },
                  {
                    title: "Fee Reports",
                    desc:
                      "Analyze payment collection and due reports.",
                  },
                  {
                    title: "Academic Insights",
                    desc:
                      "Track student academic performance.",
                  },
                  {
                    title: "Operational Reports",
                    desc:
                      "Get real-time school management insights.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition hover:border-cyan-500/20"
                  >

                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-400">
                      {item.desc}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>
        </section>

        <FAQ />
        <FinalCTA />

      </main>

      <Footer />
    </>
  );
}
