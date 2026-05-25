import { useEffect, useState } from "react";

const ThemeController = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";

    document.documentElement.setAttribute("data-theme", savedTheme);

    setChecked(savedTheme === "synthwave");
  }, []);

  const handleChange = (e) => {
    const theme = e.target.checked ? "synthwave" : "light";

    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);

    setChecked(e.target.checked);
  };

  return (
    <div>
      <label className="w-[50px] h-7 bg-white/10 toggle text-base-content ">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="theme-controller "
        />

        {/* sun */}
        <svg viewBox="0 0 24 24" aria-label="sun">
          <g
            className="text-yellow-400"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="M4.93 4.93l1.41 1.41" />
            <path d="M17.66 17.66l1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="M6.34 17.66l-1.41 1.41" />
            <path d="M19.07 4.93l-1.41 1.41" />
          </g>
        </svg>

        {/* moon */}
        <svg viewBox="0 0 24 24" aria-label="moon">
          <g
            className="text-indigo-300"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3a6 6 0 0 0 9 9A9 9 0 1 1 12 3Z" />
          </g>
        </svg>
      </label>
    </div>
  );
};

export default ThemeController;
