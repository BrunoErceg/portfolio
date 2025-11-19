import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { SOCIAL_LINKS } from "@/constants/social";
import Stack from "@layout/Stack";
import Logo from "@ui/Logo";

// Social media data for display
const SocialData = [
  {
    name: "whatsapp",
    icon: faWhatsapp,
    link: SOCIAL_LINKS.whatsapp,
  },
  {
    name: "instagram",
    icon: faInstagram,
    link: SOCIAL_LINKS.instagram,
  },
  {
    name: "github",
    icon: faGithub,
    link: SOCIAL_LINKS.github,
  },
];

// Main navigation header with logo and social links
function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between py-12">
        <Logo />
        <Stack spacing="sm">
          {SocialData.map((social) => (
            <a
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              href={social.link}
              className="text-dark hover:text-primary link text-2xl duration-75"
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </Stack>
      </nav>
    </header>
  );
}

export default Header;
