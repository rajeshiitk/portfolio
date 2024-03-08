"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { scroller } from "react-scroll";
import PersonalInfo from "./PersonalInfo";
import Qualification from "./Qualification";
import Skills from "./Skills";

interface Props {}
export const tabMenu = [
  { label: "Personal Info", value: "perosnal-info" },
  { label: "Qualification", value: "qualification" },
  { label: "Skills", value: "skills" },
];

const images = ["/profile-dark.png", "/profile_light.png", "/profile-dark.png"];
const content = [
  {
    title: "Personal Info",
    component: <PersonalInfo />,
  },
  {
    title: "Qualification",
    component: <Qualification />,
  },
  {
    title: "Skills",
    component: <Skills />,
  },
];

const About = (props: Props) => {
  const [hoveredPath, setHoveredPath] = useState<string>("perosnal-info");
  return (
    <main className="grid  ">
      {/* <div className=" bg-gradient-to-b from-gray-950 to-transparent  z-10 h-[calc(100svh)] w-full sm:hidden absolute"></div> */}
      {/* <section>
        <Image src="/profile-dark.png" alt="hero" width={350} height={350} />
      </section> */}
      <section className=" flex flex-col   pt-6 md:pt-10 dark:bg-gray-950  min-h-[100svh] items-center">
        <h1 className="text-4xl md:mt-6 dark:text-white font-semibold ">
          About me
        </h1>
        {/* Tab Menu */}
        <div className="flex  items-center justify-between  p-3 ">
          <div className="flex w-fit max-w-full fixed rounded-full dark:border-2 border-2 z-30 left-1/2 -translate-x-1/2 backdrop-blur-sm bottom-10 space-x-3 items-center">
            {tabMenu.map((item, index) => {
              const isActive = item.value === item.value;

              return (
                <div
                  data-active={isActive}
                  key={item.value}
                  onClick={() => {
                    const itemRef = document.getElementById(item.value);
                    if (itemRef) {
                      itemRef.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  onMouseOver={() => setHoveredPath(item.value)}
                  className={`px-1 py-1 cursor-pointer rounded-full text-sm lg:text-base relative  duration-300 ease-in ${
                    isActive
                      ? "text-[#ff0000] text-base dark:text-[#ff00000]"
                      : "text-zinc-400"
                  }`}
                >
                  <span
                    className={` relative  z-20 ${
                      item.value === hoveredPath &&
                      " dark:text-white text-white transition-all ease-in-out duration-500 "
                    } `}
                  >
                    <button className="px-4 gap-1  flex">
                      <p className="sm:text-xl text-base ">
                        {item.label.split(" ")[0]}
                      </p>
                      <p className="hidden sm:text-xl text-base  sm:block ">
                        {item.label.split(" ")[1]}
                      </p>
                    </button>
                  </span>

                  {item.value === hoveredPath && (
                    <motion.div
                      // -z-10
                      className="absolute bottom-0  z-10 left-0 h-full bg-[#ff0000] dark:bg-[#ff0000]  rounded-full "
                      layoutId="navbar"
                      aria-hidden="true"
                      style={{
                        width: "100%",
                      }}
                      transition={{
                        type: "spring",
                        bounce: 0.15,
                        stiffness: 130,
                        damping: 15,
                        duration: 0.3,
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <StickyScroll images={images} content={content} />
      </section>
    </main>
  );
};

export default About;
