"use client";

import {
  Star,
  Quote,
} from "lucide-react";

const testimonials = [
  {
    name: "Rahul Jadhav",

    role: "College Student",

    review:
      "Earlier I hesitated while speaking English in presentations and interviews. After joining Sunrise Institute, my confidence improved a lot.",

    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Priya Sharma",

    role: "Job Seeker",

    review:
      "The mock interviews and daily speaking practice helped me clear my HR interview confidently.",

    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Amit Patil",

    role: "Working Professional",

    review:
      "The small batches and personalized attention made learning comfortable and practical for me.",

    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="
        bg-slate-50
        p-6
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
              text-xl
              font-medium
              text-black
              shadow-sm
            "
          >
            Student Testimonials
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
            Trusted by Students
            Across Pune
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
            Real experiences from students,
            professionals, and job seekers
            who improved their communication
            confidence with Sunrise Institute.
          </p>
        </div>

        {/* TESTIMONIAL GRID */}

        <div
          className="
            mt-14
            grid
            gap-6
            lg:grid-cols-3
          "
        >
          {testimonials.map(
            (item, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
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
                {/* QUOTE ICON */}

                <div
                  className="
                    absolute
                    right-6
                    top-6
                    opacity-10
                  "
                >
                  <Quote size={60} />
                </div>

                {/* STARS */}

                <div
                  className="
                    flex
                    items-center
                    gap-1
                  "
                >
                  {[...Array(5)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="
                          fill-yellow-400
                          text-yellow-400
                        "
                      />
                    )
                  )}
                </div>

                {/* REVIEW */}

                <p
                  className="
                    mt-6
                    text-sm
                    leading-8
                    text-slate-600
                    sm:text-base
                  "
                >
                  “{item.review}”
                </p>

                {/* USER */}

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    gap-4
                  "
                >
                  {/* IMAGE */}

                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      h-14
                      w-14
                      rounded-full
                      object-cover
                    "
                  />

                  {/* INFO */}

                  <div>
                    <h3
                      className="
                        text-base
                        font-bold
                        text-slate-900
                      "
                    >
                      {item.name}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-slate-500
                      "
                    >
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}