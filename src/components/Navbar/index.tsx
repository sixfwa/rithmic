import React from "react";
import type { FC } from "react";
import Link from "next/link";

import "../../../styles/Navbar.module.css";

const Navbar: FC = () => {
  return (
    <header className="lg:px-16 px-6 bg-gray-800 flex flex-wrap items-center lg:py-6 py-4 border-b-1 border-white z-40">
      <div className="flex-1 flex justify-between items-center">
        <Link href="/">
          <a className="font-lilita text-4xl lg:text-5xl transition duration-600 text-indigo-400">
            RITHMIC
          </a>
        </Link>
      </div>

      <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
        <svg
          className="fill-current text-indigo-300"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div
        className="hidden lg:flex lg:items-center lg:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="lg:flex items-center justify-between  text-indigo-300 pt-4 lg:pt-0 font-lilita text-lg">
            <li>
              <Link href="/videos">
                <a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-500">
                  Videos
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blogs">
                <a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-500">
                  Blog
                </a>
              </Link>
            </li>
            <li>
              <a
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-500"
                href="#"
              >
                Me
              </a>
            </li>
            <li>
              <a
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-500 lg:mb-0 mb-2"
                href="#"
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
