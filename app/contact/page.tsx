import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FinalCTA from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Contact OptimSkool",

  description:
    "Book a demo, request pricing or discuss custom ERP requirements with OptimSkool.",

  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24 lg:py-32">

          <div className="mx-auto max-w-7xl px-6 text-center">

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              Contact OptimSkool
            </span>

            <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-black tracking-tight text-slate-900 lg:text-7xl">
              Request a Demo
              <br />
              or Talk to Our Team
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
              Want to digitize your school?
              Need pricing details or
              custom ERP features?
              Let’s discuss your requirements.
            </p>

          </div>

        </section>

        {/* CONTACT SECTION */}
        <section className="bg-white py-24">

          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">

            {/* LEFT */}
            <div>

              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                Get in Touch
              </span>

              <h2 className="mt-6 text-4xl font-black text-slate-900">
                Let's Build a Better
                School ERP Together
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Whether you need attendance,
                fees, payroll, transport or
                completely custom ERP modules,
                our team can help your institution.
              </p>

              <div className="mt-10 space-y-6">

                <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-bold text-slate-900">
                    Email
                  </h3>

                  <p className="mt-2 text-slate-600">
                    sales@metagrad.in
                  </p>
                </div>

                <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-bold text-slate-900">
                    Phone
                  </h3>

                  <p className="mt-2 text-slate-600">
                    +91 8102775670
                  </p>
                </div>

                <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-bold text-slate-900">
                    Services
                  </h3>

                  <p className="mt-2 text-slate-600">
                    School ERP • Attendance • Fees • Payroll • Exams • Results • Custom Development
                  </p>
                </div>

              </div>

            </div>

            {/* FORM */}
            <div className="rounded-[40px] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">

              <h3 className="text-2xl font-black text-slate-900">
                Request Demo
              </h3>

              <p className="mt-2 text-slate-600">
                Fill the details and our team will contact you.
              </p>

              <form className="mt-8 space-y-5">

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    School / Institution Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter school name"
                    className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-500"
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Contact Person
                    </label>

                    <input
                      type="text"
                      placeholder="Full name"
                      className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Phone Number
                    </label>

                    <input
                      type="text"
                      placeholder="+91"
                      className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-500"
                    />
                  </div>

                </div>

                <div className="grid gap-5 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Student Strength
                    </label>

                    <select className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-500">
                      <option>Below 500</option>
                      <option>500 - 1000</option>
                      <option>1000 - 2000</option>
                      <option>2000+</option>
                    </select>
                  </div>

                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Requirements
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Tell us what ERP modules or custom features you need..."
                    className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-blue-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
                >
                  Request Demo
                </button>

              </form>

            </div>

          </div>

        </section>

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}