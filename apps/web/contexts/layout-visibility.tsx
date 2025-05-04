import { createContext, useContext } from "react";

interface LayoutVisibilityContextType {
  hideHeader: boolean;
}

const LayoutVisibilityContext = createContext<LayoutVisibilityContextType>({
  hideHeader: false,
});

export const useHideHeader = () =>
  useContext(LayoutVisibilityContext).hideHeader;

export default LayoutVisibilityContext;
