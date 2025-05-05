import Image from "next/image";
import { Check } from "lucide-react";
import { LinkButton } from "@/components/link-button";
import { RichTextData } from "@/types/homepage";

export function RichTextBlock({ data }: { data: RichTextData }) {
  return (
    <section className="relative z-10 -my-12 overflow-hidden bg-[linear-gradient(to_top,#fffdf6_6.95%,#f9adb8_70.73%,#b397c5_94.87%)] py-24 lg:-my-24 lg:py-48 2xl:py-32 dark:bg-none dark:before:hidden">
      <div className="min-2xl:max-w-[1624px] relative mx-auto w-full px-5">
        <div className="mb-7 text-center lg:mb-14">
          <p className="text-sm uppercase leading-[1.2] tracking-[.2em]">
            {data.eyebrow}
          </p>
          <h2 className="mt-5 font-serif text-[2.625rem] font-normal leading-tight lg:text-[4.375rem]">
            {data.title}
          </h2>
        </div>

        <div className="gap-12 lg:flex lg:items-center lg:gap-24">
          <div className="max-sm:mb-6 lg:w-1/2">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              width={800}
              height={600}
              className="rounded-4xl mb-6 h-auto w-full lg:mb-0"
            />
          </div>
          <div className="lg:w-1/2">
            <div className="text-pretty lg:max-w-xl">
              <h3 className="mb-5 mt-0 text-[2.125rem] font-semibold leading-tight">
                <strong>{data.content.heading}</strong>
              </h3>
              <p className="mb-5 mt-0 text-lg leading-7 opacity-70">
                {data.content.paragraph}
              </p>
              <ul className="space-y-4">
                {data.content.listItems.map((item, index) => (
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

            <LinkButton href={data.cta.href} className="mt-8 w-full sm:w-auto">
              {data.cta.text}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
