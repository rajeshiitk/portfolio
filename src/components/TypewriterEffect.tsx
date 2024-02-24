"use client";
import React, { FC } from "react";
import Typewriter from "typewriter-effect";

interface Props {}

const TypewriterEffect: FC<Props> = () => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString(
            "Fullstack <span style='color: #ff0000; '>MERN</span>  Dev"
          )
          .pauseFor(1200)
          .deleteChars(9)
          .typeString("<span style='color: #ff0000; '>Next.js</span> Developer")
          .pauseFor(1200)
          .deleteAll()
          .changeDelay(50)
          .typeString(
            "Passionate <span style='color: #ff0000;'>Problem Solver</span> from India"
          )
          .start()
          .pauseFor(1200)
          .deleteAll();
      }}
    />
  );
};

export default TypewriterEffect;
