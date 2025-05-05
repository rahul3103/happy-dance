import { FooterConfig } from "@/types/footer";

const footerData: FooterConfig = {
  navigation: [
    {
      title: "Platform",
      links: [
        { text: "Careers website platform", href: "/platform/" },
        { text: "Easy-apply overlay", href: "/platform/easy-apply-overlay/" },
        { text: "Analytics dashboard", href: "/platform/analytics-dashboard/" },
        {
          text: "Internal mobility site",
          href: "/platform/internal-mobility-site/",
        },
        { text: "Sourcing copilot", href: "/platform/sourcing-copilot/" },
      ],
    },
    {
      title: "Tools",
      links: [
        { text: "Sourcing copilot tool", href: "/sourcing-copilot-tool/" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { text: "Our solutions", href: "/solutions/" },
        { text: "Essential", href: "/solutions/essential/" },
        { text: "Plus", href: "/solutions/plus/" },
        { text: "Premium", href: "/solutions/premium/" },
      ],
    },
    {
      title: "Services",
      links: [
        { text: "SEO services", href: "/seo-concierge-service/" },
        { text: "CRO services", href: "/cro-concierge-service/" },
        { text: "Insights services", href: "/insights-concierge-service/" },
        { text: "Creative services", href: "/creative-concierge-service/" },
        { text: "Support service", href: "/support-concierge-service/" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "Why Happydance", href: "/why-happydance/" },
        { text: "About us", href: "/about-us/" },
        { text: "Partners", href: "/partners/" },
        { text: "Careers", href: "/careers/" },
        { text: "The News Desk", href: "/the-news-desk/" },
        { text: "Contact us", href: "/contact-us/" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Insights", href: "/insights/" },
        { text: "Job page grader", href: "/job-page-grader/" },
        { text: "Job description genie", href: "/job-description-genie/" },
        { text: "Customer experiences", href: "/customer-experiences/" },
        { text: "Books", href: "/books/" },
      ],
    },
  ],
  bottomLinks: [
    { text: "Sitemap", href: "/sitemap/" },
    { text: "Cookies", href: "/cookies/" },
    { text: "Privacy", href: "/privacy-policy/" },
    { text: "Terms of use", href: "/terms/" },
    {
      text: "Report unethical behavior",
      href: "mailto:whistleblowing@happydance.love?Subject=Report Unethical Behavior",
    },
    { text: "Support Desk", href: "https://support.happydance.love/" },
  ],
  socialLinks: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/happydance-love/",
      icon: "linkedin",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/happydance.sites/",
      icon: "instagram",
    },
  ],
  copyright: {
    text: "© Happydance 2025, all rights reserved.",
    builtBy: "Built by Happydance.",
  },
};

export async function GET(): Promise<Response> {
  return Response.json(footerData);
}
