// components/main-nav.tsx
"use client";

import { useState } from "react";
import { docsConfig } from "@/config/docs";
import { cn } from "@workspace/ui/lib/utils";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { buttonVariants } from "@workspace/ui/components/button";

export function MainNav({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleClick = (item: string) => {
    setSelectedItem(item);
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleOverlayClick = () => setIsOpen(false);

  return (
    <nav className="navbar-nav flex hidden flex-col lg:block lg:flex-row">
      <ul className="flex flex-row items-center gap-4">
        {docsConfig.mainNav.map((item) => {
          const itemKey =
            item.title.toLowerCase() as keyof typeof docsConfig.subNav;
          const subNavData = docsConfig.subNav[itemKey];
          if (!subNavData) {
            return null;
          }
          return (
            <li key={item.title} className="relative">
              <DrawerTrigger
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.title);
                }}
                className="group/navitem focus-state pointer-events-auto flex cursor-pointer items-center gap-1 p-1 pr-7 underline-offset-4 hover:underline"
              >
                <span>{item.title}</span>
                <ChevronDown className="absolute right-0 top-2 size-5" />
              </DrawerTrigger>
            </li>
          );
        })}
        <Link
          href="/demo"
          className={cn(
            buttonVariants({ variant: "default" }),
            "border-1 rounded-full border-[rgb(255,120,74)] bg-[rgb(255,120,74)] px-6 py-6 text-base font-semibold text-[rgb(18,18,18)] hover:border-black",
          )}
        >
          Book a demo
        </Link>
      </ul>
      <DrawerContent
        className="pointer-events-none"
        onOverlayClick={handleOverlayClick}
      >
        {docsConfig.mainNav.map((item) => {
          const itemKey =
            item.title.toLowerCase() as keyof typeof docsConfig.subNav;
          const subNavData = docsConfig.subNav[itemKey];
          if (!subNavData) {
            return null;
          }
          const isSelected = selectedItem === item.title;
          return (
            <div key={item.title} hidden={!isSelected}>
              <DrawerHeader>
                <DrawerTitle>{item.title}</DrawerTitle>
                <DrawerDescription>
                  {`Explore links under ${selectedItem}`}
                </DrawerDescription>
              </DrawerHeader>
              <div className="grid gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
                {subNavData.map((section) => (
                  <div key={section.title} className="flex flex-col">
                    <ul className="flex flex-col space-y-1">
                      {section.navItems.map((subItem) => (
                        <li key={subItem.subTitle}>
                          <ListItem
                            href="#" // Add actual links here
                            title={subItem.subTitle}
                          >
                            {subItem.description}
                          </ListItem>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </DrawerContent>
    </nav>
  );
}
// Helper component for list items within the dropdown (from Shadcn examples)
const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
  [key: string]: any;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
        className,
      )}
      {...props}
    >
      <div className="text-base font-medium leading-none">{title}</div>
      <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
        {children}
      </p>
    </Link>
  );
};
