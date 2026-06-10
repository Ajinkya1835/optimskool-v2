import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Student Management System",
  description:
    "Manage student records, admissions, parent details and classroom assignments with OptimSkool Student Management System.",
  alternates: {
    canonical: "/student-management-system",
  },
};

const features = [
  {
    title: "Student Records",
    description:
      "Maintain centralized student information with complete academic and personal records.",
  },
  {
    title: "Admission Tracking",
    description:
      "Track admissions digitally with unique admission numbers and records.",
  },
  {
    title: "Parent Management",
    description:
      "Manage parent contact information and communication efficiently.",
  },
  {
    title: "Classroom Assignment",
    description:
      "Assign and organize students according to classrooms and sections.",
  },
  {
    title: "Search & Filters",
    description:
      "Quickly search students using names, admission numbers and classrooms.",
  },
  {
    title: "Gender & Category Tracking",
    description:
      "Organize students with structured demographic management.",
  },
  {
    title: "Hostel & Bus Management",
    description:
      "Track hostel and transport student information efficiently.",
  },
  {
    title: "Student Status Management",
    description:
      "Monitor active students, transfers and academic status updates.",
  },
];

const workflow = [
  "Add Student",
  "Assign Classroom",
  "Manage Records",
  "Track Progress",
  "Generate Reports",
];

const stats = [
  {
    value: "100%",
    label: "Digital Records",
  },
  {
    value: "Instant",
    label: "Student Search",
  },
  {
    value: "Real-time",
    label: "Database Updates",
  },
  {
    value: "24/7",
    label: "Student Access",
  },
];

export default function StudentManagementPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1fr_1.1fr]">

            <div>
              <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                Student Management System
              </span>

              <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-900 lg:text-7xl">
                Smart Student
                Management for
                Schools
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Manage student records, admissions, classroom assignments,
                parent details and academic tracking from one centralized
                student management system.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 max-sm:gap-2">
                {[
                  "Student Records",
                  "Admission Tracking",
                  "Parent Management",
                  "Classroom Assignment",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)] lg:scale-110">
              <img
                src="/images/student-dashboard.png"
                alt="Student Management Dashboard"
                className="h-full w-full rounded-[28px] object-cover"
              />
            </div>

          </div>
        </section>

        {/* FEATURES */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">
              <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                Student Features
              </span>

              <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
                Everything Needed for Smart
                Student Management
              </h2>

              <p className="mt-5 text-lg text-slate-600">
                OptimSkool simplifies student database management,
                admissions, classroom assignments and parent
                information through one centralized ERP system.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-[0_20px_60px_rgba(8,145,178,0.10)]"
                >
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-600">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* WORKFLOW */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">

            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              Student Workflow
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-900">
              Simple Student Management Workflow
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Add students, assign classrooms and manage academic records digitally.
            </p>

            <div className="mt-16 grid gap-8 md:grid-cols-3 lg:grid-cols-5">
              {workflow.map((step, index) => (
                <div
                  key={step}
                  className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan-600 text-lg font-bold text-white">
                    {index + 1}
                  </div>

                  <h3 className="mt-5 font-semibold text-slate-900">
                    {step}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* DASHBOARD */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              Student Dashboard
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
              Real-time Student Database &
              Record Management
            </h2>

            <p className="mt-5 max-w-3xl text-lg text-slate-600">
              Monitor admissions, student records, parent information
              and academic details from one centralized student dashboard.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <h3 className="text-3xl font-black text-cyan-600">
                    {stat.value}
                  </h3>

                  <p className="mt-2 text-slate-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 overflow-hidden rounded-[40px] border border-slate-200 bg-slate-50 p-6 shadow-[0_40px_120px_rgba(15,23,42,0.12)]">
              <img
                src="/images/student-dashboard.png"
                alt="Student Dashboard"
                className="w-full rounded-[28px] object-cover"
              />
            </div>

          </div>
        </section>

        <FAQ
          title="Frequently Asked Questions"
          description="Learn more about OptimSkool student management workflows."
          faqs={[
            {
              question:
                "Can schools manage student records digitally?",
              answer:
                "Yes, OptimSkool centralizes student records, admissions and academic information digitally.",
            },
            {
              question:
                "Can parent information be managed?",
              answer:
                "Yes, schools can manage parent contact information and communication through one platform.",
            },
            {
              question:
                "Does OptimSkool support classroom management?",
              answer:
                "Yes, students can be organized according to classrooms and sections.",
            },
            {
              question:
                "Can schools search student records instantly?",
              answer:
                "Yes, student records can be searched instantly using admission number, classroom or student name.",
            },
            {
              question:
                "Can transport and hostel students be managed?",
              answer:
                "Yes, OptimSkool supports hostel and transport-related student management.",
            },
          ]}
        />

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}