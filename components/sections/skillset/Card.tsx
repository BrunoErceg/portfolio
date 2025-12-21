import GradiantText from "@/components/ui/GradiantText";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { ReactNode } from "react";

type CardProps = {
  variant: "title" | "example";
  example?: ReactNode;
  title: string;
  description: string;
};

function Card({ variant, title, description, example, ...props }: CardProps) {
  return (
    <div
      {...props}
      className="break-inside-avoid-column rounded-2xl bg-linear-to-br from-blue-50 to-blue-100 p-5 lg:p-5"
    >
      {example && example}

      {variant === "title" ? (
        <Heading level={2} className="text-left text-blue-400">
          <GradiantText>{title}</GradiantText>
        </Heading>
      ) : (
        <Heading level={3}>{title}</Heading>
      )}

      <Text variant="description">{description}</Text>
    </div>
  );
}

export default Card;
