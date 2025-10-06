import { createFileRoute, redirect } from '@tanstack/react-router';
import { Fragment } from 'react';

export const Route = createFileRoute('/')({
  component: RouteComponent,
  beforeLoad: ({}) => {
    const user = localStorage.getItem('user');

    if (user) {
      throw redirect({
        to: '/dashboard',
      });
    } else {
      throw redirect({
        to: '/login',
      });
    }
  },
});

function RouteComponent() {
  return <Fragment />;
}
