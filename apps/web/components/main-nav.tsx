// components/main-nav.tsx
"use client";

import { useState } from "react";
import { headerConfig, NavItemDetails } from "@/config/header";
import { NavItem } from "./nav-comps/nav-items";
import { NavContent } from "./nav-comps/nav-content";
import { DialogTitle } from "@workspace/ui/components/dialog";
export function MainNav({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const selectedNavDetails: NavItemDetails | null | undefined = selectedItem
    ? headerConfig.navItemDetails[selectedItem]
    : null;

  const handleClick = (itemId: string) => {
    // Check if the item *has* details (meaning it's a menu trigger)
    const hasDetails =
      headerConfig.navItemDetails[itemId]?.megaMenu ||
      headerConfig.navItemDetails[itemId]?.mobileMenu;

    if (hasDetails) {
      if (selectedItem === itemId && isOpen) {
        setIsOpen(false);
      } else {
        setSelectedItem(itemId);
        setIsOpen(true);
      }
    } else {
      // If it has no details, assume it's a direct link
      setIsOpen(false);
    }
  };

  const handleOverlayClick = () => {
    setSelectedItem(null);
    setIsOpen(false);
  };

  return (
    <nav className="hidden lg:block">
      <NavItem
        handleClick={handleClick}
        isOpen={isOpen}
        selectedItem={selectedItem}
      />
      <DialogTitle className="sr-only">
        {selectedNavDetails?.megaMenu?.featuredCTA?.heading}
      </DialogTitle>
      <NavContent
        handleOverlayClick={handleOverlayClick}
        selectedNavDetails={selectedNavDetails}
      />
    </nav>
  );
}
