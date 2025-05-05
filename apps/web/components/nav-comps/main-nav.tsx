"use client";

import { useState } from "react";
import { NavItem } from "./nav-items";
import { NavContent } from "./nav-content";
import { DrawerContent, DrawerTitle } from "@workspace/ui/components/drawer";
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
      <MobileNav handleClick={handleClick} />
      <nav className="hidden lg:block">
        <NavItem
          handleClick={handleClick}
          isOpen={isOpen}
          selectedItem={selectedItem}
        />
        <DrawerTitle className="sr-only">{title}</DrawerTitle>
      </nav>
      <DrawerContent
        aria-describedby={undefined}
        className="pointer-events-auto outline-none data-[vaul-drawer-direction=top]:max-h-screen"
        onOverlayClick={handleOverlayClick}
      >
        <NavContent selectedNavId={selectedItem} />
        <NavMobileContent />
      </DrawerContent>
    </>
  );
}
