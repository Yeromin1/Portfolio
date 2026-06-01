import { useTranslation } from "react-i18next";

import myPhoto from "../../assets/images/MyFoto.jpg";
import myPhotoRetro from "../../assets/images/MyFotoRetro.jpg";

import { Motion } from "../../animations/reveal/Motion";
import { zoomIn } from "../../animations/reveal/variants";
import { FloatingCircle } from "../../animations/motion/floating";
import { useTheme } from "../../hooks/useTheme";

const HomePage = () => {
  const { t } = useTranslation("home");

  const { theme } = useTheme();

  return (
    <section
      id="home"
      className="h-screen bg-[var(--bg-home)] pt-20 pb-16 relative overflow-hidden md:pt-24 md:pb-10 lg:pt-28"
    >
      <div className="container grid gap-[60px] justify-items-center md:gap-8">
        {/* BACKGROUND ANIMATION */}
        <FloatingCircle
          className="absolute top-[-80px] left-[-80px] w-[180px] h-[180px] bg-[var(--bg-animation-home-top)] rounded-full blur-xl"
          x={200}
          y={200}
        />

        <FloatingCircle
          className="absolute bottom-[-80px] right-[-80px] w-[180px] h-[180px] bg-[var(--bg-animation-home-bottom)] rounded-full blur-xl"
          x={-200}
          y={-200}
        />

        {/* CONTENT */}
        <Motion delay={0}>
          <div className="bg-[var(--bg-card)] border-2 border-[var(--border-btn-header)] rounded-[20px] p-10 px-7 shadow-[0_0_25px_rgba(0,255,255,0.08)] md:px-14 md:py-10 ">
            <Motion delay={0.1}>
              <h1 className="title font-medium text-center text-2xl mb-[15px] whitespace-nowrap md:text-[33px] md:leading-[1.41] md:text-4xl lg:text-5xl">
                {t("title")}
              </h1>
            </Motion>

            <Motion delay={0.3}>
              <p className="font-medium text-center text-lg text-[var(--text-position)] mb-10 md:font-semibold md:text-2xl  lg:text-3xl">
                {t("position")}
              </p>
            </Motion>

            <Motion delay={0.6}>
              <div className="flex justify-center">
                <a
                  href="https://drive.google.com/file/d/1h4-qouIQ6R3Qy-SPucQKDTiGifpGJXNj/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                  className="btn px-[25px] py-[10px] md:text-base lg:text-lg"
                >
                  {t("viewResume")}
                </a>
              </div>
            </Motion>
          </div>
        </Motion>

        <Motion variant={zoomIn} delay={0.9}>
          <div className="avatar mx-auto">
            <div className="shadow-[var(--box-shadow-home-img)] w-44 rounded-full md:w-48">
              <img
                src={theme === "retro" ? myPhotoRetro : myPhoto}
                alt="My photo"
              />
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default HomePage;
