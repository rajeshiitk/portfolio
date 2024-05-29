import React from "react";

interface Props {
  value: string;
  index: number;
  icon?: React.ReactNode;
}

const Badge = ({ value, index, icon }: Props) => {
  return (
    <div
      className={`relative rounded-full border w-fit px-2 py-1 overflow-hidden font-medium  cursor-pointer   group`}
    >
      <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-highlight group-hover:w-full ease"></span>
      <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2  border-highlight group-hover:w-full ease"></span>
      <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-highlight group-hover:h-full ease"></span>
      <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-highlight group-hover:h-full ease"></span>
      <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-highlight opacity-0 group-hover:opacity-100"></span>
      <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
        <div className="text-base font-semibold select-none flex gap-2 items-center  dark:text-slate-300  px-2 py-1">
          <p className=""> {icon}</p>
          <p className="group-hover:translate-x-1 transition-all"> {value}</p>
        </div>
      </span>
    </div>
  );
};

export default Badge;
