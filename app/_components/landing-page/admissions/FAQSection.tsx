"use client";

import {useState} from "react";
import {Icon} from "@iconify/react";
import {faqs} from "@/app/_constants";
import Container from "../../Container";

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  function handleToggle(id: number) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <section className="py-16">
      <Container>
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>

        <div className="flex flex-col gap-4">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

type FAQItemProps = {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: (id: number) => void;
};

function FAQItem({id, question, answer, isOpen, onToggle}: FAQItemProps) {
  return (
    <div className="border border-gray-200 rounded-xl bg-white overflow-hidden transition-all">
      <button
        onClick={() => onToggle(id)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <h3 className="font-semibold text-lg">{question}</h3>

        <Icon
          icon="mdi:chevron-down"
          className={`text-2xl transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  );
}
