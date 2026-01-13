import React, { ComponentProps, createContext, ReactNode, useContext } from 'react';
import { AnimateIn } from '@brunoerceg/animate-in';
import { cn } from '@/utils/cn';
import { Button, Heading, Tag, Text } from '@ui';
const SectionHeaderContext = createContext({ isWhite: false });

/**
 * A flexible header component for page sections using the compound pattern.
 * Supports an optional 'white' theme via context.
 */
export function SectionHeader({
  children,
  white = false,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  white?: boolean;
}) {
  return (
    <SectionHeaderContext.Provider value={{ isWhite: white }}>
      <AnimateIn.Container className={cn('text-center', className)}>{children}</AnimateIn.Container>
    </SectionHeaderContext.Provider>
  );
}

SectionHeader.Tag = (props: ComponentProps<typeof Tag>) => {
  const { isWhite } = useContext(SectionHeaderContext);
  return (
    <AnimateIn.Item>
      <Tag variant="heading" white={isWhite} {...props} />
    </AnimateIn.Item>
  );
};

SectionHeader.Title = ({ text }: { text: string }) => {
  const { isWhite } = useContext(SectionHeaderContext);
  return (
    <Heading level={2} white={isWhite}>
      <AnimateIn.Words stagger="fast">{text}</AnimateIn.Words>
    </Heading>
  );
};

SectionHeader.Subtitle = ({ text }: { text: string }) => {
  const { isWhite } = useContext(SectionHeaderContext);
  return (
    <AnimateIn.Item>
      <Text variant="subheading" white={isWhite}>
        {text}
      </Text>
    </AnimateIn.Item>
  );
};

SectionHeader.Buttons = ({ children }: { children: ReactNode }) => (
  <AnimateIn.Item>{children}</AnimateIn.Item>
);

SectionHeader.Button = ({ ...props }: ComponentProps<typeof Button>) => {
  const { isWhite } = useContext(SectionHeaderContext);
  return <Button variant={isWhite ? 'white' : 'primary'} {...props} />;
};
