import { Icons } from "./icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";
import { useNavigation } from "@/contexts/navigation-context";
import { BaseLink } from "@/components/base-link";

export function SiteFooter() {
  const { footerConfig } = useNavigation();
  if (!footerConfig) return null;
  return (
    <footer className="bg-dark-background text-dark-foreground bottom-0 z-0 -mt-24 pb-6 pt-32 lg:sticky">
      <div className="min-2xl:max-w-[1624px] mx-auto w-full px-5">
        <Icons.logo className="mb-8 h-auto w-full lg:mb-16" />
        <div className="mb-24 gap-10 lg:columns-5">
          <Accordion type="single" collapsible className="lg:hidden">
            {footerConfig.navigation.map((section) => (
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
                        <BaseLink
                          href={link.href}
                          className="text-light-gray footer-nav-sub-link focus-state block text-[1.125rem] leading-[1.5] hover:underline"
                        >
                          {link.text}
                        </BaseLink>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Desktop view */}
          <ul className="hidden lg:block">
            {footerConfig.navigation.map((section) => (
              <li key={section.title} className="mb-8 break-inside-avoid">
                <h3 className="mb-2 text-[1.125rem] leading-[1.5]">
                  {section.title}
                </h3>
                <ul className="w-full">
                  {section.links.map((link) => (
                    <li key={link.text}>
                      <BaseLink
                        href={link.href}
                        className="text-light-gray footer-nav-sub-link focus-state mb-2 block text-[1.125rem] leading-[1.5] hover:underline"
                      >
                        {link.text}
                      </BaseLink>
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
              {footerConfig.bottomLinks.map((link) => (
                <li key={link.text}>
                  <BaseLink
                    href={link.href}
                    className="focus-state mb-2 block text-[1.125rem] leading-[1.5] hover:underline lg:mb-0"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener" : undefined}
                  >
                    {link.text}
                  </BaseLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6 lg:mb-0">
            <div className="col-12 col-md-6">
              <div className="footer-social">
                <ul className="list-share-icons flex gap-2">
                  {footerConfig.socialLinks.map((social) => {
                    const Icon = Icons[social.icon as keyof typeof Icons];
                    return (
                      <li key={social.name} className="social-item">
                        <BaseLink
                          href={social.href}
                          className="focus-state block"
                          target="_blank"
                          rel="noopener"
                          aria-label={`${social.name} (Opens in new window)`}
                        >
                          <Icon className="size-8" />
                        </BaseLink>
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
              {footerConfig.copyright.text}
            </p>
          </div>
          <p className="text-[1.125rem] leading-[1.5] lg:text-right">
            {footerConfig.copyright.builtBy}
          </p>
        </div>
      </div>
    </footer>
  );
}

/*

 
        

      */
