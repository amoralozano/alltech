import React from "react";

const HeroSec3 = () => {
  return (
    <div className="bg-black w-full h-[300px] flex flex-col justify-center items-center mb-[80px]">
      <div className="w-[50%] h-[300px] bg-transparant mt-[50px]">
        <h1 className="text-[35px] text-transparent bg-clip-text bg-gradient-to-br from-pink-300 to-purple-600 font-bold">
          Big News For Little Feet
        </h1>
        <h1 className="text-lg text-white font-bold mt-[20px]">
          Looking for that unbeatable softness of our cozy merino wool, with a
          little more durability. Looking for that unbeatable softness of our
          cozy merino wool, with a little more durability.
        </h1>
        <div className="mt-[30px]">
          <a
            href="https://greaternews.netlify.app"
            class="dark:text-blue-700 dark:bg-white dark:border-2 hover:bg-blue-500 dark:border-blue-700 dark:hover:bg-blue-500 dark:hover:text-white text-black bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 font-bold text-2xl px-5 py-2.5 text-center mr-3 md:mr-5 shadow-lg w-[200px] rounded-sm"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSec3;
