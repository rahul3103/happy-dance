import { useEffect, useRef, useState } from "react";

export function useHeaderScroll(
  triggerRef: React.RefObject<HTMLElement | null>,
  headerRef: React.RefObject<HTMLElement | null>,
) {
  const [showHeader, setShowHeader] = useState(true);
  const [whiteBg, setWhiteBg] = useState(false);
  const lastScrollY = useRef(0);
  const whiteBgEnabled = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current || !triggerRef.current) return;

      const scrollY = window.scrollY;
      const scrollDown = scrollY > lastScrollY.current;

      const headerRect = headerRef.current.getBoundingClientRect();
      const triggerRect = triggerRef.current.getBoundingClientRect();

      const crossedTrigger = triggerRect.top - headerRect.height <= 0;

      if (crossedTrigger) {
        setShowHeader(!scrollDown);
      } else {
        setShowHeader(true);
      }

      if (crossedTrigger && !scrollDown && !whiteBgEnabled.current) {
        setWhiteBg(true);
        whiteBgEnabled.current = true;
      }

      if (scrollY === 0 && whiteBgEnabled.current) {
        setWhiteBg(false);
        whiteBgEnabled.current = false;
      }

      lastScrollY.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerRef, triggerRef]);

  return { showHeader, whiteBg };
}
