import React from "react";

const HeroSec = () => {
  return (
    <div className="bg-black w-full h-[300px] flex flex-col justify-center items-center mb-[120px] mt-[-40px]">
      <div className="w-[50%] h-[300px] bg-transparant mt-[50px]">
        <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-300 to-purple-600">
          Meet Our Favorite Game Collection
        </h1>
        <h1 className="text-lg font-bold mt-[20px] text-white">
          Looking for that unbeatable softness of our cozy merino wool, with a
          little more durability? Maybe a little something you can dress up, or
          dress down? Great, you’re in luck.
        </h1>
        <div className=" mt-[50px]">
          <a
            href="https://greaternews.netlify.app"
            class="dark:text-blue-700 dark:bg-white dark:border-2 hover:bg-blue-500 dark:border-blue-700 dark:hover:bg-blue-500 dark:hover:text-white text-black bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 font-bold text-2xl px-5 py-2.5 text-center mr-3 md:mr-5 shadow-lg rounded-md"
          >
            Shop Console
          </a>
          <a
            href="https://greaternews.netlify.app"
            class="dark:text-blue-700 dark:bg-white dark:border-2 hover:bg-blue-500 dark:border-blue-700 dark:hover:bg-blue-500 dark:hover:text-white text-black bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 font-bold  text-2xl px-5 py-2.5 text-center mr-3 md:mr-5 shadow-lg rounded-md"
          >
            Shop PC
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
