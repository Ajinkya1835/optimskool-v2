import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

type Section = {
  title: string;
  paragraphs: string[];
};

type LegalPageProps = {
  title: string;
  intro: string;
  sections: Section[];
};

export default function LegalPage({
  title,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white pt-44 pb-24">

          {/* Grid */}
          <div className="absolute inset-0 bg-grid opacity-40" />

          {/* Glow */}
          <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-200/35 blur-[140px]" />

          <div className="relative mx-auto max-w-5xl px-6 text-center">

            <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
              OptimSkool Legal
            </div>

            <h1 className="mt-8 text-5xl font-black tracking-[-0.04em] text-slate-900 lg:text-7xl lg:leading-[0.95]">
              {title}
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-500 lg:text-xl">
              {intro}
            </p>

            <div className="mt-8 inline-flex rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-500 shadow-sm">
              Last Updated: June 11, 2026
            </div>

          </div>
        </section>

        {/* CONTENT */}
        <section className="relative overflow-hidden bg-white py-24">

          <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-cyan-100/40 blur-[100px]" />

          <div className="relative mx-auto max-w-5xl px-6">

            <div className="rounded-[42px] border border-blue-100 bg-white p-8 shadow-[0_25px_80px_rgba(37,99,235,0.08)] lg:p-12">

              <div className="space-y-12">

                {sections.map((section, index) => (
                  <div
                    key={section.title}
                    className={`${
                      index !== sections.length - 1
                        ? "border-b border-slate-100 pb-12"
                        : ""
                    }`}
                  >

                    {/* Section heading */}
                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-gradient-to-br from-blue-100 to-cyan-100 text-lg font-bold text-blue-700">
                        {index + 1}
                      </div>

                      <h2 className="text-2xl font-black text-slate-900 lg:text-3xl">
                        {section.title}
                      </h2>

                    </div>

                    {/* Paragraphs */}
                    <div className="mt-6 space-y-5">

                      {section.paragraphs.map(
                        (paragraph) => (
                          <p
                            key={paragraph}
                            className="text-base leading-8 text-slate-500 lg:text-lg"
                          >
                            {paragraph}
                          </p>
                        )
                      )}

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}