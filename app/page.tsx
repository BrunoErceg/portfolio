'use client';
import Header from '@layout/Header';
import Container from '@layout/Container';
import Hero from '@sections/Hero';
import Skills from '@sections/skillset/SkillSet';
import Github from '@/components/sections/Github/GitHub';
import LuxGym from '@/components/sections/LuxGym/LuxGym';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Container className="lg:w-[1300px]">
          <Header />
          <Hero />
          <Skills />
          <LuxGym />
          <Github />
        </Container>
      </main>
    </QueryClientProvider>
  );
}
