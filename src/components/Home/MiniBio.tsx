import React from "react";
import type { FC } from "react";

import Image from "next/image";

const MiniBio: FC = () => (
  <div className="max-w py-4 px-8 bg-white shadow-lg rounded-lg my-20">
    <div>
      <h2 className="text-gray-800 text-2xl lg:text-3xl font-semibold font-lilita">
        HELLO WORLD 🌍
      </h2>
      <p className="mt-2 text-gray-600 text-xl">
        Welcome to my home on the internet.
      </p>
      <p className="mt-2 text-gray-600 text-lg">
        I'm a Software Engineer and{" "}
        <a href="https://www.youtube.com/channel/UCs2HMkuPwT3xCvba20VgGuQ">
          YouTuber
        </a>{" "}
        living in the heart of Munich
      </p>
    </div>
  </div>
);

export default MiniBio;
