// UI Components
import { AnimateIn } from '@brunoerceg/animate-in';

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
    <section className="mb-20 scroll-mt-[100px] md:mb-40" id="npm">
      <AnimateIn.Container amount={0.2} stagger="slow">
        <NpmHeader className="mb-10 md:mb-15" />
        <AnimateIn.Item className="relative h-fit rounded-4xl">
          <NpmCodeBlock />
        </AnimateIn.Item>
      </AnimateIn.Container>
    </section>
  );
}

export default NpmPackage;
