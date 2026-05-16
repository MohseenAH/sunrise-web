"use client";

import { useEffect, useState } from "react";

import {
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

export default function FloatingButtons() {
  const [showButtons, setShowButtons] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButtons(
        window.scrollY > 300
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <div
      className={`
        fixed
        bottom-5
        right-5
        z-[999]
        flex
        flex-col
        gap-3
        transition-all
        duration-300

        ${
          showButtons
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-5 opacity-0"
        }
      `}
    >
      {/* CALL */}

      <a
        href="tel:+919545190405"
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-slate-900
          text-white
          shadow-2xl
          transition
          hover:scale-110
        "
      >
        <FaPhoneAlt size={18} />
      </a>

      {/* WHATSAPP */}

      <a
        href="https://wa.me/919545190405"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-green-500
          text-white
          shadow-2xl
          transition
          hover:scale-110
        "
      >
        <FaWhatsapp size={22} />
      </a>
    </div>
  );
}