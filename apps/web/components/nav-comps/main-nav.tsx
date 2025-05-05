"use client";

import { useState } from "react";
import { NavItem } from "./nav-items";
import { NavContent } from "./nav-content";
import { SheetContent, SheetTitle } from "@workspace/ui/components/sheet";
import { MobileNav } from "../mobile-nav";
import { NavMobileContent } from "./nav-mobile-content";
import { capitalize } from "@workspace/ui/lib/capitalize";
import { NavigationConfig } from "@/types/navigation";

type NavItemId = NavigationConfig["mainNavOrder"][number]["id"] | "mobile-nav";

export function MainNav({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}) {
  const [selectedItem, setSelectedItem] = useState<NavItemId>("platform");

  const handleClick = (itemId: string) => {
    if (!itemId) return;
    if (selectedItem === itemId && isOpen) setIsOpen(false);
    else {
      setSelectedItem(itemId as NavItemId);
      setIsOpen(true);
    }
  };
  const handleOverlayClick = () => setIsOpen(false);

  const title =
    selectedItem === "mobile-nav"
      ? "Mobile Navigation Menu"
      : capitalize(selectedItem);

  return (
    <>
      <MobileNav handleClick={handleClick} isOpen={isOpen} />
      <nav className="hidden lg:block">
        <NavItem
          handleClick={handleClick}
          isOpen={isOpen}
          selectedItem={selectedItem}
        />
        <SheetTitle className="sr-only">{title}</SheetTitle>
      </nav>
      <SheetContent
        side="top"
        aria-describedby={undefined}
        className="lg:rounded-4xl pointer-events-auto outline-none"
        onOverlayClick={handleOverlayClick}
      >
        <NavContent selectedNavId={selectedItem} />
        <NavMobileContent />
      </SheetContent>
    </>
  );
}
