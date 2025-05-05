import { FeaturesData } from "@/types/homepage";
import Image from "next/image";

export function FeaturesBlock({ data }: { data: FeaturesData }) {
  return (
    <section className="my-12 lg:my-24">
      <div className="min-2xl:max-w-[1624px] mx-auto w-full px-5 lg:flex lg:gap-10">
        <div className="lg:w-4/12">
          <h2 className="mb-4 text-3xl font-semibold leading-tight lg:w-5/6 lg:text-[3.125rem] xl:w-2/3">
            {data.title}
          </h2>
          <div className="relative mt-10 hidden lg:block lg:-translate-x-1/4 2xl:-translate-x-1/2">
            <Image
              src={data.backgroundImage.src}
              alt={data.backgroundImage.alt}
              width={521}
              height={371}
            />
          </div>
        </div>
        <div className="grid gap-12 sm:gap-10 md:grid-cols-2 lg:w-8/12">
          {data.features.map((feature, index) => (
            <div key={index}>
              <div className="relative mb-4 lg:mb-5">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={feature.image.src}
                    alt={feature.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-4xl object-cover"
                  />
                </div>
              </div>
              <h2 className="mb-3 text-[1.75rem] font-normal leading-[1.2] lg:text-[1.875rem]">
                {feature.title}
              </h2>
              <p className="text-muted-foreground text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
