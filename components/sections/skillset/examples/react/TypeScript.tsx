import GradientSurface from "../shared/GradientSurface";

function TypeScript() {
  return (
    <GradientSurface>
      <textarea
        className="h-25 w-full resize-none overflow-hidden tracking-wide focus:border-transparent focus:ring-0 focus:outline-none"
        defaultValue={
          "type ComponentProps = {\n\tclassName?: string; \n\tchildren: ReactNode; \n}"
        }
      />
    </GradientSurface>
  );
}

export default TypeScript;
