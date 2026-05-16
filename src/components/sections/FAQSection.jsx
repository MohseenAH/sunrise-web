"use client";

import {
  ChevronDown,
} from "lucide-react";

const faqs = [
  {
    question:
      "Can beginners join the spoken English course?",

    answer:
      "Yes. Our programs are designed for complete beginners, students, and professionals who want to improve spoken English confidence step-by-step.",
  },

  {
    question:
      "Do you provide interview preparation training?",

    answer:
      "Yes. We conduct mock interviews, group discussions, confidence-building sessions, and professional communication practice.",
  },

  {
    question:
      "Are small batches available?",

    answer:
      "Yes. We maintain small batches of around 5–10 students to ensure personal attention and speaking practice for every student.",
  },

  {
    question:
      "Do you provide Hindi or Marathi support?",

    answer:
      "Yes. Trainers help students transition comfortably from Hindi/Marathi to English communication.",
  },

  {
    question:
      "Is there a free demo class available?",

    answer:
      "Yes. Students can attend a free demo session before enrolling in the course.",
  },

  {
    question:
      "What are the batch timings?",

    answer:
      "Morning and evening batches are available throughout the week for students and working professionals.",
  },
];

export default function FAQSection() {
  return (
    <section
      className="
        bg-slate-50
        py-6
      "
    >
      <div className="container-custom">
        {/* HEADER */}

        <div
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
          {/* BADGE */}

          <div
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-slate-200
              bg-white
              px-5
              py-2.5
              text-sm
              font-medium
              text-slate-700
              shadow-sm
            "
          >
            Frequently Asked Questions
          </div>

          {/* HEADING */}

          <h2
            className="
              mt-6
              text-4xl
              font-black
              leading-[1.05]
              tracking-tight
              text-slate-900
              sm:text-5xl
              lg:text-6xl
            "
          >
            Everything You Need
            to Know
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-slate-600
              sm:text-lg
            "
          >
            Answers to common questions about
            spoken English training, batch
            timings, interview preparation,
            and course structure.
          </p>
        </div>

        {/* FAQ LIST */}

        <div
          className="
            mx-auto
            mt-14
            max-w-4xl
            space-y-5
          "
        >
          {faqs.map((item, index) => (
            <details
              key={index}
              className="
                group
                overflow-hidden
                rounded-[28px]
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                open:shadow-xl
              "
            >
              {/* QUESTION */}

              <summary
                className="
                  flex
                  cursor-pointer
                  list-none
                  items-center
                  justify-between
                  gap-5
                "
              >
                <h3
                  className="
                    text-lg
                    font-bold
                    leading-7
                    text-slate-900
                    sm:text-xl
                  "
                >
                  {item.question}
                </h3>

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-2xl
                    bg-slate-100
                    transition
                    group-open:bg-slate-900
                  "
                >
                  <ChevronDown
                    size={20}
                    className="
                      text-slate-700
                      transition-transform
                      duration-300
                      group-open:rotate-180
                      group-open:text-white
                    "
                  />
                </div>
              </summary>

              {/* ANSWER */}

              <div
                className="
                  overflow-hidden
                  transition-all
                  duration-300
                "
              >
                <p
                  className="
                    mt-5
                    max-w-3xl
                    text-sm
                    leading-8
                    text-slate-600
                    sm:text-base
                  "
                >
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}