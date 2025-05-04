import Image from "next/image";

const featuresData = {
  title: "By your side every step of the way",
  backgroundImage: {
    src: "/features-bg.svg",
    alt: "Features Background",
  },
  features: [
    {
      title: "Full implementation support",
      description:
        "Our experts take care of everything—from design to data migration; testing to translations—providing a seamless, stress-free experience.",
      image: {
        src: "/full-implementation-support.jpg",
        alt: "Full Implementation Support",
      },
    },
    {
      title: "Concierge-level service",
      description:
        "At Happydance, you're not just a customer, you're a partner. We provide hands-on customer service and dedicated technical support—available 24/7.",
      image: {
        src: "/concierge-level-service.jpg",
        alt: "Concierge Level Service",
      },
    },
  ],
};

export function FeaturesBlock() {
  return (
    <section className="my-12 lg:my-24">
      <div className="min-2xl:max-w-[1624px] mx-auto w-full px-5 lg:flex lg:gap-10">
        <div className="lg:w-4/12">
          <h2 className="mb-4 text-3xl font-semibold leading-tight lg:w-5/6 lg:text-[3.125rem] xl:w-2/3">
            {featuresData.title}
          </h2>
          <div className="relative mt-10 hidden lg:block lg:-translate-x-1/4 2xl:-translate-x-1/2">
            <Image
              src={featuresData.backgroundImage.src}
              alt={featuresData.backgroundImage.alt}
              width={521}
              height={371}
            />
          </div>
        </div>
        <div className="grid gap-12 sm:gap-10 md:grid-cols-2 lg:w-8/12">
          {featuresData.features.map((feature, index) => (
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
