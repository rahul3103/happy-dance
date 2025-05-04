"use client";

import { useState } from "react";
import { headerConfig, NavItemDetails } from "@/config/header";
import { NavItem } from "./nav-items";
import { NavContent } from "./nav-content";
import { DrawerContent, DrawerTitle } from "@workspace/ui/components/drawer";

import { MobileNav } from "../mobile-nav";
import { NavMobileContent } from "./nav-mobile-content";

type NavItemId =
  | "platform"
  | "solutions"
  | "company"
  | "resources"
  | "mobile-nav";

export function MainNav({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}) {
  const [selectedItem, setSelectedItem] = useState<NavItemId>("platform");

  const selectedNavDetails: NavItemDetails | undefined =
    headerConfig.navItemDetails[selectedItem];

  const handleClick = (itemId: string) => {
    if (!itemId) return;
    if (selectedItem === itemId && isOpen) setIsOpen(false);
    else {
      setSelectedItem(itemId as NavItemId);
      setIsOpen(true);
    }
  };
  const title =
    selectedItem === "mobile-nav"
      ? "Mobile Navigation Menu"
      : (headerConfig.mainNavOrder.find((item) => item.id === selectedItem)
          ?.label ?? "");

  const handleOverlayClick = () => setIsOpen(false);

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
        <NavContent selectedNavDetails={selectedNavDetails} />
        <NavMobileContent />
      </DrawerContent>
    </>
  );
}
