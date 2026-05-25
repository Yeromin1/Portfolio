import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Motion } from "../../animations/reveal/Motion";
import { zoomIn } from "../../animations/reveal/variants";

import myPhoto from "../../assets/images/MyFoto.jpg";

const AboutPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-section">
      <div className="container py-20">
        <div className="flex flex-col items-center justify-center gap-8 mb-9">
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
            <div className="grid gap-1 justify-items-center">
              <h2 className="text-4xl font-semibold title-shadow mb-3">
                {t("about.title")}
              </h2>
              <p className="text-lg leading-relaxed">{t("about.desc1")}</p>

              {isOpen && (
                <>
                  <p className="text-lg leading-relaxed">{t("about.desc2")}</p>
                  <p className="text-lg leading-relaxed mb-4">
                    {t("about.desc3")}
                  </p>
                </>
              )}

              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="btn py-[10px] px-[25px]"
              >
                {isOpen ? t("about.readLess") : t("about.readMore")}
              </button>
            </div>
          </Motion>
        </div>

        {/* ✨ accordion*/}
        <Motion delay={0.4}>
          <div className="flex flex-col gap-5">
            <details
              className="collapse  shadow-[0_2px_10px_#64ffda]"
              name="my-accordion-det-1"
            >
              <summary className="p-4 font-semibold">{t("about.q1")}</summary>
              <div className="collapse-content text-sm leading-relaxed tracking-wide">
                {t("about.a1")}
              </div>
            </details>

            <details
              className="collapse shadow-[0_2px_10px_#64ffda]"
              name="my-accordion-det-1"
            >
              <summary className="p-4 font-semibold">{t("about.q2")}</summary>
              <div className="collapse-content text-sm leading-relaxed tracking-wide">
                {t("about.a2")}
              </div>
            </details>

            <details
              className="collapse shadow-[0_2px_10px_#64ffda]"
              name="my-accordion-det-1"
            >
              <summary className="p-4 font-semibold">{t("about.q3")}</summary>
              <div className="collapse-content text-sm leading-relaxed tracking-wide">
                {t("about.a3")}
              </div>
            </details>

            <details
              className="collapse shadow-[0_2px_10px_#64ffda]"
              name="my-accordion-det-1"
            >
              <summary className="p-4 font-semibold">{t("about.q4")}</summary>
              <div className="collapse-content text-sm leading-relaxed tracking-wide">
                {t("about.a4")}
              </div>
            </details>

            <details
              className="collapse shadow-[0_2px_10px_#64ffda]"
              name="my-accordion-det-1"
            >
              <summary className="p-4 font-semibold">{t("about.q5")}</summary>
              <div className="collapse-content text-sm leading-relaxed tracking-wide">
                {t("about.a5")}
              </div>
            </details>
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default AboutPage;
