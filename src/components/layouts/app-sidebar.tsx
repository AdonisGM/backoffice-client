'use client';

import * as React from 'react';

import { useTranslation } from 'react-i18next';
import { NavMain } from '@/components/layouts/nav-main.tsx';
import { NavUser } from '@/components/layouts/nav-user.tsx';
import { TeamSwitcher } from '@/components/layouts/team-switcher.tsx';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar.tsx';
import { menuSidebar, menuSystemSidebar } from '@/configs/menu-sidebar.ts';

// This is sample data.
const data = {
  user: {
    name: 'Adonis Willer',
    email: 'admin@nmtung.dev',
    avatar: '/avatars/shadcn.jpg',
  },
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { t } = useTranslation('sidebar');

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={menuSidebar} label={t('group.layout.business')} />
        <NavMain items={menuSystemSidebar} label={t('group.system')} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
