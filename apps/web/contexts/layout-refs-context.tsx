import { createContext, useContext, RefObject } from "react";

interface LayoutRefsContextType {
  headerRef: RefObject<HTMLDivElement | null>;
  triggerRef: RefObject<HTMLDivElement | null>;
}

export const LayoutRefsContext = createContext<LayoutRefsContextType>({
  headerRef: { current: null },
  triggerRef: { current: null },
});

export const useLayoutRefs = () => useContext(LayoutRefsContext);
