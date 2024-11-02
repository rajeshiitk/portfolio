import About from "@/components/about/About";
import React from "react";

interface Props {}

const page = (props: Props) => {
  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      {/* <h1>About me</h1> */}
      <About />
    </div>
  );
};

export default page;
