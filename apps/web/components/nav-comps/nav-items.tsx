import { headerConfig } from "@/config/header";
import { DrawerTrigger } from "@workspace/ui/components/drawer";
import { cn } from "@workspace/ui/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export function NavItem({
  handleClick,
  isOpen,
  selectedItem,
}: {
  handleClick: (itemId: string) => void;
  isOpen: boolean;
  selectedItem: string | null;
}) {
  return (
    <ul className="flex flex-row items-center gap-4">
      {headerConfig.mainNavOrder.map((item) => {
        // Check if this item ID has associated details (for menu trigger)
        const details = headerConfig.navItemDetails[item.id];
        const hasMenu = details?.megaMenu || details?.mobileMenu; // Check if it should act as a trigger

        return (
          <li key={item.id} className="relative">
            {hasMenu ? (
              <DrawerTrigger
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.id);
                }}
                aria-expanded={isOpen && selectedItem === item.id}
                aria-controls={`mega-menu-panel-${item.id}`}
                className={cn(
                  "group/navitem pointer-events-auto flex cursor-pointer items-center gap-1 p-1 pr-7 underline-offset-4 hover:underline",
                  isOpen && selectedItem === item.id ? "text-brand-orange" : "", // Example selected style
                )}
              >
                <span>{item.label}</span>
                <ChevronDown
                  className={cn(
                    "absolute right-1 top-1/2 size-5 -translate-y-1/2 transition-transform duration-300",
                    isOpen && selectedItem === item.id ? "rotate-180" : "",
                  )}
                />
              </DrawerTrigger>
            ) : (
              // Otherwise render as a simple link (assuming href exists)
              <Link
                // href={details?.href || '#'} // Or get href from details if stored there
                href={`/${item.id}`} // Assuming ID matches path for simple links
                onClick={() => handleClick(item.id)}
                className="group/navitem flex cursor-pointer items-center gap-1 p-1 underline-offset-4 hover:underline"
              >
                {item.label}
              </Link>
            )}
          </li>
        );
      })}
      {/* CTA Button */}
      <li className="relative" data-test-id="landing-page-link">
        <Link
          href="/demo"
          className={cn(/* ... button classes ... */)}
          onClick={() => handleClick("cta")} // Use a generic ID or different handling
        >
          Book a demo
        </Link>
      </li>
    </ul>
  );
}
