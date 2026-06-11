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
      <main className="bg-white">
        <section className="border-b border-slate-200 bg-slate-50 py-20">
          <div className="mx-auto max-w-4xl px-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              OptimSkool Legal
            </p>
            <h1 className="mt-4 text-4xl font-black text-slate-900 sm:text-5xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">{intro}</p>
            <p className="mt-4 text-sm text-slate-500">
              Last updated: June 11, 2026
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-4xl space-y-12 px-6">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-bold text-slate-900">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-slate-600">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
