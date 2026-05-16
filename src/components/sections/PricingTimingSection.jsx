"use client";

import {
  Clock3,
  CalendarDays,
  BadgeIndianRupee,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import { businessData } from "@/lib/data";

export default function PricingTimingSection() {
  return (
    <section
      id="timings"
      className="
        bg-white
        py-8
      "
    >
      <div className="container-custom">
        <div
          className="
            grid
            gap-10
            lg:grid-cols-2
            lg:gap-16
          "
        >
          {/* LEFT SIDE */}

          <div>
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
                py-3
                text-xl
                font-medium
                text-slate-900
              "
            >
              Batch Timings
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
              Flexible Timings for
              Students & Professionals
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
              Morning and evening batches
              designed for college students,
              working professionals, and job
              seekers with flexible schedules.
            </p>

            {/* TIMINGS */}

            <div
              className="
                mt-10
                space-y-5
              "
            >
              {/* WEEKDAYS */}

              <div
                className="
                  flex
                  items-start
                  gap-4
                  rounded-3xl
                  border
                  border-slate-200
                  bg-slate-50
                  p-6
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white
                  "
                >
                  <Clock3
                    size={26}
                    className="text-slate-900"
                  />
                </div>

                <div>
                  <h3
                    className="
                      text-lg
                      font-bold
                      text-slate-900
                    "
                  >
                    Monday – Friday
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-7
                      text-slate-600
                      sm:text-base
                    "
                  >
                    {
                      businessData.timings
                        .weekdays
                    }
                  </p>
                </div>
              </div>

              {/* SATURDAY */}

              <div
                className="
                  flex
                  items-start
                  gap-4
                  rounded-3xl
                  border
                  border-slate-200
                  bg-slate-50
                  p-6
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white
                  "
                >
                  <CalendarDays
                    size={26}
                    className="text-slate-900"
                  />
                </div>

                <div>
                  <h3
                    className="
                      text-lg
                      font-bold
                      text-slate-900
                    "
                  >
                    Saturday Batches
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-7
                      text-slate-600
                      sm:text-base
                    "
                  >
                    {
                      businessData.timings
                        .saturday
                    }
                  </p>
                </div>
              </div>

              {/* SUNDAY */}

              <div
                className="
                  flex
                  items-start
                  gap-4
                  rounded-3xl
                  border
                  border-slate-200
                  bg-slate-50
                  p-6
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white
                  "
                >
                  <Clock3
                    size={26}
                    className="text-slate-900"
                  />
                </div>

                <div>
                  <h3
                    className="
                      text-lg
                      font-bold
                      text-slate-900
                    "
                  >
                    Sunday
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-7
                      text-slate-600
                      sm:text-base
                    "
                  >
                    {
                      businessData.timings
                        .sunday
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div
            className="
              flex
              flex-col
              gap-5
              lg:justify-between
            "
          >
            {/* CARD 1 */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                bg-slate-900
                p-6
                text-white
                shadow-2xl
                lg:p-7
              "
            >
              {/* BG BLUR */}

              <div
                className="
                  absolute
                  right-0
                  top-0
                  h-[220px]
                  w-[220px]
                  rounded-full
                  bg-white/10
                  blur-3xl
                "
              />

              <div className="relative z-10">
                {/* BADGE */}

                <div
                  className="
                    inline-flex
                    items-center
                    rounded-full
                    bg-white/10
                    px-4
                    py-2
                    text-xs
                    font-medium
                    backdrop-blur
                  "
                >
                  Spoken English Program
                </div>

                {/* PRICE */}

                <div className="mt-6">
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <BadgeIndianRupee
                      size={32}
                    />

                    <h2
                      className="
                        text-4xl
                        font-black
                        tracking-tight
                        sm:text-5xl
                      "
                    >
                      6000
                    </h2>
                  </div>

                  <p
                    className="
                      mt-2
                      text-sm
                      text-slate-300
                    "
                  >
                    45-Day Intensive Course
                  </p>
                </div>

                {/* FEATURES */}

                <div
                  className="
                    mt-7
                    space-y-3
                  "
                >
                  {[
                    "Daily Speaking Practice",
                    "Grammar + Vocabulary",
                    "Confidence Building",
                    "Free Demo Class",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <CheckCircle2
                        size={18}
                        className="
                          text-emerald-400
                        "
                      />

                      <p
                        className="
                          text-sm
                          text-slate-200
                        "
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}

                <div className="mt-8">
                  <a
                    href="#contact"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-white
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-slate-900
                      transition
                      hover:bg-slate-100
                    "
                  >
                    Join Program

                    <ArrowRight
                      size={16}
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 2 */}

            <div
              className="
                rounded-[32px]
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                lg:p-7
              "
            >
              {/* BADGE */}

              <div
                className="
                  inline-flex
                  items-center
                  rounded-full
                  bg-slate-100
                  px-4
                  py-2
                  text-xs
                  font-medium
                  text-slate-700
                "
              >
                Additional Benefits
              </div>

              {/* HEADING */}

              <h3
                className="
                  mt-5
                  text-2xl
                  font-black
                  leading-tight
                  text-slate-900
                "
              >
                Flexible Learning
                with Personal Attention
              </h3>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-2
                  text-sm
                  leading-7
                  text-slate-600
                "
              >
                Personalized guidance,
                flexible schedules, and
                small batches designed for
                faster communication
                improvement.
              </p>

              {/* FEATURES */}

              <div
                className="
                  mt-6
                  space-y-3
                "
              >
                {[
                  "5–10 Students Per Batch",
                  "Hindi/Marathi Support",
                  "Installment Payment Available",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <CheckCircle2
                      size={18}
                      className="
                        text-emerald-500
                      "
                    />

                    <p
                      className="
                        text-sm
                        text-slate-700
                      "
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}

              <div className="mt-7">
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
                  Talk to Our Team

                  <ArrowRight
                    size={16}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}