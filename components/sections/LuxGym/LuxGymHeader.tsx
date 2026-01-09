// Icons
import { cn } from '@/utils/cn';
import { faGithub, faSquareWebAwesomeStroke } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

// Links
import { LINKS } from '@/constants/links';

// UI components
import { AnimateIn } from '@brunoerceg/animate-in';
import Button from '@ui/Button';
import Heading from '@ui/Heading';
import Tag from '@ui/Tag';

/**
 * A component that displays the LuxGym header.
 * It displays the header text, a subtitle, and two buttons to navigate to the LuxGym website and GitHub repository.
 * The component uses the AnimateIn component to animate the content.
 *
 * @returns A div element with the LuxGym header.
 */
function LuxGymHeader({ className }: { className?: string }) {
  return (
    <div className={cn('text-center', className)}>
      <AnimateIn.Item>
        <Tag text="LuxGym" icon={faSquareWebAwesomeStroke} variant="heading" />
      </AnimateIn.Item>

      <Heading level={2} centered>
        <AnimateIn.Words stagger="fast">
          Real life projekt u React-u za teretanu u Šibeniku
        </AnimateIn.Words>
      </Heading>

      <AnimateIn.Item delay={1.1}>
        <Button text="Pogledaj sad" icon={faDesktop} href={LINKS.luxgym} />
        <Button text="GitHub" icon={faGithub} iconSize="lg" href={LINKS.luxgymGitHub} />
      </AnimateIn.Item>
    </div>
  );
}

export default LuxGymHeader;
