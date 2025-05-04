"use client";

import { CarouselSlide } from "@/components/carousel-slide";
import {
  CarouselItem,
  CarouselContent,
  Carousel,
  DotButtonGroup,
} from "@workspace/ui/components/carousel";

export type SlideData = {
  id: string;
  logo: {
    src: string;
    alt: string;
  };
  image: {
    src: string;
    alt: string;
  };
  quote: {
    text: string;
    author: string;
    title: string;
  };
  link: string;
};

const slidesData = {
  title: "Happy customers from world-leading brands",
  slides: [
    {
      id: "ingram",
      logo: {
        src: "/client-logos-11.svg",
        alt: "INGRAM logo",
      },
      image: {
        src: "/ingram-micro-carousel.jpg",
        alt: "a laptop with a blue and white screen",
      },
      quote: {
        text: "The optimized user experience makes it easy and engaging for candidates to explore their future with us and apply.",
        author: "Casper Massink",
        title: "Global Talent Branding & Marketing Manager, Ingram Micro",
      },
      link: "/customer-experiences/ingram-micro/",
    },
    {
      id: "criteo",
      logo: {
        src: "/client-logos-13.svg",
        alt: "Criteo logo",
      },
      image: {
        src: "/criteo-carousel.jpg",
        alt: "a hand holding a phone",
      },
      quote: {
        text: "The candidate experience on the Criteo careers website is so well-crafted it's like an invitation into a journey.",
        author: "Thibaut Bissonnier Gillot",
        title: "Employer Branding, Qonto",
      },
      link: "/customer-experiences/criteo/",
    },
    {
      id: "dominos",
      logo: {
        src: "/client-logos-08.svg",
        alt: "Domino's logo",
      },
      image: {
        src: "/dominoes-carousel.jpg",
        alt: "Dominoes Carousel",
      },
      quote: {
        text: "Despite a very tight timeline, the team knocked it out the park—delivering on time, to spec and within budget.",
        author: "Nick Katsefaras",
        title: "HR Technology, Domino's",
      },
      link: "/customer-experiences/dominos/",
    },
  ],
};

export function CaseStudiesBlock() {
  return (
    <section className="bg-dark-background text-dark-foreground overflow-hidden rounded-t-3xl py-16 lg:py-32">
      <div className="mx-auto w-full px-5">
        <div className="mx-auto mb-10 text-center text-lg font-normal leading-[1.3] lg:mb-14 lg:w-1/2">
          <h2
            className="mb-5 text-balance font-serif text-[2.625rem] font-normal leading-[1.1] lg:text-[4.375rem]"
            data-test-id="case-studies-heading"
          >
            {slidesData.title}
          </h2>
        </div>
      </div>
      <div className="mx-auto w-full max-w-5xl px-5 2xl:max-w-6xl">
        <Carousel>
          <CarouselContent>
            {slidesData.slides.map((slide, index) => (
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
