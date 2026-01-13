'use client';
import { Contact, GitHub, Hero, LuxGym, NpmPackage, SkillSet } from '@sections/index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Hero className="mb-10" />
      <SkillSet />
      <NpmPackage />
      <LuxGym />
      <GitHub />
      <Contact />
    </QueryClientProvider>
  );
}
