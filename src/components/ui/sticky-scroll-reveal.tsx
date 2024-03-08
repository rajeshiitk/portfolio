"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { tabMenu } from "../about/About";
import PersonalInfo from "../about/PersonalInfo";

export const StickyScroll = ({
  content,
  images,
}: {
  content: {
    title: string;
    component: JSX.Element;
  }[];
  images: string[];
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  // This hook listens to changes in the scrollYProgress and updates the activeCard state accordingly
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) {
        setActiveCard(() => index);
      }
    });
  });

  //   const backgroundColors = [
  //     "var(--slate-900)",
  //     "var(--black)",
  //     "var(--neutral-900)",
  //   ];

  return (
    <motion.div
      animate={
        {
          // backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        }
      }
      className="h-[calc(100svh_-_200px)]  md:grid-cols-2 container-snap  w-full overflow-y-auto flex justify-center relative  rounded-md "
      ref={ref}
    >
      <div className="div w-[calc(100svw_-_20px)] relative flex items-start px-4">
        <div className="h-40">
          {content.map((item, index) => (
            <div
              id={tabMenu[index].value}
              key={item.title + index}
              className=" h-[calc(100svh_-_200px)]"
            >
              {/* Title */}
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                id="section1"
                className="text-2xl font-bold   text-slate-900 dark:text-slate-100"
              >
                {item.title}
              </motion.h2>
              {/* Description */}
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg dark:text-slate-300 text-slate-900  mt-10"
              >
                {item.component}
              </motion.div>
            </div>
          ))}

          <div />
        </div>
      </div>
      {/* Image */}
      <motion.img
        src={images[activeCard % images.length]}
        alt="Card Image"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="hidden lg:block w-96  rounded-md sticky top-10"
      />
    </motion.div>
  );
};
