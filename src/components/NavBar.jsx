import TopBan from "./TopBan";
import { useState } from "react";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full md:h-[55px] md:mt-0 bg-black border-black sm:px-4 md:py-2.5 dark:bg-white">
      <div className="justify-between  px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <ul className="items-center justify-center mb-[20px] invisible lg:visible space-y-8 md:flex md:space-x-6 md:space-y-0">
          <li className="text-transparent bg-clip-text bg-gradient-to-br from-pink-300 to-purple-500 font-bold text-[15px] ml-[-80px] border-gray-100 dark:text-black">
            <a href="#">CONSOLE</a>
          </li>
          <li className="text-transparent bg-clip-text bg-gradient-to-br from-pink-300 to-purple-500 font-bold text-[15px] mr-[20px] border-gray-100 dark:text-black">
            <a href="#">PC</a>
          </li>
          <li className="text-transparent bg-clip-text bg-gradient-to-br from-pink-300 to-purple-500 font-bold block text-[15px] mr-[20px] border-gray-100 dark:text-black">
            <a href="#">VR</a>
          </li>
          <li className="text-transparent bg-clip-text bg-gradient-to-br from-pink-300 to-purple-500 font-bold text-[15px] mr-[20px] border-gray-100 dark:text-black">
            <a href="#">MAC</a>
          </li>
        </ul>
        <div>
          <div className="flex items-center justify-between mt-[-190px] md:mt-0 md:py-5 md:block">
            <div class=" justify-center mb-6 md:mb-0">
              <div className="md:mt-[-20px]">
                <a
                  href="/"
                  className="flex items-center text-3xl md:mt-0 text-transparent bg-clip-text bg-gradient-to-br from-pink-300 to-purple-700 font-Pacifico font-extrabold "
                >
                  AllTech
                </a>
              </div>
            </div>

            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center mb-[20px] space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-transparent bg-clip-text bg-gradient-to-br from-pink-300 to-purple-500 font-bold text-[15px] border-gray-100 dark:text-black">
                <a href="/">COLLECT</a>
              </li>
              <li className="text-transparent bg-clip-text bg-gradient-to-br from-pink-300 to-purple-500 font-bold text-[15px] border-gray-100 dark:text-black">
                <a href="/">GAMES</a>
              </li>
              <li className="text-transparent bg-clip-text bg-gradient-to-br from-pink-300 to-purple-500 font-bold text-[15px] border-gray-100 dark:text-black">
                <a href="/">ACCESSORIES</a>
              </li>
              <li className="text-transparent bg-clip-text md:hidden bg-gradient-to-br from-pink-300 to-purple-500 font-bold text-[15px] border-gray-100 dark:text-black">
                <a href="/">VR</a>
              </li>
              <li className="text-transparent bg-clip-text md:hidden bg-gradient-to-br from-pink-300 to-purple-500 font-bold text-[15px] border-gray-100 dark:text-black">
                <a href="/">MAC</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
