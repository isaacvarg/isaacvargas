"use client"
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => <div className="h-full w-full rounded-xl bg-base-300 animate-pulse" />,
});

export default function MapEmbed() {
  return <Map />;
}
