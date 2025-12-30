import { AnimateIn } from '@/components/ui/AnimateIn';
import LuxGymHeader from './LuxGymHeader';
import LuxGymShowcase from './LuxGymShowcase';

function LuxGym() {
  return (
    <section className="mb-40 flex w-full flex-col justify-center">
      <AnimateIn.Container amount={0.1} stagger={0.2}>
        <LuxGymHeader className="mb-15 md:mb-20" />

        <AnimateIn.Item delay={1.3}>
          <LuxGymShowcase />
        </AnimateIn.Item>
      </AnimateIn.Container>
    </section>
  );
}

export default LuxGym;
