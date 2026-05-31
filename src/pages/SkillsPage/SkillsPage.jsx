import { useTranslation } from "react-i18next";

import { Motion } from "../../animations/reveal/Motion";

import SoftSkillsTimeline from "../../components/SkillsTimeline/SoftSkillsTimeline";
import TechSkillsTimeline from "../../components/SkillsTimeline/TechSkillsTimeline";

import { techSkills, softSkills } from "../../data/skills";
import useTranslateSkills from "../../hooks/useTranslateSkills ";

const SkillsPage = () => {
  const { t } = useTranslation("skills");

  const translatedSoftSkills = useTranslateSkills(softSkills, "soft");
  const translatedTechSkills = useTranslateSkills(techSkills, "tech");

  return (
    <section id="skills" className="bg overflow-hidden">
      <div className="container pt-20 pb-16 md:pt-24 lg:pt-[118px]">
        <Motion delay={0.1}>
          <h2 className="text-4xl font-semibold title text-center mb-8 md:text-[38px]">
            {t("title")}
          </h2>
        </Motion>

        <div className="flex flex-col md:flex-row gap-10 justify-center md:gap-12 lg:gap-14">
          <div>
            <Motion delay={0.3}>
              <h4 className="text-center text-lg font-semibold mb-3 [text-shadow:0_0_10px_#fff,_0_0_25px_#234b86] md:text-xl">
                {t("tech.title")}
              </h4>
            </Motion>

            <Motion delay={0.5}>
              <TechSkillsTimeline skills={translatedTechSkills} />
            </Motion>
          </div>

          <div>
            <Motion delay={0.3}>
              <h4 className="text-center text-lg font-semibold mb-3 [text-shadow:0_0_10px_#fff,_0_0_25px_#234b86] md:text-xl">
                {t("soft.title")}
              </h4>
            </Motion>

            <Motion delay={0.5}>
              <SoftSkillsTimeline skills={translatedSoftSkills} />
            </Motion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
