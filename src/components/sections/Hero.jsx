"use client";

import {
  ArrowRight,
  MessageCircle,
  Star,
} from "lucide-react";

export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}

      <section id="home"
        className="
          relative
          overflow-hidden
          bg-white
          py-5
        "
      >
        {/* BACKGROUND */}

        <div
          className="
            absolute
            top-0
            right-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-slate-100
            blur-3xl
          "
        />

        <div
          className="
            container-custom
            relative
            z-10
            grid
            items-center
            gap-2
            lg:grid-cols-2
          "
        >
          {/* LEFT CONTENT */}

          <div>
            {/* SMALL BADGE */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-slate-200
                bg-white
                px-4
                py-2
                text-sm
                font-medium
                text-slate-700
                shadow-sm
              "
            >
              <Star
                size={16}
                className="fill-yellow-400 text-yellow-400"
              />

              Trusted by Students Since 2008
            </div>

            {/* HEADING */}

            <h1
              className="
                mt-4
                max-w-2xl
                text-4xl
                font-black
                leading-[1.05]
                tracking-tight
                text-slate-900
                sm:text-5xl
                lg:text-6xl
              "
            >
              Speak English
              <span className="text-slate-500">
                {" "}
                with Confidence.
              </span>

              <br />

              Build a Fearless Career.
            </h1>

            {/* DESCRIPTION */}

            <p
              className="
                mt-5
                max-w-xl
                text-lg
                leading-8
                text-slate-600
              "
            >
              Practical spoken English training
              for students, job seekers, and
              professionals with small batches
              and daily speaking practice.
            </p>

            {/* CTA */}

            <div
              className="
                mt-5
                flex
                flex-wrap
                gap-4
              "
            >
              {/* PRIMARY */}

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

              {/* SECONDARY */}

              <a
                href="https://wa.me/919545190405"
                target="_blank"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-slate-300
                  bg-white
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-slate-700
                  transition
                  hover:bg-slate-100
                "
              >
                <MessageCircle size={18} />

                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE CARD */}

          <div
            className="
              relative
              mx-auto
              w-full
              max-w-xl
            "
          >
            {/* MAIN IMAGE CARD */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-slate-200
                bg-white
                p-3
                shadow-2xl
              "
            >
              {/* IMAGE */}

              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
                alt="Students learning spoken English"
                className="
                  h-[520px]
                  w-full
                  rounded-[28px]
                  object-cover
                "
              />

              {/* FLOATING CARD */}

              <div
                className="
                  absolute
                  bottom-8
                  left-8
                  rounded-2xl
                  bg-white/95
                  p-5
                  shadow-xl
                  backdrop-blur
                "
              >
                <p
                  className="
                    text-sm
                    font-medium
                    text-slate-500
                  "
                >
                  Free Demo Available
                </p>

                <h3
                  className="
                    mt-1
                    text-xl
                    font-bold
                    text-slate-900
                  "
                >
                  Join Small Batches
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    text-slate-600
                  "
                >
                  Personalized speaking practice
                  with expert guidance.
                </p>
              </div>
            </div>

            {/* FLOATING EXPERIENCE BADGE */}

            <div
              className="
                absolute
                -top-2
                -right-3
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-6
                py-5
                shadow-xl
              "
            >
              <h3
                className="
                  text-2xl
                  font-black
                  text-slate-900
                "
              >
                18+
              </h3>

              <p
                className="
                  text-sm
                  font-medium
                  text-slate-600
                "
              >
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION BELOW HERO */}

      <section className="py-5">
        <div className="container-custom">
          <div
            className="
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {/* CARD 1 */}

            <div
              className="
                rounded-[32px]
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
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
                  mt-3
                  text-lg
                  font-semibold
                  text-slate-900
                "
              >
                Years Experience
              </p>

              <p
                className="
                  mt-2
                  text-slate-600
                "
              >
                Trusted spoken English training
                institute in Pune since 2008.
              </p>
            </div>

            {/* CARD 2 */}

            <div
              className="
                rounded-[32px]
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
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
                  mt-3
                  text-lg
                  font-semibold
                  text-slate-900
                "
              >
                Students Per Batch
              </p>

              <p
                className="
                  mt-2
                  text-slate-600
                "
              >
                Small focused batches with
                individual speaking attention.
              </p>
            </div>

            {/* CARD 3 */}

            <div
              className="
                rounded-[32px]
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
              "
            >
              <h3
                className="
                  text-4xl
                  font-black
                  text-slate-900
                "
              >
                100%
              </h3>

              <p
                className="
                  mt-3
                  text-lg
                  font-semibold
                  text-slate-900
                "
              >
                Practical Communication
              </p>

              <p
                className="
                  mt-2
                  text-slate-600
                "
              >
                Real speaking sessions,
                confidence building, and
                interview preparation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}