import { Icons } from "@/components/icons";

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  anchor?: boolean;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavItem[];
    }
);

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  links: {
    github: string;
  };
};

// Swap out for docsConfig, marketingConfig etc.

export type LayoutConfig = {
  mainNav: MainNavItem[];
  sidebarNav?: SidebarNavItem[];
};
