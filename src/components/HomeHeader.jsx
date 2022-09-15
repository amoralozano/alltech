import React from "react";
import assets from "../assets";
// find a way to add a background image to the header

const HomeHeader = () => {
  return (
    <div className=" flex flex-col bg-blend-darken">
      <div className=" md:bg-hero2 brightness- bg-hero bg-cover md:mt-0 md:bg-cover w-half md:w-full h-[600px] md:h-[700px] flex flex-col justify-center items-center">
        <div className="md:w-[50%] w-[70%] md:h-[400px] md:mt-[230px] ">
          <h1 className=" text-[40px] md:text-[46px] mt-[140px] md:mt-[20px] font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-pink-500 md:text-transparent md:bg-clip-text md:bg-gradient-to-br md:from-purple-500 md:to-pink-400">
            Whats Your Inner Technology?
          </h1>
          <h1 className="mt-[10px] text-[16px] text-transparent bg-clip-text bg-gradient-to-br from-pink-200 to-blue-500 md:text-lg md:text-transparent md:bg-clip-text md:bg-gradient-to-br md:from-purple-200 md:to-purple-500 font-black">
            {" "}
            Choices for all gamers, for any gamer needs!
          </h1>
          <div className=" md:mt-[190px] mt-[70px]">
            <a
              href="https://greaternews.netlify.app"
              class="dark:text-blue-700 dark:bg-white dark:border-2 hover:bg-blue-500 dark:border-blue-700 dark:hover:bg-blue-500 dark:hover:text-white text-black bg-gradient-to-r from-blue-400 to-pink-400 md:bg-gradient-to-r md:from-purple-500 md:to-pink-400 font-extrabold text-lg md:text-xl px-5 py-2.5 text-center mr-3 md:mr-5 shadow-lg rounded-sm"
            >
              Shop PC
            </a>
            <a
              href="https://greaternews.netlify.app"
              class="dark:text-blue-700 dark:bg-white dark:border-2 hover:bg-blue-500 dark:border-blue-700 dark:hover:bg-blue-500 dark:hover:text-white text-black bg-gradient-to-r from-pink-400 to-blue-400 font-extrabold text-lg md:text-xl px-5 py-2.5 text-center mr-3 md:mr-5 shadow-lg rounded-sm"
            >
              Shop Mac
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
