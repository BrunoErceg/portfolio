"use client";
import Header from "@layout/Header";
import Container from "@layout/Container";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/skillset/SkillSet";

export default function Home() {
  return (
    <main>
      <Container className="w-[1300px]">
        <Header />
        <Hero />
        <Skills />
      </Container>
    </main>
  );
}
