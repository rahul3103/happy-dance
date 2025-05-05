"use client";

import { CarouselSlide } from "@/components/carousel-slide";
import {
  CarouselItem,
  CarouselContent,
  Carousel,
  DotButtonGroup,
} from "@workspace/ui/components/carousel";
import { CaseStudiesData } from "@/types/homepage";

export function CaseStudiesBlock({ data }: { data: CaseStudiesData }) {
  return (
    <section className="bg-dark-background text-dark-foreground overflow-hidden rounded-t-3xl py-16 lg:py-32">
      <div className="mx-auto w-full px-5">
        <div className="mx-auto mb-10 text-center text-lg font-normal leading-[1.3] lg:mb-14 lg:w-1/2">
          <h2
            className="mb-5 text-balance font-serif text-[2.625rem] font-normal leading-[1.1] lg:text-[4.375rem]"
            data-test-id="case-studies-heading"
          >
            {data.title}
          </h2>
        </div>
      </div>
      <div className="mx-auto w-full max-w-5xl px-5 2xl:max-w-6xl">
        <Carousel>
          <CarouselContent>
            {data.slides.map((slide, index) => (
              <CarouselItem key={index} index={index}>
                <CarouselSlide slide={slide} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <DotButtonGroup />
        </Carousel>
      </div>
    </section>
  );
}
