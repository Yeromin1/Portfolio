const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    // behavior: "smooth",
  });
};

export default scrollToSection;
