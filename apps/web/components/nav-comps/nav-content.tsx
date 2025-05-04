import { NavItemDetails } from "@/config/header";
import { DrawerContent } from "@workspace/ui/components/drawer";
import { cn } from "@workspace/ui/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "@/components/icons";

export function NavContent({
  handleOverlayClick,
  selectedNavDetails,
}: {
  handleOverlayClick: () => void;
  selectedNavDetails: NavItemDetails | null | undefined;
}) {
  return (
    <DrawerContent
      aria-describedby={undefined}
      className="pointer-events-auto mt-20 outline-none"
      onOverlayClick={handleOverlayClick}
      onCloseAutoFocus={(e) => e.preventDefault()}
    >
      {/* Render content ONLY if an item is selected and has mega menu data */}
      {selectedNavDetails?.megaMenu && (
        <div
          role="region"
          className="min-2xl:max-w-[1600px] mx-auto w-full px-4 lg:py-5"
        >
          <div className="grid grid-cols-8 gap-6 py-8 xl:gap-12">
            {/* Map over the COLUMNS of the selected item's details */}
            {selectedNavDetails.megaMenu.columns.map((column, colIndex) => (
              <nav
                className={cn(
                  "flex flex-col gap-4",
                  column.links.length > 3 ? "col-span-4" : "col-span-2",
                )}
                key={column.heading || `col-${colIndex}`}
                data-test-id="secondary-nav-item"
              >
                {column.heading && (
                  <span className="block text-sm uppercase leading-[1.2] tracking-[.2em]">
                    {column.heading}
                  </span>
                )}
                <ul
                  className={cn(
                    "grid gap-x-6 gap-y-8",
                    column.links.length > 3 ? "grid-cols-2" : "grid-cols-1",
                  )}
                >
                  {/* Map over the LINKS within the column */}
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex} data-test-id="secondary-nav-item-link">
                      <Link
                        className="group/navitem group block"
                        href={link.href}
                        target={link.isExternal ? "_blank" : undefined}
                        rel={
                          link.isExternal ? "noopener noreferrer" : undefined
                        }
                        onClick={handleOverlayClick}
                      >
                        <span>
                          <span className="block text-lg font-semibold group-hover:underline">
                            {link.label}
                          </span>
                          {link.description && (
                            <span aria-hidden="true" className="block text-lg">
                              {link.description}
                            </span>
                          )}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            {/* Render the Featured CTA if it exists */}
            {selectedNavDetails.megaMenu.featuredCTA && (
              <FeaturedCTAComponent
                ctaData={selectedNavDetails.megaMenu.featuredCTA}
              />
            )}
          </div>
        </div>
      )}
    </DrawerContent>
  );
}

interface FeaturedCTAProps {
  ctaData: NonNullable<NavItemDetails["megaMenu"]>["featuredCTA"]; // Type for CTA data
}
function FeaturedCTAComponent({ ctaData }: FeaturedCTAProps) {
  if (!ctaData) return null;

  return (
    <div
      className="col-span-2 col-start-7 flex flex-col gap-4" // Example grid placement
      data-js-control="mega-menu-cta"
      data-test-id={`featured-${ctaData.type}`}
    >
      <div>
        <h2
          className="text-sm font-normal uppercase leading-[1.2] tracking-[.2em]"
          data-test-id="featured-cta-heading"
        >
          {ctaData.heading}
        </h2>
      </div>
      <div
        className="group relative isolate flex flex-col items-center justify-center overflow-hidden rounded-[20px] bg-black"
        data-test-id="featured-cta-content"
      >
        <div
          className="aspect-[366/205] h-full w-full overflow-hidden"
          data-test-id="featured-cta-image"
        >
          <Image
            alt={ctaData.image.alt}
            className="aspect-[366/205] h-full w-full scale-[102%] transform object-cover transition-all duration-300 ease-in-out group-hover:scale-[107%]"
            height={600} // Provide appropriate layout height/width
            width={800}
            loading="lazy"
            src={ctaData.image.src} // Use single src
          />
        </div>
        <div className="w-full px-6 py-8" data-test-id="featured-cta-details">
          <Link
            href={ctaData.href}
            className="before:absolute before:inset-0 before:block before:content-['']"
            data-test-id="featured-cta-link"
          >
            <h3
              className="mb-2 text-xl font-normal text-white"
              data-test-id="featured-cta-title"
            >
              {ctaData.title}
            </h3>
          </Link>
          <span
            aria-hidden="true"
            className="inline-flex items-center gap-1.5 text-lg text-[#ff784a] group-hover:underline"
            data-test-id="featured-cta-read-more"
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
