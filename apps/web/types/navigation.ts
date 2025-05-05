// ============================================================================
// Interface Definitions
// ============================================================================

/** Represents a single navigation link. */
export type NavLink = {
  label: string;
  href: string;
  description?: string; // Present only in some desktop links
  isExternal?: boolean; // Present only in some external links
};

/** Represents a column within the desktop mega menu. */
export type NavColumn = {
  heading: string;
  links: NavLink[];
};

/** Represents the featured Call-to-Action block within a mega menu. */
export type FeaturedCTA = {
  type: "caseStudy" | "insight";
  heading: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  href: string;
};

/** Represents the entire data structure for a single item's desktop mega menu. */
export type MegaMenu = {
  columns: NavColumn[];
  featuredCTA?: FeaturedCTA; // Not present in all items (e.g., some resources sections might lack it)
};

/** Represents a section within the mobile navigation dropdown/accordion. */
export type MobileMenu = {
  heading?: string; // Present in some sections only
  links: {
    label: string;
    href: string;
    isExternal?: boolean; // Present only in Happydance Academy
  }[];
}[];

/** Represents the detailed data associated with a specific top-level nav item ID. */
export type NavItemDetails = {
  megaMenu: MegaMenu;
  mobileMenu: MobileMenu;
};

/** Represents the overall header configuration structure. */
export type MainNavItem = {
  id: string;
  label: string;
};

export type NavigationConfig = {
  mainNavOrder: MainNavItem[];
  navItemDetails: {
    [key: string]: NavItemDetails;
  };
};
