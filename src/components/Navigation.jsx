
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
      <button className="flex items-center justify-center w-12 h-12 transition-colors bg-yellow-400 rounded-full hover:bg-yellow-300">
        <label className="flex flex-col w-8 gap-2">
          <input
            type="checkbox"
            className="hidden peer"
            checked={mobileMenuOpen}
            onChange={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
          <div className="rounded-2xl h-[3px] w-1/2 bg-black duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]" />
          <div className="rounded-2xl h-[3px] w-full bg-black duration-500 peer-checked:-rotate-45" />
          <div className="rounded-2xl h-[3px] w-1/2 bg-black duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]" />
        </label>
      </button>

      {mobileMenuOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/90 -z-40">
          <div className="space-y-8 text-center">
            {["Home", "Services", "Skills", "Portfolio", "Contact"].map((item) => (
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
