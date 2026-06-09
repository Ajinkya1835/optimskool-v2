import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";

export const metadata: Metadata = {
  title: "School ERP Software",

  description:
    "School ERP software for attendance, fee management, examinations, student records and administration.",

  alternates: {
    canonical:
      "/school-erp-software",
  },
};

const modules = [
  "Attendance Management",
  "Fee Management",
  "Exam Management",
  "Result Management",
  "Student Management",
  "Administration",
];

export default function SchoolERPPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-24">

          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

            <div>

              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                School ERP Platform
              </span>

              <h1 className="mt-6 text-5xl font-bold text-slate-900 lg:text-6xl">
                Complete School ERP
                Software for Smarter
                Management
              </h1>

              <p className="mt-6 text-lg text-slate-600">
                Manage attendance,
                examinations, fee
                collection, student
                records and school
                administration from one
                centralized ERP system.
              </p>

              <div className="mt-8 flex gap-4">
                <button className="rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white hover:bg-blue-700">
                  Request Demo
                </button>

                <button className="rounded-2xl border border-slate-300 px-6 py-4 font-semibold text-slate-700 hover:bg-slate-50">
                  Learn More
                </button>
              </div>
            </div>

            <div className="overflow-hidden rounded-[40px] border border-slate-200 bg-white p-5 shadow-xl">

              <div className="mb-4 flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-300" />
                <div className="h-3 w-3 rounded-full bg-yellow-300" />
                <div className="h-3 w-3 rounded-full bg-green-300" />
              </div>

              <div className="aspect-video rounded-[30px] border-2 border-dashed border-slate-300 bg-slate-100 flex items-center justify-center text-slate-500">
                ERP Dashboard Preview
              </div>
            </div>
          </div>
        </section>

        {/* MODULES */}
        <section className="bg-slate-50 py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">
              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                Modules
              </span>

              <h2 className="mt-6 text-4xl font-bold text-slate-900">
                Everything Your School
                Needs
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {modules.map((module) => (
                <div
                  key={module}
                  className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <h3 className="font-semibold text-slate-900">
                    {module}
                  </h3>
                </div>
              ))}
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