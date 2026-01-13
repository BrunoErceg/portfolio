'use client';

import Hero from '@sections/Hero';
import Skills from '@sections/skillset/SkillSet';
import Github from '@/components/sections/Github/GitHub';
import LuxGym from '@/components/sections/LuxGym/LuxGym';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NpmPackage from '@/components/sections/NpmPackage/NpmPackage';
import Contact from '@/components/sections/Contact/Contact';

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Hero />
      <Skills />
      <NpmPackage />
      <LuxGym />
      <Github />
      <Contact />
    </QueryClientProvider>
  );
}
