import Link from "next/link";
import { Icons } from "./icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";

const footerData = {
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

export function SiteFooter() {
  return (
    <footer className="bg-dark-background text-dark-foreground bottom-0 z-0 -mt-24 pb-6 pt-32 lg:sticky">
      <div className="min-2xl:max-w-[1624px] mx-auto w-full px-5">
        <Icons.logo className="mb-8 h-auto w-full lg:mb-16" />
        <div className="mb-24 gap-10 lg:columns-5">
          <Accordion type="single" collapsible className="lg:hidden">
            {footerData.navigation.map((section) => (
              <AccordionItem
                key={section.title}
                value={section.title}
                className="border-none"
              >
                <AccordionTrigger className="cursor-pointer text-[1.125rem] leading-[1.5] hover:no-underline">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.text}>
                        <Link
                          href={link.href}
                          className="text-light-gray footer-nav-sub-link focus-state block text-[1.125rem] leading-[1.5] hover:underline"
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Desktop view */}
          <ul className="hidden lg:block">
            {footerData.navigation.map((section) => (
              <li key={section.title} className="mb-8 break-inside-avoid">
                <h3 className="mb-2 text-[1.125rem] leading-[1.5]">
                  {section.title}
                </h3>
                <ul className="w-full">
                  {section.links.map((link) => (
                    <li key={link.text}>
                      <Link
                        href={link.href}
                        className="text-light-gray footer-nav-sub-link focus-state mb-2 block text-[1.125rem] leading-[1.5] hover:underline"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="min-2xl:max-w-[1624px] mx-auto w-full px-5">
        <div className="relative mb-8 lg:mb-4">
          <Icons.hLogo className="footer-logo-sm h-auto w-[42px]" />
        </div>
        <div className="justify-between lg:mb-4 lg:flex">
          <div className="mb-8 lg:mb-0">
            <ul className="gap-4 lg:flex">
              {footerData.bottomLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="focus-state mb-2 block text-[1.125rem] leading-[1.5] hover:underline lg:mb-0"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener" : undefined}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6 lg:mb-0">
            <div className="col-12 col-md-6">
              <div className="footer-social">
                <ul className="list-share-icons flex gap-2">
                  {footerData.socialLinks.map((social) => {
                    const Icon = Icons[social.icon as keyof typeof Icons];
                    return (
                      <li key={social.name} className="social-item">
                        <Link
                          href={social.href}
                          className="focus-state block"
                          target="_blank"
                          rel="noopener"
                          aria-label={`${social.name} (Opens in new window)`}
                        >
                          <Icon className="size-8" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="justify-between border-t border-gray-500 pt-4 lg:flex">
          <div>
            <p className="text-[1.125rem] leading-[1.5]">
              {footerData.copyright.text}
            </p>
          </div>
          <p className="text-[1.125rem] leading-[1.5] lg:text-right">
            {footerData.copyright.builtBy}
          </p>
        </div>
      </div>
    </footer>
  );
}

/*

 
        

      */
