// Icons
import { cn } from '@/utils/cn';
import { faGithub, faSquareWebAwesomeStroke } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

// UI components
import { AnimateIn } from '@/components/ui/AnimateIn';
import Button from '@ui/Button';
import Heading from '@ui/Heading';
import Tag from '@ui/Tag';

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
        <Button text="Pogledaj sad" icon={faDesktop} href="https://luxgym.vercel.app/" />
        <Button text="GitHub" icon={faGithub} href="https://github.com/BrunoErceg/luxgym" />
      </AnimateIn.Item>
    </div>
  );
}

export default LuxGymHeader;
