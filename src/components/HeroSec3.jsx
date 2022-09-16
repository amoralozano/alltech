import React from "react";

const HeroSec3 = () => {
  return (
    <div className="bg-black w-full h-[300px] flex flex-col justify-center items-center mb-[120px] lg:mb-[80px] mt-[40px] md:mt-[15px]">
      <div className="w-[90%] md:w-[50%] h-[300px] bg-transparant mt-[50px]">
        <h1 className="text-[35px] text-transparent bg-clip-text bg-gradient-to-br from-pink-300 to-purple-600 font-bold">
          Someone say Custom PC?
        </h1>
        <h1 className="text-lg text-white font-bold mt-[20px]">
          Looking for a custom PC? We got you covered with our huge range of
          customization options, and prices, to match anyones need! We also
          offer users the choice to build their own pc or we can build it for
          them!
        </h1>
        <div className="mt-[30px]">
          <a
            href="#"
            class="dark:text-blue-700 dark:bg-white dark:border-2 hover:bg-blue-500 dark:border-blue-700 dark:hover:bg-blue-500 dark:hover:text-white text-black bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 font-bold text-2xl px-5 py-2.5 text-center mr-3 md:mr-5 shadow-lg w-[200px] rounded-sm"
          >
            Explore Options
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSec3;
