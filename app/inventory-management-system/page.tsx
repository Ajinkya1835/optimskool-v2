import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Inventory Management System",
  description:
    "Manage school inventory, stock, uniforms, books and assets with OptimSkool Inventory Management System.",
  alternates: { canonical: "/inventory-management-system" },
};

const features = [
  { title: "Inventory Tracking", description: "Track inventory items, school supplies and stock availability from one centralized system." },
  { title: "Asset Management", description: "Manage school assets, equipment and resource allocation efficiently." },
  { title: "School Supplies", description: "Track uniforms, books, stationery and classroom resources digitally." },
  { title: "Stock Monitoring", description: "Monitor stock levels and avoid shortages with real-time inventory visibility." },
  { title: "Category Management", description: "Organize inventory items into categories and departments for better control." },
  { title: "Vendor Tracking", description: "Maintain supplier information and procurement records efficiently." },
  { title: "Reports & Logs", description: "Generate inventory reports and maintain detailed stock history." },
  { title: "Low Stock Alerts", description: "Identify shortages early and improve inventory planning." },
];
const workflow = ["Add Item", "Categorize Stock", "Track Inventory", "Assign Assets", "Generate Reports"];
const stats = [
  { value: "100%", label: "Inventory Tracking" },
  { value: "Instant", label: "Stock Visibility" },
  { value: "Real-time", label: "Inventory Updates" },
  { value: "24/7", label: "Asset Access" },
];

export default function InventoryManagementPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-50 py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.2fr]">
            <div>
              <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">Inventory Management System</span>
              <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-900 lg:text-7xl">Smart School Inventory & Asset Management</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Manage school inventory, assets, books, uniforms, stationery and stock tracking through one centralized inventory management system.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Inventory Tracking", "Asset Management", "Stock Monitoring", "Inventory Reports"].map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm">{item}</span>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
              <Image src="/images/inventory-dashboard.png" alt="Inventory Management Dashboard" width={1200} height={750} className="w-full rounded-[30px] object-contain" />
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">Inventory Features</span>
              <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">Everything Needed for Smart Inventory Management</h2>
              <p className="mt-5 text-lg text-slate-600">OptimSkool simplifies school inventory tracking, stock management and asset visibility through one centralized ERP platform.</p>
            </div>
            <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.title} className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-[0_20px_60px_rgba(16,185,129,0.12)]">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">Inventory Workflow</span>
            <h2 className="mt-6 text-4xl font-black text-slate-900">Simple Inventory Management Workflow</h2>
            <p className="mt-4 text-lg text-slate-600">Track stock, manage assets and monitor inventory digitally.</p>
            <div className="mt-16 grid gap-8 md:grid-cols-3 lg:grid-cols-5">
              {workflow.map((step, index) => (
                <div key={step} className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-lg font-bold text-white">{index + 1}</div>
                  <h3 className="mt-5 font-semibold text-slate-900">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">Inventory Dashboard</span>
            <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">Real-time Inventory & Asset Tracking</h2>
            <p className="mt-5 max-w-3xl text-lg text-slate-600">Monitor stock, school assets, supplies, uniforms and inventory records from one centralized dashboard.</p>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
                  <h3 className="text-3xl font-black text-emerald-600">{stat.value}</h3>
                  <p className="mt-2 text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-14 overflow-hidden rounded-[40px] border border-slate-200 bg-white p-4 shadow-[0_40px_120px_rgba(15,23,42,0.12)]">
              <Image src="/images/inventory-dashboard.png" alt="Inventory Analytics Dashboard" width={1600} height={900} className="w-full rounded-[30px] object-contain" />
            </div>
          </div>
        </section>

        <FAQ title="Frequently Asked Questions" description="Learn more about inventory and asset management workflows." faqs={[
          { question: "Can schools manage inventory digitally?", answer: "Yes. OptimSkool helps schools manage uniforms, books, stationery, lab items and all inventory digitally." },
          { question: "Can stock levels be tracked?", answer: "Yes. Schools can monitor inventory stock, shortages and item availability in real time." },
          { question: "Does OptimSkool support asset management?", answer: "Yes. Schools can manage assets like lab equipment, buses, furniture and IT devices." },
          { question: "Can inventory reports be generated?", answer: "Yes. Detailed stock reports and inventory logs are available instantly." },
          { question: "Can low stock alerts be monitored?", answer: "Yes. Schools can identify shortages and improve procurement planning efficiently." },
        ]} />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}