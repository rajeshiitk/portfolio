"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import Image from "next/image";
import TypewriterEffect from "../TypewriterEffect";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { PiDownloadSimple } from "react-icons/pi";

import { IoIosArrowRoundForward } from "react-icons/io";

interface Props {}

interface SocialLink {
  href: string;
  icon: JSX.Element;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/yourusername",
    icon: <FaGithub className="w-6 h-6" />,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/yourusername",
    icon: <FaLinkedin className="w-6 h-6" />,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/yourusername",
    icon: <FaTwitter className="w-6 h-6" />,
    label: "Twitter",
  },
];

const intro = `Rajesh Choudhary`;

const Hero: FC = (props: Props) => {
  return (
    <section className="relative h-[calc(100svh)] flex items-center justify-center overflow-hidden bg-[#030014]">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_-30%,#1a1158,transparent_80%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_80%_40%,#120f45,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_20%_60%,#150f35,transparent_70%)]" />

      {/* Floating tech stack with improved z-index and responsive positioning */}
      <div className="hidden md:block absolute top-[20%] left-[5%] z-10 group animate-float">
        <div className="relative p-4 backdrop-blur-md bg-[rgba(255,255,255,0.05)] rounded-lg border border-[rgba(255,255,255,0.1)] shadow-xl rotate-12 hover:rotate-0 transition-transform duration-300">
          <div className="text-4xl">⚛️</div>
          <p className="text-sm font-light">React</p>
        </div>
      </div>

      <div className="hidden md:block absolute top-[40%] right-[5%] z-10 group animate-float animation-delay-2000">
        <div className="relative p-4 backdrop-blur-md bg-[rgba(255,255,255,0.05)] rounded-lg border border-[rgba(255,255,255,0.1)] shadow-xl -rotate-12 hover:rotate-0 transition-transform duration-300">
          <div className="text-4xl">🚀</div>
          <p className="text-sm font-light">Next.js</p>
        </div>
      </div>

      <div className="hidden md:block absolute bottom-[25%] left-[15%] z-10 group animate-float animation-delay-1000">
        <div className="relative p-4 backdrop-blur-md bg-[rgba(255,255,255,0.05)] rounded-lg border border-[rgba(255,255,255,0.1)] shadow-xl rotate-6 hover:rotate-0 transition-transform duration-300">
          <div className="text-4xl">🎨</div>
          <p className="text-sm font-light">Tailwind</p>
        </div>
      </div>

      <div className="hidden md:block absolute bottom-[30%] right-[15%] z-10 group animate-float animation-delay-3000">
        <div className="relative p-4 backdrop-blur-md bg-[rgba(255,255,255,0.05)] rounded-lg border border-[rgba(255,255,255,0.1)] shadow-xl -rotate-6 hover:rotate-0 transition-transform duration-300">
          <div className="text-4xl">🔥</div>
          <p className="text-sm font-light text-center">MERN</p>
        </div>
      </div>

      {/* Main content */}
      <div className="container relative z-20 mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          {/* Animated name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              {intro}
            </h1>
          </motion.div>

          {/* Role description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl"
          >
            Full Stack Developer specializing in modern web technologies and
            scalable applications
          </motion.p>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex gap-6"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
