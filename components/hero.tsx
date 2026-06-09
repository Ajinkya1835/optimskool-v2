import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">
        
        <div>
          <div className="mb-6 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Built for Indian Schools & Educational Institutions
          </div>

          <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-slate-900 lg:text-6xl">
            Complete School ERP Software for Smarter School Management
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Manage attendance, fees, exams, report cards, payroll and school administration — all in one platform.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="rounded-xl bg-blue-600 px-8 py-6 text-base hover:bg-blue-700">
              Request Demo
            </Button>

            <Button
              variant="outline"
              className="rounded-xl px-8 py-6 text-base"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Product Tour
            </Button>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Attendance • Fees • Exams • Payroll • Student Management
          </p>
        </div>

        <div className="relative">
          <div className="rounded-[30px] border border-slate-200 bg-white p-4 shadow-2xl">
            <div className="aspect-video rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400">
              ERP Dashboard Screenshot Here
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}