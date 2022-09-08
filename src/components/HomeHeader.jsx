import React from "react";
import assets from "../assets";
// find a way to add a background image to the header

const HomeHeader = () => {
  return (
    <div className="bg-blend-darken">
      <div className=" bg-hero2 bg-cover w-full h-[700px] flex flex-col justify-center items-center">
        <div className="w-[50%] h-[400px] mt-[230px] ">
          <h1 className="text-[46px] mt-[20px] font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-400">
            Whats Your Inner Technology?
          </h1>
          <h1 className="mt-[10px] text-lg text-transparent bg-clip-text bg-gradient-to-br from-purple-200 to-purple-500 font-extrabold">
            {" "}
            Choices for all gamers, for any gamer needs!
          </h1>
          <div className=" mt-[190px]">
            <a
              href="https://greaternews.netlify.app"
              class="dark:text-blue-700 dark:bg-white dark:border-2 hover:bg-blue-500 dark:border-blue-700 dark:hover:bg-blue-500 dark:hover:text-white text-black bg-gradient-to-r from-purple-500 to-pink-400 font-bold text-xl px-5 py-2.5 text-center mr-3 md:mr-5 shadow-lg rounded-sm"
            >
              Shop PC
            </a>
            <a
              href="https://greaternews.netlify.app"
              class="dark:text-blue-700 dark:bg-white dark:border-2 hover:bg-blue-500 dark:border-blue-700 dark:hover:bg-blue-500 dark:hover:text-white text-black bg-gradient-to-r from-purple-500 to-pink-400 font-bold  text-xl px-5 py-2.5 text-center mr-3 md:mr-5 shadow-lg rounded-sm"
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
