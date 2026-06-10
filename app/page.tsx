import Hero from "@/components/hero";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";

const modules = [
  {
    title: "Fee Management",
    href: "/fee-management-system",
  },
  {
    title: "Attendance Analytics",
    href: "/attendance-management-system",
  },
  {
    title: "Admissions",
    href: "/school-erp-software",
  },
  {
    title: "Examinations",
    href: "/exam-management-system",
  },
  {
    title: "Certificates",
    href: "/school-erp-software",
  },
  {
    title: "Reports & Analytics",
    href: "/school-erp-software",
  },
  {
    title: "Payroll & Payslips",
    href: "/school-erp-software",
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
    title: "Leave Management",
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

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* HERO */}
        <Hero />

        {/* Problems Section */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">
              <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-700">
                Challenges Schools Face
              </span>

              <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
                School Management
                Shouldn’t Be Complicated
              </h2>

              <p className="mt-5 text-lg text-slate-600">
                Schools often struggle
                with attendance tracking,
                fee collection,
                examinations and
                centralized student
                records.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {[
                "Manual Attendance Tracking",
                "Fee Collection Complexity",
                "Examination Management",
                "Student Record Handling",
                "Payroll & Salary Tracking",
                "Paper-based Administration",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="font-semibold text-slate-900">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ERP Showcase */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">
              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                Centralized Platform
              </span>

              <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
                One Platform for
                Complete School
                Management
              </h2>

              <p className="mt-5 text-lg text-slate-600">
                OptimSkool centralizes
                attendance, fees,
                examinations, payroll,
                inventory and student
                management into one ERP.
              </p>
            </div>

            <div className="mt-14 overflow-hidden rounded-[40px] border border-slate-200 bg-white p-5 shadow-[0_40px_120px_rgba(15,23,42,0.12)]">

              <img
                src="/images/analytics-preview.png"
                alt="OptimSkool Analytics"
                className="rounded-[30px] w-full"
              />
            </div>
          </div>
        </section>

        {/* Modules */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">
              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                ERP Modules
              </span>

              <h2 className="mt-6 text-4xl font-bold text-slate-900">
                Everything Your
                Institution Needs,
                All in One Place
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {modules.map((module) => (
                <Link
                  key={module.title}
                  href={module.href}
                  className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <h3 className="font-semibold text-slate-900 transition group-hover:text-blue-600">
                    {module.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why OptimSkool */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">
              <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                Why OptimSkool
              </span>

              <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
                Why Schools Choose
                OptimSkool
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {[
                "Centralized ERP Platform",
                "Real-time Reports",
                "Attendance Analytics",
                "Fee Management",
                "Payroll Management",
                "Paperless Operations",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 text-center transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="font-semibold text-slate-900">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Showcase */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">
              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                Dashboard Analytics
              </span>

              <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
                Real-time School
                Analytics &
                Operations Dashboard
              </h2>
            </div>

            <div className="mt-14 overflow-hidden rounded-[40px] border border-slate-200 bg-white p-5 shadow-[0_40px_120px_rgba(15,23,42,0.12)]">

              <img
                src="/images/dashboard-preview.png"
                alt="OptimSkool Dashboard"
                className="rounded-[30px] w-full"
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