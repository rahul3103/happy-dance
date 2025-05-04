// src/data/headerData.ts

export interface NavLink {
  label: string;
  href: string;
  description?: string; // For mega menu descriptions
}

export interface MegaMenuColumn {
  heading?: string;
  links: NavLink[];
}

export interface MegaMenuData {
  columns: MegaMenuColumn[];
  featuredCTA?: {
    type: "caseStudy" | "insight"; // To differentiate CTA types
    heading: string;
    title: string;
    image: { webp: string; jpg: string; alt: string };
    href: string;
  };
}

export interface MobileSection {
  heading?: string; // Optional heading for the section in mobile
  links: NavLink[];
}

export interface NavItem {
  id: string;
  label: string;
  href?: string; // Optional top-level link (used if no mega menu)
  megaMenu?: MegaMenuData; // Desktop mega menu structure
  mobileSections?: MobileSection[]; // Mobile dropdown structure (can derive or define separately)
}

export const navItemsData: NavItem[] = [
  {
    id: "platform", // Use slugs for IDs
    label: "Platform",
    // No top-level href if it opens a mega menu
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
              description: "Access the insights you need to power performance.",
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
          webp: "https://assets-happydance-marketing.happydance.website/cdn-cgi/image/fit=cover,width=800,height=600,format=webp,quality=95/media/okxonuna/dominoes-header.jpg",
          jpg: "https://assets-happydance-marketing.happydance.website/cdn-cgi/image/fit=cover,quality=95/media/okxonuna/dominoes-header.jpg",
          alt: "multiple screenshots of the Domino's website",
        },
        href: "/customer-experiences/dominos/",
      },
    },
    mobileSections: [
      // Define mobile structure explicitly
      {
        heading: "PLATFORM",
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
  {
    id: "solutions",
    label: "Solutions",
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
        // Assuming same CTA structure, different content
        type: "caseStudy",
        heading: "Featured case study",
        title: "Ingram Micro",
        image: {
          webp: "https://assets-happydance-marketing.happydance.website/cdn-cgi/image/fit=cover,width=800,height=600,format=webp,quality=95/media/f5seoon3/ingram-micro-header.jpg",
          jpg: "https://assets-happydance-marketing.happydance.website/cdn-cgi/image/fit=cover,quality=95/media/f5seoon3/ingram-micro-header.jpg",
          alt: "Ingram Micro Header",
        },
        href: "/customer-experiences/ingram-micro/",
      },
    },
    mobileSections: [
      {
        heading: "SOLUTIONS",
        links: [{ label: "Our solutions", href: "/solutions/" }],
      },
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
  {
    id: "company",
    label: "Company",
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
      ],
      featuredCTA: {
        type: "insight", // Different CTA type
        heading: "Featured insight",
        title:
          "Employee experience: Laura’s diverse role creating a joyful working environment",
        image: {
          webp: "https://assets-happydance-marketing.happydance.website/cdn-cgi/image/fit=cover,width=800,height=600,format=webp,quality=95/media/cpod45jm/laura-spotlight.jpg",
          jpg: "https://assets-happydance-marketing.happydance.website/cdn-cgi/image/fit=cover,quality=95/media/cpod45jm/laura-spotlight.jpg",
          alt: "a person smiling for the camera",
        },
        href: "/insights/posts/employee-experience-laura-s-diverse-role-creating-a-joyful-working-environment/",
      },
    },
    mobileSections: [
      {
        heading: "COMPANY",
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
  {
    id: "resources",
    label: "Resources",
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
            }, // Note: External links might need handling
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
      // No featured CTA for this one? Add if needed.
    },
    mobileSections: [
      {
        heading: "RESOURCES",
        links: [
          { label: "INSIGHTS", href: "/insights/" },
          { label: "Customer experiences", href: "/customer-experiences/" },
          { label: "Books", href: "/books/" },
          {
            label: "Happydance Academy",
            href: "https://academy.happydance.love/pages/home",
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
];

// You can add the featuredCaseStudy data here too if needed, or keep it separate
export const featuredCtaData = {
  // Example for one section
  type: "caseStudy",
  heading: "Featured case study",
  title: "Domino's",
  image: { webp: "...", jpg: "...", alt: "..." },
  href: "/customer-experiences/dominos/",
};
