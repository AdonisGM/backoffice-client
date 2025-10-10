import { createFileRoute, redirect } from '@tanstack/react-router';
import AnalystsAssetComponent from '@/features/dashboard/analysts-asset/analysts-asset.component.tsx';

export const Route = createFileRoute('/dashboard')({
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
  return <AnalystsAssetComponent />;
}
