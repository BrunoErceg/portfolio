import Image from "next/image";
import GitLogo from "@images/github-logo.png";
import NextLogo from "@images/nextjs-logo.png";
import ReactLogo from "@images/react-logo.png";
import TailwindLogo from "@images/tailwind-logo.png";
import HoverReveal from "../ui/HoverReveal";

function TechStack() {
  return (
    <div className="flex flex-row items-center w-full justify-between mt-10 lg:mt-20">
      <HoverReveal
        trigger={<Image src={ReactLogo.src} alt="" width={170} height={80} />}
        description={
          <p>
            <span className="text-primary">React</span> je JavaScript biblioteka
            za izgradnju korisničkih interfejsa komponentama. 👾"
          </p>
        }
      />

      <HoverReveal
        trigger={
          <Image src={TailwindLogo.src} alt="" width={250} height={80} />
        }
        description={
          <p>
            <span className="text-primary">Tailwind CSS</span> utility-first CSS
            framework za brzu izgradnju modernih korisničkih interfejsa. 🎨"
          </p>
        }
      />

      <HoverReveal
        trigger={<Image src={NextLogo.src} alt="" width={170} height={100} />}
        description={
          <p>
            <span className="text-primary"> Next.js</span> react framework sa
            server-side renderingom, poboljšanim performansama i SEO-om. 💾"
          </p>
        }
      />
      <HoverReveal
        trigger={<Image src={GitLogo.src} alt="" width={110} height={100} />}
        description={
          <p>
            <span className="text-primary">Git</span> Sistem za kontrolu verzija
            koda koji omogućuje praćenje promjena i timski rad. 🤜🤛"
          </p>
        }
      />
    </div>
  );
}

export default TechStack;
