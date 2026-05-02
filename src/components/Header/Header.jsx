import Modal from "../Modal/Modal";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <h2>My Portfolio</h2>
      <Navigation />
      <Modal />
    </header>
  );
};

export default Header;
