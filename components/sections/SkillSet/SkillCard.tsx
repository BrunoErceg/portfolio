import { Heading, Text } from '@ui';
import { ReactNode } from 'react';

type CardProps = {
  variant: 'title' | 'example';
  example?: ReactNode;
  title: string;
  description: string;
};

export function SkillCard({ variant, title, description, example }: CardProps) {
  const level = variant === 'title' ? 2 : 3;
  const styles = {
    title:
      'mt-0 mb-2 bg-linear-to-r from-blue-400 to-blue-500 bg-clip-text font-semibold text-transparent dark:from-blue-400 dark:to-blue-500', // pazi na navodnik ovdje
    example: '',
  };
  return (
    <div className="break-inside-avoid-column rounded-2xl bg-linear-to-br from-blue-50 to-blue-100 p-5 lg:p-5 dark:from-slate-800 dark:to-slate-800">
      {example && example}
      <Heading level={level} className={styles[variant]}>
        {title}
      </Heading>
      <Text variant="description">{description}</Text>
    </div>
  );
}
