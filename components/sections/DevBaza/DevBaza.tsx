import { AnimateIn } from '@brunoerceg/animate-in';
import { faBoxOpen, faDesktop, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { LINKS } from '@/constants/links';
import { SectionHeader } from '@ui';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

export function DevBaza({ className }: { className?: string }) {
  return (
    <section
      className={cn('flex scroll-mt-[100px] flex-col items-center gap-y-15', className)}
      id="npm"
    >
      <SectionHeader>
        <SectionHeader.Tag text="Showcase hrvatskih developera" icon={faFolderOpen} />
        <SectionHeader.Title text="Dev-baza — Modularna platforma za promociju domaćih developera" />
        <SectionHeader.Subtitle text="dev baza ističe vrhunski hrvatski digitalni talent uz Next.js 15, NextAuth v5, real-time poruke i skalabilnu arhitekturu temeljenu na feature folderima." />
        <SectionHeader.Buttons>
          <SectionHeader.Button text="Pogledaj sad" icon={faDesktop} href={LINKS.devBaza} />
          <SectionHeader.Button text="GitHub" icon={faGithub} href={LINKS.devBazaGitHub} />
        </SectionHeader.Buttons>
      </SectionHeader>

      <AnimateIn.Individual amount="some" className="w-full">
        <a href={LINKS.devBaza} target="_blank" rel="noreferrer">
          <Image
            src="/images/dev-baza.png"
            className="rounded-2xl"
            alt="Dev-baza"
            width={1920}
            height={1080}
          />
        </a>
      </AnimateIn.Individual>
    </section>
  );
}
