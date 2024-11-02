import React from "react";
import Badge from "./Badge";
import {
  SiAmazonaws,
  SiAndroidstudio,
  SiC,
  SiChakraui,
  SiChartdotjs,
  SiCplusplus,
  SiCss3,
  SiExpress,
  SiFig,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMaterialdesign,
  SiMongodb,
  SiMongoose,
  SiNativescript,
  SiNextdotjs,
  SiNodedotjs,
  SiPassport,
  SiPython,
  SiReact,
  SiRedux,
  SiSass,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";

import { FaBootstrap } from "react-icons/fa";

interface Props {}

const skills = [
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "Sass", icon: <SiSass /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React Native", icon: <SiNativescript /> },
  { name: "Redux-Toolkit", icon: <SiRedux /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "C", icon: <SiC /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Chart.js", icon: <SiChartdotjs /> },
  { name: "Mongoose", icon: <SiMongoose /> },
  { name: "AWS", icon: <SiAmazonaws /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Android Studio", icon: <SiAndroidstudio /> },
  { name: "Cadence" },
  { name: "VS Code", icon: <SiVisualstudiocode /> },
  { name: "Shadcn" },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Zustand" },
  { name: "Auth.js" },
  { name: "Supabase", icon: <SiSupabase /> },
];

function Skills(props: Props) {
  return (
    <div className="flex flex-wrap text-sm  justify-center gap-2">
      {skills.map((skill, index) => (
        <Badge key={index} value={skill.name} icon={skill.icon} index={index} />
      ))}
    </div>
  );
}

export default Skills;
