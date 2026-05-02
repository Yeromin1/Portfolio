import { navItems } from "../../constants/navItems";
import scrollToSection from "../../utils/scrollToSection";

const Navigation = () => {
  return (
    <nav className="hidden md:flex gap-4">
      {navItems.map((item) => (
        <button key={item.id} onClick={() => scrollToSection(item.id)}>
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
