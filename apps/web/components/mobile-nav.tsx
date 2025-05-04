"use client";

import * as React from "react";

import { Button } from "@workspace/ui/components/button";
import { DrawerTrigger } from "@workspace/ui/components/drawer";

export function MobileNav({
  handleClick,
}: {
  handleClick: (itemId: string) => void;
}) {
  // const { setMetaColor, metaColor } = useMetaColor();

  // const onOpenChange = (open: boolean) =>
  //   setMetaColor(open ? "#09090b" : metaColor);

  return (
    <DrawerTrigger asChild>
      <Button
        onClick={() => handleClick("mobile-nav")}
        variant="ghost"
        className="pointer-events-auto h-8 cursor-pointer gap-4 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="!size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
        <span className="sr-only">Toggle Menu</span>
      </Button>
    </DrawerTrigger>
  );
}
