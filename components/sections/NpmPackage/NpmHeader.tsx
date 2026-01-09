// Icons
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

// Utils
import { cn } from '@/utils/cn';

// UI
import { AnimateIn } from '@brunoerceg/animate-in';
import Heading from '@ui/Heading';
import Tag from '@ui/Tag';
import Text from '@ui/Text';
import Button from '@ui/Button';

/**
 * A React component that displays the Npm Package header.
 * It displays the header text, a subtitle, and two buttons to navigate to the LuxGym website and GitHub repository.
 * The component uses the AnimateIn component to animate the content.
 * @returns A React component that displays the Npm Package header.
 */
function NpmHeader({ className }: { className?: string }) {
  return (
    <div className={cn('text-center', className)}>
      <AnimateIn.Item>
        <Tag text="Npm Package" icon={faFolderOpen} variant="heading" />
      </AnimateIn.Item>

      <Heading level={2} centered>
        <AnimateIn.Words stagger="fast"> NPM Packet Projekt - AnimateIn</AnimateIn.Words>
      </Heading>

      <AnimateIn.Item delay={1}>
        <Text variant="subheading">
          Lagani npm paket za brzu implementaciju modernih efekata pojavljivanja elemenata unutar
          svakog React projekta.
        </Text>
      </AnimateIn.Item>
      <AnimateIn.Item>
        <Button text="Pogledaj sad" icon={faDesktop} href="https://luxgym.vercel.app/" />
        <Button text="GitHub" icon={faGithub} href="https://github.com/BrunoErceg/luxgym" />
      </AnimateIn.Item>
    </div>
  );
}

export default NpmHeader;
