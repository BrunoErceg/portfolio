import Image from "next/image";
import ForkIcon from "@images/git-fork.svg";

function Fork() {
  return (
    <div className="mb-5 flex items-center justify-center rounded-2xl bg-linear-to-br from-blue-200 to-blue-400 p-10">
      <Image
        alt="fork icon"
        src={ForkIcon.src}
        width={150}
        height={150}
        className="block size-32"
      />
    </div>
  );
}

export default Fork;
