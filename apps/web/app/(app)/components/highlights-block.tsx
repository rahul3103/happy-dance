"use client";

import { cn } from "@workspace/ui/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { LinkButton } from "@/components/link-button";

function useThrottle(cb: () => void, limit: number) {
  const lastRun = useRef(Date.now());

  return function () {
    if (Date.now() - lastRun.current >= limit) {
      cb();
      lastRun.current = Date.now();
    }
  };
}

const highlights = [
  {
    id: "id-1",
    title: "High-performance websites",
    image: "/high-performance-websites.jpg",
    alt: "a screenshot of a website",
    icon: "/high-performance-careers-websites.svg",
    iconAlt: "a circular logo with a circle in the middle",
    description:
      "Optimized for speed, built for mobile, search-engine optimized, and AA compliant to deliver powerful candidate experiences.",
  },
  {
    id: "id-2",
    title: "Intuitive content management",
    image: "/intuitive-content-management-1.jpg",
    alt: "Intuitive Content Management",
    icon: "/intuitive-content-management.svg",
    iconAlt: "a logo of a browser",
    description:
      "Complete control to change every aspect of your careers website in real-time. No waiting. No additional costs.",
  },
  {
    id: "id-3",
    title: "Flexible configuration",
    image: "/flexible-configuration-1.jpg",
    alt: "Flexible Configuration",
    icon: "/flexible-configuration.svg",
    iconAlt: "a group of icons with different colors",
    description:
      "Customizable content blocks and UX-optimized designs to create a consistent, fully branded experience.",
  },
  {
    id: "id-4",
    title: "Intelligent features",
    image: "/intelligent-features-1.jpg",
    alt: "Intelligent Features",
    icon: "/intelligent-features.svg",
    iconAlt: "a logo of a company",
    description:
      "Built-in AI-powered tools to maximize talent-attraction efforts and brand performance at scale and pace.",
  },
];

const INTERSECTION_ROOT_MARGIN_BOTTOM = "150px";
const observerOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: `0px 0px ${INTERSECTION_ROOT_MARGIN_BOTTOM} 0px`,
  threshold: 0.5,
};

export function HighlightsBlock() {
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const progressContainerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const highlightRefs = useRef<(HTMLDivElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const stickyContainerRef = useRef<HTMLDivElement>(null);
  const throttledScroll = useThrottle(handleScroll, 50);

  useEffect(() => {
    const validRefs = highlightRefs.current.filter(
      (ref): ref is HTMLDivElement => ref !== null,
    );

    if (validRefs.length !== highlights.length || observerRef.current) return;

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const datasetIndex = (entry.target as HTMLElement).dataset.index;
          if (datasetIndex !== undefined) {
            setActiveIndex(Number(datasetIndex));
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    observerRef.current = observer;

    validRefs.forEach((el) => observer.observe(el));

    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, []);

  function handleScroll() {
    // Get refs
    const container = progressContainerRef.current; // Progress bar's track
    const bar = progressBarRef.current; // The progress bar element
    const stickyContainer = stickyContainerRef.current; // The right sticky column
    const leftColumn = leftColumnRef.current; // The left scrolling column

    if (!container || !bar || !stickyContainer || !leftColumn) {
      return;
    }

    // --- Calculate Scroll Boundaries (based on sticky behavior) ---
    const scrollStart = stickyContainer.offsetTop;
    const leftColumnHeight = leftColumn.scrollHeight;
    const scrollableDistance = leftColumnHeight - window.innerHeight;
    const scrollEnd = scrollStart + Math.max(0, scrollableDistance);
    const totalScrollRange = scrollEnd - scrollStart; // Total scrollable distance of left

    // --- Calculate Bar Movement Limits ---
    const containerHeightPx = container.offsetHeight;
    const barHeightPx = bar.offsetHeight;
    // Max distance the TOP of the bar can travel downwards
    const maxTranslateY = Math.max(0, containerHeightPx - barHeightPx);
    const scrollFraction = scrollStart / totalScrollRange;

    const targetY = scrollFraction * maxTranslateY;

    setProgress(parseFloat(targetY.toFixed(3)));
  }

  useEffect(() => {
    window.addEventListener("scroll", throttledScroll);
    throttledScroll();
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [throttledScroll]);

  return (
    <section className="my-12 lg:my-24">
      <div className="min-2xl:max-w-[1624px] relative isolate mx-auto w-full px-5">
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-10">
          <div ref={leftColumnRef} className="col-span-1 grid gap-10">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.id}
                className="grid items-center gap-7 lg:h-screen"
              >
                <div className="lg:hidden">
                  <Image
                    alt={highlight.alt}
                    className="rounded-2xl"
                    height={600}
                    src={highlight.image}
                    width={800}
                    priority={false}
                  />
                </div>

                <div
                  ref={(el) => {
                    highlightRefs.current[index] = el as HTMLDivElement;
                  }}
                  data-index={index}
                  className="flex flex-col gap-4 opacity-100 transition-opacity duration-500 ease-in-out lg:px-28"
                >
                  <Image
                    alt={highlight.iconAlt}
                    className="hidden size-[50px] lg:block"
                    height={50}
                    src={highlight.icon}
                    width={50}
                    priority={false}
                  />

                  <h3 className="text-2xl font-semibold leading-tight lg:text-[2.125rem]">
                    {highlight.title}
                  </h3>
                  <div className="prose text-muted-foreground text-lg font-normal leading-[1.3] xl:text-2xl xl:leading-[1.4]">
                    <p>{highlight.description}</p>
                  </div>
                  <LinkButton className="self-start" href="/platform">
                    Explore platform
                  </LinkButton>
                </div>
              </div>
            ))}
          </div>

          <div
            ref={stickyContainerRef}
            className="sticky top-0 col-span-1 grid h-screen items-center max-lg:hidden"
          >
            {highlights.map((highlight, index) => (
              <div
                key={highlight.id}
                className={cn(
                  "absolute left-0 hidden transition-all duration-500 ease-in-out lg:grid",
                  activeIndex === index
                    ? "scale-none opacity-100"
                    : "scale-95 opacity-0",
                )}
              >
                <Image
                  aria-current={activeIndex === index ? "true" : "false"}
                  alt={highlight.alt}
                  className="mb-4 aspect-[129/116] rounded-2xl object-cover lg:mb-0"
                  height={696}
                  src={highlight.image}
                  width={774}
                  priority={false}
                />
              </div>
            ))}

            <div
              ref={progressContainerRef}
              aria-hidden="true"
              className="bg-primary progress-container absolute -left-[calc(100%+40px)] top-1/2 h-[60vh] w-px -translate-y-1/2 transform max-lg:hidden dark:bg-white"
            >
              <div
                ref={progressBarRef}
                className="progress-bar dark:bg-brand-orange absolute h-1/4 w-[5px] bg-black transition-transform duration-300 ease-out max-lg:hidden"
                style={{
                  transform: `translateY(${progress}px)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
