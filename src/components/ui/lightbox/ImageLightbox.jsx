import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ImageLightbox = ({ open, setOpen, image }) => {
  return (
    <Lightbox
      open={open}
      close={() => setOpen(false)}
      slides={[{ src: image }]}
      controller={{
        closeOnBackdropClick: true,
      }}
      render={{
        buttonPrev: () => null,
        buttonNext: () => null,
      }}
    />
  );
};

export default ImageLightbox;
