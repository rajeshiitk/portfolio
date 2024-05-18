"use client";
import React, { FC } from "react";

import Image from "next/image";
import TypewriterEffect from "../TypewriterEffect";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { PiDownloadSimple } from "react-icons/pi";

import { IoIosArrowRoundForward } from "react-icons/io";

interface Props {}
const intro = `Rajesh Choudhary`;

const Hero: FC = (props: Props) => {
  return (
    <section className="px-8 relative  dark:bg-gray-950  h-[calc(100svh)] grid sm:grid-cols-2">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>
      <div className=" bg-gradient-to-t from-gray-950 to-transparent  z-10 h-[calc(100svh)] w-full sm:hidden absolute"></div>
      {/* Left */}
      <div className="flex flex-col z-20 justify-between h-[calc(100svh)] sm:justify-evenly">
        <div className="flex flex-col min-h-80 sm:justify-center py-12   gap-6">
          <div className="">
            <TextGenerateEffect words={intro} className="" />
          </div>
          <div className=" text-3xl dark:text-white min-h-10">
            <TypewriterEffect />{" "}
          </div>
        </div>
        <div className="flex z-10  sm:py-8 flex-col items-center   pb-20 sm:flex-row gap-6">
          <button className="px-8 py-2 flex  justify-center items-center gap-2 bg-highlight text-white font-bold transition w-48 duration-200 hover:bg-transparent dark:hover:text-white hover:text-white sm:hover:text-black border-2 border-transparent dark:text-white hover:border-red-600">
            Connect me
            <IoIosArrowRoundForward className="text-xl" />
          </button>
          <button className="px-8 py-2 justify-center flex gap-2 items-center hover:text-highlight font-bold transition duration-200 bg-transparent  text-white sm:text-black border-2 w-48  border-red-600 dark:text-white">
            Resume
            <PiDownloadSimple className="" />
          </button>
        </div>
      </div>

      {/* right */}
      <div className="h-0">
        <Image
          className=" -z-0 bottom-0   md:opacity-100 absolute right-0 "
          src="/profile_dark.png"
          alt="hero"
          width={350}
          height={350}
        />
      </div>
    </section>
  );
};

export default Hero;
