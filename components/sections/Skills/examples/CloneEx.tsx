import Image from "next/image";
import CloneIcon from "@images/git-clone.svg";
import Lottie from "lottie-react";
import CloneAnimation from "@lottie/clone.json";

function CloneEx() {
  return (
    <div className="mb-5 flex items-center justify-center rounded-2xl bg-linear-to-br from-blue-200 to-blue-400 p-0">
      <Lottie
        animationData={CloneAnimation}
        height={50}
        width={50}
        loop={true}
        className="-ml-5 size-60"
      />
    </div>
  );
}

export default CloneEx;
