'use client';
import Link from 'next/link';
import NavLink from '../ui/NavLink';
import ThemeToggle from '../ui/ThemeToggle';
import { usePathname } from 'next/navigation';

// Main navigation header with logo and social links
function Header() {
  const pathname = usePathname();
  return (
    <header className="mt-5 mb-10 flex items-center justify-between rounded-full bg-white px-5 py-4 shadow-[0px_3px_8px_4px_rgba(0,0,0,0.03)] dark:bg-slate-800">
      <Link href="/">
        <p id="logo" className="text-dark funnel-display ml-2 text-3xl">
          Bruno.
        </p>
      </Link>
      <nav className="mt-1 hidden md:block">
        <div className="text-dark flex items-center space-x-8 text-lg font-semibold">
          {pathname === '/' ? (
            <>
              <NavLink name="AnimateIn" section="npm" />
              <NavLink name="LuxGym" section="luxgym" />
              <NavLink name="GitHub" section="github" />
              <NavLink name="Kontakt" section="contact" />
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

export default Header;
