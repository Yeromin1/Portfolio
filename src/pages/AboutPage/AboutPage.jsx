import myPhoto from "../../assets/images/MyFoto.jpg";

const AboutPage = () => {
  return (
    <section id="about" className="h-screen bg-section">
      <div className="container avatar">
        <div className="ring-4 ring-[#094165] ring-offset-base-100 w-44 rounded-full ring-2 shadow-[0_0_25px_#fff,_0_0_40px_rgba(0,191,255,0.4)]">
          <img src={myPhoto} alt="My photo" />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
