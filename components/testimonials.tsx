const testimonials = [
  {
    name: "School Principal",
    role: "Educational Institution",
    text: "Placeholder testimonial for future client feedback.",
  },
  {
    name: "Administrator",
    role: "School Management",
    text: "Placeholder testimonial for future client feedback.",
  },
  {
    name: "Academic Coordinator",
    role: "Educational Institution",
    text: "Placeholder testimonial for future client feedback.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
            Testimonials
          </div>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            What Schools Say About OptimSkool
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-[32px] border border-slate-200 bg-slate-50 p-8"
            >
              <p className="text-slate-600">
                "{item.text}"
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-slate-900">
                  {item.name}
                </h4>

                <p className="text-sm text-slate-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}