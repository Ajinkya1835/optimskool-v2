import Link from "next/link";
import Image from "next/image";

import FAQ from "./faq";
import FinalCTA from "./final-cta";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  badge: string;
  title: string;
  description: string;

  image: string;
  imageAlt: string;

  features: string[];

  seoTitle: string;
  seoDescription: string;

  problemTitle: string;
  problemDescription: string;

  faqs?: FAQItem[];
};

export default function FeaturePage({
  badge,
  title,
  description,
  image,
  imageAlt,
  features,
  seoTitle,
  seoDescription,
  problemTitle,
  problemDescription,
  faqs = [],
}: Props) {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white pt-44 pb-28">
        <div className="absolute inset-0 bg-grid opacity-40" />

        <div className="absolute left-1/2 -top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-200/35 blur-[120px]" />

        <div className="absolute right-0 top-40 h-[350px] w-[400px] rounded-full bg-cyan-200/25 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-5xl">
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
              {badge}
            </span>

            <h1 className="mt-8 text-5xl font-black leading-[0.95] tracking-[-0.04em] text-slate-900 lg:text-7xl">
              {title}
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-500 lg:text-xl">
              {description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-[0_8px_30px_rgba(37,99,235,0.35)] transition hover:brightness-105"
              >
                Request Demo
              </Link>

              <Link
                href="/pricing"
                className="rounded-full border border-blue-200 bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-sm transition hover:bg-blue-50"
              >
                View Pricing
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              {features.map(
                (feature) => (
                  <div
                    key={feature}
                    className="rounded-full border border-blue-100 bg-white px-5 py-3 text-sm font-medium text-slate-600 shadow-sm"
                  >
                    ✓ {feature}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Dashboard */}
          <div className="relative mt-20">
            <div className="relative overflow-hidden rounded-[42px] border border-blue-100 bg-white p-3 shadow-[0_40px_120px_rgba(37,99,235,0.15)]">
              <Image
                src={image}
                alt={imageAlt}
                width={1400}
                height={900}
                className="w-full rounded-[28px]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-slate-50 py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
            School Challenges
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">
            {problemTitle}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">
            {problemDescription}
          </p>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-5xl font-black text-slate-900">
            {seoTitle}
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-500">
            {seoDescription}
          </p>
        </div>
      </section>

      <FAQ
        title={`${title} FAQs`}
        description={`Frequently asked questions about ${title.toLowerCase()}.`}
        faqs={faqs}
      />

      <FinalCTA />
    </main>
  );
}