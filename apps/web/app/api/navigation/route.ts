import { NavigationConfig } from "@/types/navigation";

const navigationData: NavigationConfig = {
  // 1. Define the order and labels for the main navigation bar
  mainNavOrder: [
    { id: "platform", label: "Platform" },
    { id: "solutions", label: "Solutions" },
    { id: "company", label: "Company" },
    { id: "resources", label: "Resources" },
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
        { links: [{ label: "Our solutions", href: "/solutions/" }] },
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
                description: "Find out what's happening at Happydance.",
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
          type: "insight",
          heading: "Featured insight",
          title:
            "Employee experience: Laura's diverse role creating a joyful working environment",
          image: {
            src: "/laura-spotlight.jpg",
            alt: "a person smiling for the camera",
          },
          href: "/insights/posts/employee-experience-laura-s-diverse-role-creating-a-joyful-working-environment/",
        },
      },
      mobileMenu: [
        {
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
              },
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
  },
};

export async function GET(): Promise<Response> {
  return Response.json(navigationData);
}
