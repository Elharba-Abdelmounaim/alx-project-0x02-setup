import React from 'react';
import Button from '@/components/common/Button';

export default function About() {
  return (
    <main className="p-6 flex flex-col gap-4">
      <h1 className="text-2xl font-bold mb-10">About Page</h1>
      <Button size="small" shape="rounded-sm">Small Rounded-Sm</Button>
      <Button size="medium" shape="rounded-md">Medium Rounded-Md</Button>
      <Button size="large" shape="rounded-full">Large Rounded-Full</Button>
    </main>
  );
}
