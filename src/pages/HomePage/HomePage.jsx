import myPhoto from "../../assets/images/MyFoto.jpg";

import { Motion } from "../../animations/reveal/Motion";
import { zoomIn } from "../../animations/reveal/variants";
import { FloatingCircle } from "../../animations/motion/floating";

const HomePage = () => {
  return (
    <section
      id="home"
      className="h-screen bg-[#020e26] py-20 relative overflow-hidden"
    >
      <div className="container grid gap-[60px] justify-items-center">
        {/* BACKGROUND ANIMATION */}
        <FloatingCircle
          className="absolute top-[-80px] left-[-80px] w-[180px] h-[180px] bg-cyan-400/10 rounded-full blur-xl"
          x={200}
          y={200}
        />

        <FloatingCircle
          className="absolute bottom-[-80px] right-[-80px] w-[180px] h-[180px] bg-blue-500/10 rounded-full blur-xl"
          x={-200}
          y={-200}
        />

        {/* CONTENT */}
        <Motion delay={0}>
          <div className="bg-white/5 border-2 border-cyan-400/20 rounded-[20px] p-10 shadow-[0_0_25px_rgba(0,255,255,0.08)] ">
            <Motion delay={0.1}>
              <h1 className="title-shadow font-semibold text-center text-2xl mb-[15px] whitespace-nowrap">
                Hi, I`m Dmytro Yeromin
              </h1>
            </Motion>

            <Motion delay={0.3}>
              <p className="font-medium text-center text-lg text-[#00ffff] mb-10">
                Front-end Developer
              </p>
            </Motion>

            <Motion delay={0.6}>
              <div className="flex justify-center">
                <button className="bg-[#03101A] border-2 border-[#00ffff] px-[25px] py-[10px] rounded-full">
                  View Resume
                </button>
              </div>
            </Motion>
          </div>
        </Motion>

        <Motion variant={zoomIn} delay={0.9}>
          <div className="avatar mx-auto">
            <div className="ring-4 ring-[#094165] w-44 rounded-full shadow-[0_0_25px_#fff,_0_0_40px_rgba(0,191,255,0.4)]">
              <img src={myPhoto} alt="My photo" />
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default HomePage;
