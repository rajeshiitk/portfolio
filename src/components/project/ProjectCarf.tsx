"use client";

import Image from "next/image";
import React from "react";

import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./3dCard";
import { ProjectType } from "@/app/project/page";
import { FaLocationArrow, FaRegArrowAltCircleUp } from "react-icons/fa";
import { Button } from "../ui/button";

export function ProjectCard({ project }: ProjectType) {
  return (
    <CardContainer className="p-4">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          <div>
            {project.title}
            <Link href={project.link}>
              <Button className="text-highlight" variant={"link"}>
                Live <FaLocationArrow className="ml-2 animate-bounce" />
              </Button>
            </Link>
          </div>
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {project.des}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={project.img}
            height="1000"
            width="1000"
            className="h-60 w-full  rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem>
            <div className="flex items-center justify-between mt-7 mb-3">
              <div className="flex items-center">
                {project.iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border   rounded-full  lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${5 * index + 2}px)`,
                    }}
                  >
                    <img src={icon} alt="icon5" className="p-2" />
                  </div>
                ))}
              </div>
            </div>
          </CardItem>

          <CardItem
            translateZ={20}
            as="div"
            className="px-4 group py-2 text-xs font-bold"
          >
            <Link href={project.github}>
              <Button variant="outline" className="rounded-full   items-center">
                Github
                <FaRegArrowAltCircleUp
                  size="icon"
                  className="ml-2 rotate-45 group-hover:translate-x-1 transition-all"
                />
              </Button>
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
