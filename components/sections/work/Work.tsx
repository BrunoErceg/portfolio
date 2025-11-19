import { motion } from "framer-motion";
import Link from "next/link";
import getAnimateInProps from "@/utils/animations";
import ScreenHero from "@images/luxgym-screen-hero.png";
import ScreenGym from "@images/luxgym-screen-gym.png";
import ScreenPersonal from "@images/luxgym-screen-personal.png";
import ScreenGalery from "@images/luxgym-screen-galery.png";
import ScreenPrices from "@images/luxgym-screen-prices.png";
import LuxGymLogo from "@images/luxgym-screen-logo.png";
import Stack from "@layout/Stack";
import Showcase from "@/components/sections/work/Showcase";
import Tag from "@ui/Tag";
import { Text } from "@ui/Text";
import Card from "@ui/Card";

function Work() {
  const screenshots = [
    { name: "personal", src: ScreenPersonal.src },
    { name: "hero", src: ScreenHero.src },
    { name: "gym", src: ScreenGym.src },
    { name: "galery", src: ScreenGalery.src },
    { name: "prices", src: ScreenPrices.src },
  ];
  const TagsData = ["React", "Next.js", "i18n", "Framer"];
  return (
    <section className="my-25 rounded-2xl">
      <motion.div {...getAnimateInProps("bottom", 1.4)} className="mb-35">
        <div className="flex justify-between py-5">
          <div>
            <Link href="/" className="text-dark mb-4 text-2xl font-semibold">
              📁 LuxGym
            </Link>
            <Text className="">Web Stranica napravljena u Next.js-u</Text>
          </div>
          <Stack spacing="sm" className="items-center">
            {TagsData.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </Stack>
        </div>
        <Link href="/">
          <Showcase images={screenshots} />
        </Link>
      </motion.div>

      {/* Second Project */}
      <motion.div {...getAnimateInProps("bottom", 1.4)}>
        <div className="flex justify-between py-5">
          <div>
            <Link href="/" className="text-dark mb-4 text-2xl font-semibold">
              📁 Bruno Erceg Protfolio
            </Link>
            <Text className="">Web Stranica napravljena u Next.js-u</Text>
          </div>
          <Stack spacing="sm" className="items-center">
            {TagsData.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </Stack>
        </div>
        <div className="columns-3 gap-5">
          <Card
            title={"O Projektu"}
            description={
              "To je trenutna web stranica na kojo se nalazite glavni featues"
            }
            icon={"/images/information.png"}
          />
          <Card
            title={"GitHub"}
            description={
              "Pogledajte Bruno Erceg Portfolio na github-u i vidite sve, ps procitajte readMe.tsx"
            }
            icon={"/images/social.png"}
          />
          <Card
            title={"Case Study"}
            description={"eki radnom text o projektu"}
            icon={"/images/folder.png"}
          />
        </div>
      </motion.div>
    </section>
  );
}
export default Work;
