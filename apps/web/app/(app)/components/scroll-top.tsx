import { Icons } from "@/components/icons";
import { useThrottle } from "@/hooks/use-throttle";
import { cn } from "@workspace/ui/lib/utils";
import { useEffect, useRef, useState } from "react";

const INTERSECTION_ROOT_MARGIN_BOTTOM = "10px";
const observerOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: `0px 0px ${INTERSECTION_ROOT_MARGIN_BOTTOM} 0px`,
  threshold: 0.01,
};
const THROTTLE_LIMIT = 100;
interface ScrollTopProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export function ScrollTop({ containerRef }: ScrollTopProps) {
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const throttledSetScrolled = useThrottle(setScrolled, THROTTLE_LIMIT);

  useEffect(() => {
    if (!containerRef?.current) return;
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        throttledSetScrolled(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    observerRef.current = observer;
    observer.observe(containerRef.current);

    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, [containerRef, throttledSetScrolled]);

  const handleScrollToTop = () =>
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

  return (
    <div className="sticky bottom-20 z-[99] flex h-0 justify-end overflow-x-clip pr-6">
      <button
        onClick={handleScrollToTop}
        style={{
          transform: scrolled ? "translateX(0)" : "translateX(200%)",
          opacity: scrolled ? 1 : 0,
        }}
        className={cn(
          "bg-brand-orange text-light-foreground group z-[100] flex size-14 cursor-pointer items-center justify-center rounded-full",
          "transition-[transform,opacity] duration-200 ease-in-out",
          "will-change-transform",
        )}
        aria-label="Scroll to top"
      >
        <Icons.arrowUp className="relative size-6 shrink-0 transition-transform duration-200 group-hover:-translate-y-1" />
      </button>
    </div>
  );
}
