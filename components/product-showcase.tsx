import Image from "next/image";

const showcases = [
  {
    title: "Attendance Management",
    description:
      "Digitally track daily attendance, monitor absentee trends and generate reports instantly.",
    image: "/attendance-dashboard.png",
  },
  {
    title: "Fee Management",
    description:
      "Track payments, manage pending dues and streamline school finance operations.",
    image: "/fee-management.png",
  },
  {
    title: "Exams & Result Management",
    description:
      "Schedule exams, manage marks and generate report cards efficiently.",
    image: "/exam-results.png",
  },
  {
    title: "Payroll & Administration",
    description:
      "Simplify payroll processing, staff records and administrative operations.",
    image: "/payroll-dashboard.png",
  },
];

export default function ProductShowcase() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Real ERP Features
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
            Built to Simplify School Operations
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            From attendance and fee management to exams and payroll —
            OptimSkool centralizes everything into one platform.
          </p>
        </div>

        <div className="mt-20 space-y-28">
          {showcases.map((item, index) => (
            <div
              key={item.title}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-slate-600">
                  {item.description}
                </p>
              </div>

              <div className="rounded-[32px] border border-slate-200 bg-white p-5 shadow-xl">
                <div className="aspect-video overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={700}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}