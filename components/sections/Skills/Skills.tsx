// React
import { useState } from "react";

// Animations
import { motion } from "framer-motion";
import getAnimateInProps from "@/utils/animations";

// Components
import ReactSkills from "@Skills/ReactSkills";
import { MotionTag } from "@ui/Tag";
import NextSkills from "./NextSkills";
import TailwindSkills from "./TailwindSkills";
import Motion from "./Motion";
import GitHub from "./GitHub";

function Skills() {
  const techStack = ["React", "Next.js", "Tailwind", "Motion", "GitHub"];
  const [CurrentSkill, setCurrentSkill] = useState(techStack[0]);

  return (
    <section className="">
      {/* TechStack set options navigation */}
      <div className="my-10 flex flex-wrap justify-center gap-3">
        {techStack.map((tech, index) => (
          <MotionTag
            key={tech}
            variant="base"
            {...getAnimateInProps("left", 0.55 + index * 0.05)}
            onClick={() => setCurrentSkill(tech)}
            state={CurrentSkill === tech ? "selected" : "default"}
          >
            {tech}
          </MotionTag>
        ))}

        {/* Current tech skills display  */}
        <motion.div {...getAnimateInProps("none", 1.0)} className="h-250">
          {CurrentSkill === "React" && <ReactSkills />}
          {CurrentSkill === "Next.js" && <NextSkills />}
          {CurrentSkill === "Tailwind" && <TailwindSkills />}
          {CurrentSkill === "Motion" && <Motion />}
          {CurrentSkill === "GitHub" && <GitHub />}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
