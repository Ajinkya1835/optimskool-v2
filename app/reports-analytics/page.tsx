import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";

export const metadata: Metadata = {
  // ✅ Proper title, description, canonical
  title: "School Reports & Analytics | OptimSkool India",
  description:
    "Monitor attendance, fees, payroll and school operations through real-time reports and analytics dashboards with OptimSkool ERP.",
  alternates: {
    canonical: "/reports-analytics",
  },
};

const features = [
  "Attendance Reports",
  "Fee Collection Analytics",
  "Salary Reports",
  "Student Analytics",
  "Operational Reports",
  "Payment Analytics",
];

export default function ReportsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        <section className="bg-gradient-to-b from-slate-50 to-white py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

            <div>
              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                Reports & Analytics
              </span>

              <h1 className="mt-6 text-5xl font-bold text-slate-900">
                Real-time School Reports & Analytics
              </h1>

              <p className="mt-6 text-lg text-slate-600">
                Monitor attendance, fees, payroll and operations through powerful dashboards.
              </p>
            </div>

            {/* ✅ Replaced <img> with <Image> */}
            <div className="overflow-hidden rounded-[40px] border border-slate-200 bg-white p-5 shadow-xl">
              <Image
                src="/images/dashboard-preview.png"
                alt="School Reports and Analytics Dashboard"
                width={1200}
                height={750}
                className="rounded-[28px] w-full"
              />
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((item) => (
                <div key={item} className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
                  <h3 className="font-semibold text-slate-900">{item}</h3>
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