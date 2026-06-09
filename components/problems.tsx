
import {
  ClipboardList,
  IndianRupee,
  FileSpreadsheet,
  Users,
} from "lucide-react";

const problems = [
  {
    title: "Manual Attendance Tracking",
    desc: "Paper registers and spreadsheets waste valuable staff time.",
    icon: ClipboardList,
  },
  {
    title: "Fee Collection Delays",
    desc: "Late payments and manual reminders slow operations.",
    icon: IndianRupee,
  },
  {
    title: "Payroll Complexity",
    desc: "Managing salaries manually becomes time-consuming.",
    icon: FileSpreadsheet,
  },
  {
    title: "Scattered Student Records",
    desc: "Student information spread across multiple systems.",
    icon: Users,
  },
];

export default function Problems() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-600">
            Common School Challenges
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
            Still Managing School Operations Manually?
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Schools lose time, accuracy and efficiency with outdated processes.
            OptimSkool centralizes everything in one platform.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => {
            const Icon = problem.icon;

            return (
              <div
                key={problem.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  {problem.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {problem.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}