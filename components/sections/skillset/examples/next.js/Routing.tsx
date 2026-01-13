import { Text } from '@ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faFolderOpen, faFolder } from '@fortawesome/free-solid-svg-icons';
import { cn } from '@/utils/cn';
import { HTMLAttributes, ReactNode, useState } from 'react';
import { GradientSurface } from '../GradientSurface';

export function Routing() {
  return (
    <GradientSurface>
      <Folder name="app">
        <Folder name="blog">
          <Folder name="{ slug }">
            <File />
          </Folder>
        </Folder>
        <Folder name="contact">
          <File />
        </Folder>
        <File />
      </Folder>
    </GradientSurface>
  );
}
type FolderProps = HTMLAttributes<HTMLParagraphElement> & {
  name: string;
  children: ReactNode;
};

const Folder = ({ name, children }: FolderProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className="relative flex flex-col gap-y-2">
      <Text white size="large" className="w-auto cursor-pointer select-none" onClick={handleClick}>
        <FontAwesomeIcon
          icon={isOpen ? faFolderOpen : faFolder}
          className="mr-2 text-xl text-white"
        />
        {name}
      </Text>
      <div className={cn('ml-6', !isOpen && 'hidden')}>{children}</div>
      <div className="absolute top-8 left-2.5 h-[calc(100%-35px)] w-0.5 bg-white/40"></div>
    </div>
  );
};

const File = () => {
  return (
    <Text size="large" white>
      <FontAwesomeIcon icon={faFile} className="text-xl text-white" /> page.tsx
    </Text>
  );
};
