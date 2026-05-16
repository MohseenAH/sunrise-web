"use client";

import {
  Phone,
  MapPin,
  Clock3,
  MessageCircle,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

import { businessData } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      className="
        bg-slate-950
        text-white
      "
    >
      <div className="container-custom">
        {/* TOP SECTION */}

        <div
          className="
            grid
            gap-10
            border-b
            border-white/10
            py-14
            lg:grid-cols-[1.3fr_0.7fr_0.7fr]
          "
        >
          {/* BRAND */}

          <div>
            {/* LOGO */}

            <div
              className="
                flex
                items-center
                gap-4
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
                  text-xl
                  font-black
                  text-slate-900
                "
              >
                S
              </div>

              <div>
                <h3
                  className="
                    text-xl
                    font-black
                    tracking-tight
                  "
                >
                  {
                    businessData
                      .business.name
                  }
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    text-slate-400
                  "
                >
                  Spoken English Training
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}

            <p
              className="
                mt-7
                max-w-xl
                text-sm
                leading-8
                text-slate-400
                sm:text-base
              "
            >
              Practical spoken English,
              confidence building, interview
              preparation, and communication
              training for students and
              professionals in Pune.
            </p>

            {/* CTA */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-4
              "
            >
              {/* WHATSAPP */}

              <a
                href={
                  businessData
                    .business.whatsapp
                }
                target="_blank"
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
                <MessageCircle
                  size={16}
                />

                WhatsApp
              </a>

              {/* FACEBOOK */}

              <a
                href={
                  businessData
                    .business.facebook
                }
                target="_blank"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-white/10
                "
              >
                <ExternalLink
                  size={16}
                />

                Facebook
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}

          <div>
            {/* TITLE */}

            <h4
              className="
                text-lg
                font-bold
                text-white
              "
            >
              Quick Links
            </h4>

            {/* LINKS */}

            <div
              className="
                mt-6
                space-y-4
              "
            >
              {[
                {
                  label: "Home",
                  href: "#",
                },

                {
                  label: "Courses",
                  href: "#courses",
                },

                {
                  label: "Features",
                  href: "#features",
                },

                {
                  label: "Timings",
                  href: "#timings",
                },

                {
                  label: "Contact",
                  href: "#contact",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-slate-400
                    transition
                    hover:text-white
                  "
                >
                  <ArrowUpRight
                    size={16}
                  />

                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT INFO */}

          <div>
            {/* TITLE */}

            <h4
              className="
                text-lg
                font-bold
                text-white
              "
            >
              Contact Info
            </h4>

            {/* ITEMS */}

            <div
              className="
                mt-6
                space-y-5
              "
            >
              {/* PHONE */}

              <div
                className="
                  flex
                  items-start
                  gap-3
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-white/5
                  "
                >
                  <Phone size={18} />
                </div>

                <div>
                  <p
                    className="
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    Phone
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-slate-400
                    "
                  >
                    {
                      businessData
                        .business.phone
                    }
                  </p>
                </div>
              </div>

              {/* ADDRESS */}

              <div
                className="
                  flex
                  items-start
                  gap-3
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-white/5
                  "
                >
                  <MapPin size={18} />
                </div>

                <div>
                  <p
                    className="
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    Address
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      leading-7
                      text-slate-400
                    "
                  >
                    {
                      businessData
                        .business.address
                    }
                  </p>
                </div>
              </div>

              {/* TIMINGS */}

              <div
                className="
                  flex
                  items-start
                  gap-3
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-white/5
                  "
                >
                  <Clock3 size={18} />
                </div>

                <div>
                  <p
                    className="
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    Timings
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-slate-400
                    "
                  >
                    Mon – Fri
                  </p>

                  <p
                    className="
                      text-sm
                      text-slate-500
                    "
                  >
                    {
                      businessData
                        .timings
                        .weekdays
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}

        <div
          className="
            flex
            flex-col
            gap-4
            py-6
            text-center
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:text-left
          "
        >
          {/* COPYRIGHT */}

          <p
            className="
              text-sm
              text-slate-500
            "
          >
            © {new Date().getFullYear()}{" "}
            {
              businessData
                .business.name
            }
            . All rights reserved.
          </p>

          {/* CREDIT */}

          <p
            className="
              text-sm
              text-slate-600
            "
          >
            Designed and Developed by Mohseen Ali Hawaldar 
          </p>
        </div>
      </div>
    </footer>
  );
}