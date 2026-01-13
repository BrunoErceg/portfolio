import { cn } from '@/utils/cn';
import { AnimateIn } from '@brunoerceg/animate-in';
import { Text, Heading, SelectionHighlight, Tag } from '@ui';

export function Hero({ className }: { className?: string }) {
  return (
    <section className={cn('flex justify-center', className)}>
      <AnimateIn.Container
        amount="any"
        stagger="fast"
        className="flex max-w-[750px] flex-col items-center gap-y-6 text-center"
      >
        <AnimateIn.Item>
          <Tag variant="availability" text="Tražim Posao" />
        </AnimateIn.Item>

        <AnimateIn.Item>
          <Heading level={1}>
            Frontend Developer specijaliziran za <br className="md:hidden" />
            <SelectionHighlight words={['React', 'Next.js', 'Tailwind', 'Motion']} />
          </Heading>
        </AnimateIn.Item>

        <AnimateIn.Item className="max-w-xl">
          <Text variant="subheading">
            Frontend inženjer posvećen čistom kodu, Next.js arhitekturi i vrhunskim performansama
            aplikacija.
          </Text>
        </AnimateIn.Item>
      </AnimateIn.Container>
    </section>
  );
}
