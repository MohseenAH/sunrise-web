"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const navLinks = [
    {
      label: "Features",
      href: "#features",
    },

    {
      label: "Courses",
      href: "#courses",
    },

    {
      label: "Timings",
      href: "#timings",
    },

    {
      label: "Contact",
      href: "#contact",
    },
  ];

  return (
    <header
  className="
    sticky top-0
    z-50
    border-b
    border-slate-200/80
    bg-white/90
    backdrop-blur-xl
  "
>
      <div className="container-custom">

        <div
          className="
            flex
            h-20
            items-center
            justify-between
          "
        >

          {/* LEFT */}

          <div className="flex items-center gap-4">

            {/* Logo */}

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-slate-900
                text-lg
                font-bold
                text-white
                shadow-lg
              "
            >
              S
            </div>

            {/* Branding */}

            <div>

              <h2
                className="
                  text-lg
                  font-bold
                  tracking-tight
                  text-slate-900
                "
              >
                The Sunrise Institute
              </h2>

              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                Spoken English Training
              </p>

            </div>

          </div>

          {/* DESKTOP NAV */}

          <nav
            className="
              hidden
              items-center
              gap-2
              rounded-full
              border
              border-slate-200
              bg-white
              p-2
              shadow-sm
              lg:flex
            "
          >

            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  rounded-full
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-slate-700
                  transition
                  hover:bg-slate-100
                  hover:text-slate-900
                "
              >
                {item.label}
              </a>
            ))}

          </nav>

          {/* RIGHT */}

          <div className="flex items-center gap-3">

            {/* CALL BUTTON */}

            <a
              href="tel:+919545190405"
              className="
                hidden
                items-center
                gap-2
                rounded-full
                bg-slate-900
                px-5
                py-3
                text-sm
                font-medium
                text-white
                transition
                hover:bg-slate-800
                md:flex
              "
            >

              <Phone size={16} />

              <span>Call Now</span>

            </a>

            {/* MOBILE MENU BUTTON */}

            <button
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                border
                border-slate-200
                bg-white
                text-slate-900
                shadow-sm
                transition
                hover:bg-slate-100
                lg:hidden
              "
            >

              {mobileMenuOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}

            </button>

          </div>

        </div>

        {/* MOBILE MENU */}

        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            lg:hidden

            ${
              mobileMenuOpen
                ? "max-h-[500px] pb-6 opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >

          <div
            className="
              mt-2
              space-y-2
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-4
              shadow-xl
            "
          >

            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className="
                  block
                  rounded-2xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-slate-700
                  transition
                  hover:bg-slate-100
                  hover:text-slate-900
                "
              >
                {item.label}
              </a>
            ))}

            {/* MOBILE CALL BUTTON */}

            <a
              href="tel:+919545190405"
              className="
                mt-4
                flex
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-slate-900
                px-5
                py-3.5
                text-sm
                font-medium
                text-white
                transition
                hover:bg-slate-800
              "
            >

              <Phone size={16} />

              <span>Call Now</span>

            </a>

          </div>

        </div>

      </div>
    </header>
  );
}