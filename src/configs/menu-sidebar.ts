import { LayoutDashboard, LucideIcon, Settings, Shield, UserCog } from 'lucide-react';

export type MenuSidebar = SingleTabMenuSidebar | ChildTabMenuSidebar;

export type SingleTabMenuSidebar = {
  title: string;
  icon: LucideIcon;
  url: string;
};

export type ChildTabMenuSidebar = {
  title: string;
  icon: LucideIcon;
  items: Array<{
    title: string;
    url: string;
  }>;
};

export const menuSidebar: Array<MenuSidebar> = [
  {
    title: 'dashboard',
    icon: LayoutDashboard,
    url: '/dashboard',
  },
  {
    title: 'business.policy',
    icon: Shield,
    url: '/policy',
  },
  {
    title: 'business.account',
    icon: UserCog,
    url: '/account',
  },
];

export const menuSystemSidebar: Array<MenuSidebar> = [
  {
    title: 'system.core',
    icon: Settings,
    url: '/system',
  },
];
