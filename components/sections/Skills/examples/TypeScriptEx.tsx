import { Text } from "@ui/Text";

function TypeScriptEx() {
  return (
    <div className="mb-5 space-y-2 rounded-2xl bg-linear-to-tl from-blue-300 to-blue-400 p-6 text-white">
      <Text color="white">
        type ComponentProps = &#123; <br /> &nbsp; &nbsp; className?: string;{" "}
        <br /> &nbsp; &nbsp; children: ReactNode; <br /> &#125;
      </Text>
    </div>
  );
}

export default TypeScriptEx;
