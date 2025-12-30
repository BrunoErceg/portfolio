import Text from '@/components/ui/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faFolderOpen, faFolder } from '@fortawesome/free-solid-svg-icons';
import { cn } from '@/utils/cn';
import { HTMLAttributes, ReactNode, useState, forwardRef } from 'react';
import GradientSurface from '../shared/GradientSurface';

/**
 * A component that demonstrates Next.js file-based routing.
 * The component shows a basic file system with folders and files.
 * @returns A GradientSurface component with a folder structure.
 */
function Routing() {
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

const Folder = forwardRef<HTMLParagraphElement, FolderProps>(({ name, children }, ref) => {
  const [isOpen, setIsOpen] = useState(true);
  const handelClick = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <Text
        color="white"
        className="mb-1.5 w-auto cursor-pointer text-lg select-none"
        onClick={handelClick}
        ref={ref}
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
});

function File() {
  return (
    <p className="mb-2 text-lg">
      <FontAwesomeIcon icon={faFile} className="text-xl" /> page.tsx
    </p>
  );
}

export default Routing;
