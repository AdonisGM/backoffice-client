import { createFileRoute } from '@tanstack/react-router';
import PolicyPage from '@/features/policy/policy/policy.page.tsx';

export const Route = createFileRoute('/(app)/_layout/business/policy/policy')({
  component: RouteComponent,
});

function RouteComponent() {
  return <PolicyPage />;
}
