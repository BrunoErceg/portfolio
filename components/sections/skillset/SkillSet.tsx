// React
import { useState } from "react";

// Animations
import { motion } from "framer-motion";
import getAnimateInProps from "@/utils/animations";

// Data
import ReactSkills from "./data/react";
import NextSkills from "./data/next.js";
import TailwindSkills from "./data/tailwind";
import MotionSkills from "./data/motion";
import GitHubSkills from "./data/github";

// Components
import { MotionTag } from "@ui/Tag";
import SkillGrid from "./SkillGrid";

function SkillSet() {
  const techStack = [
    {
      name: "React",
      data: ReactSkills,
    },
    {
      name: "Next.js",
      data: NextSkills,
    },
    {
      name: "Tailwind",
      data: TailwindSkills,
    },
    {
      name: "Motion",
      data: MotionSkills,
    },
    {
      name: "GitHub",
      data: GitHubSkills,
    },
  ];
  const [CurrentSkill, setCurrentSkill] = useState(techStack[0]);

  return (
    <section className="">
      {/* TechStack set options navigation */}
      <div className="my-10 flex flex-wrap justify-center gap-3">
        {techStack.map((tech, index) => (
          <MotionTag
            key={tech.name}
            variant="base"
            {...getAnimateInProps("left", 0.55 + index * 0.05)}
            onClick={() => setCurrentSkill(tech)}
            state={CurrentSkill.name === tech.name ? "selected" : "default"}
          >
            {tech.name}
          </MotionTag>
        ))}

        <motion.div {...getAnimateInProps("none", 1.0)} className="h-250">
          {techStack.map((tech) => {
            if (CurrentSkill.name == tech.name) {
              return <SkillGrid skillsData={tech.data} />;
            }
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default SkillSet;
