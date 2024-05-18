"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import PersonalInfo from "./PersonalInfo";
import Qualification from "./Qualification";
import Skills from "./Skills";
import Image from "next/image";

interface Props {}
export const tabMenu = [
  { label: "Personal Info", value: "perosnal-info" },
  { label: "Qualification", value: "qualification" },
  { label: "Skills", value: "skills" },
];

const images = ["/personal.svg", "/qualifications.svg", "/skills.svg"];
const content = [
  {
    title: "Personal Info",
    component: <PersonalInfo />,
    image: images[0],
  },
  {
    title: "Qualification",
    component: <Qualification />,
    image: images[1],
  },
  {
    title: "Skills",
    component: <Skills />,
    image: images[2],
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
        {/* <div className="flex  items-center justify-between  p-3 ">
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
                      ? "text-highlight text-base dark:text-highlight"
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
                      className="absolute bottom-0  z-10 left-0 h-full bg-highlight dark:bg-highlight rounded-full "
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
        </div> */}
        <div>
          {content.map((item, index) => (
            <div
              key={index}
              className="h-[calc(100svh)] justify-center p-10 grid grid-cols-12"
            >
              <div className="col-span-12 md:col-span-8">
                <div className="text-xl font-semibold my-4">{item.title}</div>
                {item.component}
              </div>
              <div className="hidden md:col-span-4 md:block ">
                <Image
                  src={item.image}
                  width={400}
                  height={400}
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
