import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Admission Management System for Schools | OptimSkool India",
  description:
    "Digitize school admissions with OptimSkool. Manage enquiries, applications, admit cards and student enrollment from one centralized admission management system.",
  alternates: {
    canonical: "/admission-management",
  },
};

const features = [
  "Admission Enquiries",
  "Student Applications",
  "Admit Cards",
  "Application Tracking",
  "Student Enrollment",
  "Centralized Records",
];

export default function AdmissionPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

            <div>
              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                Admission Management
              </span>

              <h1 className="mt-6 text-5xl font-bold text-slate-900">
                Admission Management
                System for Schools
              </h1>

              <p className="mt-6 text-lg text-slate-600">
                Manage admission enquiries,
                student applications,
                admit cards and enrollment
                through one centralized system.
              </p>
            </div>

            {/* ✅ Replaced <img> with <Image> */}
            <div className="overflow-hidden rounded-[40px] border border-slate-200 bg-white p-5 shadow-xl">
              <Image
                src="/images/dashboard-preview.png"
                alt="Admission Management System Dashboard"
                width={800}
                height={500}
                className="rounded-[28px] w-full"
              />
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">

            <h2 className="text-4xl font-bold text-slate-900">
              Admission Management Features
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((item) => (
                <div
                  key={item}
                  className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <h3 className="font-semibold text-slate-900">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQ
          title="Admission Management FAQs"
          description="Common questions about OptimSkool's admission management system."
          faqs={[
            {
              question: "How does OptimSkool handle admission enquiries?",
              answer:
                "OptimSkool centralizes all admission enquiries into a digital dashboard, allowing staff to track, respond and convert enquiries into applications efficiently.",
            },
            {
              question: "Can admit cards be generated automatically?",
              answer:
                "Yes. OptimSkool generates admit cards digitally based on student enrollment and exam schedules.",
            },
            {
              question: "Is the admission process paperless?",
              answer:
                "Yes. OptimSkool digitizes the entire admission workflow from enquiry to enrollment.",
            },
            {
              question: "Can admission data be tracked in real time?",
              answer:
                "Yes. All applications, enrollment status and records are updated in real time across the platform.",
            },
          ]}
        />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}