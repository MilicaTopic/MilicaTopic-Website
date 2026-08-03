import { useCallback, useEffect, useState } from "react";

export function usePhoneMockupCarousel(trackRef, pageCount = 3) {
  const [activePage, setActivePage] = useState(0);

  const updateActivePage = useCallback(
    (element) => {
      const maxScroll = element.scrollWidth - element.clientWidth;

      if (maxScroll <= 0) {
        setActivePage(0);
        return;
      }

      const pageStep = maxScroll / Math.max(pageCount - 1, 1);
      const nextPage = Math.min(
        pageCount - 1,
        Math.max(0, Math.round(element.scrollLeft / Math.max(pageStep, 1)))
      );

      setActivePage(nextPage);
    },
    [pageCount]
  );

  const handleScroll = useCallback(
    (event) => {
      updateActivePage(event.currentTarget);
    },
    [updateActivePage]
  );

  const handleWheel = useCallback(
    (event) => {
      const element = event.currentTarget;
      const maxScroll = element.scrollWidth - element.clientWidth;

      if (maxScroll <= 0 || event.ctrlKey) {
        return;
      }

      const rawDelta = Math.abs(event.deltaY) >= Math.abs(event.deltaX)
        ? event.deltaY
        : event.deltaX;

      if (!rawDelta) {
        return;
      }

      const wheelDelta = event.deltaMode === 1 ? rawDelta * 24 : rawDelta;
      const atStart = element.scrollLeft <= 0 && wheelDelta > 0;
      const atEnd = element.scrollLeft >= maxScroll && wheelDelta < 0;

      if (atStart || atEnd) {
        return;
      }

      event.preventDefault();

      const nextScroll = Math.max(0, Math.min(maxScroll, element.scrollLeft + wheelDelta));

      if (nextScroll !== element.scrollLeft) {
        element.scrollTo({ left: nextScroll, behavior: "auto" });
        updateActivePage(element);
      }
    },
    [updateActivePage]
  );

  const scrollToPage = useCallback(
    (index) => {
      const element = trackRef.current;

      if (!element) {
        return;
      }

      const maxScroll = element.scrollWidth - element.clientWidth;
      const pageStep = Math.max(maxScroll / Math.max(pageCount - 1, 1), 1);
      const targetLeft = Math.min(maxScroll, pageStep * index);

      element.scrollTo({ left: targetLeft, behavior: "smooth" });
      setActivePage(index);
    },
    [pageCount, trackRef]
  );

  useEffect(() => {
    const element = trackRef.current;

    if (!element) {
      return undefined;
    }

    updateActivePage(element);

    const handleResize = () => updateActivePage(element);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [trackRef, updateActivePage]);

  return {
    activePage,
    handleScroll,
    handleWheel,
    scrollToPage
  };
}
