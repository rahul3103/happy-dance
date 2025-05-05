"use client";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useHeaderScroll } from "@/hooks/use-header-on-scroll";
import {
  LayoutRefsContext,
  useLayoutRefs,
} from "@/contexts/layout-refs-context";
import { LayoutVisibilityContext } from "@/contexts/layout-visibility";
import { NavigationContext } from "@/contexts/navigation-context";
import { NavigationConfig } from "@/types/navigation";

interface AppLayoutProps {
  children: React.ReactNode;
  navigationConfig: NavigationConfig;
}

export function AppLayout({ children, navigationConfig }: AppLayoutProps) {
  const { headerRef, triggerRef } = useLayoutRefs();
  const { showHeader, whiteBg } = useHeaderScroll(triggerRef, headerRef);

  return (
    <NavigationContext.Provider value={navigationConfig}>
      <LayoutVisibilityContext.Provider value={{ showHeader, whiteBg }}>
        <LayoutRefsContext.Provider value={{ triggerRef, headerRef }}>
          <div className="border-grid flex flex-1 flex-col">
            <SiteHeader />
            <main className="bg-background z-1 rounded-4xl grid grid-cols-1 pb-8">
              {children}
            </main>
            <SiteFooter />
          </div>
        </LayoutRefsContext.Provider>
      </LayoutVisibilityContext.Provider>
    </NavigationContext.Provider>
  );
}
