import { Icons } from "@/components/icons";

export interface NavItem {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
}

export interface MainNavItem extends NavItem {}
