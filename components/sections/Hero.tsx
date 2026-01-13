import { AnimateIn } from '@brunoerceg/animate-in';
import { Text, Heading, SelectionHighlight, Tag } from '@ui';

export function Hero() {
  return (
    <section className="mt-10 md:mt-15">
      <AnimateIn.Container amount="any" stagger="fast">
        <AnimateIn.Item>
          <Tag variant="availability" text="Tražim Posao" />
        </AnimateIn.Item>

        <AnimateIn.Item>
          <Heading level={1}>
            Frontend Developer specijaliziran za <br className="md:hidden" />
            <SelectionHighlight words={['React', 'Next.js', 'Tailwind', 'Motion']} />
          </Heading>
        </AnimateIn.Item>

        <AnimateIn.Item>
          <Text variant="subheading">
            Frontend developer iz Šibenika fokusiran na izgradnju modernih web aplikacija koristeći
            React ekosustav.
          </Text>
        </AnimateIn.Item>
      </AnimateIn.Container>
    </section>
  );
}
