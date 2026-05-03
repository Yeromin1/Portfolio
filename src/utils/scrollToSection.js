const scrollToSection = (id) => {
  const el = document.getElementById(id);

  if (!el) return;
  window.history.pushState(null, "", `#${id}`);
  el.scrollIntoView({
    block: "start",
  });
};

export default scrollToSection;
