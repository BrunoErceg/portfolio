// Icons
import { AnimateIn } from '@brunoerceg/animate-in';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Links
import { LINKS } from '@/constants/links';

// UI
import Button from '@ui/Button';
import Heading from '@ui/Heading';
import Text from '@ui/Text';

function GitHubHeader() {
  return (
    <>
      <Heading level={2} white>
        <AnimateIn.TextContainer>
          <AnimateIn.Words>Funkcionalnosti ove stranice provjerite na GitHub-u</AnimateIn.Words>
        </AnimateIn.TextContainer>
      </Heading>

      <Text variant="subheading" white className="mb-8">
        Pogledajte README za pojašnjenje API integracija, typing animacija i kompleksnih komponenti
        ovog projekta.
      </Text>

      <Button
        href={LINKS.github}
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
