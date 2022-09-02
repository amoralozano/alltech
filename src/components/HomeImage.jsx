import React from "react";
import assets from "../assets";

const HomeImage = () => {
  return (
    <div className="w-full flex-col items-center justify-center">
      <img className="w-full h-[350px] " src={assets.image3} />
    </div>
  );
};

export default HomeImage;
