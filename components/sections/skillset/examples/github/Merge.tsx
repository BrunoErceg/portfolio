import Image from "next/image";
import BranchIcon from "@images/git-branch.svg";

function Merge() {
  return (
    <div className="mb-5 flex items-center justify-center rounded-2xl bg-linear-to-br from-blue-200 to-blue-400 p-5">
      <Image
        alt="Merge icon"
        src="/images/git-merge.svg"
        width={100}
        height={100}
        className="block size-24"
      />
    </div>
  );
}

export default Merge;
