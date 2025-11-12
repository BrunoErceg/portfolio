import Image from "next/image";
import GitLogo from "@images/github-logo.png";
import NextLogo from "@images/nextjs-logo.png";
import ReactLogo from "@images/react-logo.png";
import TailwindLogo from "@images/tailwind-logo.png";
import Stack from "../layout/Stack";

function Hero() {
  return (
    <section className="mt-4 lg:mt-20">
      <h1 className="text-3xl lg:text-7xl md:text-6xl md:leading-16 leading-10 lg:leading-19 mb-5">
        Designer specialised in taking digital products from{" "}
        <span className="text-primary">zero to one</span>
      </h1>
      <p className="text-base md:text-lg font-medium text-gray  leading-6 md:leading-8">
        With 10+ years of design experience and as a former founder of a
        <br className="hidden lg:block" />
        venture-backed startup, I help businesses with early-stage products.{" "}
      </p>
    </section>
  );
}

export default Hero;
