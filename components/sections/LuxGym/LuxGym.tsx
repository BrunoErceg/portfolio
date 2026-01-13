import { AnimateIn } from '@brunoerceg/animate-in';
import LuxGymShowcase from './LuxGymShowcase';
import SectionHeader from '@/components/ui/SectionHeader';
import { faGithub, faSquareWebAwesomeStroke } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { LINKS } from '@/constants/links';

/**
 * A component that displays the LuxGym section.
 * It displays the header, a showcase image, and animates the content
 * using the AnimateIn component.
 * @returns A section element with a header and showcase image.
 */
function LuxGym() {
  return (
    <section
      className="mb-25 flex w-full scroll-mt-[100px] flex-col justify-center md:mb-40"
      id="luxgym"
    >
      <SectionHeader className="mb-15 md:mb-20">
        <SectionHeader.Tag text="Lux Gym" icon={faSquareWebAwesomeStroke} />
        <SectionHeader.Title text="Real life projekt u React-u za teretanu u Šibeniku" />
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
