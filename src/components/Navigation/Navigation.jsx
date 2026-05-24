import { navItems } from "../../constants/navItems";
import scrollToSection from "../../utils/scrollToSection";

const Navigation = ({ className = "", buttonClassName = "" }) => {
  return (
    <nav className={`${className}`}>
      {navItems.map(({ id, label }) => (
        <button
          className={buttonClassName}
          key={id}
          onClick={() => scrollToSection(id)}
        >
          {label}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
