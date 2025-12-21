import Image from "next/image";
import GradientSurface from "../shared/GradientSurface";

/**
 * A component that demonstrates a merge icon.
 * The icon is displayed inside a gradient surface.
 * @returns A React component with a merge icon.
 */
function Merge() {
  return (
    <GradientSurface centered>
      {/* The Merge icon */}
      <Image
        alt="Merge icon"
        src="/images/git-merge.svg"
        width={100}
        height={100}
        className="block size-24"
      />
    </GradientSurface>
  );
}

export default Merge;
