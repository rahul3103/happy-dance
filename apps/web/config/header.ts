/**
 * src/config/header.ts
 *
 * Configuration file for the main header navigation.
 * Defines the structure, labels, links, and associated menu data.
 */

// ============================================================================
// Interface Definitions
// ============================================================================

/** Represents a single navigation link. */
export interface NavLink {
  label: string; // The visible text of the link
  href: string; // The target URL
  description?: string; // Optional descriptive text (used in mega menus)
  isExternal?: boolean; // Flag for links opening in a new tab
}

/** Represents a column within the desktop mega menu. */
export interface MegaMenuColumn {
  heading?: string; // Optional heading displayed above the links
  links: NavLink[]; // Array of links within this column
}

/** Represents the featured Call-to-Action block within a mega menu. */
export interface FeaturedCTA {
  type: "caseStudy" | "insight" | "custom"; // Differentiates CTA types if needed for styling/logic
  heading: string; // Heading for the CTA section (e.g., "Featured Case Study")
  title: string; // Main title of the featured item (e.g., "Domino's")
  image: {
    src: string; // Image source URL (Next/Image handles optimization)
    alt: string; // Alt text for the image
  };
  href: string; // Link URL for the CTA
}

/** Represents the entire data structure for a single item's desktop mega menu. */
export interface MegaMenuData {
  columns: MegaMenuColumn[]; // An array of columns to display
  featuredCTA?: FeaturedCTA; // An optional featured CTA block
}

/** Represents a section within the mobile navigation dropdown/accordion. */
export interface MobileNavSection {
  heading?: string; // Optional heading for the section
  links: NavLink[]; // Array of links within this section (usually simpler, no descriptions)
}

/** Represents the detailed data associated with a specific top-level nav item ID. */
export interface NavItemDetails {
  megaMenu?: MegaMenuData; // Data for the desktop mega menu (if it exists)
  mobileMenu?: MobileNavSection[]; // Data structure for the mobile dropdown (if it exists)
  // If a top-level item could be JUST a link (no menu), you might add:
  // href?: string;
}

/** Represents the overall header configuration structure. */
export interface HeaderConfig {
  /** Defines the order and labels of top-level navigation items shown in the header bar. */
  mainNavOrder: Array<{ id: string; label: string }>;

  /** Maps unique navigation item IDs to their detailed menu data (mega menu, mobile menu, etc.). */
  navItemDetails: Record<string, NavItemDetails>;
}

// ============================================================================
// Configuration Data
// ============================================================================

