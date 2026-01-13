import { AnimateIn } from '@brunoerceg/animate-in';
import { LINKS } from '@/constants/links';
import { faGithub, faSquareWebAwesomeStroke } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { cn } from '@/utils/cn';
import { SectionHeader } from '@/components/ui';
import { LuxGymShowcase } from './LuxGymShowcase';
export function LuxGym({ className }: { className?: string }) {
  return (
    <section
      className={cn('flex scroll-mt-[100px] flex-col items-center gap-y-15 md:mb-40', className)}
      id="luxgym"
    >
      <SectionHeader>
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
