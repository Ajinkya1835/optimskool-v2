type Props = {
  title: string;
  description: string;
  badge?: string;
};

export default function PageHero({
  title,
  description,
  badge = "OptimSkool ERP",
}: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white pt-44 pb-28">

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Premium Glows */}
      <div className="absolute left-1/2 -top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-200/35 blur-[140px]" />
      <div className="absolute right-0 top-20 h-[350px] w-[400px] rounded-full bg-cyan-200/25 blur-[120px]" />
      <div className="absolute left-0 top-52 h-[280px] w-[300px] rounded-full bg-teal-200/20 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        {/* Badge */}
        <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
          {badge}
        </div>

        {/* Heading */}
        <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-black tracking-[-0.04em] text-slate-900 lg:text-7xl lg:leading-[0.95]">
          {title}
        </h1>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-500 lg:text-xl">
          {description}
        </p>

        {/* Small Trust Row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-500">
          <span>✓ Smart Automation</span>
          <span>✓ Real-Time Reports</span>
          <span>✓ Secure Cloud ERP</span>
        </div>

      </div>
    </section>
  );
}