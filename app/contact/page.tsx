import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-50 py-24">

        <div className="mx-auto max-w-3xl px-6">

          <div className="text-center">
            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              Contact
            </span>

            <h1 className="mt-6 text-5xl font-bold text-slate-900">
              Request a Demo
            </h1>

            <p className="mt-5 text-lg text-slate-600">
              Submit your details and we
              will get in touch with you.
            </p>
          </div>

          <div className="mt-14 rounded-[40px] border border-slate-200 bg-white p-10 shadow-sm">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4"
              />

              <input
                type="text"
                placeholder="School Name"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4"
              />

              <textarea
                rows={5}
                placeholder="Message"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4"
              />

              <button
                className="w-full rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white hover:bg-blue-700"
              >
                Submit Request
              </button>

            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}