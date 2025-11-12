import Image from "next/image";
import GitLogo from "@images/github-logo.png";
import NextLogo from "@images/nextjs-logo.png";
import ReactLogo from "@images/react-logo.png";
import TailwindLogo from "@images/tailwind-logo.png";
import HoverReveal from "@ui/HoverReveal";

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
      " je react framework sa server-side renderingom, poboljšanim performansama i SEO-om. 💾",
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
    <section>
      <div className="flex flex-wrap gap-8 md:justify-between items-center mt-10 md:mt-20">
        {techStackData.map((tech) => (
          <HoverReveal
            key={tech.name}
            trigger={
              <Image
                src={tech.logo.src}
                alt={tech.name}
                width={150}
                height={45}
              />
            }
            title={tech.name}
            description={tech.description}
          />
        ))}
      </div>
    </section>
  );
}

export default TechStack;
