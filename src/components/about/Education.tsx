import React from "react";
import { TracingBeam } from "../TracingBeam";

interface Props {}

const EducationData = [
  {
    id: 1,
    title: "B.Tech in Electrical Engineering",
    date: "2021-2025",
    institution: "IIT Kanpur",
  },

  {
    id: 2,
    title: "Senior Secondary",
    date: "2018-2020",
    institution: "SRK, Jaipur",
  },
  {
    id: 3,
    title: "Secondary",
    date: "2016-2018",
    institution: "AIA, Jaipur",
  },
];

const Education = (props: Props) => {
  return (
    <div>
      <TracingBeam className="p-8 ">
        {/* <h1 className="text-3xl font-bold">Education</h1> */}
        <div className="mt-6   h-full space-y-12">
          {EducationData.map((edu) => (
            <div key={edu.id}>
              <h2 className="text-xl font-semibold">{edu.title}</h2>
              <p className="text-sm text-gray-500">{edu.date}</p>
              <p className="text-sm text-gray-500">{edu.institution}</p>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
};

export default Education;
