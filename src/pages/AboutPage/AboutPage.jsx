import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Motion } from "../../animations/reveal/Motion";
import { zoomIn } from "../../animations/reveal/variants";

import myPhoto from "../../assets/images/MyFoto.jpg";

const AboutPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("about");

  return (
    <section id="about" className="bg">
      <div className="container pt-24 pb-16 md:pt-28 lg:pt-[138px]">
        <div className="flex flex-col items-center justify-center gap-8 mb-9 md:mb-11 lg:mb-14 ">
          <Motion variant={zoomIn} delay={0.1}>
            <div className=" rounded-[20px] border-4 border-[#64ffda] shadow-[0_0_30px_#64ffda,0_0_60px_#00bfff_inset] transition-transform transition-shadow duration-500 ease-in-out w-full max-w-[250px] aspect-square overflow-hidden">
              <img
                src={myPhoto}
                alt="My photo"
                className="w-full h-full object-cover"
              />
            </div>
          </Motion>

          <Motion delay={0.3}>
            <div className="grid gap-1  md:gap-2 md:w-[90%] md:mx-auto">
              <h2 className="text-4xl font-semibold title mb-3 mx-auto md:text-[38px]">
                {t("title")}
              </h2>
              <p className="text-lg leading-relaxed md:text-xl md:text-left">
                {t("intro")}
              </p>

              {isOpen && (
                <>
                  <p className="text-lg leading-relaxed md:text-xl">
                    {t("description")}
                  </p>
                  <p className="text-lg leading-relaxed md:text-xl">
                    {t("goal")}
                  </p>
                </>
              )}

              <div className="mt-4 md:text-base mx-auto">
                <button
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="btn py-[10px] px-[25px]"
                >
                  {isOpen ? t("readLess") : t("readMore")}
                </button>
              </div>
            </div>
          </Motion>
        </div>

        {/* ✨ accordion*/}
        <Motion delay={0.4}>
          <div className="flex flex-col gap-5 md:w-[90%] md:mx-auto md:gap-6 lg:gap-7">
            <details
              className="collapse  shadow-[0_2px_10px_#64ffda]"
              name="my-accordion-det-1"
            >
              <summary className="p-4 font-semibold md:font-bold">
                {t("faq.uiApproach.question")}
              </summary>
              <div className="collapse-content text-sm leading-relaxed tracking-wide md:text-base">
                {t("faq.uiApproach.answer")}
              </div>
            </details>

            <details
              className="collapse shadow-[0_2px_10px_#64ffda]"
              name="my-accordion-det-1"
            >
              <summary className="p-4 font-semibold md:font-bold">
                {t("faq.technologies.question")}
              </summary>
              <div className="collapse-content text-sm leading-relaxed tracking-wide md:text-base">
                {t("faq.technologies.answer")}
              </div>
            </details>

            <details
              className="collapse shadow-[0_2px_10px_#64ffda]"
              name="my-accordion-det-1"
            >
              <summary className="p-4 font-semibold md:font-bold">
                {t("faq.problemSolving.question")}
              </summary>
              <div className="collapse-content text-sm leading-relaxed tracking-wide md:text-base">
                {t("faq.problemSolving.answer")}
              </div>
            </details>

            <details
              className="collapse shadow-[0_2px_10px_#64ffda]"
              name="my-accordion-det-1"
            >
              <summary className="p-4 font-semibold md:font-bold">
                {t("faq.fitRole.question")}
              </summary>
              <div className="collapse-content text-sm leading-relaxed tracking-wide md:text-base">
                {t("faq.fitRole.answer")}
              </div>
            </details>

            <details
              className="collapse shadow-[0_2px_10px_#64ffda]"
              name="my-accordion-det-1"
            >
              <summary className="p-4 font-semibold md:font-bold">
                {t("faq.teamWork.question")}
              </summary>
              <div className="collapse-content text-sm leading-relaxed tracking-wide md:text-base">
                {t("faq.teamWork.answer")}
              </div>
            </details>
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default AboutPage;
