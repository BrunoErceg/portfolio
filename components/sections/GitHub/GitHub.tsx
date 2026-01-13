import { SectionHeader } from '@ui';
import { LINKS } from '@/constants/links';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { GitHubCard } from './GitHubCard';
import { cn } from '@/utils/cn';

export function GitHub({ className }: { className?: string }) {
  return (
    <section
      id="github"
      className={cn(
        'relative scroll-mt-[100px] overflow-hidden rounded-4xl bg-linear-to-br from-blue-400 from-0% to-blue-500 px-5 pt-15 pb-25 md:mb-30 md:pt-25 md:pb-40 lg:px-[20%] dark:from-slate-800/80 dark:to-slate-800',
        className,
      )}
    >
      <SectionHeader white>
        <SectionHeader.Title text="Funkcionalnosti ove stranice provjerite na GitHub-u " />
        <SectionHeader.Subtitle text="Pogledajte README za pojašnjenje API integracija, typing animacija i kompleksnih komponenti ovog projekta." />
        <SectionHeader.Buttons>
          <SectionHeader.Button text="GitHub" icon={faGithub} href={LINKS.github} />
        </SectionHeader.Buttons>
      </SectionHeader>
      <GitHubCard side="left" img={'/images/github-logo.svg'} alt="github" />
      <GitHubCard side="right" img={'/images/git-logo.svg'} alt="git" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-linear-to-t from-blue-400 to-transparent dark:from-slate-800" />
    </section>
  );
}
