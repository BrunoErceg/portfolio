import GitHubHeader from './GithubHeader';
import GitHubCard from './GitHubCard';

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
      className="relative mb-30 scroll-mt-[100px] overflow-hidden rounded-4xl bg-linear-to-br from-blue-400 from-0% to-blue-500 px-10 pt-15 pb-25 text-white md:pt-25 md:pb-40 lg:px-[20%] dark:from-slate-800/80 dark:to-slate-800"
    >
      <GitHubHeader />
      <GitHubCard side="left" img={'/images/github-logo.svg'} alt="github" />
      <GitHubCard side="right" img={'/images/git-logo.svg'} alt="git" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-linear-to-t from-blue-400 to-transparent dark:from-slate-800" />
    </section>
  );
}

export default GitHub;
