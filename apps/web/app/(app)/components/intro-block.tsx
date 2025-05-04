"use client";
import Image from "next/image";

const introData = {
  title: "Designed to attract, engage and convert top talent",
  description:
    "Tailored careers websites that optimize the candidate experience at every touchpoint—from first click to a job they love.",
  image: {
    alt: "Illustration of a happy person flying through a digital screen",
    src: "/flying-girl.svg",
  },
};

export function IntroBlock() {
  return (
    <section className="my-12 lg:my-24">
      <div className="mx-auto w-full px-5 lg:w-8/12 xl:w-6/12">
        <div className="flex flex-col items-center gap-3 text-center lg:gap-8">
          <div className="flex flex-col gap-3 lg:gap-4">
            <h2 className="text-balance text-[2rem] font-semibold leading-tight lg:text-[3.125rem]">
              {introData.title}
            </h2>
          </div>

          <div className="flex flex-col items-center gap-7 lg:gap-9">
            <div className="leading-tight lg:text-[1.75rem]">
              <p>{introData.description}</p>
            </div>

            <div className="max-w-52 lg:max-w-none">
              <Image
                alt={introData.image.alt}
                className="rounded-4xl mx-auto"
                height={245}
                src={introData.image.src}
                width={326}
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
