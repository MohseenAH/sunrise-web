"use client";

import {
  Users,
  Mic2,
  Briefcase,
  Languages,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Users,

    title: "Small Personalized Batches",

    description:
      "Limited 5–10 student batches ensure individual speaking attention and better learning outcomes.",
  },

  {
    icon: Mic2,

    title: "Practical Speaking Focus",

    description:
      "Daily communication practice designed to improve fluency, confidence, and real-world conversation skills.",
  },

  {
    icon: Languages,

    title: "MTI & Confidence Training",

    description:
      "Special focus on reducing mother tongue influence and overcoming hesitation while speaking English.",
  },

  {
    icon: Briefcase,

    title: "Interview & Career Preparation",

    description:
      "Professional communication, mock interviews, and confidence-building sessions for career growth.",
  },
];

export default function WhyChooseSection() {
  return (
    <section
      id="features"
      className="
        bg-white
        py-6"
    >
      <div className="container-custom">
        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-2
            lg:gap-20
          "
        >
          {/* LEFT CONTENT */}

          <div className="max-w-2xl">
            {/* BADGE */}

            <div
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-slate-200
                bg-slate-50
                px-5
                py-2.5
                text-sm
                font-medium
                text-slate-700
              "
            >
              Why Choose Us?
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
              Learn English Through
              Practical Communication
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-6
                max-w-xl
                text-base
                leading-8
                text-slate-600
                sm:text-lg
              "
            >
              At The Sunrise Institute,
              students learn through real
              communication practice, small
              batches, and personalized
              guidance designed to improve
              confidence and fluency.
            </p>

            {/* STATS */}

            <div
              className="
                mt-10
                grid
                gap-5
                sm:grid-cols-2
              "
            >
              {/* STAT 1 */}

              <div
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-slate-50
                  p-6
                "
              >
                <h3
                  className="
                    text-4xl
                    font-black
                    text-slate-900
                  "
                >
                  18+
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    font-medium
                    text-slate-600
                  "
                >
                  Years of Experience
                </p>
              </div>

              {/* STAT 2 */}

              <div
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-slate-50
                  p-6
                "
              >
                <h3
                  className="
                    text-4xl
                    font-black
                    text-slate-900
                  "
                >
                  5–10
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    font-medium
                    text-slate-600
                  "
                >
                  Students Per Batch
                </p>
              </div>
            </div>

            {/* CTA */}

            <div className="mt-10">
              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-slate-900
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-slate-800
                "
              >
                Book Free Demo

                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* RIGHT FEATURES */}

          <div
            className="
              grid
              gap-5
              sm:grid-cols-2
            "
          >
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    group
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
                  {/* ICON */}

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-slate-100
                      transition
                      group-hover:bg-slate-900
                    "
                  >
                    <Icon
                      size={28}
                      className="
                        text-slate-900
                        transition
                        group-hover:text-white
                      "
                    />
                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      mt-6
                      text-xl
                      font-bold
                      leading-tight
                      text-slate-900
                    "
                  >
                    {item.title}
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
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}