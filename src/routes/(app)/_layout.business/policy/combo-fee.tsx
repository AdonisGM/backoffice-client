import { createFileRoute } from '@tanstack/react-router';
import ComboFeePage from '@/features/policy/combo-fee/combo-fee.page.tsx';

export const Route = createFileRoute('/(app)/_layout/business/policy/combo-fee')({
  component: RouteComponent,
});

function RouteComponent() {
  return <ComboFeePage />;
}
