import Portfolio from "../../assets/images/Portfolio.png";

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#030A14]">
      <img src={Portfolio} alt="Portfolio" className="" />
    </div>
  );
};

export default SplashScreen;
