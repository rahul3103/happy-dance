import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { buttonVariants } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import { Icons } from "@/components/icons";

const ctaData = {
  title: "Ready to convert the right candidates?",
  description:
    "Achieve higher completion rates, faster hiring cycles, and better recruitment outcomes with a Happydance careers website. Book a demo today.",
  image: {
    src: "/hand-shake-cta-llus.svg",
    alt: "",
    width: 600,
    height: 400,
  },
  link: "/book-a-demo/",
  linkText: "Book a demo",
};

export function CtaBlock() {
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
                {ctaData.title}
              </h2>
              <p className="text-dark-foreground mb-2 text-lg lg:mb-11">
                {ctaData.description}
              </p>
              <Link
                href={ctaData.link}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "border-1 border-primary bg-primary mt-8 hidden h-auto rounded-full px-6 py-3 text-lg font-semibold leading-[1.3] text-white outline-2 transition-colors duration-500 ease-in-out has-[>svg]:px-6 lg:inline-flex",
                )}
              >
                <span>{ctaData.linkText}</span>
                <Icons.arrowRightLong
                  className="ml-2 h-4 w-4"
                  aria-hidden="true"
                />
              </Link>
            </div>
            <div>
              <div className="relative mb-3 w-full lg:mb-0">
                <Image
                  src={ctaData.image.src}
                  alt={ctaData.image.alt}
                  width={ctaData.image.width}
                  height={ctaData.image.height}
                  className="rounded-4xl"
                  data-test-id="cta-image"
                  priority
                />
              </div>
              <Link
                href={ctaData.link}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "border-1 border-primary bg-primary mb-3 mt-8 h-auto w-full rounded-full px-6 py-3 text-lg font-semibold leading-[1.3] text-white outline-2 transition-colors duration-500 ease-in-out has-[>svg]:px-6 lg:hidden",
                )}
              >
                <span>{ctaData.linkText}</span>
                <MoveRight className="ml-2 size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
