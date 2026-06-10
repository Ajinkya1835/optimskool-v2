import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FinalCTA from "@/components/final-cta";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore all OptimSkool ERP features and modules.",
};

const features = [
  {
    title: "Admission Management",
    href: "/admission-management",
  },
  {
    title: "Attendance Analytics",
    href: "/attendance-management-system",
  },
  {
    title: "Fee Management",
    href: "/fee-management-system",
  },
  {
    title: "Exam Management",
    href: "/exam-management-system",
  },
  {
    title: "Result Management",
    href: "/result-management-system",
  },
  {
    title: "Student Management",
    href: "/student-management-system",
  },
  {
    title: "Reports & Analytics",
    href: "/reports-analytics",
  },
  {
    title: "Payroll Management",
    href: "/payroll-management",
  },
  {
    title: "Inventory",
    href: "/school-erp-software",
  },
  {
    title: "Broadcast",
    href: "/school-erp-software",
  },
  {
    title: "Class Management",
    href: "/school-erp-software",
  },
  {
    title: "Curriculum",
    href: "/school-erp-software",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-3xl">

            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              OptimSkool Features
            </span>

            <h1 className="mt-6 text-5xl font-bold text-slate-900">
              Everything Your
              Institution Needs
            </h1>

            <p className="mt-6 text-lg text-slate-600">
              Explore every module
              available in OptimSkool
              ERP for school management.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {features.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-semibold text-slate-900">
                  {item.title}
                </h3>
              </Link>
            ))}

          </div>
        </div>

        <div className="mt-24">
            {/* Custom Features */}
<section className="mt-24 rounded-[40px] border border-slate-200 bg-slate-50 p-12">

  <div className="max-w-4xl">

    <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
      Custom Features
    </span>

    <h2 className="mt-6 text-4xl font-bold text-slate-900">
      Need Custom Features?
      We Build According
      to Your Requirements
    </h2>

    <p className="mt-6 text-lg text-slate-600">
      Every institution has unique
      workflows. OptimSkool offers
      feature customization,
      integrations and module
      enhancements based on
      institutional requirements.
    </p>

    <div className="mt-10 grid gap-4 md:grid-cols-2">

      {[
        "Custom ERP Modules",
        "Institution-specific Features",
        "Custom Reports & Analytics",
        "Role-based Permissions",
        "Workflow Automation",
        "Third-party Integrations",
      ].map((item) => (
        <div
          key={item}
          className="rounded-2xl border border-slate-200 bg-white p-5"
        >
          <h3 className="font-semibold text-slate-900">
            {item}
          </h3>
        </div>
      ))}
    </div>

    <div className="mt-10 rounded-3xl bg-blue-600 p-8 text-white">

      <h3 className="text-2xl font-bold">
        Pricing Based on
        Institution Requirements
      </h3>

      <p className="mt-3 text-blue-100">
        Pricing varies depending on
        modules, student strength,
        integrations and custom
        development requirements.
      </p>

    </div>
  </div>
</section>
          <FinalCTA />
        </div>

      </main>

      <Footer />
    </>
  );
}