/* app/contact/page.tsx */

;

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FinalCTA from "@/components/final-cta";
import { generateMetadata } from "@/lib/seo";
import BreadcrumbSchema from "@/components/breadcrumb-schema";

import type { Metadata } from "next";


export const metadata: Metadata =
  generateMetadata({
    title:
      "Contact OptimSkool | Book School ERP Demo",

    description:
      "Book a free demo, request pricing or discuss custom school ERP software requirements with OptimSkool.",

    path: "/contact",

    keywords: [
      "contact school ERP company",
      "school ERP demo",
      "school management software demo",
      "OptimSkool contact",
    ],
  });

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[linear-gradient(to_bottom,#f5f9ff,#ffffff)] text-slate-900">
        <BreadcrumbSchema
  items={[
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ]}
/>

        {/* bg pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#2563eb_1px,transparent_1px),linear-gradient(to_bottom,#2563eb_1px,transparent_1px)] bg-[size:56px_56px]" />

        {/* HERO */}
        <section className="relative overflow-hidden pt-36 pb-16">

          <div className="pointer-events-none absolute left-1/2 -top-24 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-blue-300/30 blur-[120px]" />
          <div className="pointer-events-none absolute right-0 top-24 h-[280px] w-[280px] rounded-full bg-cyan-300/20 blur-[120px]" />

          <div className="relative mx-auto max-w-6xl px-6 text-center">

            <span className="inline-flex rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur-xl">
              ✨ Contact OptimSkool
            </span>

            <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-black leading-[0.95] tracking-[-0.05em] text-slate-900 lg:text-6xl">
              Request A Demo

              <span className="block bg-gradient-to-r from-blue-700 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                Or Talk To Our Team
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 lg:text-lg">
              Need pricing details,
              school ERP modules or
              custom features? Let’s
              discuss your requirements.
            </p>

          </div>
        </section>

        {/* CONTACT */}
        <section className="relative pb-20">

          <div className="pointer-events-none absolute left-0 top-0 h-[240px] w-[240px] rounded-full bg-blue-200/20 blur-[120px]" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-[240px] w-[240px] rounded-full bg-cyan-200/20 blur-[120px]" />

          <div className="relative mx-auto grid max-w-6xl gap-5 px-6 lg:grid-cols-12">

            {/* LEFT */}
            <div className="lg:col-span-5">

              <div className="relative overflow-hidden rounded-[30px] border border-blue-100 bg-white/90 p-6 shadow-[0_20px_60px_rgba(37,99,235,0.08)] backdrop-blur-xl">

                <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px]" />

                <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-sm">
                  Get In Touch
                </span>

                <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900">
                  Let’s Build
                  Better School
                  ERP Together
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Whether you need
                  attendance, fees,
                  payroll, transport or
                  custom ERP modules —
                  our team can help.
                </p>

                <div className="mt-6 space-y-4">

                  <div className="rounded-[24px] border border-blue-100 bg-gradient-to-r from-white to-blue-50/60 p-5 shadow-sm">
                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                        ✉️
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-slate-900">
                          Email
                        </h3>

                        <p className="text-sm text-slate-500">
                          sales@metagrad.in
                        </p>
                      </div>

                    </div>
                  </div>

                  <div className="rounded-[24px] border border-blue-100 bg-gradient-to-r from-white to-cyan-50/60 p-5 shadow-sm">
                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                        📞
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-slate-900">
                          Phone
                        </h3>

                        <p className="text-sm text-slate-500">
                          +91 8102775670
                        </p>
                      </div>

                    </div>
                  </div>

                  <div className="rounded-[24px] border border-blue-100 bg-gradient-to-r from-white to-indigo-50/60 p-5 shadow-sm">
                    <div className="flex items-start gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                        ⚙️
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-slate-900">
                          Services
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          School ERP • Attendance •
                          Fees • Payroll • Exams •
                          Results • Custom Development
                        </p>
                      </div>

                    </div>
                  </div>

                </div>

              </div>

            </div>

            {/* FORM */}
            <div className="lg:col-span-7">

              <div className="relative overflow-hidden rounded-[30px] border border-blue-100 bg-white/90 p-6 shadow-[0_20px_60px_rgba(37,99,235,0.08)] backdrop-blur-xl">

                <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px]" />

                <h3 className="text-2xl font-black text-slate-900">
                  Request Demo
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Fill the details and our team will contact you.
                </p>

                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  className="mt-6 space-y-4"
                >

                  {/* Replace with your Web3Forms Access Key */}
                  <input
                    type="hidden"
                    name="access_key"
                    value="30f2e6fd-4e6b-442c-96db-c676305c2e19"
                  />

                  <input
                    type="hidden"
                    name="subject"
                    value="New OptimSkool Demo Request"
                  />

                  <input
                    type="hidden"
                    name="redirect"
                    value="https://optimskool.com/contact"
                  />

                  <input
                    type="text"
                    name="school_name"
                    placeholder="School / Institution Name"
                    required
                    className="w-full rounded-[18px] border border-blue-100 bg-white px-5 py-3.5 text-slate-700 shadow-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  />

                  <div className="grid gap-4 md:grid-cols-2">

                    <input
                      type="text"
                      name="contact_person"
                      placeholder="Contact Person"
                      required
                      className="rounded-[18px] border border-blue-100 bg-white px-5 py-3.5 text-slate-700 shadow-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                    />

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      required
                      className="rounded-[18px] border border-blue-100 bg-white px-5 py-3.5 text-slate-700 shadow-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                    />

                  </div>

                  <div className="grid gap-4 md:grid-cols-2">

                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      className="rounded-[18px] border border-blue-100 bg-white px-5 py-3.5 text-slate-700 shadow-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                    />

                    <select
  name="student_count"
  defaultValue=""
  required
  className="rounded-[18px] border border-blue-100 bg-white px-5 py-3.5 text-slate-700 shadow-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
>
  <option value="" disabled>
    Select Student Count
  </option>
  <option value="Below 500 Students">
    Below 500 Students
  </option>
  <option value="500 - 1000">
    500 - 1000
  </option>
  <option value="1000 - 2000">
    1000 - 2000
  </option>
  <option value="2000+">
    2000+
  </option>
</select>

                  </div>

                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Tell us what ERP modules or custom features you need..."
                    required
                    className="w-full rounded-[20px] border border-blue-100 bg-white px-5 py-4 text-slate-700 shadow-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  />
                  <input
  type="checkbox"
  name="botcheck"
  className="hidden"
  style={{
    display: "none",
  }}
/>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 px-6 py-3.5 text-base font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.22)] transition duration-300 hover:scale-[1.01]"
                  >
                    Request Demo
                  </button>

                </form>

              </div>

            </div>

          </div>

        </section>

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}