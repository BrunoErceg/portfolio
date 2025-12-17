import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Text } from "@ui/Text";

function Component() {
  return (
    <div className="mb-5 space-y-2 rounded-2xl bg-linear-to-br from-blue-400 to-blue-300 p-6">
      <Box>
        <Image
          width={150}
          height={150}
          src="/images/default-image.svg"
          alt="Default image icon"
          className="mx-auto"
        />
      </Box>

      <Box>
        <Text color="white">
          <TypeAnimation
            sequence={[
              "React", // Types 'One'
              2000, // Waits 1s
              "Next.js", // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              "Tailwind", // Types 'Three' without deleting 'Two'
              2000,
            ]}
            cursor={false}
            repeat={Infinity}
            style={{ fontSize: "1em", display: "inline-block" }}
          />
        </Text>
      </Box>
      <Box>
        <Text color="white">Description goes here</Text>
      </Box>
      <Box>
        <Text color="white">Button</Text>
      </Box>
    </div>
  );
}

type BoxProps = {
  children: React.ReactNode;
  className?: string;
};

function Box({ children, className }: BoxProps) {
  return (
    <div className="rounded-2xl bg-blue-300 p-3 text-center">{children}</div>
  );
}

export default Component;
