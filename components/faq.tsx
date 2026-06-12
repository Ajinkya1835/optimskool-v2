"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  title?: string;
  description?: string;
  faqs?: FAQItem[];
};

const defaultFaqs: FAQItem[] = [
  {
    question: "What is school ERP software?",
    answer:
      "School ERP software helps schools manage attendance, fees, examinations, payroll, academics and communication through one centralized platform.",
  },
  {
    question: "Can OptimSkool manage attendance and fees?",
    answer:
      "Yes, OptimSkool centralizes attendance tracking, fee collection, reporting and administration workflows.",
  },
  {
    question: "Does OptimSkool support schools in India?",
    answer:
      "Yes, OptimSkool is built specifically for Indian schools, institutions and educational organizations.",
  },
  {
    question: "Can schools manage examinations digitally?",
    answer:
      "Yes, schools can manage exams, marks, grading systems and report cards digitally through OptimSkool.",
  },
];

export default function FAQ({
  title = "Frequently Asked Questions",
  description = "Everything schools usually ask before switching to OptimSkool ERP.",
  faqs = defaultFaqs,
}: FAQProps) {
  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-28">
        {/* Grid */}
        <div className="absolute inset-0 bg-grid opacity-40" />

        {/* Glow */}
        <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-blue-200/30 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl px-6">
          {/* Header */}
          <div className="text-center">
            <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
              FAQ
            </div>

            <h2 className="mt-8 text-5xl font-black tracking-[-0.04em] text-slate-900 lg:text-6xl">
              {title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-500">
              {description}
            </p>
          </div>

          {/* FAQ Box */}
          <div className="mt-16 rounded-[40px] border border-blue-100 bg-white p-4 shadow-[0_25px_80px_rgba(37,99,235,0.08)] backdrop-blur-3xl">
            <Accordion
              type="single"
              collapsible
              className="w-full border-0"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${index}`}
                  className="border-b border-slate-100 last:border-b-0"
                >
                  <AccordionTrigger className="px-6 py-5 text-left text-lg font-bold text-slate-900 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent className="px-6 pb-6 text-base leading-8 text-slate-500">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}