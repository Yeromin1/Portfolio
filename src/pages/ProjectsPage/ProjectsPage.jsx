import { useRef } from "react";
import { useTranslation } from "react-i18next";

import { Motion } from "../../animations/reveal/Motion";
import { fadeUp } from "../../animations/reveal/variants";

import projects from "../../data/projects";
import { useAutoCarousel } from "../../hooks/useAutoCarousel";

const ProjectsPage = () => {
  const { t } = useTranslation("projects");
  const carouselRef = useRef(null);

  useAutoCarousel(carouselRef);

  return (
    <section id="projects" className="bg-section">
      <div className="container py-20">
        <Motion delay={0.1}>
          <h2 className="text-4xl font-semibold title-shadow text-center mb-8">
            {t("title")}
          </h2>
        </Motion>

        <div ref={carouselRef} className="flex  overflow-x-auto w-full">
          {projects.map((project, index) => {
            const prevSlide = index === 0 ? projects.length : index;

            const nextSlide = index === projects.length - 1 ? 1 : index + 2;

            return (
              <div
                key={project.id}
                id={`slide${index + 1}`}
                className="carousel-item relative p-4 w-[343px] flex-shrink-0"
              >
                <Motion variant={fadeUp} delay={0.3}>
                  <div className="bg-[#112240] p-5 rounded-[15px] shadow-[0_0_20px_rgba(35,75,134,0.4)] flex flex-col h-full ">
                    <figure className="w-full aspect-[16/9] overflow-hidden rounded-xl mb-4">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </figure>

                    <div className="flex flex-col flex-1 text-center justify-between">
                      <div className="mb-4 ">
                        <h4 className="card-title mb-2 justify-center text-2xl text-[#64ffda]">
                          {t(`projects.${project.key}.title`)}
                        </h4>
                        <p className="text-sm leading-relaxed text-gray-300">
                          {t(`projects.${project.key}.description`)}
                        </p>
                      </div>

                      <div className="flex justify-between w-full ">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="btn py-2 px-3"
                        >
                          {t("githubCode")}
                        </a>

                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="btn py-2 px-3"
                        >
                          {t("livePreview")}
                        </a>
                      </div>
                    </div>
                  </div>
                </Motion>

                <div className="hidden md:flex absolute left-5 right-5 top-1/2 -translate-y-1/2 justify-between">
                  <a href={`#slide${prevSlide}`} className="btn-circle">
                    ❮
                  </a>

                  <a href={`#slide${nextSlide}`} className="btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
