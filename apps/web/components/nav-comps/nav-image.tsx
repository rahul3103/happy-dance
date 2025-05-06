import Image from "next/image";
import { Icons } from "@/components/icons";
import { BaseLink } from "@/components/base-link";
import { NavItemDetails } from "@/types/navigation";

interface FeaturedCTAProps {
  ctaData: NonNullable<NavItemDetails["megaMenu"]>["featuredCTA"];
}

export function NavImage({ ctaData }: FeaturedCTAProps) {
  if (!ctaData) return null;

  return (
    <div className="col-span-2 col-start-7 flex flex-col gap-4">
      <div>
        <h2 className="text-sm font-normal uppercase leading-[1.2] tracking-[.2em]">
          {ctaData.heading}
        </h2>
      </div>
      <div className="group relative isolate flex flex-col items-center justify-center overflow-hidden rounded-[20px] bg-black">
        <div className="aspect-[366/205] h-full w-full overflow-hidden">
          <Image
            alt={ctaData.image.alt}
            className="aspect-[366/205] h-full w-full scale-[102%] transform object-cover transition-all duration-300 ease-in-out group-hover:scale-[107%]"
            height={600} // Provide appropriate layout height/width
            width={800}
            loading="lazy"
            src={ctaData.image.src} // Use single src
          />
        </div>
        <div className="w-full px-6 py-8">
          <BaseLink
            href={ctaData.href}
            className="before:absolute before:inset-0 before:block before:content-['']"
          >
            <h3 className="mb-2 text-xl font-normal text-white">
              {ctaData.title}
            </h3>
          </BaseLink>
          <span
            aria-hidden="true"
            className="inline-flex items-center gap-1.5 text-lg text-[#ff784a] group-hover:underline"
          >
            <span>Read more</span>
            <Icons.arrowRightLong
              className="relative right-0 h-4 w-4 transition-all duration-300 ease-in-out group-hover:-right-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
