import Link from "next/link";
import Stack from "@layout/Stack";
import Logo from "@ui/Logo";

// Main navigation header with logo and social links
function Header() {
  return (
    <header className="mt-3 flex items-center justify-between rounded-full bg-white px-5 py-4 shadow-[0px_3px_8px_4px_rgba(0,_0,_0,_0.03)]">
      <Link href="/">
        <Logo />
      </Link>
      <nav className="mt-1 hidden md:block">
        <Stack className="text-dark items-center text-lg font-semibold">
          <a className="duration-150 ease-out hover:text-blue-500" href="/">
            Work
          </a>
          <a className="duration-150 ease-out hover:text-blue-500" href="/">
            Skill Set{" "}
          </a>
          <a className="duration-150 ease-out hover:text-blue-500" href="/">
            About
          </a>
          <a className="duration-150 ease-out hover:text-blue-500" href="/">
            Contact
          </a>
        </Stack>
      </nav>
      <button className="rounded-full bg-linear-to-tr from-slate-600 to-slate-800 px-5 py-2 font-semibold text-white shadow-2xl duration-300 ease-in-out hover:from-blue-500 hover:to-blue-600">
        Kontakt
      </button>
    </header>
  );
}

export default Header;
