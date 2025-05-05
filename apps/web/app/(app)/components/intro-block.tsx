"use client";
import Image from "next/image";
import { IntroData } from "@/types/homepage";

export function IntroBlock({ data }: { data: IntroData }) {
  return (
    <section className="my-12 lg:my-24">
      <div className="mx-auto w-full px-5 lg:w-8/12 xl:w-6/12">
        <div className="flex flex-col items-center gap-3 text-center lg:gap-8">
          <div className="flex flex-col gap-3 lg:gap-4">
            <h2 className="text-balance text-[2rem] font-semibold leading-tight lg:text-[3.125rem]">
              {data.title}
            </h2>
          </div>

          <div className="flex flex-col items-center gap-7 lg:gap-9">
            <div className="leading-tight lg:text-[1.75rem]">
              <p>{data.description}</p>
            </div>

            <div className="max-w-52 lg:max-w-none">
              <Image
                alt={data.image.alt}
                className="rounded-4xl mx-auto"
                height={245}
                src={data.image.src}
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
