import { useState } from "react";

import Navigation from "../Navigation/Navigation";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative block md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 flex items-center justify-center rounded-lg   transition"
      >
        <div className="relative w-6 h-6 flex items-center justify-center">
          <div
            className={`absolute inset-0 grid grid-cols-2 gap-1 transition-all duration-700 ${
              open
                ? "opacity-0 scale-75 rotate-90"
                : "opacity-100 scale-100 rotate-0"
            }`}
          >
            <span className="w-1.5 h-1.5 bg-[var(--bg-btn-mobile)] rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-[var(--bg-btn-mobile)] rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-[var(--bg-btn-mobile)] rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-[var(--bg-btn-mobile)] rounded-full"></span>
          </div>

          <svg
            className={`absolute w-9 h-9 transition-all duration-700 ${
              open
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-75 -rotate-90"
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--bg-btn-mobile)"
            strokeWidth="3"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </div>
      </button>

      {open && (
        <div className="fixed inset-0 z-40" onClick={() => setOpen(false)}>
          <div className="absolute top-24 w-64 p-4 rounded-r-xl shadow-[var(--box-shadow-mobile-nav)] bg-[var(--bg)]">
            <Navigation
              className="flex flex-col gap-4 text-sm"
              buttonClassName="text-left !text-[18px] font-medium"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
