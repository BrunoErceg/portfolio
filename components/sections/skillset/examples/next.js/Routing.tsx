import { Text } from "@/components/ui/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faFolderOpen,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/utils/cn";
import { HTMLAttributes, ReactNode, useState, forwardRef } from "react";

function Routing() {
  return (
    <div className="mb-5 space-y-2 rounded-2xl bg-linear-to-tl from-blue-300 to-blue-400 p-6 text-white">
      <Folder name="app">
        <Folder name="about">
          <File>layout.tsx</File>
          <File>page.tsx</File>
        </Folder>
        <Folder name="contact">
          <File>layout.tsx</File>
          <File>page.tsx</File>
        </Folder>
        <File>layout.tsx</File>
        <File>page.tsx</File>
      </Folder>
    </div>
  );
}

type FolderProps = HTMLAttributes<HTMLParagraphElement> & {
  name: string;
  children: ReactNode;
};

const Folder = forwardRef<HTMLParagraphElement, FolderProps>(
  ({ name, children }, ref) => {
    const [isOpen, setIsOpen] = useState(true);
    const handelClick = () => setIsOpen(!isOpen);

    return (
      <>
        <Text
          color="white"
          className="mb-0 w-auto cursor-pointer select-none"
          onClick={handelClick}
          ref={ref}
        >
          <FontAwesomeIcon
            icon={isOpen ? faFolderOpen : faFolder}
            className="mr-1.5 text-sm"
          />
          {name}
        </Text>
        <div className={cn("mb-0 ml-4", !isOpen && "hidden")}>{children}</div>
      </>
    );
  },
);

function File({ children }: { children: ReactNode }) {
  return (
    <Text color="white">
      <FontAwesomeIcon icon={faFile} className="text-sm" /> {children}
    </Text>
  );
}

export default Routing;
