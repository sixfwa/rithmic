import React from "react";
import type { FC } from "react";

import {
  AiFillYoutube,
  AiOutlineTwitter,
  AiOutlineGithub,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

import Jumbotron from "../components/Jumbotron";
import MenuCard from "../components/MenuCard";

const HomePage: FC = () => {
  return (
    <div className="container">
      <Jumbotron>My Journey as a Coder 👨‍💻</Jumbotron>

      <div className="flex flex-wrap justify-evenly w-screen">
        <MenuCard bgColor="bg-red-700" hoverBgColor="bg-red-800">
          <h1 className="text-5xl font-lilita pt-9 pl-10 text-white">
            YouTube
          </h1>
          <AiFillYoutube size="100" className="mt-14 ml-44 text-white" />
        </MenuCard>
        <MenuCard bgColor="bg-blue-400" hoverBgColor="bg-blue-500">
          <h1 className="text-5xl font-lilita pt-9 pl-10 text-white">
            Twitter
          </h1>
          <AiOutlineTwitter size="100" className="mt-16 ml-44 text-white" />
        </MenuCard>
        <MenuCard bgColor="bg-purple-400" hoverBgColor="bg-purple-500">
          <h1 className="text-5xl font-lilita pt-9 pl-10 text-white">GitHub</h1>
          <AiOutlineGithub size="100" className="mt-14 ml-44 text-white" />
        </MenuCard>
        <MenuCard bgColor="bg-indigo-800" hoverBgColor="bg-indigo-900">
          <h1 className="text-5xl font-lilita pt-9 pl-10 text-white">
            Discord
          </h1>
          <FaDiscord size="100" className="mt-14 ml-44 text-white" />
        </MenuCard>
      </div>
    </div>
  );
};

export default HomePage;
