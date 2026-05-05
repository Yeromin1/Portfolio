import MobileNavigation from "../MobileNavigation/MobileNavigation";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] backdrop-blur-[6px]">
      <div className="container flex items-center justify-between py-[15px]">
        <h1 className=" text-3xl font-semibold text-glow">MY PORTFOLIO</h1>
        <Navigation />
        <MobileNavigation />
      </div>
    </header>
  );
};

export default Header;
