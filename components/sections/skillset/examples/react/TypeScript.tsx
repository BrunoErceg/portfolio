import GradientSurface from '../shared/GradientSurface';

/**
 * A component that demonstrates the use of TypeScript
 * type annotations for React component props.
 *
 * @returns A div element with a textarea that displays the
 * TypeScript type definition for a React component prop.
 */
function TypeScript() {
  return (
    <GradientSurface>
      <textarea
        className="h-25 w-full resize-none overflow-hidden tracking-wide focus:border-transparent focus:ring-0 focus:outline-none"
        defaultValue={'type ComponentProps = {\n\tclassName?: string; \n\tchildren: ReactNode; \n}'}
      />
    </GradientSurface>
  );
}

export default TypeScript;
