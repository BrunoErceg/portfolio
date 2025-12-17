import Image from "next/image";

function ImageEx() {
  return (
    <div className="mb-5 space-y-2 rounded-2xl bg-linear-to-tl from-blue-300 to-blue-400 p-6 text-white">
      <Image
        width={150}
        height={150}
        src="/images/default-image.svg"
        alt="Default image icon"
        className="mx-auto"
      />
    </div>
  );
}

export default ImageEx;
