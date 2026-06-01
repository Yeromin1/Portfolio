import { useEffect, useState } from "react";

const getTheme = () => localStorage.getItem("theme") || "mytheme";

export const useTheme = () => {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "retro" ? "mytheme" : "retro"));
  };

  useEffect(() => {
    const syncTheme = () => setTheme(getTheme());

    window.addEventListener("storage", syncTheme);
    window.addEventListener("theme-change", syncTheme);

    return () => {
      window.removeEventListener("storage", syncTheme);
      window.removeEventListener("theme-change", syncTheme);
    };
  }, []);

  useEffect(() => {
    window.dispatchEvent(new Event("theme-change"));
  }, [theme]);

  return { theme, toggleTheme };
};
