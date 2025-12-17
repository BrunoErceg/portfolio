"use client";
import Header from "@layout/Header";
import Container from "@layout/Container";
import Hero from "@/components/sections/Hero";
import Skills from "@sections/Skills/Skills";

export default function Home() {
  return (
    <main>
      <Container>
        <Header />
        <Hero />
        <Skills />
      </Container>
    </main>
  );
}
