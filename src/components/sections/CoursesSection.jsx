"use client";

import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { businessData } from "@/lib/data";

export default function CoursesSection() {
  return (
    <section
      id="courses"
      className="
        bg-slate-50
        p-5
      "
    >
      <div className="container-custom">
        {/* SECTION HEADER */}

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
            Our Programs
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
            Practical Spoken English
            Training Programs
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
            Personalized communication-focused
            programs designed for students,
            professionals, job seekers, and
            beginners at every stage.
          </p>
        </div>

        {/* COURSES GRID */}

        <div
          className="
            mt-14
            grid
            gap-6
            lg:grid-cols-3
          "
        >
          {businessData.courses.map(
            (course, index) => (
              <div
                key={index}
                className="
                  group
                  flex
                  flex-col
                  rounded-[30px]
                  border
                  border-slate-200
                  bg-white
                  p-7
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                "
              >
                {/* TOP */}

                <div>
                  {/* SMALL TAG */}

                  <div
                    className="
                      inline-flex
                      items-center
                      rounded-full
                      bg-slate-100
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wide
                      text-slate-700
                    "
                  >
                    Course Program
                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      mt-5
                      text-2xl
                      font-black
                      leading-tight
                      text-slate-900
                    "
                  >
                    {course.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-4
                      text-sm
                      leading-7
                      text-slate-600
                      sm:text-base
                    "
                  >
                    Professional spoken English
                    and communication-focused
                    training with practical
                    learning sessions.
                  </p>
                </div>

                {/* FEATURES */}

                <div
                  className="
                    mt-8
                    space-y-4
                  "
                >
                  {course.items.map(
                    (item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="
                          flex
                          items-start
                          gap-3
                        "
                      >
                        <CheckCircle2
                          size={20}
                          className="
                            mt-0.5
                            text-emerald-500
                          "
                        />

                        <p
                          className="
                            text-sm
                            leading-6
                            text-slate-700
                            sm:text-base
                          "
                        >
                          {item}
                        </p>
                      </div>
                    )
                  )}
                </div>

                {/* CTA */}

                <div className="mt-10">
                  <a
                    href="#contact"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-slate-900
                      transition
                      hover:gap-3
                    "
                  >
                    Book Free Demo

                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}