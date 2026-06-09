import Hero from "@/components/hero";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";

const modules = [
  {
    title: "Attendance Management",
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
    title: "Administration",
    href: "/school-erp-software",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        <Hero />

{/* ERP Showcase */}
<section className="py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="max-w-3xl">
      <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
        Centralized Platform
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
        One Platform for Complete
        School Management
      </h2>

      <p className="mt-5 text-lg text-slate-600">
        OptimSkool centralizes
        attendance, fee collection,
        examinations, hall tickets,
        results and student records
        into one ERP platform.
      </p>
    </div>

    <div className="mt-14 overflow-hidden rounded-[40px] border border-slate-200 bg-white p-5 shadow-[0_40px_120px_rgba(15,23,42,0.12)]">

      <div className="mb-4 flex gap-2">
        <div className="h-3 w-3 rounded-full bg-red-300" />
        <div className="h-3 w-3 rounded-full bg-yellow-300" />
        <div className="h-3 w-3 rounded-full bg-green-300" />
      </div>

      <div className="aspect-video rounded-[30px] border-2 border-dashed border-slate-300 bg-slate-100 flex items-center justify-center text-center text-slate-500">
        ERP Dashboard Screenshot
        (Add Later)
      </div>
    </div>
  </div>
</section>

{/* Modules */}
<section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">
              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                Modules
              </span>

              <h2 className="mt-6 text-4xl font-bold text-slate-900">
                Explore OptimSkool Modules
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {modules.map((module) => (
                <Link
                  key={module.title}
                  href={module.href}
                  className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <h3 className="font-semibold text-slate-900 transition group-hover:text-blue-600">
                    {module.title}
                  </h3>
                </Link>
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