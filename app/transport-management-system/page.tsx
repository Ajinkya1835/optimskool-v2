import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Transport Management System",

  description:
    "Manage school buses, routes, stops and transport tracking with OptimSkool Transport Management System.",

  alternates: {
    canonical: "/transport-management-system",
  },
};

const features = [
  {
    title: "Bus Management",
    description:
      "Manage school buses, registration numbers and vehicle capacity from one dashboard.",
  },
  {
    title: "Route & Stop Management",
    description:
      "Create routes, bus stops and optimize student transport efficiently.",
  },
  {
    title: "Student Transport Tracking",
    description:
      "Assign students to buses and manage transport records digitally.",
  },
  {
    title: "Driver Management",
    description:
      "Maintain driver details, contact information and transport assignments.",
  },
  {
    title: "Transport Fee Tracking",
    description:
      "Track transport charges and fee collections efficiently.",
  },
  {
    title: "Bus Capacity Monitoring",
    description:
      "Monitor seating capacity and optimize transport allocation.",
  },
  {
    title: "Pickup & Drop Management",
    description:
      "Manage pickup points, drop locations and student safety workflows.",
  },
  {
    title: "Transport Reports",
    description:
      "Generate transport analytics and downloadable reports instantly.",
  },
];

const workflow = [
  "Add Vehicle",
  "Create Route",
  "Assign Students",
  "Track Transport",
  "Generate Reports",
];

const stats = [
  {
    value: "100%",
    label: "Transport Tracking",
  },
  {
    value: "Instant",
    label: "Route Access",
  },
  {
    value: "Real-time",
    label: "Bus Records",
  },
  {
    value: "24/7",
    label: "Parent Visibility",
  },
];

export default function TransportManagementPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-20 lg:py-28">

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.3fr]">

            <div>

              <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
                Transport Management System
              </span>

              <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-900 lg:text-7xl">
                Smart Transport &
                School Bus
                Management
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Manage school buses, routes,
                stops, student transport allocation
                and driver records through one
                centralized transport management system.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Bus Tracking",
                  "Route Management",
                  "Pickup & Drop Points",
                  "Transport Reports",
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

            <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">

              <img
                src="/images/transport-dashboard.png"
                alt="Transport Dashboard"
                className="w-full rounded-[30px]"
              />

            </div>

          </div>
        </section>

        {/* FEATURES */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">

              <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
                Transport Features
              </span>

              <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
                Everything Needed for
                Smart Transport
                Management
              </h2>

              <p className="mt-5 text-lg text-slate-600">
                OptimSkool simplifies transport tracking,
                route management, student allocation and
                transport reporting through one
                centralized ERP platform.
              </p>

            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-[0_20px_60px_rgba(14,165,233,0.12)]"
                >
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600">
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

            <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
              Transport Workflow
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-900">
              Simple Transport Management Workflow
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Manage buses, students and routes efficiently.
            </p>

            <div className="mt-16 grid gap-8 md:grid-cols-3 lg:grid-cols-5">

              {workflow.map((step, index) => (
                <div
                  key={step}
                  className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-lg font-bold text-white">
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

            <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
              Transport Dashboard
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
              Real-time School Transport &
              Route Tracking
            </h2>

            <p className="mt-5 max-w-3xl text-lg text-slate-600">
              Monitor buses, routes,
              drivers, transport capacity
              and student assignments from
              one centralized dashboard.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <h3 className="text-3xl font-black text-sky-600">
                    {stat.value}
                  </h3>

                  <p className="mt-2 text-slate-600">
                    {stat.label}
                  </p>
                </div>
              ))}

            </div>

            <div className="mt-14 overflow-hidden rounded-[40px] border border-slate-200 bg-white p-4 shadow-[0_40px_120px_rgba(15,23,42,0.12)]">

              <img
                src="/images/transport-dashboard.png"
                alt="Transport Dashboard"
                className="w-full rounded-[30px]"
              />

            </div>

          </div>
        </section>

        <FAQ
          title="Frequently Asked Questions"
          description="Learn more about school transport management workflows."
          faqs={[
            {
              question:
                "Can schools manage buses digitally?",
              answer:
                "Yes, OptimSkool helps schools manage buses, routes and transport operations digitally.",
            },
            {
              question:
                "Can transport routes and stops be managed?",
              answer:
                "Yes, routes and bus stops can be configured and tracked efficiently.",
            },
            {
              question:
                "Can schools assign students to buses?",
              answer:
                "Yes, students can be assigned to buses and routes digitally.",
            },
            {
              question:
                "Can driver information be managed?",
              answer:
                "Yes, schools can manage driver details and transport assignments.",
            },
            {
              question:
                "Does OptimSkool provide transport reports?",
              answer:
                "Yes, schools can generate transport reports and analytics instantly.",
            },
          ]}
        />

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}