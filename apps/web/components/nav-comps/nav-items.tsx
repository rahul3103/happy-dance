"use client";

import { DrawerTrigger } from "@workspace/ui/components/drawer";
import { cn } from "@workspace/ui/lib/utils";
import { ChevronDown } from "lucide-react";
import { LinkButton } from "../link-button";
import { useNavigation } from "@/contexts/navigation-context";

export function NavItem({
  handleClick,
  isOpen,
  selectedItem,
}: {
  handleClick: (itemId: string) => void;
  isOpen: boolean;
  selectedItem: string | null;
}) {
  const { navigationConfig } = useNavigation();

  if (!navigationConfig) return null;

  return (
    <ul className="flex flex-row items-center gap-4">
      {navigationConfig.mainNavOrder.map((item) => (
        <li key={item.id} className="relative">
          <DrawerTrigger
            onClick={(e) => {
              e.preventDefault();
              handleClick(item.id);
            }}
            aria-expanded={isOpen && selectedItem === item.id}
            aria-controls={`mega-menu-panel-${item.id}`}
            className={cn(
              "group/navitem pointer-events-auto flex cursor-pointer items-center gap-1 p-1 pr-7 underline-offset-4 hover:underline",
              isOpen && selectedItem === item.id ? "text-brand-orange" : "",
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
        </li>
      ))}
      <li className="relative" data-test-id="landing-page-link">
        <LinkButton
          className="bg-brand-orange text-light-foreground border-brand-orange hover:border-primary dark:bg-brand-orange dark:border-brand-orange dark:hover:border-primary pointer-events-auto"
          showIcon={false}
          href="/"
        >
          Book a demo
        </LinkButton>
      </li>
    </ul>
  );
}
