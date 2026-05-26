import { useTranslation } from "react-i18next";

import { navItems } from "../../constants/navItems";
import scrollToSection from "../../utils/scrollToSection";

const Navigation = ({ className = "", buttonClassName = "" }) => {
  const { t } = useTranslation("navigation");

  return (
    <nav className={`${className}`}>
      {navItems.map(({ id }) => (
        <button
          className={buttonClassName}
          key={id}
          onClick={() => scrollToSection(id)}
        >
          {t(`nav.${id}`)}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
