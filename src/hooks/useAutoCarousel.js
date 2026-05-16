import { useEffect } from "react";

export const useAutoCarousel = (carouselRef, delay = 3000) => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const firstCard = carouselRef.current.querySelector(".carousel-item");

        if (!firstCard) return;

        const scrollAmount = firstCard.offsetWidth;

        carouselRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });

        const maxScroll =
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

        if (carouselRef.current.scrollLeft >= maxScroll - 10) {
          carouselRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        }
      }
    }, delay);

    return () => clearInterval(interval);
  }, [carouselRef, delay]);
};
