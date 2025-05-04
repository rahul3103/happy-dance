"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeSwitcher } from "@/components/mode-switcher";
import { Drawer } from "@workspace/ui/components/drawer";
import { useLayoutRefs } from "@/contexts/layout-refs-context";
import { cn } from "@workspace/ui/lib/utils";
import { useLayoutVisibility } from "@/contexts/layout-visibility";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const { headerRef } = useLayoutRefs();
  const { showHeader, whiteBg } = useLayoutVisibility();

  return (
    <Drawer direction="top" modal={true} open={isOpen}>
      <header
        ref={headerRef}
        className={cn(
          "border-grid z-51 fixed top-0 w-full bg-transparent transition-transform duration-300 ease-in-out",
          "before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:content-['']",
          "before:bg-background before:transition-transform before:duration-200 before:ease-in-out",
          showHeader ? "translate-y-0" : "-translate-y-full",
          whiteBg
            ? "text-primary before:translate-y-0"
            : "text-dark-foreground before:translate-y-[-100%]",
          !isOpen && whiteBg && "shadow-header",
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
