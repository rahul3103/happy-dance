import { useEffect, useRef, useState } from "react";

export const useHideHeaderOnScroll = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    const triggerEl = triggerRef.current;
    if (!triggerEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry) return;
        // If the element is visible (intersecting), we want to hide the header
        setHideHeader(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: `-${(headerRef.current?.offsetHeight ?? 90) + 50}px 0px 0px 0px`,
        threshold: 0.1,
      },
    );

    observer.observe(triggerEl);

    return () => observer.disconnect();
  }, []);

  return {
    headerRef,
    triggerRef,
    hideHeader,
  };
};
