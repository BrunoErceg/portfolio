import { Heading, Text } from '@ui';
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
export function SkillCard({ variant, title, description, example }: CardProps) {
  return (
    <div className="break-inside-avoid-column rounded-2xl bg-linear-to-br from-blue-50 to-blue-100 p-5 lg:p-5 dark:from-slate-800 dark:to-slate-800">
      {example && example}

      {variant === 'title' ? (
        <Heading
          level={2}
          centered={false}
          className="mt-0 mb-2 bg-linear-to-r from-blue-400 to-blue-500 bg-clip-text font-semibold text-transparent dark:from-blue-600 dark:to-blue-700"
        >
          {title}
        </Heading>
      ) : (
        <Heading level={3}>{title}</Heading>
      )}

      <Text variant="description">{description}</Text>
    </div>
  );
}
