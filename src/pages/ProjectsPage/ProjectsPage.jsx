import { useRef } from "react";
import { useTranslation } from "react-i18next";

import { Motion } from "../../animations/reveal/Motion";
import { fadeUp } from "../../animations/reveal/variants";

import projects from "../../data/projects";
import { useCarouselScroll } from "../../hooks/useCarouselScroll";

const ProjectsPage = () => {
  const { t } = useTranslation("projects");
  const carouselRef = useRef(null);

  const { scrollNext, scrollPrev } = useCarouselScroll(carouselRef);

  return (
    <section id="projects" className="bg">
      <div className="container pt-20 pb-16 md:pt-24 lg:pt-[118px]">
        <Motion delay={0.1}>
          <h2 className="text-4xl font-semibold title text-center mb-8 md:text-[38px]">
            {t("title")}
          </h2>
        </Motion>

        <div className="relative">
          {/* CAROUSEL */}
          <div ref={carouselRef} className="flex overflow-x-auto w-full">
            {projects.map((project) => (
              <div
                key={project.id}
                className="carousel-item relative p-4 w-[343px] flex-shrink-0"
              >
                <Motion variant={fadeUp} delay={0.3}>
                  <div className="bg-[var(--bg-card-project)] p-5 rounded-[15px] shadow-[var(--box-shadow-card)] flex flex-col h-full duration-300 md:hover:scale-101 cart-shadow-hover">
                    <figure className="w-full aspect-[16/9] overflow-hidden rounded-xl mb-4">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </figure>

                    <div className="flex flex-col flex-1 text-center justify-between">
                      <div className="mb-4">
                        <h4 className="card-title mb-2 justify-center text-2xl text-[var(--text-position)]">
                          {t(`projects.${project.key}.title`)}
                        </h4>

                        <p className="text-sm leading-relaxed text-[var(--text-card)]">
                          {t(`projects.${project.key}.description`)}
                        </p>
                      </div>

                      <div className="flex justify-between w-full">
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
              </div>
            ))}
          </div>

          <div className="hidden md:flex absolute left-5 right-5 top-1/2 -translate-y-1/2 justify-between">
            <button
              onClick={scrollPrev}
              className="btn-circle w-[30px] h-[30px] border border-[var(--border-btn-projects)] duration-300 md:hover:scale-115 cart-shadow-hover"
            >
              ❮
            </button>

            <button
              onClick={scrollNext}
              className="btn-circle w-[30px] h-[30px] border border-[var(--border-btn-projects)] duration-300 md:hover:scale-115 cart-shadow-hover"
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
