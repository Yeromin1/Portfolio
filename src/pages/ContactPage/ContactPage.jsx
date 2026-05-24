import { Motion } from "../../animations/reveal/Motion";

import LinkedIn from "../../assets/images/linkedin.png";
import Telegram from "../../assets/images/telegram.png";
import GitHub from "../../assets/images/github.png";

const ContactPage = () => {
  return (
    <section id="contact" className="bg-section">
      <div className="container py-20 ">
        <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(0,255,255,0.2)] rounded-[20px] shadow-[0_0_30px_rgba(0,255,255,0.08)] py-[60px] px-10">
          <Motion delay={0.1}>
            <h2 className=" text-center text-[42px] font-bold text-[#00ffff] mb-4 tracking-[1px]">
              Get in Touch
            </h2>
          </Motion>

          <Motion delay={0.3}>
            <p className="text-[#b8c2cc] leading-relaxed mb-9 text-center">
              I`m always open to discuss your project or collaboration. Connect
              with me through social media or send me a message!
            </p>
          </Motion>

          <div className="flex gap-4 justify-center mb-6">
            <Motion delay={0.4}>
              <a
                className="w-[60px] h-[60px] bg-[rgba(0,255,255,0.06)] border border-[rgba(0,255,255,0.3)] rounded-[15px] flex justify-center items-center transition duration-300 ease-in-out backdrop-blur-[10px]"
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
                className="w-[60px] h-[60px] bg-[rgba(0,255,255,0.06)] border border-[rgba(0,255,255,0.3)] rounded-[15px] flex justify-center items-center transition duration-300 ease-in-out backdrop-blur-[10px]"
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
                className="w-[60px] h-[60px] bg-[rgba(0,255,255,0.06)] border border-[rgba(0,255,255,0.3)] rounded-[15px] flex justify-center items-center transition duration-300 ease-in-out backdrop-blur-[10px]"
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
                className="inline-block px-[35px] py-[14px] bg-[linear-gradient(135deg,_#00ffff,_#00c2ff)] text-[#030A14] font-semibold rounded-[30px] transition-all duration-300 ease-in-out shadow-[0_0_20px_rgba(0,255,255,0.4)] "
                href="mailto:yeromin.dmitriy@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Contact Me
              </a>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
