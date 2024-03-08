import React from "react";

interface Props {
  value: string;
}

const Badge = (props: Props) => {
  return (
    <div className="rounded-full w-fit px-2 cursor-pointer   border-2">
      <p className="text-xs font-semibold  text-gray-700 dark:text-slate-300 px-2 py-1">
        {props.value}
      </p>
    </div>
  );
};

export default Badge;
