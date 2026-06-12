/* app/page.tsx */

import type { Metadata } from "next";

import Hero from "@/components/hero";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

import Problems from "@/components/problems";
import ModulesGrid from "@/components/modules-grid";
import WhyOptimSkool from "@/components/why-optimskool";
import VideoTour from "@/components/video-tour";
import ProductShowcase from "@/components/product-showcase";
import TrustStrip from "@/components/trust-strip";

import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata =
  generateMetadata({
    title:
      "Best School ERP Software in India | School Management System | OptimSkool",

    description:
      "OptimSkool is an all-in-one School ERP Software in India for attendance, fees, payroll, admissions, examinations, transport and school management.",

    path: "/",

    keywords: [
      "school ERP software",
      "school ERP software India",
      "best school ERP software",
      "school management system",
      "school LMS software",
      "education ERP software",
      "attendance management system",
      "fee management system",
    ],
  });

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#070B14]">
        <Hero />

        <TrustStrip />

        <Problems />

        <ProductShowcase />

        <ModulesGrid />

        <WhyOptimSkool />

        <VideoTour />

        {/* SEO CONTENT */}
        <section className="bg-white py-28">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
              <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
                School ERP Software
              </span>

              <h2 className="mt-8 text-5xl font-black tracking-[-0.04em] text-slate-900 lg:text-6xl">
                Why Schools Need
                <br />
                ERP Software
              </h2>
            </div>

            <div className="mt-10 space-y-7 text-lg leading-9 text-slate-500">
              <p>
                Schools today face
                increasing administrative
                complexity. Managing
                attendance, admissions,
                examinations, payroll,
                fee collection and parent
                communication manually
                creates delays and
                operational inefficiencies.
              </p>

              <p>
                OptimSkool is a modern
                <strong className="text-slate-900">
                  {" "}
                  school ERP software
                </strong>{" "}
                built for schools,
                colleges and educational
                institutions across India.
                The platform centralizes
                attendance tracking,
                student management,
                payroll, fee collection,
                examinations and
                communication into one
                intelligent dashboard.
              </p>

              <p>
                With cloud-based access,
                automated workflows and
                real-time reports,
                institutions can reduce
                paperwork, improve staff
                productivity and manage
                academic operations more
                efficiently. Schools using
                ERP systems experience
                better administration,
                faster communication and
                improved transparency.
              </p>

              <p>
                Whether you need
                attendance management,
                online fee collection,
                payroll automation,
                transport management or
                digital examination
                workflows, OptimSkool
                helps institutions
                streamline operations
                through one centralized
                ERP platform.
              </p>
            </div>
          </div>
        </section>

        <FAQ
          title="School ERP Software FAQs"
          description="Everything schools ask before switching to OptimSkool ERP."
          faqs={[
            {
              question:
                "What is school ERP software?",
              answer:
                "School ERP software helps institutions manage attendance, fees, payroll, examinations, academics and administration through one centralized platform.",
            },
            {
              question:
                "Can OptimSkool manage attendance and fee collection?",
              answer:
                "Yes, OptimSkool centralizes attendance tracking, fee collection, reporting and administrative workflows.",
            },
            {
              question:
                "Is OptimSkool suitable for Indian schools?",
              answer:
                "Yes, OptimSkool is specifically designed for Indian schools, institutions and educational organizations.",
            },
            {
              question:
                "Does OptimSkool include payroll and admissions?",
              answer:
                "Yes, schools can manage payroll, admissions, attendance, examinations and communication through one ERP dashboard.",
            },
          ]}
        />

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}