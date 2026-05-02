import { useState } from "react";
import { navItems } from "../../constants/navItems";
import scrollToSection from "../../utils/scrollToSection";

const Modal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative block md:hidden"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 flex items-center justify-center rounded-lg bg-base-200 hover:bg-base-300 transition"
      >
        <div className="relative w-5 h-5 flex items-center justify-center">
          {/* DOTS */}
          <div
            className={`absolute inset-0 grid grid-cols-2 gap-1 transition-all duration-300 ${
              open
                ? "opacity-0 scale-75 rotate-90"
                : "opacity-100 scale-100 rotate-0"
            }`}
          >
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
          </div>

          {/* CLOSE ICON */}
          <svg
            className={`absolute w-7 h-7 transition-all duration-300 ${
              open
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-75 -rotate-90"
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </div>
      </button>

      {/* MODAL BACKDROP */}
      {open && (
        <div className="fixed inset-0 z-40" onClick={() => setOpen(false)}>
          {/* WINDOW */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute top-20 right-4 w-64 p-4 bg-base-200 rounded-xl shadow-lg"
          >
            <nav className="flex flex-col gap-2 text-sm">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left hover:opacity-70 transition"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
