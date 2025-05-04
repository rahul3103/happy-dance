import Image from "next/image";
import { Check, MoveRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@workspace/ui/lib/utils";
import { buttonVariants } from "@workspace/ui/components/button";

type RichTextData = {
  title: string;
  eyebrow: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  content: {
    heading: string;
    paragraph: string;
    listItems: string[];
  };
  cta: {
    text: string;
    href: string;
  };
};

const richTextData: RichTextData = {
  title: "Experience the difference",
  eyebrow: "OUR UNIQUE APPROACH",
  image: {
    src: "/experience-the-difference.jpg",
    alt: "Experience The Difference",
    width: 800,
    height: 600,
  },
  content: {
    heading: "We believe there's always a better way.",
    paragraph:
      "We use our unique blend of innovation, expertise and service to deliver more than expected.",
    listItems: [
      "We continually innovate to deliver exceptional careers websites that bring your brand to life.",
      "We have 20 years' experience in employer branding and are happy to share our expertise.",
      "We care about delivering excellent service, so we aim to give a little extra, every time.",
    ],
  },
  cta: {
    text: "Why Happydance?",
    href: "/why-happydance/",
  },
};

export function RichTextBlock() {
  return (
    <section className="relative -z-10 -mt-8 overflow-hidden bg-[linear-gradient(to_top,#fffdf6_6.95%,#f9adb8_70.73%,#b397c5_94.87%)] py-12 lg:py-24 2xl:py-32 dark:bg-none dark:before:hidden">
      <div className="min-2xl:max-w-[1624px] relative mx-auto w-full px-5">
        <div className="mb-7 text-center lg:mb-14">
          <p className="text-sm uppercase leading-[1.2] tracking-[.2em]">
            {richTextData.eyebrow}
          </p>
          <h2 className="mt-5 font-serif text-[2.625rem] font-normal leading-tight lg:text-[4.375rem]">
            {richTextData.title}
          </h2>
        </div>

        <div className="gap-12 lg:flex lg:items-center lg:gap-24">
          <div className="max-sm:mb-6 lg:w-1/2">
            <Image
              src={richTextData.image.src}
              alt={richTextData.image.alt}
              width={richTextData.image.width}
              height={richTextData.image.height}
              className="rounded-4xl mb-6 h-auto w-full lg:mb-0"
            />
          </div>
          <div className="lg:w-1/2">
            <div className="text-pretty lg:max-w-xl">
              <h3 className="mb-5 mt-0 text-[2.125rem] font-semibold leading-tight">
                <strong>{richTextData.content.heading}</strong>
              </h3>
              <p className="mb-5 mt-0 text-lg leading-7 opacity-70">
                {richTextData.content.paragraph}
              </p>
              <ul className="space-y-4">
                {richTextData.content.listItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="relative h-6 w-6 flex-shrink-0">
                      <div className="bg-primary absolute inset-0 rounded-full" />
                      <Check
                        className="absolute inset-0 m-auto size-5 text-white dark:text-black"
                        strokeWidth={2}
                        strokeLinejoin="round"
                      />
                    </div>
                    <span className="text-[1.125rem] leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              className={cn(
                buttonVariants({ variant: "outline" }),
                "border-1 border-primary bg-primary mt-8 h-auto rounded-full py-3 text-lg font-semibold leading-[1.3] text-white outline-2 transition-colors duration-500 ease-in-out has-[>svg]:px-6",
              )}
              href={richTextData.cta.href}
            >
              <span>{richTextData.cta.text}</span>
              <MoveRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
