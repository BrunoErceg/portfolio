import { Text } from '@ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faFolderOpen, faFolder } from '@fortawesome/free-solid-svg-icons';
import { cn } from '@/utils/cn';
import { HTMLAttributes, ReactNode, useState, forwardRef } from 'react';
import { GradientSurface } from '../GradientSurface';

/**
 * A component that demonstrates Next.js file-based routing.
 * The component shows a basic file system with folders and files.
 *
 * @returns A GradientSurface component with a folder structure.
 */
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

/**
 * A component that represents a folder in the file system.
 * It displays a folder name and a icon indicating whether the folder is open or not.
 * When clicked, it toggles the open state of the folder.
 * The component also renders its children if the folder is open.
 *
 * @returns A component representing a folder.
 */
const Folder = ({ name, children }: FolderProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <Text
        white
        size="large"
        className="mb-1.5 w-auto cursor-pointer select-none"
        onClick={handleClick}
      >
        <FontAwesomeIcon
          icon={isOpen ? faFolderOpen : faFolder}
          className="mr-2 text-xl text-white"
        />
        {name}
      </Text>

      <div className={cn('mb-0 ml-6', !isOpen && 'hidden')}>{children}</div>
      <div className="absolute top-8 left-2.5 h-[calc(100%-35px)] w-0.5 bg-white/40"></div>
    </div>
  );
};

/**
 * A component that displays a single file in the file system.
 * It displays a file icon and the name of the file.
 * @returns A Text component with the file icon and name.
 */
const File = () => {
  return (
    <Text className="mb-2" size="large" white>
      <FontAwesomeIcon icon={faFile} className="text-xl text-white" /> page.tsx
    </Text>
  );
};
