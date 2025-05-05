"use client";

import { createContext, useContext } from "react";
import { NavigationConfig } from "@/types/navigation";

export const NavigationContext = createContext<NavigationConfig | null>(null);
export const useNavigation = () => useContext(NavigationContext);
