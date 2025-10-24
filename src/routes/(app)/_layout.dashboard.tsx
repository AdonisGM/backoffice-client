import { createFileRoute } from '@tanstack/react-router';
import AnalystsAssetComponent from '@/features/dashboard/analysts-asset/analysts-asset.component.tsx';

export const Route = createFileRoute('/(app)/_layout/dashboard')({
  component: RouteComponent,
});

function RouteComponent() {
  return <AnalystsAssetComponent />;
}
