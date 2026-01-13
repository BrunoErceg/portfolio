import GitHubCard from './GitHubCard';
import SectionHeader from '@/components/ui/SectionHeader';
import { LINKS } from '@/constants/links';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

/**
 * A section component that displays the GitHub section.
 * It displays the header, two cards with GitHub and Git logos, and a gradient background.
 * The component is responsive and has a dark mode.
 * @returns A section element with a header and two cards.
 */
function GitHub() {
  return (
    <section
      id="github"
      className="relative mb-15 scroll-mt-[100px] overflow-hidden rounded-4xl bg-linear-to-br from-blue-400 from-0% to-blue-500 px-5 pt-15 pb-25 text-white md:mb-30 md:pt-25 md:pb-40 lg:px-[20%] dark:from-slate-800/80 dark:to-slate-800"
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

export default GitHub;
