import Image from "next/image";
import { SlideData } from "@/app/(app)/components/case-studies-block";
import { LinkButton } from "./link-button";

export function CarouselSlide({ slide }: { slide: SlideData }) {
  return (
    <div className="relative">
      <div className="relative mb-6 overflow-hidden rounded-2xl from-[#B3ADAD]/40 after:absolute after:left-0 after:top-0 after:h-1/2 after:w-full after:bg-gradient-to-b after:mix-blend-multiply after:content-[''] lg:rounded-3xl">
        <div className="absolute right-3 top-3 z-10 lg:right-6 lg:top-6">
          <Image
            src={slide.logo.src}
            alt={slide.logo.alt}
            width={150}
            height={150}
          />
        </div>
        <div className="relative aspect-[4/3] w-full rounded-2xl lg:rounded-3xl xl:aspect-auto">
          <Image
            src={slide.image.src}
            alt={slide.image.alt}
            height={675}
            width={1200}
            className="object-cover"
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
            href="/platform"
          >
            Learn more
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
