import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

import { AppSidebar } from '@/components/layouts/app-sidebar.tsx';
import { Separator } from '@/components/ui/separator.tsx';
import TradingDateComponent from '@/features/layout/header/trading-date.component.tsx';
import StatusSystemComponent from '@/features/layout/header/status-system.component.tsx';
import NotificationComponent from '@/features/notification/notification.component.tsx';
import ChangeLanguage from '@/components/language/change-language.tsx';

export const Route = createFileRoute('/(app)/_layout')({
  component: RouteComponent,
  beforeLoad: ({ location }) => {
    const user = localStorage.getItem('user');

    if (!user) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      });
    }
  },
});

function RouteComponent() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="bg-background sticky top-0 z-50 flex h-16 shrink-0 items-center justify-between gap-2 border-b">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator className="mr-2 data-[orientation=vertical]:h-4" orientation="vertical" />
            <TradingDateComponent />
            <StatusSystemComponent />
          </div>
          <div className={'mr-5 flex items-center gap-4'}>
            <NotificationComponent />
            <ChangeLanguage />
          </div>
        </header>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
