import { Motion } from "../../animations/reveal/Motion";

const CertificatesPage = () => {
  return (
    <section id="certificates" className="bg-section overflow-hidden">
      <div className="container">
        <Motion delay={0}>
          <p className="text-4xl font-semibold title-shadow text-center mb-8">
            Certificates
          </p>
        </Motion>
      </div>
    </section>
  );
};

export default CertificatesPage;
