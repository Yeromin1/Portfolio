const SplashScreen = () => {
  return (
    <div className="h-screen flex flex-col z-[999] gap-16 items-center justify-center bg-[var(--bg-splash)] shadow-[var(--box-shadow-splash)]">
      <h2 className="text-5xl text-[var(--text-splash)] text-shadow-[var(--text-shadow-splash)] md:text-7xl">
        Welcome to my
      </h2>
      <h3 className="text-7xl text-[var(--text-splash)]  text-shadow-[var(--text-shadow-splash)] md:text-9xl">
        Portfolio
      </h3>
    </div>
  );
};

export default SplashScreen;
