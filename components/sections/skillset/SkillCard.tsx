import GradientText from '@/components/ui/GradientText';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import { ReactNode } from 'react';

type CardProps = {
  variant: 'title' | 'example';
  example?: ReactNode;
  title: string;
  description: string;
};

/**
 * A React component that displays a card with a title, description and an optional example.
 * The component is used to display a skill or a project example.
 * @returns A React component that displays the card.
 */
function Card({ variant, title, description, example }: CardProps) {
  return (
    <div className="break-inside-avoid-column rounded-2xl bg-linear-to-br from-blue-50 to-blue-100 p-5 lg:p-5">
      {example && example}

      {variant === 'title' ? (
        <Heading level={2} className="mt-0 mb-2 font-semibold">
          <GradientText>{title}</GradientText>
        </Heading>
      ) : (
        <Heading level={3}>{title}</Heading>
      )}

      <Text variant="description">{description}</Text>
    </div>
  );
}
export default Card;
