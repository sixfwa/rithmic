import React from "react";
import type { FC } from "react";

const Footer: FC = () => (
  <footer className="pt-1 bottom mt-40">
    <div className="container mx-auto px-6">
      <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
        <div className="sm:w-2/3 text-center py-6">
          <p className="text-sm  font-bold mb-2 text-white">
            © 2021 made with ❤️
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
