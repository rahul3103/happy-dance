"use client";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useHideHeaderOnScroll } from "@/hooks/use-hide-header-on-scroll";
import LayoutRefsContext from "@/contexts/layout-refs-context";
import LayoutVisibilityContext from "@/contexts/layout-visibility";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const { headerRef, triggerRef, hideHeader } = useHideHeaderOnScroll();

  return (
    <LayoutVisibilityContext.Provider value={{ hideHeader: hideHeader }}>
      <LayoutRefsContext.Provider
        value={{
          triggerRef,
          headerRef,
        }}
      >
        <div className="border-grid flex flex-1 flex-col">
          <SiteHeader />
          <main className="bg-background z-1 rounded-4xl grid grid-cols-1 pb-8">
            {children}
          </main>
          <SiteFooter />
        </div>
      </LayoutRefsContext.Provider>
    </LayoutVisibilityContext.Provider>
  );
}
