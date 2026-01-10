import { themes } from 'prism-react-renderer';
import { useTheme } from 'next-themes';
import { MIST_THEME } from './config/mistTheme';
import { SNIPPET } from './config/snippet';
import { CodeBlock } from 'react-code-block';
import { useEffect, useState } from 'react';

/**
 * A code block component that displays a snippet of code.
 * It uses the next-themes hook to get the resolved theme,
 * and the prism-react-renderer library to render the code block.
 * The code block is wrapped in a div with a class of "h-[664px] w-full animate-pulse lg:mx-[10%]" when it is not mounted.
 * @returns A JSX element that renders a code block.
 */
function NpmCodeBlock() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-[664px] w-full animate-pulse lg:mx-[10%]" />;
  return (
    <CodeBlock
      code={SNIPPET}
      theme={resolvedTheme === 'dark' ? themes.jettwaveDark : MIST_THEME}
      language="jsx"
    >
      <CodeBlock.Code className="overflow-x-scroll rounded-4xl bg-blue-100 p-5 text-sm font-medium [scrollbar-width:none] md:p-8 md:text-base lg:mx-[10%] dark:bg-slate-800">
        <div className="table-row">
          <CodeBlock.LineNumber className="hidden pr-4 text-right text-gray-500 select-none md:table-cell" />
          <CodeBlock.LineContent className="table-cell">
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </div>
      </CodeBlock.Code>
    </CodeBlock>
  );
}

export default NpmCodeBlock;
