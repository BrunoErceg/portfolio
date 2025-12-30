// Icons
import { AnimateIn } from '@/components/ui/AnimateIn';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

// UI
import Button from '@ui/Button';
import Heading from '@ui/Heading';
import Text from '@ui/Text';

function GitHubHeader() {
  return (
    <>
      <Heading level={2} centered color="white">
        <AnimateIn.Words>Provjerite sve funkcionalnosti svih projekata na github</AnimateIn.Words>
      </Heading>

      <Text variant="description" color="white" centered className="mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br className="hidden md:block" /> Enim beatae quas provident! Iste officiis quos.
      </Text>

      <Button href="https://github.com/BrunoErceg" centered icon={faSquareGithub} text="Github" />
    </>
  );
}

export default GitHubHeader;
