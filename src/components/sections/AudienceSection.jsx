"use client";

import Image from "next/image";

const audienceData = [
  {
    title: "College Students",
    description:
      "Improve confidence, presentations, group discussions, and interview communication skills.",

    image:
      "https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title: "Job Seekers",
    description:
      "Prepare for HR interviews, spoken rounds, and professional communication.",

    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Working Professionals",
    description:
      "Enhance workplace communication, fluency, and client interaction skills.",

    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "School Students",
    description:
      "Build strong English foundations with vocabulary and speaking practice.",

    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function AudienceSection() {
  return (
    <section
      className="
        bg-white
        py-6
      "
    >
      <div className="container-custom">
        {/* SECTION HEADER */}

        <div
          className="
            mx-auto
            max-w-4xl
            text-center
          "
        >
          {/* SMALL BADGE */}

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
              text-xl
              font-medium
              text-slate-700
            "
          >
            Who Can Join?
          </div>

          {/* HEADING */}

          <h2
            className="
              mt-4
              text-4xl
              font-black
              leading-[1.05]
              tracking-tight
              text-slate-900
              sm:text-5xl
              lg:text-6xl
            "
          >
            Programs Designed for
            Every Learner
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-base
              leading-8
              text-slate-600
              sm:text-lg
            "
          >
            Personalized spoken English and
            communication training for
            students, professionals, beginners,
            and job seekers.
          </p>
        </div>

        {/* CARDS GRID */}

        <div
          className="
            mt-8
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {audienceData.map((item, index) => (
            <div
              key={index}
              className="
                group
                overflow-hidden
                rounded-[30px]
                border
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              {/* IMAGE */}

              <div
                className="
                  relative
                  h-[220px]
                  overflow-hidden
                "
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* CONTENT */}

              <div className="p-6">
                {/* TITLE */}

                <h3
                  className="
                    text-2xl
                    font-bold
                    tracking-tight
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

                {/* BOTTOM LINE */}

                <div
                  className="
                    mt-6
                    h-1
                    w-16
                    rounded-full
                    bg-slate-900
                    transition-all
                    duration-300
                    group-hover:w-24
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}