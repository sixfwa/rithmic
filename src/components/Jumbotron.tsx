import React from "react";
import type { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const Jumbotron: FC<Props> = ({ children }) => (
  <div>
    <div className="w-screen h-80 bg-gradient-to-r from-indigo-400 to-blue-500 flex">
      <h1 className="m-auto font-lilita text-3xl lg:text-7xl text-white">
        {children}
      </h1>
    </div>
  </div>
);

export default Jumbotron;
