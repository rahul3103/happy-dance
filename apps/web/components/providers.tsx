// "use client"

// import * as React from "react"
// import { ThemeProvider as NextThemesProvider } from "next-themes"

// export function Providers({ children }: { children: React.ReactNode }) {
//   return (
//     <NextThemesProvider
//       attribute="class"
//       defaultTheme="system"
//       enableSystem
//       disableTransitionOnChange
//       enableColorScheme
//     >
//       {children}
//     </NextThemesProvider>
//   )
// }

"use client";

import * as React from "react";
import { Provider as JotaiProvider } from "jotai";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { TooltipProvider } from "@workspace/ui/components/tooltip";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <JotaiProvider>
      <NextThemesProvider {...props}>
        <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
      </NextThemesProvider>
    </JotaiProvider>
  );
}
