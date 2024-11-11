'use client';

import dynamic from 'next/dynamic';
import React from 'react';

import LoadingComponent from '../loading';

const App = dynamic(() => import('../../App'), {
  ssr: false,
  loading: () => <LoadingComponent />,
});

export function ClientOnly() {
  return <App />;
}
