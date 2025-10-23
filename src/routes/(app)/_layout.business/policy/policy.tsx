import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(app)/_layout/business/policy/policy')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello </div>;
}
