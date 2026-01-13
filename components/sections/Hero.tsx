import { cn } from '@/utils/cn';
import { AnimateIn } from '@brunoerceg/animate-in';
import { Text, Heading, SelectionHighlight, Tag } from '@ui';

export function Hero({ className }: { className?: string }) {
  return (
    <section className={cn('flex justify-center', className)}>
      <AnimateIn.Container
        amount="any"
        stagger="fast"
        className="flex max-w-[750px] flex-col gap-y-5 text-center"
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

        <AnimateIn.Item>
          <Text variant="subheading">
            Frontend developer posvećen čistom kodu i performansama. Fokusiran na React, Next.js i
            tipizirana rješenja spremna za produkciju.
          </Text>
        </AnimateIn.Item>
      </AnimateIn.Container>
    </section>
  );
}
