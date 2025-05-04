import Image from "next/image";
import { Icons } from "@/components/icons";

const awardsData = {
  title: "Proud moments",
  subtitle: "Happy to be recognized within our industry",
  awards: [
    {
      id: "tiara",
      title: "Tiara Talent Acquisition Awards",
      icon: "tiara",
    },
    {
      id: "potential-park",
      title: "Potential Park",
      icon: "potentialPark",
    },
    {
      id: "rma",
      title: "Recruitment Marketing Awards",
      icon: "rmaAwards",
    },
    {
      id: "talent-labs",
      title: "The Talent Labs Awards 2025",
      icon: "theTalentLabs",
    },
    {
      id: "ihr",
      title: "ihr Awards",
      icon: "ihrAwards",
    },
  ],
};

export function AwardsBlock() {
  return (
    <section className="relative z-20 overflow-hidden px-4 py-8 lg:py-14">
      <div className="dark:bg-background min-2xl:max-w-[1624px] bg-beige relative mx-auto w-full rounded-3xl px-5 py-10 lg:py-16">
        <div className="mx-auto mb-10 text-center text-lg leading-[1.3] lg:mb-14 lg:w-8/12">
          <h2 className="mb-5 font-serif text-[2.625rem] font-normal leading-[1.1] lg:text-[4.375rem]">
            {awardsData.title}
          </h2>
          <p>
            <span>{awardsData.subtitle}</span>
          </p>
        </div>

        <div className="relative z-10 flex flex-col flex-wrap items-center justify-center gap-10 md:flex-row">
          {awardsData.awards.map((award) => {
            const Icon = Icons[award.icon as keyof typeof Icons];
            return (
              <div key={award.id} className="card-award">
                <div className="relative flex h-auto w-full items-center justify-center">
                  {award.icon && (
                    <Icon
                      className="h-auto w-[9.375rem] object-contain"
                      title={award.title}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute -left-48 top-12 hidden max-h-full lg:block">
          <Image
            src="/awards-shape-1.svg"
            alt=""
            fill
            sizes="326px"
            className="object-contain"
            aria-hidden="true"
          />
        </div>
        <div className="absolute -right-48 bottom-12 hidden -rotate-[9.512deg] lg:block">
          <Image
            src="/awards-shape-2.svg"
            alt=""
            fill
            sizes="515px"
            className="object-contain"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
