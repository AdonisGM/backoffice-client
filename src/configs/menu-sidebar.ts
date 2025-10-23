import { CircuitBoard, LayoutDashboard, LucideIcon, Settings, Shield } from 'lucide-react';

export type MenuSidebar = SingleTabMenuSidebar | GroupTabMenuSidebar;

export type SingleTabMenuSidebar = {
  type: 'single';
  title: string;
  icon: LucideIcon;
  url: string;
};

export type GroupTabMenuSidebar = {
  type: 'group';
  title: string;
  icon: LucideIcon;
  url: string;
  items: Array<{
    title: string;
    url: string;
  }>;
};

export const menuSidebar: Array<MenuSidebar> = [
  {
    type: 'single',
    title: 'dashboard',
    icon: LayoutDashboard,
    url: '/dashboard',
  },
  {
    type: 'group',
    title: 'business.policy',
    icon: Shield,
    url: '/business/policy/*',
    items: [
      {
        title: 'business.sub_tabs.policy.policy',
        url: '/business/policy/policy',
      },
      {
        title: 'business.sub_tabs.policy.combo_fee',
        url: '/business/policy/combo-fee',
      },
    ],
  },
  // {
  //   type: 'group',
  //   title: 'business.policy',
  //   icon: Shield,
  //   items: [
  //     {
  //       title: 'business.sub_tabs.policy.policy',
  //       url: '/business/policy/policy',
  //     },
  //     {
  //       title: 'business.sub_tabs.policy.combo_fee',
  //       url: '/business/policy/combo-fee',
  //     },
  // {
  //   title: 'business.sub_tabs.policy.trading_fee',
  //   url: '/business/policy/trading-fee',
  // },
  // {
  //   title: 'business.sub_tabs.policy.advance_fee',
  //   url: '/business/policy/advance-fee',
  // },
  // {
  //   title: 'business.sub_tabs.policy.sms_fee',
  //   url: '/business/policy/sms-fee',
  // },
  // {
  //   title: 'business.sub_tabs.policy.margin_fee',
  //   url: '/business/policy/margin-fee',
  // },
  // {
  //   title: 'business.sub_tabs.policy.other_fee',
  //   url: '/business/policy/other-fee',
  // },
  // {
  //   type: 'group',
  //   title: 'business.account',
  //   icon: UserCog,
  //   items: [],
  // },
  // {
  //   type: 'group',
  //   title: 'business.cash',
  //   icon: Banknote,
  //   items: [],
  // },
  // {
  //   type: 'group',
  //   title: 'business.stock',
  //   icon: ChartCandlestick,
  //   items: [],
  // },
  // {
  //   type: 'group',
  //   title: 'business.right',
  //   icon: Sparkles,
  //   items: [],
  // },
  // {
  //   type: 'group',
  //   title: 'business.margins',
  //   icon: BadgeDollarSign,
  //   items: [],
  // },
  // {
  //   type: 'group',
  //   title: 'business.stp',
  //   icon: Shredder,
  //   items: [],
  // },
  // {
  //   type: 'group',
  //   title: 'business.bank',
  //   icon: Landmark,
  //   items: [],
  // },
  // {
  //   type: 'group',
  //   title: 'business.report',
  //   icon: NotepadTextDashed,
  //   items: [],
  // },
];

export const menuSystemSidebar: Array<MenuSidebar> = [
  {
    type: 'group',
    title: 'system.core',
    icon: Settings,
    url: '/system/core',
    items: [],
  },
  {
    type: 'group',
    title: 'system.trading',
    icon: CircuitBoard,
    url: '/system/trading',
    items: [],
  },
];
