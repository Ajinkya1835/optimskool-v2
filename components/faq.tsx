"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question:
      "What is OptimSkool?",
    answer:
      "OptimSkool is a school ERP platform designed to help schools manage attendance, fee records, examinations, student information and administration through one centralized system.",
  },

  {
    question:
      "Can attendance be managed digitally?",
    answer:
      "Yes. OptimSkool includes attendance management capabilities for maintaining attendance records digitally.",
  },

  {
    question:
      "Does OptimSkool support fee management?",
    answer:
      "Yes. Schools can manage fee structures, fee records and related workflows digitally.",
  },

  {
    question:
      "Can schools manage examinations and results?",
    answer:
      "Yes. OptimSkool includes examination and result management related workflows.",
  },

  {
    question:
      "Can student records be managed centrally?",
    answer:
      "Yes. OptimSkool helps schools manage student information through one centralized platform.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Learn more about OptimSkool
            and school ERP workflows.
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