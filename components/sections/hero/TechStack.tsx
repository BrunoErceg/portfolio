import Image from "next/image";
import GitLogo from "@images/github-logo.png";
import NextLogo from "@images/nextjs-logo.png";
import ReactLogo from "@images/react-logo.png";
import TailwindLogo from "@images/tailwind-logo.png";
import HoverReveal from "@ui/HoverReveal";
import { motion } from "framer-motion";
import getAnimateInProps from "@/utils/animations";

// Tech stack data for display
const techStackData = [
  {
    logo: ReactLogo,
    name: "React",
    description:
      " je JavaScript biblioteka za izgradnju korisničkih interfejsa komponentama. 👾",
  },
  {
    logo: NextLogo,
    name: "Next.js",
    description:
      " je react framework sa SSR, poboljšanim performansama i SEO-om. 💾",
  },
  {
    logo: GitLogo,
    name: "GitHub",
    description:
      " je sistem za kontrolu verzija koda koji omogućuje praćenje promjena i timski rad. 🤜🤛",
  },
  {
    logo: TailwindLogo,
    name: "Tailwind",
    description:
      " je utility-first CSS framework za brzu izgradnju modernih korisničkih interfejsa. 🎨",
  },
];

// Displays tech logos with hover descriptions and blur effects
function TechStack() {
  return (
    <div className="flex flex-wrap gap-8 w-[350px] md:w-[750px] md:justify-between items-center mt-10 md:mt-20">
      {techStackData.map((tech, i) => (
        <HoverReveal
          key={tech.name}
          trigger={
            <motion.div
              {...getAnimateInProps("left", 0.65 + i * 0.2)} // Stagger animate in logos from left
              className="w-[125px] md:w-[150px]"
            >
              <Image
                src={tech.logo.src}
                alt={tech.name}
                width={140}
                height={45}
              />
            </motion.div>
          }
          title={tech.name}
          description={tech.description}
        />
      ))}
    </div>
  );
}

export default TechStack;
