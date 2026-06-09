import FinalCTA from "./final-cta";

type Props = {
  badge: string;
  title: string;
  description: string;
  features: string[];
  problemTitle: string;
  problemDescription: string;
};

export default function FeaturePage({
  badge,
  title,
  description,
  features,
  problemTitle,
  problemDescription,
}: Props) {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-100 blur-[140px] opacity-50" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>
              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                {badge}
              </span>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 lg:text-6xl">
                {title}
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                {description}
              </p>

              <div className="mt-8 flex gap-4">
                <button className="rounded-2xl bg-blue-600 px-7 py-4 font-medium text-white hover:bg-blue-700">
                  Request Demo
                </button>

                <button className="rounded-2xl border border-slate-300 px-7 py-4 font-medium">
                  Watch Product Tour
                </button>
              </div>
            </div>

            {/* Screenshot Placeholder */}
            <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white p-5 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
              <div className="aspect-video rounded-[28px] border-2 border-dashed border-slate-300 bg-slate-100 flex items-center justify-center text-center">
                Product Screenshot Placeholder
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-slate-900">
              Why Schools Struggle
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Manual systems slow down school operations and create errors.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Manual tracking",
              "Paperwork overload",
              "Missed records",
              "Administrative delays",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[28px] bg-white p-8 shadow-sm border border-slate-200"
              >
                <h3 className="font-semibold text-slate-900">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                Features
              </span>

              <h2 className="mt-6 text-4xl font-bold text-slate-900">
                Smarter School Operations
              </h2>

              <p className="mt-5 text-lg text-slate-600">
                {problemDescription}
              </p>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                Key Features
              </h3>

              <ul className="mt-6 space-y-5">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            How OptimSkool Works
          </h2>

          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {[
              "Student Data",
              "Manage Module",
              "Generate Reports",
              "School Operations Simplified",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-[28px] bg-white p-8 border border-slate-200 shadow-sm"
              >
                <div className="text-sm font-semibold text-blue-600">
                  Step {index + 1}
                </div>

                <h3 className="mt-4 font-semibold text-slate-900">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}