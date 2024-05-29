export interface ProjectType {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  github: string;
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Lazzer - Your ultimate companion",
    des: "Lazzer is a powerful tool that helps you create beautiful illustrations and vector art without any design experience.",
    img: "/Lazzer.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://lazzer.vercel.app",
    github: "https://github.com/rajeshiitk/lazzer",
  },
  {
    id: 2,
    title: "LateGPT - Personal AI Assistant",
    des: "Just a pixel perfect wrapper of ChatGPT on Gemini.",
    img: "/lategpt.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://lategpt.vercel.app",
    github: "https://github.com/rajeshiitk/lategpt",
  },
  {
    id: 3,
    title: "SecurEye - IoT devices Manager",
    des: "Next.js web application that provides an admin panel for managing IoT devices, allowing users to control various devices such as lights, air conditioners, and fans remotely using ESP8266 NodeMCU server, gate automation based on camera feedback, and streaming live video feeds.",
    img: "/secureye.jpeg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://secureye-lime.vercel.app",
    github: "https://github.com/rajeshiitk/secureye",
  },
  {
    id: 4,
    title: "Trimy - URL shortening service",
    des: "URL shortening service to Shrink, Share, Track, and Elevate Links and manage campaigns.",
    img: "/trimy.jpeg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://trimy.vercel.app",
    github: "https://github.com/rajeshiitk/linksniper-frontend",
  },
];
