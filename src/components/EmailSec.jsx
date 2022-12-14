import React from "react";

const EmailSec = () => {
  return (
    <div className="bg-gray-900 w-full h-[350px] lg:h-[300px] flex flex-col justify-center items-center mt-[50px] md:mt-0 mb-[50px]">
      <div className=" w-[90%] md:w-[50%] h-[300px] bg-transparant mt-[-20px] md:mt-[50px]">
        <h1 className=" text-[33px] md:text-[35px] text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-purple-600 font-bold">
          Get the latest drops and collection alerts
        </h1>
        <h1 className=" text-[17px] md:text-[18px] font-bold text-white mt-[20px]">
          Sign up to get notified via email when our new collections and drops
          take place!
        </h1>
        <div className="flex justify-center mt-[30px]">
          <input
            type="email"
            id="helper-text"
            aria-describedby="helper-text-explanation"
            class="bg-gray-700 w-[450px] border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-half p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email Address..."
          />
          <a
            href="#"
            class="dark:text-blue-700 dark:bg-white dark:border-2 hover:bg-blue-500 dark:border-blue-700 dark:hover:bg-blue-500 dark:hover:text-white text-black bg-gradient-to-r from-pink-400 via-purple-500 to-purple-600 font-bold text-lg md:text-xl ml-[15px] py-2.5 text-center md:mr-5 shadow-lg w-[150px] h-[50px] rounded-md"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmailSec;
