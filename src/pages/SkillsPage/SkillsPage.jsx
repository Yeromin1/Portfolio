import { Motion } from "../../animations/reveal/Motion";
import SoftSkillsTimeline from "../../components/SkillsTimeline/SoftSkillsTimeline";
import TechSkillsTimeline from "../../components/SkillsTimeline/TechSkillsTimeline";

import { techSkills, softSkills } from "../../data/skills";

const SkillsPage = () => {
  return (
    <section id="skills" className="bg-section overflow-hidden">
      <div className="container py-20">
        <Motion delay={0.1}>
          <h2 className="text-4xl font-semibold title-shadow text-center mb-8">
            My Skills
          </h2>
        </Motion>

        <div className="flex flex-col md:flex-row gap-10 justify-center">
          <div>
            <Motion delay={0.3}>
              <h4 className="text-center font-semibold mb-3 [text-shadow:0_0_10px_#fff,_0_0_25px_#234b86]">
                Tech Skills
              </h4>
            </Motion>

            <Motion delay={0.5}>
              <TechSkillsTimeline skills={techSkills} />
            </Motion>
          </div>

          <div>
            <Motion delay={0.3}>
              <h4 className="text-center font-semibold mb-3 [text-shadow:0_0_10px_#fff,_0_0_25px_#234b86]">
                Soft Skills
              </h4>
            </Motion>

            <Motion delay={0.5}>
              <SoftSkillsTimeline skills={softSkills} />
            </Motion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
