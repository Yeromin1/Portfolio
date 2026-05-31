import { useTranslation } from "react-i18next";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import Navigation from "../Navigation/Navigation";
import LanguageSwitcher from "../ui/LanguageSwitcher/LanguageSwitcher";
import ThemeController from "../ui/ThemeController/ThemeController";

const Header = () => {
  const { t } = useTranslation("navigation");

  return (
    <header className="fixed top-0 left-0 w-full z-[100] backdrop-blur-[6px]">
      <div className="container flex items-center justify-between py-3">
        <h2 className="text-[var(--text-title)] text-2xl font-semibold [text-shadow:var(--text-shadow-header)] md:w-[148px] lg:text-[32px] lg:tracking-[2px] lg:w-[211px]">
          {t("heroTitle")}
        </h2>

        <Navigation
          className="hidden md:flex gap-4 text-base font-medium py-2 md:gap-3  lg:text-xl lg:gap-6"
          buttonClassName="nav md:hover:[text-shadow:var(--text-shadow-nav-hover)] hover:text-[var(--text-hover-nav)]"
        />
        <div className="flex items-center gap-4 md:gap-3">
          <ThemeController />
          <LanguageSwitcher />
        </div>
        <MobileNavigation />
      </div>
    </header>
  );
};

export default Header;
