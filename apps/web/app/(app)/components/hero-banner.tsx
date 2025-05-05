"use client";

import { PauseIcon, PlayIcon } from "lucide-react";
import { useState, useRef } from "react";
import Image from "next/image";
import { useLayoutRefs } from "@/contexts/layout-refs-context";
import { HeroData, Logo } from "@/types/homepage";

const PlayButton = ({
  isPlaying,
  togglePlayback,
}: {
  isPlaying: boolean;
  togglePlayback: () => void;
}) => (
  <button
    type="button"
    className="sr-only hidden rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5f61c6] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#121212]"
    aria-live="polite"
    onClick={togglePlayback}
    aria-label={isPlaying ? "Pause background video" : "Play background video"}
  >
    <span className="sr-only">{isPlaying ? "Pause Video" : "Play Video"}</span>
    {isPlaying ? (
      <PauseIcon className="h-16 w-16 lg:h-20 lg:w-20" aria-hidden="true" />
    ) : (
      <PlayIcon className="h-16 w-16 lg:h-20 lg:w-20" aria-hidden="true" />
    )}
  </button>
);

const LogoRow = ({ logos }: { logos: Logo[] }) => (
  <div className="animate-marquee flex h-10 shrink-0 flex-row flex-nowrap items-center gap-8 group-hover:[animation-play-state:paused] sm:gap-20 md:justify-around md:px-10">
    {logos.map((logo) => (
      <div
        key={logo.alt}
        className="flex h-10 shrink-0 flex-col items-center justify-center opacity-100 invert"
      >
        <Image
          alt={logo.alt}
          src={logo.src}
          width={130}
          height={40}
          className="inline-flex h-full max-h-[30px] w-full max-w-[100px] shrink-0 md:max-w-[130px]"
        />
      </div>
    ))}
  </div>
);

export function HeroBanner({ data }: { data: HeroData }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const { triggerRef } = useLayoutRefs();

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="flex h-svh flex-col justify-end overflow-hidden">
      <div className="text-dark-foreground relative flex h-full flex-col justify-center overflow-hidden [.site-alert-banner-visible_&]:rounded-t-3xl">
        <div className="min-2xl:max-w-[1624px] relative z-20 mx-auto mt-auto w-full px-5 text-center">
          <PlayButton isPlaying={isPlaying} togglePlayback={togglePlayback} />
          <h1
            ref={triggerRef}
            className="mb-2 font-serif text-[2.625rem] font-normal leading-tight lg:text-[4.375rem]"
          >
            {data.title}
          </h1>
          <p className="text-2xl font-normal leading-tight lg:text-[1.75rem]">
            {data.subtitle}
          </p>
        </div>

        <div className="group z-20 mt-auto flex shrink-0 flex-row gap-6 overflow-hidden px-8 pb-10 sm:px-20 md:mb-0 md:gap-0 md:px-0 lg:pb-16">
          <div className="preserve-3d flex min-w-full shrink-0 flex-row flex-nowrap gap-8 will-change-transform sm:gap-20 md:gap-0">
            <LogoRow logos={data.logos} />
            <LogoRow logos={data.logos} />
          </div>
        </div>

        <video
          ref={videoRef}
          className="absolute inset-0 z-0 h-full w-full object-cover"
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          poster="/happydance-showreel.jpg"
          aria-label="Background video of the happydance showreal, no sound or text"
        >
          <source src="/intro.mp4" type="video/mp4" />
        </video>
        <div className="bg-video-overlay/50 absolute inset-0 z-10 h-full w-full opacity-85" />
      </div>
    </section>
  );
}
