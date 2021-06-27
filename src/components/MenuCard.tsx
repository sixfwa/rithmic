import React from "react";
import type { FC } from "react";

interface Props {
  bgColor: string;
  hoverBgColor: string;
  children: React.ReactNode;
}

const MenuCard: FC<Props> = ({ bgColor, hoverBgColor, children }) => (
  <div
    className={`${bgColor} h-64 w-80 mt-14 rounded-2xl cursor-pointer hover:${hoverBgColor}	transition duration-300 ease-in-out`}
  >
    {children}
  </div>
);

export default MenuCard;
