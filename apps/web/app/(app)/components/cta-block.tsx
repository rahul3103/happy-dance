import Image from "next/image";
import { LinkButton } from "@/components/link-button";
import { CtaData } from "@/types/homepage";

export function CtaBlock({ data }: { data: CtaData }) {
  return (
    <section className="py-8 lg:py-14">
      <div className="min-2xl:max-w-[1624px] mx-auto w-full px-5">
        <div className="cta-gradient dark:bg-background bg-brand-orange relative overflow-hidden rounded-3xl p-5 lg:p-16">
          <div
            aria-hidden="true"
            className="bg-blur-effect/80 absolute left-[-200px] top-full h-[1200px] w-[1200px] -translate-y-[200px] rounded-full blur-[50px]"
          />
          <div className="relative grid items-center lg:grid-cols-2 lg:gap-16">
            <div className="lg:order-2">
              <h2 className="text-dark-foreground mb-3 font-serif text-[2.625rem] font-normal leading-[1.1] lg:text-[4.375rem]">
                {data.title}
              </h2>
              <p className="text-dark-foreground mb-2 text-lg lg:mb-11">
                {data.description}
              </p>
              <LinkButton
                className="dark:hover:bg-input/100 mt-8 hidden lg:inline-flex"
                href={data.link}
              >
                {data.linkText}
              </LinkButton>
            </div>
            <div>
              <div className="relative mb-3 w-full lg:mb-0">
                <Image
                  src={data.image.src}
                  alt={data.image.alt}
                  width={600}
                  height={400}
                  className="rounded-4xl"
                />
              </div>
              <LinkButton
                href={data.link}
                className="dark:hover:bg-input/100 mb-3 mt-8 w-full md:w-auto lg:hidden"
              >
                {data.linkText}
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
