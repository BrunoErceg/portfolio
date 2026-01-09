// UI Components
import { AnimateIn } from '@ui/AnimateIn';

// Components
import NpmCodeBlock from './NpmCodeBlock';
import NpmHeader from './NpmHeader';

/**
 * A component that displays the Npm Package section.
 * It displays the header, code block, and animates the content
 * using the AnimateIn component.
 * @returns A section element with a header and code block.
 */
function NpmPackage() {
  return (
    <section className="mb-40 scroll-mt-[100px]" id="npm">
      <AnimateIn.Container amount={0.2} stagger="slow">
        <NpmHeader className="mb-20" />
        <AnimateIn.Item className="relative h-fit rounded-4xl">
          <NpmCodeBlock />
        </AnimateIn.Item>
      </AnimateIn.Container>
    </section>
  );
}

export default NpmPackage;
