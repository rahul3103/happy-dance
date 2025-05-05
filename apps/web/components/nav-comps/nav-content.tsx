"use client";

import { cn } from "@workspace/ui/lib/utils";
import { NavImage } from "./nav-image";
import { useNavigation } from "@/contexts/navigation-context";
import { BaseLink } from "@/components/base-link";

export function NavContent({
  selectedNavId,
}: {
  selectedNavId: string | null | undefined;
}) {
  const { navigationConfig } = useNavigation();
  if (!selectedNavId) return null;
  const selectedNavDetails = navigationConfig?.navItemDetails[selectedNavId];
  if (!selectedNavDetails) return null;

  return (
    <div
      role="region"
      className="min-2xl:max-w-[1600px] mx-auto mt-20 w-full px-4 lg:py-5"
    >
      <div className="grid grid-cols-8 gap-6 py-8 xl:gap-12">
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
                  <BaseLink
                    className="group/navitem group block"
                    href={link.href}
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
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
                  </BaseLink>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {selectedNavDetails.megaMenu.featuredCTA && (
          <NavImage ctaData={selectedNavDetails.megaMenu.featuredCTA} />
        )}
      </div>
    </div>
  );
}
