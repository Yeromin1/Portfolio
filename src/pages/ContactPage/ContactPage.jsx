import { useTranslation } from "react-i18next";

import { Motion } from "../../animations/reveal/Motion";

import LinkedIn from "../../assets/images/linkedin.png";
import Telegram from "../../assets/images/telegram.png";
import GitHub from "../../assets/images/github.png";

const ContactPage = () => {
  const { t } = useTranslation("contact");

  return (
    <section id="contact" className="bg">
      <div className="container py-20 md:py-28">
        <Motion delay={0.1}>
          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(0,255,255,0.2)] rounded-[20px] shadow-[0_0_30px_rgba(0,255,255,0.08)] py-[60px] px-10 md:w-[90%] md:mx-auto">
            <Motion delay={0.1}>
              <h2 className=" text-center text-[42px] font-bold text-[#00ffff] mb-4 tracking-[1px]">
                {t("title")}
              </h2>
            </Motion>

            <Motion delay={0.3}>
              <p className="text-[#b8c2cc] leading-relaxed mb-9 text-center">
                {t("description")}
              </p>
            </Motion>

            <div className="flex gap-4 justify-center mb-6 md:gap-6 md:mb-8 lg:gap-8 lg:mb-10">
              <Motion delay={0.4}>
                <a
                  className="w-[60px] h-[60px] bg-[rgba(0,255,255,0.06)] border border-[rgba(0,255,255,0.3)] rounded-[15px] flex justify-center items-center transition duration-300 ease-in-out backdrop-blur-[10px] md:hover:scale-115 md:hover:shadow-[0_0_10px_#64ffda,_0_0_20px_#00bfff]"
                  href="http://www.linkedin.com/in/dmytro-yeromin-2a2933338"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="">
                    <img
                      src={LinkedIn}
                      alt="LinkedIn logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </a>
              </Motion>

              <Motion delay={0.5}>
                <a
                  className="w-[60px] h-[60px] bg-[rgba(0,255,255,0.06)] border border-[rgba(0,255,255,0.3)] rounded-[15px] flex justify-center items-center transition duration-300 ease-in-out backdrop-blur-[10px] md:hover:scale-115 md:hover:shadow-[0_0_10px_#64ffda,_0_0_20px_#00bfff]"
                  href="http://t.me/dmytro_yeromin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Telegram}
                    alt="Telegram logo"
                    className="w-full h-full object-cover"
                  />
                </a>
              </Motion>

              <Motion delay={0.6}>
                <a
                  className="w-[60px] h-[60px] bg-[rgba(0,255,255,0.06)] border border-[rgba(0,255,255,0.3)] rounded-[15px] flex justify-center items-center transition duration-300 ease-in-out backdrop-blur-[10px] md:hover:scale-115 md:hover:shadow-[0_0_10px_#64ffda,_0_0_20px_#00bfff]"
                  href="https://github.com/Yeromin1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={GitHub}
                    alt="GitHub logo"
                    className="w-18 h-18 object-cover"
                  />
                </a>
              </Motion>
            </div>

            <Motion delay={0.7}>
              <div className="flex justify-center">
                <a
                  className="px-[35px] py-[14px] bg-[linear-gradient(135deg,_#00ffff,_#00c2ff)] text-[#030A14] font-semibold rounded-[30px] transition-all duration-300 ease-in-out shadow-[0_0_20px_rgba(0,255,255,0.4)] flex items-center md:hover:scale-115 md:hover:shadow-[0_0_20px_#64ffda,_0_0_35px_#00bfff]"
                  href="mailto:yeromin.dmitriy@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("linkText")}
                </a>
              </div>
            </Motion>
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default ContactPage;
