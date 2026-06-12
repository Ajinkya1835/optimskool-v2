/* app/exam-management-system/page.tsx */

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata =
  generateMetadata({
    title:
      "Exam Management System for Schools | OptimSkool",

    description:
      "Digitally manage school examinations, marksheets, grading and academic performance using OptimSkool Exam Management System.",

    path:
      "/exam-management-system",

    keywords: [
      "exam management system",
      "school exam software",
      "marksheet management system",
      "school examination software",
      "student grading software",
    ],
  });

export default function ExamManagementPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white text-slate-900">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white pt-44 pb-28">

          <div className="absolute inset-0 bg-grid opacity-40" />

          {/* glows */}
          <div className="absolute left-1/2 -top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-200/35 blur-[120px]" />
          <div className="absolute right-0 top-40 h-[350px] w-[400px] rounded-full bg-cyan-200/25 blur-[100px]" />

          <div className="relative mx-auto max-w-7xl px-6">

            <div className="max-w-4xl">

              <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
                Examination Management
              </div>

              <h1 className="mt-8 text-5xl font-black leading-[0.95] tracking-[-0.04em] text-slate-900 lg:text-7xl">
                Smarter Digital
                Examination
                Management
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-500 lg:text-xl">
                Conduct exams, manage
                report cards and track
                student performance
                through one intelligent
                ERP platform.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-[0_8px_30px_rgba(37,99,235,0.35)] transition hover:brightness-105 hover:shadow-[0_8px_40px_rgba(6,182,212,0.45)]"
                >
                  Request Demo
                </Link>

                <Link
                  href="/pricing"
                  className="rounded-full border border-blue-200 bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
                >
                  View Pricing
                </Link>

              </div>

              <div className="mt-12 flex flex-wrap gap-4">

                {[
                  "Exam Scheduling",
                  "Results",
                  "Report Cards",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-blue-100 bg-white px-5 py-3 text-sm font-medium text-slate-600 shadow-sm"
                  >
                    ✓ {item}
                  </div>
                ))}

              </div>

            </div>

            {/* Dashboard */}
            <div className="relative mt-20">

              <div className="absolute left-1/2 top-1/2 h-[380px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/20 blur-[120px]" />

              <div className="relative overflow-hidden rounded-[42px] border border-blue-100 bg-white p-3 shadow-[0_40px_120px_rgba(37,99,235,0.15),0_0_0_1px_rgba(59,130,246,0.08)]">

                <div className="mb-3 flex items-center gap-2 border-b border-slate-100 px-2 pb-3">

                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />

                  <div className="ml-4 rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-xs font-medium text-blue-600">
                    Examination Dashboard
                  </div>

                </div>

                <Image
                  src="/images/exam-dashboard.png"
                  alt="Exam Dashboard"
                  width={1600}
                  height={900}
                  className="w-full rounded-[28px]"
                />

              </div>

            </div>

          </div>
        </section>

        {/* FEATURES */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24">

          <div className="absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-blue-200/20 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">

              <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
                Examination Features
              </div>

              <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 lg:text-6xl">
                Everything Needed
                for Digital
                Examinations
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-500">
                Simplify exam scheduling,
                automate results and
                monitor academic progress
                efficiently.
              </p>

            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-12">

              {/* Left Big Card */}
              <div className="relative overflow-hidden rounded-[40px] border border-blue-100 bg-white p-8 shadow-[0_20px_60px_rgba(37,99,235,0.08)] lg:col-span-5">

                <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-blue-200/20 blur-[100px]" />

                <div className="relative">

                  <div className="rounded-[24px] border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-4 w-fit shadow-sm">
                    <p className="text-3xl">
                      📝
                    </p>
                  </div>

                  <h3 className="mt-8 text-4xl font-black text-slate-900">
                    Smart Exam
                    Tracking
                  </h3>

                  <p className="mt-5 text-lg leading-8 text-slate-500">
                    Publish results,
                    generate report cards
                    and monitor student
                    performance from
                    one dashboard.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-3">

                    {[
                      "Results",
                      "Report Cards",
                      "Analytics",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-slate-600"
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
                    title: "Results",
                    desc:
                      "Publish results instantly for students.",
                  },
                  {
                    title: "Report Cards",
                    desc:
                      "Generate digital report cards automatically.",
                  },
                  {
                    title: "Exam Scheduling",
                    desc:
                      "Manage exam timetables efficiently.",
                  },
                  {
                    title: "Performance Analytics",
                    desc:
                      "Track academic progress with insights.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[32px] border border-blue-100 bg-white p-7 shadow-[0_14px_50px_rgba(37,99,235,0.08)] transition hover:-translate-y-1 hover:border-blue-200"
                  >

                    <h3 className="text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-500">
                      {item.desc}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>
        </section>

        <FAQ />
        

      </main>

      <Footer />
    </>
  );
}