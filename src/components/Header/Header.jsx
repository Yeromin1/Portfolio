import MobileNavigation from "../MobileNavigation/MobileNavigation";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header
      className="fixed top-0 z-50 flex items-center justify-between px-4 py-3  backdrop-blur-xl 

      "
    >
      <h2 className="text-white">My Portfolio</h2>
      <Navigation />
      <MobileNavigation />
    </header>
  );
};

export default Header;
