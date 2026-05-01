import AboutPage from "../../pages/AboutPage/AboutPage";
import CertificatesPage from "../../pages/CertificatesPage/CertificatesPage";
import ContactPage from "../../pages/ContactPage/ContactPage";
import ExperiencePage from "../../pages/ExperiencePage/ExperiencePage";
import HomePage from "../../pages/HomePage/HomePage";
import ProjectsPage from "../../pages/ProjectsPage/ProjectsPage";
import SkillsPage from "../../pages/SkillsPage/SkillsPage";

const Main = () => {
  return (
    <main>
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <CertificatesPage />
      <SkillsPage />
      <ExperiencePage />
      <ContactPage />
    </main>
  );
};

export default Main;
