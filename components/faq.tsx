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
    question:
      "Can schools manage results digitally?",
    answer:
      "Yes, OptimSkool enables schools to manage student academic results digitally with centralized workflows.",
  },
  {
    question:
      "Can academic performance be tracked?",
    answer:
      "Schools can monitor grades, exam performance and student academic progress in real-time.",
  },
  {
    question:
      "Does OptimSkool support class-wise results?",
    answer:
      "Yes, results can be filtered according to classrooms, exams and academic sessions.",
  },
  {
    question:
      "Can report cards be managed digitally?",
    answer:
      "Yes, schools can generate and manage structured student performance reports digitally.",
  },
  {
    question:
      "Can results be filtered by exams?",
    answer:
      "Yes, OptimSkool allows result filtering through exam selection and classroom management.",
  },
];

export default function FAQ({
  title = "Frequently Asked Questions",
  description = "Learn more about OptimSkool and school ERP workflows.",
  faqs = defaultFaqs,
}: FAQProps) {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            {title}
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            {description}
          </p>
        </div>

        <div className="mt-14 rounded-[32px] border border-slate-200 bg-white p-4 shadow-sm">

          <Accordion
            type="single"
            collapsible
            className="w-full"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-slate-200 px-4"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="pb-6 text-base text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
