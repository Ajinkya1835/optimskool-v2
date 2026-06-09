import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Exam Management System",
  description:
    "Exam management software for schools to manage examinations digitally.",
};

const features = [
  "Exam Scheduling",
  "Hall Ticket Generation",
  "Exam Records",
  "Academic Reports",
  "Exam Timetable",
  "Centralized Management",
];

export default function ExamPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        <section className="bg-gradient-to-b from-slate-50 to-white py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

            <div>
              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                Exam Management
              </span>

              <h1 className="mt-6 text-5xl font-bold text-slate-900">
                Exam Management
                System for Schools
              </h1>

              <p className="mt-6 text-lg text-slate-600">
                Organize examinations,
                hall tickets and schedules
                digitally from one platform.
              </p>
            </div>

            <div className="rounded-[40px] border border-slate-200 bg-slate-100 aspect-video flex items-center justify-center">
              Exam Dashboard Preview
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">

            <h2 className="text-4xl font-bold text-slate-900">
              Features
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((item) => (
                <div
                  key={item}
                  className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm"
                >
                  {item}
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