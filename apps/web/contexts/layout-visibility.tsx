import { createContext, useContext } from "react";

interface LayoutVisibilityContextType {
  showHeader: boolean;
  whiteBg: boolean;
}

export const LayoutVisibilityContext =
  createContext<LayoutVisibilityContextType>({
    showHeader: true,
    whiteBg: false,
  });

export const useLayoutVisibility = () => useContext(LayoutVisibilityContext);
