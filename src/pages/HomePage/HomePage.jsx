import myPhoto from "../../assets/images/MyFoto.jpg";

const HomePage = () => {
  return (
    <section id="home" className="bg-[#020e26] pt-[80px]">
      <div className="container grid gap-[50px]">
        <div className="bg-white/5 border-2 border-cyan-400/20 rounded-[20px] p-10 shadow-[0_0_25px_rgba(0,255,255,0.08)]">
          <h1 className="title-shadow font-semibold text-center text-2xl">
            Hi, I`m Dmytro Yeromin
          </h1>
          <p className="font-medium text-center text-lg">Front-end Developer</p>
        </div>
        <div className="avatar mx-auto">
          <div className="ring-4 ring-[#094165] ring-offset-base-100 w-32 rounded-full ring-2  shadow-[0_0_25px_#fff,_0_0_40px_rgba(0,191,255,0.4)]">
            <img src={myPhoto} alt="My photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
