import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Fee Management System",
  description:
    "Streamline fee collection, invoices, discounts, due management and financial reporting with OptimSkool Fee Management.",
};

const features = [
  {
    icon: "💳",
    title: "Fee Collection",
    desc:
      "Collect student fees digitally with centralized fee tracking and payment history.",
  },
  {
    icon: "🏫",
    title: "Fee Structures",
    desc:
      "Create class-wise and grade-wise fee structures with complete flexibility.",
  },
  {
    icon: "🎓",
    title: "Admission Fees",
    desc:
      "Manage admission fees, registration charges and onboarding payments.",
  },
  {
    icon: "🚌",
    title: "Transport & Hostel Fees",
    desc:
      "Track transport, hostel and additional service charges separately.",
  },
  {
    icon: "🏷️",
    title: "Discount Management",
    desc:
      "Apply fee discounts and custom templates based on school requirements.",
  },
  {
    icon: "📄",
    title: "Invoice & Receipt Generation",
    desc:
      "Generate payment receipts instantly with export and print support.",
  },
  {
    icon: "⏳",
    title: "Previous Due Collection",
    desc:
      "Track unpaid fees and previous academic session dues efficiently.",
  },
  {
    icon: "📊",
    title: "Financial Reports",
    desc:
      "Generate detailed reports for fee collection, dues and classroom billing.",
  },
];

const stats = [
  {
    number: "100%",
    label: "Transparent Billing",
  },
  {
    number: "Instant",
    label: "Receipt Generation",
  },
  {
    number: "Real-time",
    label: "Payment Tracking",
  },
  {
    number: "24/7",
    label: "Financial Monitoring",
  },
];

const workflow = [
  {
    title: "Create Structure",
    desc: "Set grade-wise fee structures",
  },
  {
    title: "Collect Fees",
    desc: "Track payments digitally",
  },
  {
    title: "Generate Receipt",
    desc: "Instant invoice generation",
  },
  {
    title: "Financial Reports",
    desc: "View fee analytics",
  },
];

export default function FeeManagementPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-slate-100 py-24">

          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-emerald-200/30 blur-[120px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.85fr_1.45fr]">

            {/* LEFT */}
            <div>

              <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                Fee Management System
              </span>

              <h1 className="mt-7 text-5xl font-bold tracking-tight text-slate-950 lg:text-7xl">
                Smart Fees,
                Billing &
                Financial
                Accounting
              </h1>

              <p className="mt-7 text-lg leading-8 text-slate-600">
                Streamline fee collection,
                automate billing, manage
                admission fees, discounts,
                transport and hostel charges
                while maintaining complete
                financial transparency through
                one centralized fee management
                system.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">

                {[
                  "Fee Collection",
                  "Discount Management",
                  "Invoice Generation",
                  "Financial Reports",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

            {/* HERO IMAGE */}
            <div className="overflow-hidden rounded-[44px] border border-slate-200 bg-white p-2 shadow-[0_40px_120px_rgba(15,23,42,0.12)]">

              <img
                src="/images/fee-collection-dashboard.png"
                alt="Fee Management Dashboard"
                className="w-full rounded-[42px]"
              />
            </div>

          </div>
        </section>

        {/* FEATURES */}
        <section className="bg-slate-50 py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">

              <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                Fee Features
              </span>

              <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-950">
                Everything Needed
                for Smart Fee
                Management
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                OptimSkool simplifies
                fee collection,
                discounts, receipts,
                financial accounting
                and reporting through
                one centralized ERP system.
              </p>

            </div>

            <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-4">

              {features.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="text-3xl">
                    {item.icon}
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* WORKFLOW */}
        <section className="bg-white py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">

              <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                Fee Workflow
              </span>

              <h2 className="mt-6 text-5xl font-bold text-slate-950">
                Simple Financial
                Management Workflow
              </h2>

              <p className="mt-5 text-lg text-slate-600">
                Manage fee structures,
                collect payments,
                generate invoices and
                financial reports through
                one centralized system.
              </p>

            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-4">

              {workflow.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white">
                    {index + 1}
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {step.desc}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* REPORTING */}
        <section className="bg-slate-50 py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">

              <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                Financial Reports
              </span>

              <h2 className="mt-6 text-5xl font-bold text-slate-950">
                Transparent Fee
                Reporting &
                Financial Tracking
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Access student fee
                reports, previous dues,
                classroom fee reports,
                payment history and
                downloadable receipts
                with full transparency.
              </p>

            </div>

            {/* STATS */}
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <h3 className="text-4xl font-bold text-emerald-600">
                    {item.number}
                  </h3>

                  <p className="mt-3 text-slate-600">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* REPORT IMAGE */}
            <div className="mt-14 overflow-hidden rounded-[44px] border border-slate-200 bg-white p-5 shadow-[0_40px_120px_rgba(15,23,42,0.12)]">

              <img
                src="/images/fee-report-dashboard.png"
                alt="Fee Reports"
                className="w-full rounded-[32px] object-cover"
              />
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