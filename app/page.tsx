"use client";
import Container from "@/components/layout/Container";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import Navigation from "@/components/sections/Navigation";
import { CustomCursor } from "cursor-style";

export default function Home() {
  return (
    <>
      {/*<CustomCursor
        type="one"
        size={2}
        delay={35}
        scaleOnHover={2}
        clickEffect="fade"
        bgColor="white"
      /> */}
      <hr className="text-primary border-1.5" />
      <main>
        <Container>
          <Navigation />
          <Hero />
          <TechStack />
        </Container>
      </main>
    </>
  );
}
