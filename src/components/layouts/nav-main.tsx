import { ChevronRight } from 'lucide-react';

import { useTranslation } from 'react-i18next';
import { Link, MatchRoute } from '@tanstack/react-router';
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
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar.tsx';
import { MenuSidebar } from '@/configs/menu-sidebar.ts';

export function NavMain(props: { items: MenuSidebar[]; label: string }) {
  const { t } = useTranslation('sidebar');

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{props.label}</SidebarGroupLabel>
      <SidebarMenu>
        {props.items.map((item) => (
          <MatchRoute key={item.url} fuzzy={true} to={item.url}>
            {(params) => {
              return (
                <Collapsible asChild className="group/collapsible" defaultOpen={!!params}>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <div>
                        {item.type === 'single' && (
                          <Link activeOptions={{ exact: true }} to={item.url}>
                            {(state) => {
                              return (
                                <SidebarMenuButton
                                  isActive={state.isActive}
                                  tooltip={t(item.title)}
                                >
                                  {item.icon && <item.icon />}
                                  <span className={'truncate'}>{t(item.title)}</span>
                                </SidebarMenuButton>
                              );
                            }}
                          </Link>
                        )}
                        {item.type === 'group' && (
                          <SidebarMenuButton tooltip={t(item.title)}>
                            {item.icon && <item.icon />}
                            <span className={'truncate'}>{t(item.title)}</span>
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        )}
                      </div>
                    </CollapsibleTrigger>
                    {item.type === 'group' && (
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <Link activeOptions={{ exact: true }} to={subItem.url}>
                                {(state) => (
                                  <SidebarMenuSubButton asChild isActive={state.isActive}>
                                    <span>{t(subItem.title)}</span>
                                  </SidebarMenuSubButton>
                                )}
                              </Link>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    )}
                  </SidebarMenuItem>
                </Collapsible>
              );
            }}
          </MatchRoute>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
