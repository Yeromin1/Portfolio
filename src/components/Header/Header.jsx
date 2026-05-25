import MobileNavigation from "../MobileNavigation/MobileNavigation";
import Navigation from "../Navigation/Navigation";
import LanguageSwitcher from "../ui/LanguageSwitcher/LanguageSwitcher";
import ThemeController from "../ui/ThemeController/ThemeController";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] backdrop-blur-[6px]">
      <div className="container flex items-center justify-between py-3">
        <h2 className=" text-2xl font-semibold text-glow ">MY PORTFOLIO</h2>
        <div className="flex items-center gap-4">
          <ThemeController />
          <LanguageSwitcher />
        </div>
        <Navigation className="hidden md:flex gap-4 text-lg font-medium py-[26px]" />
        <MobileNavigation />
      </div>
    </header>
  );
};

export default Header;
