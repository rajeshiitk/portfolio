"use client";
import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import Image from "next/image";
import Education from "@/components/about/Education";

interface Props {}
export const tabMenu = [
  { label: "Personal Info", value: "perosnal-info" },
  { label: "Qualification", value: "qualification" },
  { label: "Skills", value: "skills" },
];

const images = ["/personal.svg", "/graduation.svg", "/skills.svg"];
const content = [
  {
    title: "Personal Info",
    component: <PersonalInfo />,
    image: images[0],
  },
  {
    title: "Education",
    component: <Education />,
    image: images[1],
  },
  {
    title: "Skills",
    component: <Skills />,
    image: images[2],
  },
];

const About = (props: Props) => {
  return (
    <main className="grid  ">
      <section className=" flex flex-col   pt-6 md:pt-10 dark:bg-gray-950  min-h-[100svh] items-center">
        <div>
          {content.map((item, index) => (
            <div
              key={index}
              className="sm:h-[calc(100svh)] items-center justify-center p-10 grid grid-cols-12"
            >
              <div className="col-span-12 content-center  justify-center items-center  h-full md:col-span-8">
                <div className="">
                  <h2 className="text-3xl font-bold  my-4">{item.title}</h2>
                  {item.component}
                </div>
              </div>
              <div className="hidden md:col-span-4 md:block ">
                <Image
                  src={item.image}
                  width={index === 1 ? 200 : 400}
                  height={index === 1 ? 200 : 400}
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
