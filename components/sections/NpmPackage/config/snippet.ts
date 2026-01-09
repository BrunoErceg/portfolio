export const SNIPPET = `
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
` as const;
