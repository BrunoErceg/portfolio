// Icons
import { faMessage } from '@fortawesome/free-solid-svg-icons';

// UI
import Tag from '@ui/Tag';
import Heading from '@ui/Heading';
import Text from '@ui/Text';
import { AnimateIn } from '@ui/AnimateIn';

/**
 * A React component that displays the Contact header.
 * It displays the availability tag, the heading with animation, and the description with animation.
 * @returns A React component that displays the Contact header.
 */
function ContactHeader({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Tag text="Kontakt" icon={faMessage} variant="heading" className="block" />
      <Heading level={2} centered>
        <AnimateIn.TextContainer>
          <AnimateIn.Words stagger="fast"> Zainteresirani? Kontaktirajte me </AnimateIn.Words>
        </AnimateIn.TextContainer>
      </Heading>
      <Text variant="subheading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. officiis quos.
      </Text>
    </div>
  );
}

export default ContactHeader;
