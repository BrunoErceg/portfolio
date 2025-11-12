import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIAL_LINKS } from "@/utils/constans";
import Stack from "../layout/Stack";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Logo from "../ui/Logo";

function Navigation() {
  return (
    <header>
      <nav className="py-12 flex items-center justify-between">
        <Logo />
        <Stack spacing="sm">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={SOCIAL_LINKS.whatsapp}
            className="text-2xl text-dark hover:text-primary duration-75 link"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={SOCIAL_LINKS.instagram}
            className="text-2xl text-dark hover:text-primary duration-75 link"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={SOCIAL_LINKS.github}
            className="text-2xl text-dark hover:text-primary duration-75 link"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Stack>
      </nav>
    </header>
  );
}

export default Navigation;
