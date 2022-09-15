import React from "react";

const HeroSec = () => {
  return (
    <div className="bg-black w-full h-[300px] flex flex-col justify-center items-center mb-[200px] md:mb-[120px] ">
      <div className=" w-[80%] md:w-[50%] h-[300px] bg-transparant md:mt-[50px]">
        <h1 className="text-[37px] mt-[40px] md:mt-0 md:text-[40px] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-300 to-purple-600">
          Meet Our Favorite Game Collection
        </h1>
        <h1 className=" text-[17px] md:text-lg font-bold mt-[20px] text-white">
          Trying to find the best game collection for you? We got you covered!
          from the best games and reviews from our community to help you chose
          the best game or games for you!
        </h1>
        <div className=" mt-[50px]">
          <a
            href="https://greaternews.netlify.app"
            class="dark:text-blue-700 dark:bg-white dark:border-2 hover:bg-blue-500 dark:border-blue-700 dark:hover:bg-blue-500 dark:hover:text-white text-black bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 font-semibold md:font-bold text-xl md:text-2xl px-5 py-2.5 text-center mr-3 md:mr-5 shadow-lg rounded-md"
          >
            Shop Console
          </a>
          <a
            href="https://greaternews.netlify.app"
            class="dark:text-blue-700 dark:bg-white dark:border-2 hover:bg-blue-500 dark:border-blue-700 dark:hover:bg-blue-500 dark:hover:text-white text-black bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 font-semibold md:font-bold  text-xl md:text-2xl px-5 py-2.5 text-center mr-3 md:mr-5 shadow-lg rounded-md"
          >
            Shop PC
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
