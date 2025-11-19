"use client";
import Header from "@layout/Header";
import Container from "@layout/Container";
import Hero from "@sections/Hero";
import Work from "@sections/work/Work";
import { CustomCursor } from "cursor-style";

// <CustomCursor type="one" size={3} delay={35} clickEffect="fade" />
export default function Home() {
  return (
    <>
      <hr className="border-2 text-[#0a5afb]" />
      <main>
        <Container>
          <Header />
          <Hero />
        </Container>
      </main>
    </>
  );
}
