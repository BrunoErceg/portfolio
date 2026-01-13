// UI Components
import { AnimateIn } from '@brunoerceg/animate-in';

// Components
import { NpmCodeBlock } from './NpmCodeBlock';
import { faBoxOpen, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { LINKS } from '@/constants/links';
import { SectionHeader } from '@/components/ui';

/**
 * A component that displays the Npm Package section.
 * It displays the header, code block, and animates the content
 * using the AnimateIn component.
 * @returns A section element with a header and code block.
 */
export function NpmPackage() {
  return (
    <section className="mb-20 scroll-mt-[100px] md:mb-40" id="npm">
      <SectionHeader>
        <SectionHeader.Tag text="Npm Package" icon={faFolderOpen} />
        <SectionHeader.Title text="NPM package projekt AnimateIn" />
        <SectionHeader.Subtitle text="Lagani npm paket za brzu implementaciju modernih efekata pojavljivanja elemenata unutar svakog React projekta." />
        <SectionHeader.Buttons>
          <SectionHeader.Button text="NPM" icon={faBoxOpen} href={LINKS.animateInNpm} />
          <SectionHeader.Button text="GitHub" icon={faGithub} href={LINKS.animateInGitHub} />
        </SectionHeader.Buttons>
      </SectionHeader>

      <AnimateIn.Individual amount="some" className="relative h-fit rounded-4xl">
        <NpmCodeBlock />
      </AnimateIn.Individual>
    </section>
  );
}
