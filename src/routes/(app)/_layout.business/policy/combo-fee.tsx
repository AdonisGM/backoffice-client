import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(app)/_layout/business/policy/combo-fee')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello combo fee</div>;
}
