import { useState } from "react";
import { useTranslation } from "react-i18next";

import ImageLightbox from "../../components/ui/lightbox/ImageLightbox";
import { Motion } from "../../animations/reveal/Motion";
import { fadeUp } from "../../animations/reveal/variants";

import certificateImg from "../../assets/images/Certificate.jpg";
import certificates from "../../assets/images/Certificatesss.jpeg";

const CertificatesPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const { t } = useTranslation("certificates");

  return (
    <section id="certificates" className="bg-section overflow-hidden">
      <div className="container py-20 md:py-24">
        <Motion delay={0}>
          <h2 className="text-4xl font-semibold title-shadow text-center mb-8 md:text-[38px]">
            {t("title")}
          </h2>
        </Motion>

        <div className="grid gap-7 md:gap-9">
          <Motion variant={fadeUp} delay={0.3}>
            <div className="bg-[#112240] p-5 rounded-[15px] shadow-[0_0_20px_rgba(35,75,134,0.4)] flex flex-col h-full md:w-[70%] md:mx-auto">
              <figure className="w-full aspect-[16/9] overflow-hidden rounded-xl mb-4">
                <img
                  src={certificateImg}
                  alt="certificate Fullstack"
                  className="w-full h-full object-cover object-[center_40%]"
                  onClick={() => {
                    setSelectedImage(certificateImg);
                    setOpen(true);
                  }}
                />
              </figure>
              <div className="flex flex-col flex-1 text-center justify-between">
                <h4 className="card-title mb-2 justify-center text-2xl text-[#64ffda] md:text-3xl">
                  {t("goit.title")}
                </h4>
                <p className="text-sm leading-relaxed text-gray-300 md:text-base">
                  {t("goit.description")}
                </p>
              </div>
            </div>
          </Motion>

          <Motion variant={fadeUp} delay={0.4}>
            <div className="bg-[#112240] p-5 rounded-[15px] shadow-[0_0_20px_rgba(35,75,134,0.4)] flex flex-col h-full md:w-[70%] md:mx-auto">
              <figure className="w-full aspect-[16/9] overflow-hidden rounded-xl mb-4">
                <img
                  src={certificates}
                  alt="certificate Fullstack"
                  className="w-full h-full object-cover object-[center_100%]"
                  onClick={() => {
                    setSelectedImage(certificates);
                    setOpen(true);
                  }}
                />
              </figure>
              <div className="flex flex-col flex-1 text-center justify-between">
                <h4 className="card-title mb-2 justify-center text-2xl text-[#64ffda] md:text-3xl">
                  {t("abinbev.title")}
                </h4>
                <p className="text-sm leading-relaxed text-gray-300 md:text-base">
                  {t("abinbev.description")}
                </p>
              </div>
            </div>
          </Motion>
        </div>
      </div>
      <ImageLightbox open={open} setOpen={setOpen} image={selectedImage} />
    </section>
  );
};

export default CertificatesPage;
