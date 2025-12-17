// Animation
import { motion } from "framer-motion";
import getAnimateInProps from "@/utils/animations";

// Components
import RoutingEx from "./examples/RoutingEx";
import Card from "./Card";
import ImageEx from "./examples/ImageEx";
import ApiEx from "./examples/ApiEx";

// Type definitions for skill items
type SkillItem = {
  title: string;
  description: string;
  example?: React.ReactNode;
  type: "title" | "example"; // for Card variant
};

function NextSkills() {
  // Define the skills related to Next
  const NextSkills: SkillItem[] = [
    {
      title: "Next.js",
      description:
        "Next.js je React framework koji omogućuje brzu izgradnju web aplikacija sa server-side renderingom, automatskim rutingom i ugrađenom optimizacijom za produkciju.",
      type: "title",
    },
    {
      title: "Image Optimization",
      description: "Automatska optimizacija slika za bolje performanse.",
      example: <ImageEx />,
      type: "example",
    },
    {
      title: "Server-Side Rendering",
      description: "Renderiranje stranica na serveru prije slanja klijentu.",
      type: "example",
    },
    {
      title: "File-Based Routing",
      description: "Automatsko ruting prema strukturi direktorija projekta.",
      example: <RoutingEx />,
      type: "example",
    },

    {
      title: "Server-Side Data Fetching",
      description:
        "Server-side data fetching poboljšava performanse i SEO. Podaci se dohvaćaju prije renderiranja stranice.",
      example: <ApiEx />,
      type: "example",
    },
    {
      title: "API Routes",
      description: "Kreiranje backend endpointova unutar Next.js aplikacije.",

      type: "example",
    },
  ];

  return (
    // Responsive Skills grid display with animation
    <motion.div
      {...getAnimateInProps("bottom", 0.1)}
      className="mt-5 w-full space-y-3 md:mt-10 lg:mt-15 lg:columns-3 lg:gap-5 lg:space-y-6 [@media(max-width:1300px)]:columns-2 [@media(max-width:770px)]:columns-1"
    >
      {/* Render each skill item as a Card */}
      {NextSkills.map(({ title, description, example, type }, index) => (
        <Card
          variant={type}
          key={title}
          title={title}
          description={description}
          example={example} // Optional example component
        />
      ))}
    </motion.div>
  );
}

export default NextSkills;
