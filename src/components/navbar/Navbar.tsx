"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {
  PiLaptopThin,
  PiUserLight,
  PiHouseSimpleThin,
  PiPenLight,
} from "react-icons/pi";
import { ThemeToggle } from "@/components/ThemeToggle";

let links = [
  { icons: <PiHouseSimpleThin />, path: "/", name: "Home" },
  { icons: <PiUserLight />, path: "/about", name: "About" },
  { icons: <PiLaptopThin />, path: "/project", name: "Project" },
  { icons: <PiPenLight />, path: "/blog", name: "Blog" },
];

function Navbar() {
  const pathname = usePathname() || "";
  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
    <nav className="  fixed   backdrop-blur-sm w-full z-30  rounded-lg">
      <div className=" mx-auto max-2xl px-0.5 sm:px-4 lg:px-0 ">
        <div className="flex  items-center justify-between  p-3 ">
          <div className="flex space-x-3 items-center">
            {links.map((item, index) => {
              const isActive = item.path === pathname;

              return (
                <Link
                  data-active={isActive}
                  key={item.path}
                  href={item.path}
                  onMouseOver={() => setHoveredPath(item.path)}
                  className={`px-1 py-1 rounded-full text-sm lg:text-base relative  duration-300 ease-in ${
                    isActive
                      ? "text-highlight text-base dark:text-highlight"
                      : "text-zinc-400"
                  }`}
                >
                  <span
                    className={` relative z-20 ${
                      item.path === hoveredPath &&
                      "  transition-all ease-in-out duration-500 "
                    } `}
                  >
                    <div className="hidden sm:block px-4">{item.name}</div>
                    <div className="sm:hidden text-2xl"> {item.icons}</div>
                  </span>

                  {item.path === hoveredPath && (
                    <motion.div
                      // -z-10
                      className="absolute bottom-0  z-10 left-0 h-full bg-accent/50   rounded-full "
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
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-x-3">
            <ThemeToggle />

            <Link href={"/contact"}>
              <div className="bg-highlight duration-200  hover:bg-transparent    text-white  hover:text-highlight px-2 rounded-md flex items-center gap-x-2 py-1  border-2 border-transparent hover:border-highlight">
                <AiOutlinePlusCircle className=" text-xl" />
                <span className=" sm:font-semibold ">Hire Me</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
