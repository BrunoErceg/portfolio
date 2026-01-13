import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative mt-15 mb-7 flex w-full flex-col items-center overflow-hidden px-5 text-xs">
      <div className="flex flex-col-reverse items-center md:flex-row">
        <p className="mr-4 opacity-60 md:inline">
          © {new Date().getFullYear()} Bruno Erceg. Sva prava zauzeta
        </p>
        <div>
          <Link className="mr-4 opacity-60 hover:opacity-100" href="/politika-privatnosti">
            Politika privatnosti
          </Link>
          <Link className="mr-4 opacity-60 hover:opacity-100" href="/uvjeti-koristenja">
            Uvjeti korištenja
          </Link>
        </div>
      </div>
    </footer>
  );
}
