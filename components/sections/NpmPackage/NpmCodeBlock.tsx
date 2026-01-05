import { CodeBlock } from 'react-code-block';
import { themes } from 'prism-react-renderer';
import { AnimateIn } from '@/components/ui/AnimateIn';
import AnimateInExample from '@/components/ui/AnimateInExample';

export const mistTheme = {
  plain: {
    color: '#1e3a8a', // blue-900 (Baza - vrlo čitljivo)
    backgroundColor: 'transparent',
  },
  styles: [
    {
      // Tvoji tagovi (AnimateIn) - Brend plava blue-600
      types: ['tag', 'class-name'],
      style: { color: '#2563eb', fontWeight: '600' }, // Extra bold za tvoj paket
    },
    {
      // Ključne riječi (const, return) - Tamno indigo
      types: ['keyword'],
      style: { color: '#4338ca' },
    },
    {
      // Atributi (direction, delay) - Svježija blue-500
      types: ['attr-name'],
      style: { color: '#3b82f6' },
    },
    {
      // Stringovi - Umirujuća teal/plava
      types: ['string'],
      style: { color: '#0891b2' },
    },
    {
      // Komentari - Izblijedjela plava
      types: ['comment'],
      style: { color: '#64748b', fontStyle: 'italic' },
    },
  ],
};
const code = `
import { AnimateIn } from './AnimateIn';

function AnimateInExample() {
  return (
    <AnimateIn.Container>
      <AnimateIn.Item>
        <p>NPM Packet</p>
      </AnimateIn.Item>

      <h1>
        <AnimateIn.Words>
          NPM Packet Projekt - AnimateIn 
        </AnimateIn.Words>
      </h1>

      <AnimateIn.Item>
        <p>
          Lagani npm paket za brzu implementaciju 
          modernih efekata pojavljivanja
        </p>
      </AnimateIn.Item>
    </AnimateIn.Container>
  );
}
export default AnimateInExample;
`;

function NpmCodeBlock() {
  return (
    <CodeBlock code={code} theme={mistTheme} language="jsx">
      <CodeBlock.Code className="text-md rounded-4xl bg-blue-100 p-8 font-medium lg:mx-[10%]">
        <div className="table-row">
          <CodeBlock.LineNumber className="table-cell pr-4 text-right text-gray-500 select-none" />
          <CodeBlock.LineContent className="table-cell wrap-break-word whitespace-pre-wrap">
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </div>
      </CodeBlock.Code>
    </CodeBlock>
  );
}

export default NpmCodeBlock;
