import { AnimateIn } from '@brunoerceg/animate-in';
import LuxGymHeader from './LuxGymHeader';
import LuxGymShowcase from './LuxGymShowcase';

/**
 * A component that displays the LuxGym section.
 * It displays the header, a showcase image, and animates the content
 * using the AnimateIn component.
 * @returns A section element with a header and showcase image.
 */
function LuxGym() {
  return (
    <section
      className="mb-25 flex w-full scroll-mt-[100px] flex-col justify-center md:mb-40"
      id="luxgym"
    >
      <AnimateIn.Container amount={0.1} stagger="slow">
        <LuxGymHeader className="mb-15 md:mb-20" />
        <AnimateIn.Item delay={1.3}>
          <LuxGymShowcase />
        </AnimateIn.Item>
      </AnimateIn.Container>
    </section>
  );
}

export default LuxGym;
