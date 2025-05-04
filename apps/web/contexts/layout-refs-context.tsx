import { createContext, useContext, RefObject } from "react";

interface LayoutRefsContextType {
  headerRef: RefObject<HTMLDivElement | null>;
  triggerRef: RefObject<HTMLDivElement | null>;
}

const LayoutRefsContext = createContext<LayoutRefsContextType>({
  headerRef: { current: null },
  triggerRef: { current: null },
});

export const useLayoutRefs = () => useContext(LayoutRefsContext);
export default LayoutRefsContext;
