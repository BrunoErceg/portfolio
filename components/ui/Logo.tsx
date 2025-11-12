import Stack from "../layout/Stack";
import Image from "next/image";
import ProfilnaSlika from "@images/profilna-slika.jpg";
import Link from "next/link";
function Logo() {
  return (
    <Stack spacing="xs">
      <Image
        src={ProfilnaSlika.src}
        alt=""
        width={50}
        height={50}
        className="rounded-full mr-1"
      />
      <Link
        href="/"
        className="font-semibold text-dark text-lg hover:text-primary duration-75"
      >
        <p>Bruno Erceg</p>
        <p className="text-sm  font-medium text-gray-500 leading-3">
          React devoloper
        </p>
      </Link>
    </Stack>
  );
}

export default Logo;
