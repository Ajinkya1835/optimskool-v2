import {
  CalendarCheck,
  CreditCard,
  GraduationCap,
  FileText,
  Wallet,
  Clock3,
  BarChart3,
  Settings,
} from "lucide-react";

const modules = [
  {
    title: "Attendance Management",
    icon: CalendarCheck,
  },
  {
    title: "Fee Management",
    icon: CreditCard,
  },
  {
    title: "Exams & Results",
    icon: GraduationCap,
  },
  {
    title: "Student Information",
    icon: FileText,
  },
  {
    title: "Payroll Management",
    icon: Wallet,
  },
  {
    title: "Timetable Management",
    icon: Clock3,
  },
  {
    title: "Analytics & Reports",
    icon: BarChart3,
  },
  {
    title: "Administration",
    icon: Settings,
  },
];

export default function ModulesGrid() {
  return (
    <section
      id="features"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Complete ERP Modules
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
            Everything Your School Needs
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Manage every part of your institution — from attendance to payroll —
            inside one centralized ERP system.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {modules.map((module) => {
            const Icon = module.icon;

            return (
              <div
                key={module.title}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-200 hover:bg-white hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-600">
                  <Icon className="h-7 w-7 text-blue-600 transition group-hover:text-white" />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  {module.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Streamline school operations efficiently.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
