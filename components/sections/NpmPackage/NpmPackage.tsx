// Icons
import Text from '@/components/ui/Text';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

// UI Components
import { AnimateIn } from '@ui/AnimateIn';
import Button from '@ui/Button';
import Heading from '@ui/Heading';
import Tag from '@ui/Tag';

// Components
import NpmCodeBlock from './NpmCodeBlock';
import Head from 'next/head';

function NpmPackage() {
  return (
    <section className="mb-40">
      <AnimateIn.Container amount={0.2} stagger="slow">
        <div className="mb-15 text-center">
          <AnimateIn.Item>
            <Tag text="Npm Package" icon={faFolderOpen} variant="heading" />
          </AnimateIn.Item>

          <Heading level={2} centered>
            <AnimateIn.Words stagger="fast"> NPM Packet Projekt - AnimateIn</AnimateIn.Words>
          </Heading>

          <AnimateIn.Item delay={1}>
            <Text variant="subheading">
              Lagani npm paket za brzu implementaciju modernih efekata pojavljivanja elemenata
              unutar svakog React projekta.
            </Text>
          </AnimateIn.Item>
          <AnimateIn.Item>
            <Button text="Pogledaj sad" icon={faDesktop} href="https://luxgym.vercel.app/" />
            <Button text="GitHub" icon={faGithub} href="https://github.com/BrunoErceg/luxgym" />
          </AnimateIn.Item>
        </div>
        <AnimateIn.Item className="relative h-fit rounded-4xl">
          <NpmCodeBlock />
        </AnimateIn.Item>
      </AnimateIn.Container>
    </section>
  );
}

export default NpmPackage;
