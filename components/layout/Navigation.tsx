'use client';
import Link from 'next/link';
import { ScrollLink, ThemeToggle } from '@ui';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();
  return (
    <header className="mt-3 mb-0 flex items-center justify-between rounded-full bg-white px-3 py-1 shadow-[0px_3px_8px_4px_rgba(0,0,0,0.03)] md:mt-5 md:mb-10 md:px-5 md:py-4 dark:bg-slate-800">
      <Link href="/">
        <p id="logo" className="text-dark funnel-display ml-2 text-xl md:text-3xl">
          Bruno.
        </p>
      </Link>
      <nav className="mt-1 hidden md:block">
        <div className="text-dark flex items-center space-x-8 text-lg font-semibold">
          {pathname === '/' ? (
            <>
              <ScrollLink name="AnimateIn" section="npm" />
              <ScrollLink name="LuxGym" section="luxgym" />
              <ScrollLink name="GitHub" section="github" />
              <ScrollLink name="Kontakt" section="contact" />
            </>
          ) : (
            <>
              <Link className="duration-200 ease-in-out hover:text-blue-500" href="/">
                Početna
              </Link>
              <a
                href="https://github.com/BrunoErceg"
                className="duration-200 ease-in-out hover:text-blue-500"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <Link className="duration-200 ease-in-out hover:text-blue-500" href="/#contact">
                Kontakt
              </Link>
            </>
          )}
        </div>
      </nav>
      <ThemeToggle />
    </header>
  );
}
