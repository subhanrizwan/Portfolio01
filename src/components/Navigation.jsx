"use client";

import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 right-0 z-50 p-6 md:p-10">
      <button className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors">
        <label className="flex flex-col gap-2 w-8">
          <input
            type="checkbox"
            className="peer hidden"
            checked={mobileMenuOpen}
            onChange={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
          <div className="rounded-2xl h-[3px] w-1/2 bg-black duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]" />
          <div className="rounded-2xl h-[3px] w-full bg-black duration-500 peer-checked:-rotate-45" />
          <div className="rounded-2xl h-[3px] w-1/2 bg-black duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]" />
        </label>
      </button>

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center -z-40">
          <div className="text-center space-y-8">
            {["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block text-2xl text-white hover:text-yellow-300 hover:duration-[0.5s] hover:translate-x-5 transition duration-[0.5s] relative before:absolute before:-translate-x-4 before:translate-y-[0.85rem] before:hidden hover:before:block before:w-2 before:h-2 before:bg-yellow-400 before:rounded-full"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
