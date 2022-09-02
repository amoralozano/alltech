import TopBan from "./TopBan";
import { useState } from "react";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full h-[55px] bg-black border-black px-2 sm:px-4 py-2.5 dark:bg-white">
      <div className="justify-between  px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <ul className="items-center justify-center mb-[20px] invisible lg:visible space-y-8 md:flex md:space-x-6 md:space-y-0">
          <li className="text-purple-300 font-bold text-sm border-gray-100 dark:text-black">
            <a href="/projects">MEN</a>
          </li>
          <li className="text-purple-300 font-bold text-[13px] border-gray-100 dark:text-black">
            <a href="/mystacks">WOMAN</a>
          </li>
          <li className="text-purple-300 font-bold block text-[13px] border-gray-100 dark:text-black">
            <a href="/projects">KIDS</a>
          </li>
          <li className="text-purple-300 font-bold text-[13px] border-gray-100 dark:text-black">
            <a href="/mystacks">ON SALE</a>
          </li>
        </ul>
        <div>
          <div className="flex items-center justify-between py-3  md:py-5 md:block">
            <div class=" justify-center mb-6 md:mb-0">
              <div className="mt-[-20px]">
                <a
                  href="/"
                  className="flex items-center text-3xl text-transparent bg-clip-text bg-gradient-to-br from-purple-200 to-purple-500 font-Pacifico font-extrabold "
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
              <li className="text-purple-300 font-bold text-[13px] border-gray-100 dark:text-black">
                <a href="/">ENDURANCE</a>
              </li>
              <li className="text-purple-300 font-bold text-[13px] border-gray-100 dark:text-black">
                <a href="/projects">RERUN</a>
              </li>
              <li className="text-purple-300 font-bold text-[13px] border-gray-100 dark:text-black">
                <a href="/mystacks">STORES</a>
              </li>
              <li className="text-purple-300 md:hidden font-bold text-lg border-gray-100 dark:text-black">
                <a href="/projects">test1</a>
              </li>
              <li className="text-purple-300 font-bold md:hidden text-lg border-gray-100 dark:text-black">
                <a href="/mystacks">test2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
