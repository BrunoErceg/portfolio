import { AnimateIn } from '@brunoerceg/animate-in';
import { faBoxOpen, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { LINKS } from '@/constants/links';
import { SectionHeader } from '@ui';
import { NpmCodeBlock } from './NpmCodeBlock';
import { cn } from '@/utils/cn';

export function NpmPackage({ className }: { className?: string }) {
  return (
    <section
      className={cn('flex scroll-mt-[100px] flex-col items-center gap-y-15', className)}
      id="npm"
    >
      <SectionHeader>
        <SectionHeader.Tag text="Npm Package" icon={faFolderOpen} />
        <SectionHeader.Title text="NPM package projekt - AnimateIn" />
        <SectionHeader.Subtitle text="Lagani npm paket za brzu implementaciju modernih efekata pojavljivanja elemenata unutar svakog React projekta." />
        <SectionHeader.Buttons>
          <SectionHeader.Button text="NPM" icon={faBoxOpen} href={LINKS.animateInNpm} />
          <SectionHeader.Button text="GitHub" icon={faGithub} href={LINKS.animateInGitHub} />
        </SectionHeader.Buttons>
      </SectionHeader>

      <AnimateIn.Individual amount="some" className="w-full">
        <NpmCodeBlock />
      </AnimateIn.Individual>
    </section>
  );
}
