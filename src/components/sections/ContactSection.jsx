"use client";

import {
  Phone,
  MapPin,
  Clock3,
  MessageCircle,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

import { businessData } from "@/lib/data";

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const message = formData.get("message");

    const whatsappMessage = `Hello Sunrise Institute,

Name: ${name}
Phone: ${phone}
Email: ${email}

Message:
${message}`;

    const whatsappURL = `https://wa.me/919545190405?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      id="contact"
      className="
        bg-white
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
              bg-slate-50
              px-8
              py-2.5
              text-2xl
              font-medium
              text-slate-900
            "
          >
            Contact Us
          </div>

          {/* TITLE */}

          <h2
            className="
              mt-6
              text-4xl
              font-black
              leading-[1.05]
              tracking-tight
              text-slate-900
              sm:text-5xl
            "
          >
            Start Your English
            Speaking Journey
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-8
              text-slate-600
              sm:text-lg
            "
          >
            Contact our team for free demo
            classes, timings, and spoken
            English course details.
          </p>
        </div>

        {/* GRID */}

        <div
          className="
            mt-12
            grid
            gap-5
            lg:grid-cols-2
          "
        >
          {/* CONTACT CARD */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              bg-slate-900
              p-6
              text-white
              shadow-xl
              sm:p-7
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
                Get In Touch
              </div>

              {/* HEADING */}

              <h3
                className="
                  mt-5
                  text-3xl
                  font-black
                  leading-[1.05]
                  tracking-tight
                  text-white
                  sm:text-4xl
                "
              >
                Speak with Our
                Team Today
              </h3>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-5
                  max-w-xl
                  text-sm
                  leading-7
                  text-slate-300
                  sm:text-base
                "
              >
                Personalized guidance,
                flexible batches, and
                practical spoken English
                training for students and
                professionals.
              </p>

              {/* CONTACT ITEMS */}

              <div
                className="
                  mt-7
                  space-y-4
                "
              >
                {/* PHONE */}

                <div
                  className="
                    flex
                    items-start
                    gap-4
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-white/10
                    "
                  >
                    <Phone size={20} />
                  </div>

                  <div>
                    <h4
                      className="
                        text-base
                        font-bold
                      "
                    >
                      Call Us
                    </h4>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-slate-300
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
                    gap-4
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-white/10
                    "
                  >
                    <MapPin size={20} />
                  </div>

                  <div>
                    <h4
                      className="
                        text-base
                        font-bold
                      "
                    >
                      Visit Institute
                    </h4>

                    <p
                      className="
                        mt-1
                        text-sm
                        leading-7
                        text-slate-300
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
                    gap-4
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-white/10
                    "
                  >
                    <Clock3 size={20} />
                  </div>

                  <div>
                    <h4
                      className="
                        text-base
                        font-bold
                      "
                    >
                      Batch Timings
                    </h4>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-slate-300
                      "
                    >
                      Monday – Friday
                    </p>

                    <p
                      className="
                        text-sm
                        text-slate-400
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

              {/* SOCIALS */}

              <div
                className="
                  mt-7
                  flex
                  flex-wrap
                  gap-3
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
                    px-4
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
                    border-white/20
                    bg-white/10
                    px-4
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-white/20
                  "
                >
                  <ExternalLink
                    size={16}
                  />

                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* FORM CARD */}

          <div
            className="
              rounded-[28px]
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
              sm:p-7
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
              Free Demo Enquiry
            </div>

            {/* HEADING */}

            <h3
              className="
                mt-5
                text-2xl
                font-black
                leading-tight
                text-slate-900
                sm:text-3xl
              "
            >
              Book Your Free
              Demo Class
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
              Fill out your details and
              continue directly on WhatsApp.
            </p>

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="
                mt-7
                space-y-4
              "
            >
              {/* NAME */}

              <input
                name="name"
                type="text"
                required
                placeholder="Full Name"
                className="
                  h-13
                  w-full
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  px-5
                  text-sm
                  outline-none
                  transition
                  focus:border-slate-900
                  focus:bg-white
                "
              />

              {/* PHONE */}

              <input
                name="phone"
                type="tel"
                required
                placeholder="Phone Number"
                className="
                  h-13
                  w-full
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  px-5
                  text-sm
                  outline-none
                  transition
                  focus:border-slate-900
                  focus:bg-white
                "
              />

              {/* EMAIL */}

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="
                  h-13
                  w-full
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  px-5
                  text-sm
                  outline-none
                  transition
                  focus:border-slate-900
                  focus:bg-white
                "
              />

              {/* MESSAGE */}

              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your learning goals..."
                className="
                  w-full
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  px-5
                  py-4
                  text-sm
                  outline-none
                  transition
                  focus:border-slate-900
                  focus:bg-white
                "
              />

              {/* BUTTON */}

              <button
                type="submit"
                className="
                  inline-flex
                  h-13
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-slate-900
                  px-8
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-slate-800
                "
              >
                Continue on WhatsApp

                <ArrowRight
                  size={16}
                />
              </button>
            </form>
          </div>

          {/* MAP CARD */}

          {/* MAP CARD */}

<div
  className="
    overflow-hidden
    rounded-[28px]
    border
    border-slate-200
    bg-white
    shadow-sm
    lg:col-span-2
  "
>
  {/* TOP */}

  <div
    className="
      flex
      flex-col
      gap-5
      border-b
      border-slate-200
      p-6
      sm:flex-row
      sm:items-center
      sm:justify-between
    "
  >
    <div>
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
        Location
      </div>

      {/* TITLE */}

      <h3
        className="
          mt-4
          text-2xl
          font-black
          text-slate-900
          sm:text-3xl
        "
      >
        Visit Our Institute
      </h3>

      {/* DESCRIPTION */}

      <p
        className="
          mt-3
          max-w-2xl
          text-sm
          leading-7
          text-slate-600
          sm:text-base
        "
      >
        Located near Daulat Nagar Bus
        Stop, Dhankawadi Road, Pune.
      </p>
    </div>

    {/* BUTTON */}

    <a
      href="https://maps.google.com/?q=The+Sunrise+Institute+of+Spoken+English+Pune"
      target="_blank"
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        bg-slate-900
        px-5
        py-3
        text-sm
        font-semibold
        text-white
        transition
        hover:bg-slate-800
      "
    >
      Open in Maps

      <ExternalLink
        size={16}
      />
    </a>
  </div>

  {/* MAP */}

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.4290555075495!2d73.85392317431827!3d18.464214670895053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eab9a867447d%3A0x975668e81720383b!2sThe%20Sunrise%20Institute%20of%20Spoken%20English!5e0!3m2!1sen!2sin!4v1778916781755!5m2!1sen!2sin"
    width="100%"
    height="320"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
        </div>
      </div>
    </section>
  );
}