const SplashScreen = () => {
  return (
    <div className="h-screen flex flex-col z-[999] gap-16 items-center justify-center bg-[#0a192f] shadow-[0_0_30px_cyan,_0_0_60px_cyan_inset]">
      <h2 className="text-5xl text-[#0d1111] text-shadow-[0_0_5px_#00ffff,_0_0_10px_#00ffff,_0_0_20px_#00ffff,_0_0_40px_#00ffff] md:text-7xl">
        Welcome to my
      </h2>
      <h3 className="text-7xl text-[#0d1111] text-shadow-[0_0_5px_#00ffff,_0_0_10px_#00ffff,_0_0_20px_#00ffff,_0_0_40px_#00ffff] md:text-9xl">
        Portfolio
      </h3>
    </div>
  );
};

export default SplashScreen;
