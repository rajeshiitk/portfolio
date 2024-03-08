import React from "react";
import Badge from "./Badge";

interface Props {}

const skills = [
  "HTML",
  "CSS",
  "Sass",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Next.js",
  "React Native",
  "Redux",
  "Redux-Toolkit",
  "Tailwind CSS",
  "Figma",
  "C",
  "C++",
  "Python",
  "Chart.js",
  "Bcrypt.js",
  "Passport.js",
  "Bootstrap",
  "Chakra UI",
  "Material-UI",
  "Mongoose",
  "AWS",
  "Git",
  "Android Studio",
  "Cadence",
  "VS Code",
  "Shadcn",
  "Figma",
];

function Skills(props: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <Badge key={index} value={skill} />
      ))}
    </div>
  );
}

export default Skills;
