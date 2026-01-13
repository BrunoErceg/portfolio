import { AnimateIn } from '@brunoerceg/animate-in';
import LuxGymShowcase from './LuxGymShowcase';

import { faGithub, faSquareWebAwesomeStroke } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { LINKS } from '@/constants/links';
import { SectionHeader } from '@/components/ui';

function LuxGym() {
  return (
    <section
      className="mb-25 flex w-full scroll-mt-[100px] flex-col justify-center md:mb-40"
      id="luxgym"
    >
      <SectionHeader className="mb-15 md:mb-20">
        <SectionHeader.Tag text="Lux Gym" icon={faSquareWebAwesomeStroke} />
        <SectionHeader.Title text="Produkcijski Next.js projekt za fitness centar u Šibeniku" />
        <SectionHeader.Buttons>
          <SectionHeader.Button text="Pogledaj sad" icon={faDesktop} href={LINKS.luxgym} />
          <SectionHeader.Button text="GitHub" icon={faGithub} href={LINKS.luxgymGitHub} />
        </SectionHeader.Buttons>
      </SectionHeader>

      <AnimateIn.Individual>
        <LuxGymShowcase />
      </AnimateIn.Individual>
    </section>
  );
}

export default LuxGym;
