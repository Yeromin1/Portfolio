import { useTranslation } from "react-i18next";

import { Motion } from "../../animations/reveal/Motion";

import SoftSkillsTimeline from "../../components/SkillsTimeline/SoftSkillsTimeline";
import TechSkillsTimeline from "../../components/SkillsTimeline/TechSkillsTimeline";

import { techSkills, softSkills } from "../../data/skills";

const SkillsPage = () => {
  const { t } = useTranslation("skills");

  return (
    <section id="skills" className="bg-section overflow-hidden">
      <div className="container py-20 md:py-24">
        <Motion delay={0.1}>
          <h2 className="text-4xl font-semibold title-shadow text-center mb-8 md:text-[38px]">
            {t("title")}
          </h2>
        </Motion>

        <div className="flex flex-col md:flex-row gap-10 justify-center">
          <div>
            <Motion delay={0.3}>
              <h4 className="text-center text-lg font-semibold mb-3 [text-shadow:0_0_10px_#fff,_0_0_25px_#234b86] md:text-xl">
                {t("tech.title")}
              </h4>
            </Motion>

            <Motion delay={0.5}>
              <TechSkillsTimeline
                skills={techSkills.map((skill) => ({
                  ...skill,
                  title: t(`tech.${skill.key}`),
                }))}
              />
            </Motion>
          </div>

          <div>
            <Motion delay={0.3}>
              <h4 className="text-center text-lg font-semibold mb-3 [text-shadow:0_0_10px_#fff,_0_0_25px_#234b86] md:text-xl">
                {t("soft.title")}
              </h4>
            </Motion>

            <Motion delay={0.5}>
              <SoftSkillsTimeline
                skills={softSkills.map((skill) => ({
                  ...skill,
                  title: t(`soft.${skill.key}`),
                }))}
              />
            </Motion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