export const headerConfig: HeaderConfig = {
  // 1. Define the order and labels for the main navigation bar
  mainNavOrder: [
    { id: "platform", label: "Platform" },
    { id: "solutions", label: "Solutions" },
    { id: "company", label: "Company" },
    { id: "resources", label: "Resources" },
    // Example of an item that might be just a link:
    // { id: "contact", label: "Contact Us" },
  ],

  // 2. Define the detailed menu data for each item ID listed above
  navItemDetails: {
    // --- Platform Item Details ---
    platform: {
      megaMenu: {
        columns: [
          {
            heading: "PLATFORM",
            links: [
              {
                label: "Careers website platform",
                href: "/platform/",
                description:
                  "Engineered to optimize user experiences and improve hiring outcomes.",
              },
            ],
          },
          {
            heading: "PREMIUM FEATURES",
            links: [
              {
                label: "Analytics dashboard",
                href: "/platform/analytics-dashboard/",
                description:
                  "Access the insights you need to power performance.",
              },
              {
                label: "Easy-apply overlay",
                href: "/platform/easy-apply-overlay/",
                description:
                  "Boost conversions with consistent, branded applications.",
              },
              {
                label: "Internal mobility site",
                href: "/platform/internal-mobility-site/",
                description:
                  "Build a dedicated space for internal opportunities.",
              },
              {
                label: "Sourcing copilot",
                href: "/platform/sourcing-copilot/",
                description:
                  "Turn unknown traffic into talent and boost your pipeline.",
              },
            ],
          },
        ],
        featuredCTA: {
          type: "caseStudy",
          heading: "Featured case study",
          title: "Domino's",
          image: {
            src: "/dominoes-header.jpg",
            alt: "multiple screenshots of the Domino's website",
          },
          href: "/customer-experiences/dominos/",
        },
      },
      mobileMenu: [
        {
          // No heading needed if label matches top-level
          links: [{ label: "Careers website platform", href: "/platform/" }],
        },
        {
          heading: "PREMIUM FEATURES",
          links: [
            {
              label: "Analytics dashboard",
              href: "/platform/analytics-dashboard/",
            },
            {
              label: "Easy-apply overlay",
              href: "/platform/easy-apply-overlay/",
            },
            {
              label: "Internal mobility site",
              href: "/platform/internal-mobility-site/",
            },
            { label: "Sourcing copilot", href: "/platform/sourcing-copilot/" },
          ],
        },
      ],
    },

    // --- Solutions Item Details ---
    solutions: {
      megaMenu: {
        columns: [
          {
            heading: "SOLUTIONS",
            links: [
              {
                label: "Our solutions",
                href: "/solutions/",
                description: "Tailored solutions for businesses of all sizes",
              },
            ],
          },
          {
            heading: "MORE DETAIL",
            links: [
              {
                label: "Essential",
                href: "/solutions/essential/",
                description:
                  "All the core Happydance features—ideal for small businesses",
              },
              {
                label: "Plus",
                href: "/solutions/plus/",
                description:
                  "High-performance functionality for mid-sized organizations",
              },
              {
                label: "Premium",
                href: "/solutions/premium/",
                description:
                  "A fully customized, high-performance careers website for enterprises",
              },
            ],
          },
        ],
        featuredCTA: {
          type: "caseStudy",
          heading: "Featured case study",
          title: "Ingram Micro",
          image: {
            src: "/ingram-micro-header.jpg",
            alt: "Ingram Micro Header",
          },
          href: "/customer-experiences/ingram-micro/",
        },
      },
      mobileMenu: [
        { links: [{ label: "Our solutions", href: "/solutions/" }] }, // Using top-level label implicitly
        {
          heading: "MORE DETAIL",
          links: [
            { label: "Essential", href: "/solutions/essential/" },
            { label: "Plus", href: "/solutions/plus/" },
            { label: "Premium", href: "/solutions/premium/" },
          ],
        },
      ],
    },

    // --- Company Item Details ---
    company: {
      megaMenu: {
        columns: [
          {
            heading: "COMPANY",
            links: [
              {
                label: "Why Happydance?",
                href: "/why-happydance/",
                description: "Experience the difference: Our unique approach.",
              },
              {
                label: "About us",
                href: "/about-us/",
                description:
                  "Learn about our purpose, passions, values, and people.",
              },
              {
                label: "Partners",
                href: "/partners/",
                description:
                  "Explore our long-standing partnerships and key integrations.",
              },
              {
                label: "The News Desk",
                href: "/the-news-desk/",
                description: "Find out what’s happening at Happydance.",
              },
              {
                label: "Careers",
                href: "/careers/",
                description:
                  "Join our friendly team and make your best career move yet.",
              },
            ],
          },
          // Only one column for links in this example
        ],
        featuredCTA: {
          type: "insight", // Different CTA type
          heading: "Featured insight",
          title:
            "Employee experience: Laura’s diverse role creating a joyful working environment",
          image: {
            src: "/laura-spotlight.jpg",
            alt: "a person smiling for the camera",
          },
          href: "/insights/posts/employee-experience-laura-s-diverse-role-creating-a-joyful-working-environment/",
        },
      },
      mobileMenu: [
        {
          // No heading needed, using top-level label
          links: [
            { label: "Why Happydance?", href: "/why-happydance/" },
            { label: "About us", href: "/about-us/" },
            { label: "Partners", href: "/partners/" },
            { label: "The News Desk", href: "/the-news-desk/" },
            { label: "Careers", href: "/careers/" },
          ],
        },
      ],
    },

    // --- Resources Item Details ---
    resources: {
      megaMenu: {
        columns: [
          {
            heading: "RESOURCES",
            links: [
              {
                label: "INSIGHTS",
                href: "/insights/",
                description:
                  "Unlock employer brand and talent acquisition expertise.",
              },
              {
                label: "Customer experiences",
                href: "/customer-experiences/",
                description:
                  "See why we have so many happy customers from leading brands.",
              },
              {
                label: "Books",
                href: "/books/",
                description: "Browse our collection of best-selling books.",
              },
              {
                label: "Happydance Academy",
                href: "https://academy.happydance.love/pages/home",
                description: "Explore our expert-led employer-brand courses.",
                isExternal: true,
              }, // Mark external
            ],
          },
          {
            heading: "FREE TOOLS",
            links: [
              {
                label: "Job page grader",
                href: "/job-page-grader/",
                description:
                  "Discover how to improve your job pages in just a few clicks.",
              },
              {
                label: "Job description genie",
                href: "/job-description-genie/",
                description:
                  "Create effective, on-brand descriptions, every time.",
              },
            ],
          },
        ],
        // No featured CTA in this example
      },
      mobileMenu: [
        {
          heading: "RESOURCES",
          links: [
            { label: "INSIGHTS", href: "/insights/" },
            { label: "Customer experiences", href: "/customer-experiences/" },
            { label: "Books", href: "/books/" },
            {
              label: "Happydance Academy",
              href: "https://academy.happydance.love/pages/home",
              isExternal: true,
            },
          ],
        },
        {
          heading: "FREE TOOLS",
          links: [
            { label: "Job page grader", href: "/job-page-grader/" },
            { label: "Job description genie", href: "/job-description-genie/" },
          ],
        },
      ],
    },

    // --- Example: Contact Item (No Menu) ---
    // "contact": {
    //   // No megaMenu or mobileMenu needed if it's just a link
    //   // The component logic would see no menu data and render a direct <Link href="/contact">
    // },
  },
};
