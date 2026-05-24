import { Motion } from "../../animations/reveal/Motion";
import { zoomIn } from "../../animations/reveal/variants";

import myPhoto from "../../assets/images/MyFoto.jpg";

import LinkedIn from "../../assets/images/linkedin.png";
import Telegram from "../../assets/images/telegram.png";
import GitHub from "../../assets/images/github.png";
import Navigation from "../Navigation/Navigation";

const Footer = () => {
  return (
    <footer className=" bg-[rgb(3,10,20)] text-center shadow-[0_-5px_25px_rgba(100,255,218,0.2)] border-t-2 border-white">
      <div className="container py-16">
        <div className="grid gap-8">
          <div className="">
            <Motion variant={zoomIn} delay={0.9}>
              <div className="avatar mx-auto w-24 h-24 mb-6">
                <div className=" ring-4 ring-[#094165] w-44 rounded-full shadow-[0_0_25px_#fff,_0_0_40px_rgba(0,191,255,0.4)] md:w-48">
                  <img src={myPhoto} alt="My photo" />
                </div>
              </div>
            </Motion>
            <h3 className="text-xl title-shadow mb-3">Dmytro Yeromin</h3>
            <p className="text-[0.95rem] text-[rgb(207,216,220)]">
              Frontend Developer
            </p>
          </div>

          <div className="">
            <h4 className="text-lg title-shadow mb-3">Connect with me</h4>

            <div className="flex gap-4 justify-center">
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
          </div>

          <div className="mb-10">
            <h4 className="text-lg title-shadow mb-3">Quick Links</h4>
            <Navigation className="grid gap-2" />
          </div>
        </div>

        <div className="pt-[15px] text-[0.85rem] text-[rgb(170,170,170)] tracking-[1px] border-t border-[rgb(35,75,134)]">
          <p>Copyright &copy; 202 Dmytro Yeromin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
