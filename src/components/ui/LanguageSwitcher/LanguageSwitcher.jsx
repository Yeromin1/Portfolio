import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const [lang, setLang] = useState(
    () => localStorage.getItem("lang") || i18n.language || "en",
  );

  useEffect(() => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }, [lang, i18n]);

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "ua" : "en"));
  };

  return (
    <button
      className="bg-black w-6 h-6 rounded-md md:hover:translate-y-[-2px] md:hover:shadow-[0_0_25px_#64ffda] language"
      onClick={toggleLang}
    >
      <span className="tracking-wide text-sm">{lang.toUpperCase()}</span>
    </button>
  );
};

export default LanguageSwitcher;
