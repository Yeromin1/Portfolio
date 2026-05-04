import MobileNavigation from "../MobileNavigation/MobileNavigation";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className="">
      <div className="fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-[10%] py-[15px] backdrop-blur-[6px]">
        <h1 className=" text-3xl font-semibold text-glow">My Portfolio</h1>
        <Navigation />
        <MobileNavigation />
      </div>
    </header>
  );
};

export default Header;
