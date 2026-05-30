import { useCallback } from "react";

export const useCarouselScroll = (ref, itemWidth = 343) => {
  const scrollNext = useCallback(() => {
    if (!ref.current) return;

    ref.current.scrollBy({
      left: itemWidth,
      behavior: "smooth",
    });
  }, [ref, itemWidth]);

  const scrollPrev = useCallback(() => {
    if (!ref.current) return;

    ref.current.scrollBy({
      left: -itemWidth,
      behavior: "smooth",
    });
  }, [ref, itemWidth]);

  return { scrollNext, scrollPrev };
};
