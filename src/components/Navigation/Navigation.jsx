import Modal from "../Modal/Modal";

const Navigation = () => {
  const scrollToSection = (id) => {
    window.location.hash = id;
  };
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2>My Portfolio</h2>
      </div>
      <nav className="flex gap-4">
        <button onClick={() => scrollToSection("home")}>Home</button>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("projects")}>Projects</button>
        <button onClick={() => scrollToSection("certificates")}>
          Certificates
        </button>
        <button onClick={() => scrollToSection("skills")}>Skills</button>
        <button onClick={() => scrollToSection("experience")}>
          Experience
        </button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
      </nav>
      <Modal />
    </div>
  );
};

export default Navigation;
