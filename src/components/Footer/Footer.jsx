import { Motion } from "../../animations/reveal/Motion";
import { zoomIn } from "../../animations/reveal/variants";
import Navigation from "../Navigation/Navigation";

import myPhoto from "../../assets/images/MyFoto.jpg";

import LinkedIn from "../../assets/images/footerLinkedin.png";
import Telegram from "../../assets/images/footerTelegram.png";
import Instagram from "../../assets/images/footerInstagram.png";
import GitHub from "../../assets/images/footerGithub.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <footer className=" bg-[rgb(3,10,20)] text-center shadow-[0_-5px_25px_rgba(100,255,218,0.2)] border-t-2 border-white">
      <div className="container py-16 pb-6">
        <div className="grid gap-8 md:flex md:justify-around ">
          <div className="">
            <Motion variant={zoomIn} delay={0.5}>
              <div className="avatar mx-auto w-24 h-24 mb-6">
                <div className=" ring-4 ring-[#094165] w-44 rounded-full shadow-[0_0_25px_#fff,_0_0_40px_rgba(0,191,255,0.4)] md:w-48">
                  <img src={myPhoto} alt="My photo" />
                </div>
              </div>
            </Motion>
            <Motion delay={0.1}>
              <h3 className="text-xl title-shadow mb-3">{t("title")}</h3>
            </Motion>
            <Motion delay={0.3}>
              <p className="text-[0.95rem] text-[rgb(207,216,220)]">
                {t("position")}
              </p>
            </Motion>
          </div>

          <div className="">
            <Motion delay={0.4}>
              <h4 className="text-lg title-shadow mb-3 md:text-xl lg:mb-5 xl:mb-6 ">
                {t("connectWithMe")}
              </h4>
            </Motion>

            <div className="flex gap-4 justify-center lg:gap-6">
              <Motion delay={0.5}>
                <a
                  className="inline-block transition-all duration-300 md:hover:scale-120"
                  href="http://www.linkedin.com/in/dmytro-yeromin-2a2933338"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="">
                    <img src={LinkedIn} alt="LinkedIn logo" className="" />
                  </div>
                </a>
              </Motion>

              <Motion delay={0.6}>
                <a
                  className=""
                  href="http://t.me/dmytro_yeromin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Telegram}
                    alt="Telegram logo"
                    className="inline-block transition-all duration-300 md:hover:scale-120"
                  />
                </a>
              </Motion>

              <Motion delay={0.7}>
                <a
                  className=""
                  href="https://www.instagram.com/d.m.i.t.r.i.y_5?igsh=MWJlN2ZpZnE1eTh4eQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Instagram}
                    alt="Instagram logo"
                    className="inline-block transition-all duration-300 md:hover:scale-120"
                  />
                </a>
              </Motion>

              <Motion delay={0.8}>
                <a
                  className=""
                  href="https://github.com/Yeromin1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={GitHub}
                    alt="GitHub logo"
                    className="inline-block transition-all duration-300 md:hover:scale-120"
                  />
                </a>
              </Motion>
            </div>
          </div>

          <div className="mb-10 md:mb-6">
            <Motion delay={0.2}>
              <h4 className="text-lg title-shadow mb-3 md:text-xl">
                {t("quickLinks")}
              </h4>
            </Motion>
            <Motion delay={0.4}>
              <Navigation
                className="grid gap-2 md:gap-3"
                buttonClassName="nav"
              />
            </Motion>
          </div>
        </div>

        <Motion delay={0.6}>
          <div className="pt-[15px] text-[0.85rem] text-[rgb(170,170,170)] tracking-[1px] border-t border-[rgb(35,75,134)]">
            <p>
              {t("copyright")} &copy; 2026 {t("title")}
            </p>
          </div>
        </Motion>
      </div>
    </footer>
  );
};

export default Footer;
