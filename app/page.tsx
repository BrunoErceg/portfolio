"use client";
import Container from "@layout/Container";
import Hero from "@/components/sections/hero/Hero";
import Header from "@/components/layout/Header";
import Work from "@/components/sections/work/Work";
import { CustomCursor } from "cursor-style";
import getAnimateInProps from "@/utils/animations";

export default function Home() {
  return (
    <>
      <CustomCursor type="one" size={3} delay={35} clickEffect="fade" />
      <hr className="text-primary border-1.5" />
      <main>
        <Container>
          <Header />
          <Hero />
          <Work />
        </Container>
      </main>
    </>
  );
}
