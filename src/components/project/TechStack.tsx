"use client";
import React from "react";
import { AnimatedTooltip } from "./AnimatedToolTip";
const tech = [
  {
    id: 1,
    name: "Next.js",
    image: "/c.svg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={tech} />
    </div>
  );
}
