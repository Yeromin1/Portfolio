import { motion } from "framer-motion";
import myPhoto from "../../assets/images/MyFoto.jpg";

const HomePage = () => {
  return (
    <section id="home" className="h-screen bg-[#020e26] pt-[110px] pb-[80px]">
      <div className="container grid gap-[60px]">
        <div className="bg-white/5 border-2 border-cyan-400/20 rounded-[20px] p-10 shadow-[0_0_25px_rgba(0,255,255,0.08)]">
          {/* TITLE ANIMATION */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="title-shadow font-semibold text-center text-2xl mb-[15px]"
          >
            Hi, I`m Dmytro Yeromin
          </motion.h1>

          {/* SUBTITLE ANIMATION */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-medium text-center text-lg text-[#00ffff] mb-10"
          >
            Front-end Developer
          </motion.p>

          {/* BUTTON ANIMATION */}
          <div className="flex justify-center">
            <motion.button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1yhBYrd4YI7FoovkrzbuVrOFGE8DQcb9D/view?usp=drive_link",
                )
              }
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                boxShadow: [
                  "0 0 10px #234b86",
                  "0 0 25px #00ffff",
                  "0 0 10px #234b86",
                ],
              }}
              transition={{
                opacity: { delay: 0.6, duration: 0.6 },
                y: { delay: 0.6, duration: 0.6 },
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 35px #00ffff",
              }}
              className="bg-[#03101A] border-2 border-[#00ffff] px-[25px] py-[10px] rounded-full hover:bg-white hover:text-black hover:scale-105"
            >
              View Resume
            </motion.button>
          </div>
        </div>

        {/* AVATAR ANIMATION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="avatar mx-auto"
        >
          <div className="ring-4 ring-[#094165] ring-offset-base-100 w-44 rounded-full ring-2 shadow-[0_0_25px_#fff,_0_0_40px_rgba(0,191,255,0.4)]">
            <img src={myPhoto} alt="My photo" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePage;
