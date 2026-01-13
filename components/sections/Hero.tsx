// Libs
import { AnimateIn } from '@brunoerceg/animate-in';

// Components
import Heading from '@ui/Heading';
import Text from '@ui/Text';
import SelectionHighlight from '@ui/SelectionHighlight';
import Tag from '@ui/Tag';

/**
 * The Hero component is the main section of the webpage.
 * It contains the availability tag, the heading with animation, and the description with animation.
 * @returns A React component that represents the Hero section.
 */
function Hero() {
  return (
    <section className="mt-10 md:mt-15">
      {/* 1.  Availability tag */}
      <AnimateIn.Container amount="any" stagger="fast">
        <AnimateIn.Item>
          <Tag variant="availability" text="Tražim Posao" />
        </AnimateIn.Item>
        {/* 2. Heading with animation */}

        <AnimateIn.Item>
          <Heading level={1}>
            Frontend Developer specijaliziran za <br className="md:hidden" />
            <SelectionHighlight words={['React', 'Next.js', 'Tailwind', 'Motion']} />
          </Heading>
        </AnimateIn.Item>

        {/* 3. Description with animation */}
        <AnimateIn.Item>
          <Text variant="subheading">
            Frontend developer iz Šibenika specijaliziran za React, bez komercijalnog iskustva ali s
            ogromnom voljom za učenje.
          </Text>
        </AnimateIn.Item>
      </AnimateIn.Container>
    </section>
  );
}

export default Hero;
