import myPhoto from "../../assets/images/MyFoto.jpg";

const HomePage = () => {
  return (
    <section id="home" className="bg-[#020e26] pt-[80px]">
      <div className="container">
        <div className="avatar">
          <div className="ring-4 ring-[#094165] ring-offset-base-100 w-32 rounded-full ring-2  shadow-[0_0_25px_#fff,_0_0_40px_rgba(0,191,255,0.4)]">
            <img src={myPhoto} alt="My photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
