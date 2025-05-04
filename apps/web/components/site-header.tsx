"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeSwitcher } from "@/components/mode-switcher";
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
import { Button } from "@workspace/ui/components/button";
import { useLayoutRefs } from "@/contexts/layout-refs-context";
import { buttonVariants } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import { useHideHeader } from "@/contexts/layout-visibility";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const { headerRef } = useLayoutRefs();
  const hideHeader = useHideHeader();
  return (
    <Drawer
      direction="top"
      modal={true}
      open={isOpen}
      // onOpenChange={handleOpenChange}
    >
      <header
        ref={headerRef}
        className={cn(
          "border-grid z-21 fixed top-0 w-full bg-transparent transition-transform duration-300 ease-in-out supports-[backdrop-filter]:bg-transparent",
          hideHeader ? "-translate-y-full" : "translate-y-0",
        )}
      >
        <div className="min-2xl:max-w-[1624px] mx-auto flex w-full max-w-full items-center justify-between px-4 py-[18px] lg:py-5">
          <Link href="/" className="focus-state block p-1">
            <Icons.logo className="h-[37px] w-auto" />
            <span className="hidden">{siteConfig.name}</span>
          </Link>
          <div className="flex items-center gap-4">
            <MobileNav />
            <MainNav isOpen={isOpen} setIsOpen={setIsOpen} />
            <ModeSwitcher />
          </div>
        </div>
      </header>
    </Drawer>
  );
}
