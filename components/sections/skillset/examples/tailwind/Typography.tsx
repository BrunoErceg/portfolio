import GradientSurface from "../shared/GradientSurface";

/**
 * A component that demonstrates the use of Tailwind CSS
 * typography classes to style text elements.
 *
 * @returns A div element with a gradient background and five
 * text elements, each with a different font size.
 */
function Typography() {
  return (
    <GradientSurface>
      <p className="text-5xl">Heading</p>
      <p className="text-4xl">Heading</p>
      <p className="mb-1 text-3xl">Heading</p>
      <p className="text-2xl">Heading</p>
    </GradientSurface>
  );
}
export default Typography;
