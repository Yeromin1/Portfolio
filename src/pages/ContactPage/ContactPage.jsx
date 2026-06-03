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
          <div className="bg-[var(--bg-card-contact)] border border-[var(--border-btn-header)] rounded-[20px] shadow-[var(--box-shadow-card-contact)] py-[60px] px-10 md:w-[90%] md:mx-auto">
            <Motion delay={0.1}>
              <h2 className=" text-center text-[42px] font-bold text-[var(--text-position)] mb-4 tracking-[1px]">
                {t("title")}
              </h2>
            </Motion>

            <Motion delay={0.3}>
              <p className="text-[var(--text-contact)] leading-relaxed mb-9 text-center">
                {t("description")}
              </p>
            </Motion>

            <div className="flex gap-4 justify-center mb-6 md:gap-6 md:mb-8 lg:gap-8 lg:mb-10">
              <Motion delay={0.4}>
                <a
                  className="w-[60px] h-[60px] bg-[var(--bg-contact-network)] border border-[var(--border-btn-projects)] rounded-[15px] flex justify-center items-center transition duration-300 ease-in-out backdrop-blur-[10px] md:hover:scale-115 cart-shadow-hover"
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
                  className="w-[60px] h-[60px] bg-[var(--bg-contact-network)] border border-[var(--border-btn-projects)] rounded-[15px] flex justify-center items-center transition duration-300 ease-in-out backdrop-blur-[10px] md:hover:scale-115 cart-shadow-hover"
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
                  className="w-[60px] h-[60px] bg-[var(--bg-contact-network)] border border-[var(--border-btn-projects)] rounded-[15px] flex justify-center items-center transition duration-300 ease-in-out backdrop-blur-[10px] md:hover:scale-115 cart-shadow-hover"
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
                  className="px-[35px] py-[14px] [background:var(--bg-contact-link)] text-[#030A14] font-semibold rounded-[30px] transition-all duration-300 ease-in-out shadow-[var(--box-shadow-link-contact)] flex items-center md:hover:scale-115 shadow-contact-link"
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
