// Icons
import { AnimateIn } from '@/components/ui/AnimateIn';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// UI
import Button from '@ui/Button';
import Heading from '@ui/Heading';
import Text from '@ui/Text';

function GitHubHeader() {
  return (
    <AnimateIn.Container>
      <Heading level={2} centered color="white">
        <AnimateIn.Words>Provjerite sve funkcionalnosti svih projekata na github</AnimateIn.Words>
      </Heading>

      <Text variant="subheading" color="white" centered className="mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br className="hidden md:block" /> Enim beatae quas provident! Iste officiis quos.
      </Text>

      <Button href="https://github.com/BrunoErceg" centered icon={faGithub} text="Github" />
    </AnimateIn.Container>
  );
}

export default GitHubHeader;
