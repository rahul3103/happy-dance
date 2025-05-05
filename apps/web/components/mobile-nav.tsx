"use client";

import * as React from "react";

import { Button } from "@workspace/ui/components/button";
import { DrawerTrigger } from "@workspace/ui/components/drawer";
import { Menu, X } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";

export function MobileNav({
  handleClick,
  isOpen,
}: {
  handleClick: (itemId: string) => void;
  isOpen: boolean;
}) {
  // const { setMetaColor, metaColor } = useMetaColor();

  // const onOpenChange = (open: boolean) =>
  //   setMetaColor(open ? "#09090b" : metaColor);

  return (
    <DrawerTrigger asChild>
      <Button
        onClick={() => handleClick("mobile-nav")}
        variant="ghost"
        className="group/toggle pointer-events-auto h-8 w-8 cursor-pointer lg:hidden"
      >
        <X className={cn("hidden size-5", isOpen && "block")} />
        <Menu className={cn("hidden size-5", !isOpen && "block")} />
        <span className="sr-only">Toggle Menu</span>
      </Button>
    </DrawerTrigger>
  );
}
