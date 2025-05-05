import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";
import Link from "next/link";
import { useNavigation } from "@/contexts/navigation-context";

export function NavMobileContent() {
  const { navigationConfig } = useNavigation();
  if (!navigationConfig) return null;
  return (
    <div className="mt-20 h-screen overflow-auto p-6 lg:hidden">
      <Accordion type="single" collapsible className="h-full w-full">
        {navigationConfig.mainNavOrder.map((item) => {
          const navDetails = navigationConfig.navItemDetails[item.id];
          if (!navDetails) return null;

          return (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-none"
            >
              <AccordionTrigger className="cursor-pointer text-lg font-semibold hover:no-underline">
                {item.label}
              </AccordionTrigger>
              <AccordionContent>
                <div>
                  {navDetails.mobileMenu.map((section, index) => (
                    <nav key={index} className="space-y-2">
                      <ul className="space-y-1">
                        {section.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="group block py-3 hover:underline"
                            >
                              <span className="text-muted-foreground block text-lg group-focus-visible:underline">
                                {link.label}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
