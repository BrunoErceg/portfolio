// Icons
import { AnimateIn } from '@/components/ui/AnimateIn';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// UI
import Button from '@ui/Button';
import Heading from '@ui/Heading';
import Text from '@ui/Text';

function GitHubHeader() {
  return (
    <>
      <Heading level={2} white>
        <AnimateIn.TextContainer>
          <AnimateIn.Words>Provjerite sve funkcionalnosti svih projekata na github</AnimateIn.Words>
        </AnimateIn.TextContainer>
      </Heading>

      <Text variant="subheading" white className="mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Enim beatae quas provident! Iste
        officiis quos.
      </Text>

      <Button
        href="https://github.com/BrunoErceg"
        centered
        iconSize="lg"
        icon={faGithub}
        variant="white"
        text="Github"
      />
    </>
  );
}

export default GitHubHeader;
