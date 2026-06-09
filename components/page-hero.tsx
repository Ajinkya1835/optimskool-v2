type Props = {
  title: string;
  description: string;
};

export default function PageHero({
  title,
  description,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-100 blur-[120px] opacity-50" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 lg:text-6xl">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          {description}
        </p>
      </div>
    </section>
  );
}