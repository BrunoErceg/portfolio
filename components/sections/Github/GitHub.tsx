import { motion, useScroll, useTransform } from 'framer-motion';
import GitHubHeader from './GithubHeader';
import Image from 'next/image';
import { useRef } from 'react';

function GitHub() {
  return (
    <section className="relative mb-30 overflow-hidden rounded-4xl bg-linear-to-br from-blue-400 from-0% to-blue-500 px-10 pt-15 pb-25 text-white md:pt-25 md:pb-40 lg:px-[20%]">
      <GitHubHeader />

      <div className="absolute -bottom-8 -left-10 -rotate-10 rounded-3xl bg-white/20 p-10 py-5 md:left-5 lg:left-30">
        <Image
          src={'/images/github-logo.svg'}
          alt="github"
          width={300}
          height={300}
          className="w-30 opacity-80 select-none md:w-45 lg:w-50"
        />
      </div>

      <div className="absolute -right-10 -bottom-8 rotate-10 rounded-3xl bg-white/20 p-10 py-5 md:right-5 lg:right-30">
        <Image
          src={'/images/git-logo.svg'}
          alt="github"
          width={300}
          height={300}
          className="w-30 opacity-80 select-none md:w-45 lg:w-50"
        />
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-linear-to-t from-blue-400 to-transparent" />
    </section>
  );
}

export default GitHub;
