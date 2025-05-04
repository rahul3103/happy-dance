import { MainNavItem } from "@/types/nav";

export interface DocsConfig {
  mainNav: MainNavItem[];
  subNav: {
    [key: string]: {
      title: string;
      navItems: {
        subTitle: string;
        description: string;
      }[];
    }[];
  };
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Platform",
    },
    {
      title: "Solutions",
    },
    {
      title: "Company",
    },
    {
      title: "Resources",
    },
  ],
  subNav: {
    platform: [
      {
        title: "Platform",
        navItems: [
          {
            subTitle: "Careers website platform",
            description:
              "Engineered to optimize user experiences and improve hiring outcomes.",
          },
        ],
      },
      {
        title: "Premium Features",
        navItems: [
          {
            subTitle: "Analytics dashboard",
            description: "Access the insights you need to power performance.",
          },
          {
            subTitle: "Internal mobility site",
            description: "Build a dedicated space for internal opportunities.",
          },
          {
            subTitle: "Easy-apply overlay",
            description:
              "Boost conversions with consistent, branded applications.",
          },
          {
            subTitle: "Sourcing copilot",
            description:
              "Turn unknown traffic into talent and boost your pipeline.",
          },
        ],
      },
    ],
    solutions: [
      {
        title: "Solutions",
        navItems: [
          {
            subTitle: "Our solutions",
            description: "Tailored solutions for businesses of all sizes",
          },
        ],
      },
      {
        title: "MORE DETAIL",
        navItems: [
          {
            subTitle: "Essential",
            description:
              "All the core Happydance features—ideal for small businesses",
          },
          {
            subTitle: "Plus",
            description:
              "High-performance functionality for mid-sized organizations",
          },
          {
            subTitle: "Premium",
            description:
              "A fully customized, high-performance careers website for enterprises",
          },
        ],
      },
    ],
    company: [
      {
        title: "Company",
        navItems: [
          {
            subTitle: "Why Happydance?",
            description: "Experience the difference: Our unique approach.",
          },
          {
            subTitle: "Partners",
            description:
              "Explore our long-standing partnerships and key integrations.",
          },
          {
            subTitle: "Careers",
            description:
              "Join our friendly team and make your best career move yet.",
          },
          {
            subTitle: "About us",
            description:
              "Learn about our purpose, passions, values, and people.",
          },
          {
            subTitle: "The News Desk",
            description: "Find out what's happening at Happydance.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "Resources",
        navItems: [
          {
            subTitle: "INSIGHTS",
            description:
              "Unlock employer brand and talent acquisition expertise.",
          },
          {
            subTitle: "Customer experiences",
            description:
              "See why we have so many happy customers from leading brands.",
          },
          {
            subTitle: "Books",
            description: "Browse our collection of best-selling books.",
          },
          {
            subTitle: "Happydance Academy",
            description: "Explore our expert-led employer-brand courses.",
          },
        ],
      },
      {
        title: "FREE TOOLS",
        navItems: [
          {
            subTitle: "Job page grader",
            description:
              "Discover how to improve your job pages in just a few clicks.",
          },
          {
            subTitle: "Job description genie",
            description: "Create effective, on-brand descriptions, every time.",
          },
        ],
      },
    ],
  },
};
