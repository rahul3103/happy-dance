"use client";

import { createContext, useContext } from "react";
import { NavigationConfig } from "@/types/navigation";
import { FooterConfig } from "@/types/footer";

interface NavigationContextType {
  navigationConfig: NavigationConfig | null;
  footerConfig: FooterConfig | null;
}

export const NavigationContext = createContext<NavigationContextType>({
  navigationConfig: null,
  footerConfig: null,
});

export const useNavigation = () => useContext(NavigationContext);
