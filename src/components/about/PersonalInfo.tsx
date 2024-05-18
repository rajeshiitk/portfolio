import Image from "next/image";
import React from "react";
import { CiMail } from "react-icons/ci";
import { FaLanguage } from "react-icons/fa";

import {
  PiMapPinLineLight,
  PiPersonSimpleLight,
  PiPhoneCallThin,
  PiPlus,
  PiStudentThin,
} from "react-icons/pi";

interface Props {}

const personalInfo = [
  {
    label: "Rajesh Choudhary",
    icon: <PiPersonSimpleLight />,
  },
  {
    label: "+91 9680702761",
    icon: <PiPhoneCallThin />,
  },
  {
    label: "rajuvert18@gmail.com",
    icon: <CiMail />,
  },
  {
    label: "Jaipur, Rajasthan, India",
    icon: <PiMapPinLineLight />,
  },
  {
    label: "Electrical Engineering",
    icon: <PiStudentThin />,
  },
];

const PersonalInfo = (props: Props) => {
  return (
    <section>
      <div className="w-full  grid gap-4 sm:grid-cols-2 ">
        {personalInfo.map((item, index) => (
          <div key={item.label} className="flex gap-4  items-center flex-1">
            <p className="text-highlight">{item.icon}</p>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-xl flex gap-2 pt-4 font-semibold text-highlight">
          <FaLanguage /> Languages
        </h2>
        <p className="pl-8">English and Hindi</p>
      </div>
    </section>
  );
};

export default PersonalInfo;
