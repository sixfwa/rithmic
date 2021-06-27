import React from "react";
import type { FC } from "react";

import Image from "next/image";

const Card: FC = () => {
  return (
    <div className="h-screen">
      <Image
        src="https://media.giphy.com/media/3NeSk2IVEd2FYUQEcM/giphy.gif"
        height={100}
        width={100}
      />
    </div>
  );
};

export default Card;
