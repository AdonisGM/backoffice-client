import { ChevronRight } from 'lucide-react';

import { useTranslation } from 'react-i18next';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible.tsx';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from '@/components/ui/sidebar.tsx';
import { MenuSidebar } from '@/configs/menu-sidebar.ts';

export function NavMain(props: { items: MenuSidebar[]; label: string }) {
  const { t } = useTranslation('sidebar');

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{props.label}</SidebarGroupLabel>
      <SidebarMenu>
        {props.items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            className="group/collapsible"
            // defaultOpen={item.isActive}
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{t(item.title)}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {/*{item.items?.map((subItem) => (*/}
                  {/*  <SidebarMenuSubItem key={subItem.title}>*/}
                  {/*    <SidebarMenuSubButton asChild>*/}
                  {/*      <a href={subItem.url}>*/}
                  {/*        <span>{subItem.title}</span>*/}
                  {/*      </a>*/}
                  {/*    </SidebarMenuSubButton>*/}
                  {/*  </SidebarMenuSubItem>*/}
                  {/*))}*/}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
