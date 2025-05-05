import Image from "next/image";
import { LinkButton } from "./link-button";
import { Slide } from "@/types/homepage";

export function CarouselSlide({ slide }: { slide: Slide }) {
  return (
    <div className="relative">
      <div className="relative mb-6 overflow-hidden rounded-2xl from-[#B3ADAD]/40 after:absolute after:left-0 after:top-0 after:h-1/2 after:w-full after:bg-gradient-to-b after:mix-blend-multiply after:content-[''] lg:rounded-3xl">
        <div className="absolute right-3 top-3 z-10 lg:right-6 lg:top-6">
          <Image
            src={slide.logo.src}
            alt={slide.logo.alt}
            width={150}
            height={150}
            className="h-auto w-[150px] object-contain"
          />
        </div>
        <div className="relative aspect-square w-full xl:aspect-video">
          <Image
            src={slide.image.src}
            alt={slide.image.alt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
      <div className="lg:text-accent-foreground inset-x-0 bottom-0 lg:absolute lg:p-6">
        <div className="lg:after:bg-darkgray/[0.8] relative overflow-hidden lg:flex lg:items-end lg:gap-12 lg:rounded-3xl lg:px-10 lg:py-8 lg:after:absolute lg:after:inset-0 lg:after:bg-[#343434cc] lg:after:mix-blend-multiply lg:after:content-['']">
          <figure className="text-dark-foreground relative z-10 mb-6 lg:mb-0">
            <blockquote className="blockquote mb-4 text-2xl lg:text-3xl">
              <p>{slide.quote.text}</p>
            </blockquote>
            <figcaption className="text-lg">
              <span className="font-semibold">{slide.quote.author}</span>
              <cite title={slide.quote.author} className="block not-italic">
                {slide.quote.title}
              </cite>
            </figcaption>
          </figure>
          <LinkButton
            className="bg-light-background text-light-foreground hover:bg-dark-background hover:text-dark-foreground dark:hover:bg-input/100 z-10 w-full sm:w-auto"
            href={slide.link}
          >
            Learn more
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
