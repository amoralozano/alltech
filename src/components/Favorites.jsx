import React from "react";
import assets from "../assets";

// accssries pic for mac credit: the every day dad on youtube!

const Favorites = () => {
  return (
    <div className="bg-black w-full h-[800px] mb-[-180px] md:mb-[-80px] mt-[-80px]">
      <br />
      <h1 className="text-[38px] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-300 to-purple-600 mb-[20px]">
        Our Favorites
      </h1>
      <br />
      <ul
        class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
        id="tabs-tabFill"
        role="tablist"
      >
        <li class="nav-item flex-auto text-center" role="presentation">
          <a
            href="#tabs-homeFill"
            className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-400 hover:border-b-pink-500 border-b-purple-300  w-full block text-lg md:text-xl font-black leading-tight uppercase border-x-0 border-t-0 border-b-2 md:border-b-4 border-transparent px-6 py-3 my-2 focus:border-b-pink-500"
            id="tabs-home-tabFill"
            data-bs-toggle="pill"
            data-bs-target="#tabs-homeFill"
            role="tab"
            aria-controls="tabs-homeFill"
            aria-selected="true"
          >
            Console
          </a>
        </li>
        <li class="nav-item flex-auto text-center" role="presentation">
          <a
            href="#tabs-profileFill"
            className=" text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-400 hover:border-b-pink-500 border-b-purple-300 w-full block text-lg md:text-xl font-black leading-tight uppercase border-x-0 border-t-0 border-b-2 md:border-b-4 border-transparent px-6 py-3 my-2 focus:border-b-pink-500 "
            id="tabs-profile-tabFill"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profileFill"
            role="tab"
            aria-controls="tabs-profileFill"
            aria-selected="false"
          >
            MAC
          </a>
        </li>
        <li class="nav-item flex-auto text-center" role="presentation">
          <a
            href="#tabs-messagesFill"
            class="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-400 hover:border-b-pink-500 border-b-purple-300 w-full block text-lg md:text-xl font-black leading-tight uppercase border-x-0 border-t-0 border-b-2 md:border-b-4 border-transparent px-6 py-3 my-2 focus:border-b-pink-500"
            id="tabs-messages-tabFill"
            data-bs-toggle="pill"
            data-bs-target="#tabs-messagesFill"
            role="tab"
            aria-controls="tabs-messagesFill"
            aria-selected="false"
          >
            PC
          </a>
        </li>
      </ul>
      <div class="tab-content" id="tabs-tabContentFill">
        <div
          class="tab-pane fade show active"
          id="tabs-homeFill"
          role="tabpanel"
          aria-labelledby="tabs-home-tabFill"
        >
          <div className=" md:flex-col justify-center items-center mt-[30px] md:mt-[25px] md:ml-[90px] lg:ml-[150px] w-[100%] md:w-[80%] h-[250px]">
            <div class="flex justify-center">
              <div class="rounded-lg shadow-lg bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 max-w-[400px] md:max-w-[500px] lg:max-w-[400px] h-[250px] md:h-[500px]">
                <a href="#!">
                  <img
                    class="rounded-t-lg h-[200px] md:h-[420px] w-[500px]"
                    src={assets.ps5}
                    alt=""
                  />
                </a>
                <div class="p-4">
                  <h5 class="text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 text-md md:text-[18px] lg:text-xl font-extrabold text-center mt-[-13px] md:mt-[-10px]">
                    Playstation 5
                  </h5>
                  <p class="text-black text-md md:text-sm lg:text-[16px] font-bold text-center mb-[10px]">
                    Shop from the PS5, PS4, and More
                  </p>
                </div>
              </div>

              <div class="flex justify-center ml-[5px] md:ml-[10px] lg:ml-[30px]">
                <div class="rounded-lg shadow-lg bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 max-w-[400px] md:max-w-[500px] lg:max-w-[400px] h-[250px] md:h-[500px]">
                  <a href="#!">
                    <img
                      class="rounded-t-lg h-[200px] md:h-[420px] w-[500px]"
                      src={assets.xbox}
                      alt=""
                    />
                  </a>
                  <div class="p-4">
                    <h5 class="text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 text-sm md:text-[18px] lg:text-xl  md:text-xl font-extrabold text-center mt-[-10px]">
                      Xbox Series X / S
                    </h5>
                    <p class="text-black font-bold text-md md:text-sm lg:text-[16px] text-center mb-[10px]">
                      Shop from the Xbox Series X / S and More
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex justify-center ml-[5px] md:ml-[10px] lg:ml-[30px]">
                <div class="rounded-lg shadow-lg bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 max-w-[400px] md:max-w-[500px] lg:max-w-[400px] h-[250px] md:h-[500px]">
                  <a href="#!">
                    <img
                      class="rounded-t-lg h-[200px] md:h-[420px] w-[500px]"
                      src={assets.ninswitch}
                      alt=""
                    />
                  </a>
                  <div class="p-4">
                    <h5 class="text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 text-sm md:text-[18px] lg:text-xl md:text-xl font-extrabold text-center mt-[-10px]">
                      Nintendo Switch OLED
                    </h5>
                    <p class="text-black font-bold text-md md:text-sm lg:text-[16px] text-center mb-[10px]">
                      Shop from the Switch OLED and More
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  add the divs for each box for the favorites section */}
        </div>
        <div
          class="tab-pane fade"
          id="tabs-profileFill"
          role="tabpanel"
          aria-labelledby="tabs-profile-tabFill"
        >
          <div className=" flex-col justify-center items-center mt-[30px] md:mt-[25px]  md:ml-[90px] lg:ml-[120px] w-[100%] md:w-[80%] h-[250px]">
            <div class="flex justify-center">
              <div class="rounded-lg shadow-lg bg-gradient-to-r from-purple-500 via-purple-400 to-pink-300 max-w-[400px] md:max-w-[350px] h-[250px] md:h-[500px]">
                <a href="#!">
                  <img
                    class="rounded-t-lg  h-[200px] md:h-[420px] w-[500px] bg-white"
                    src={assets.macmonitor}
                    alt=""
                  />
                </a>
                <div class="p-4">
                  <h5 class="text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 text-md md:text-[17px] lg:text-xl font-extrabold text-center mb-2 mt-[-10px]">
                    mac monitors
                  </h5>
                  <p class="text-black text-md md:text-sm lg:text-[16px] font-bold mt-[-8px] text-center">
                    Lighter, faster, Hotter, Beter
                  </p>
                </div>
              </div>

              <div class="flex justify-center ml-[5px] md:ml-[10px] lg:ml-[30px]">
                <div class="rounded-lg shadow-lg bg-gradient-to-r from-purple-500 via-purple-400 to-pink-300 max-w-[400px] md:max-w-[350px] h-[250px] md:h-[500px]">
                  <a href="#!">
                    <img
                      class="rounded-t-lg h-[200px] md:h-[420px] w-[500px]"
                      src={assets.macbook}
                      alt=""
                    />
                  </a>
                  <div class="p-4">
                    <h5 class="text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 text-sm md:text-[17px] lg:text-xl font-extrabold text-center mb-2 mt-[-10px]">
                      Airpods Max
                    </h5>
                    <p class=" invisible md:visible text-black text-md md:text-sm lg:text-[16px] font-bold mt-[-8px] text-center mb-[10px]">
                      Choose between Airpods Max or other headphones
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex justify-center ml-[5px]  md:ml-[10px] lg:ml-[30px]">
                <div class="rounded-lg shadow-lg bg-gradient-to-r from-purple-500 via-purple-400 to-pink-300 max-w-[400px] md:max-w-[350px] h-[250px] md:h-[500px]">
                  <a href="#!">
                    <img
                      class="rounded-t-lg h-[200px] md:h-[420px] w-[500px]"
                      src={assets.macaccesories}
                      alt=""
                    />
                  </a>
                  <div class="p-4">
                    <h5 class="text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 text-sm md:text-[17px] lg:text-xl font-extrabold text-center mb-2 mt-[-10px]">
                      magic Keyboard
                    </h5>
                    <p class="text-black text-md md:text-sm lg:text-[16px] font-bold mt-[-8px] text-center mb-[10px]">
                      Chose from many options, colors
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="tabs-messagesFill"
          role="tabpanel"
          aria-labelledby="tabs-profile-tabFill"
        >
          <div className=" flex-col justify-center items-center mt-[30px] md:mt-[25px]  md:ml-[90px] lg:ml-[120px] w-[100%] md:w-[80%] h-[250px]">
            <div class="flex justify-center">
              <div class="rounded-lg shadow-lg bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 max-w-[400px] md:max-w-[350px] h-[250px] md:h-[500px]">
                <a href="#!">
                  <img
                    class="object-fill  h-[200px] md:h-[420px] w-[500px]"
                    src={assets.monitor}
                    alt=""
                  />
                </a>
                <div class="p-4 flex-col justify-center items-center">
                  <h5 class="text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 text-sm md:text-[17px] lg:text-xl  font-extrabold text-center mt-[-10px]">
                    PC Monitors
                  </h5>
                  {/* to add a line between both items add a border-top or bt-black or purple. */}
                  <p class=" invisible md:visible text-black text-md md:text-sm lg:text-[16px] font-bold text-center">
                    Choose from brands like LG & others
                  </p>
                </div>
              </div>

              <div class="flex justify-center ml-[5px] md:ml-[10px] lg:ml-[30px]">
                <div class="rounded-lg shadow-lg bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 max-w-[400px] md:max-w-[350px] h-[250px] md:h-[500px]">
                  <a href="#!">
                    <img
                      class="object-fill h-[200px] md:h-[420px] w-[500px]"
                      src={assets.pccase}
                      alt=""
                    />
                  </a>
                  <div class="p-4 flex-col justify-center items-center">
                    <h5 class="text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 text-sm md:text-[17px] lg:text-xl font-extrabold text-center mt-[-10px]">
                      Gaming Chairs
                    </h5>
                    {/* to add a line between both items add a border-top or bt-black or purple. */}
                    <p class="text-black text-md md:text-sm lg:text-[16px] font-bold text-center">
                      Choose gaming chairs from S-Racer and others
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex justify-center ml-[5px]  md:ml-[10px] lg:ml-[30px]">
                <div class="rounded-lg shadow-lg bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 max-w-[400px] md:max-w-[350px] h-[250px] md:h-[500px]">
                  <a href="#!">
                    <img
                      class="object-fill h-[200px] md:h-[420px] w-[500px] rounded-t-md"
                      src={assets.pcsetup}
                      alt=""
                    />
                  </a>
                  <div class="p-4 flex-col justify-center items-center">
                    <h5 class="text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 text-sm md:text-[17px] lg:text-xl font-extrabold text-center mt-[-10px]">
                      Pre Built Custom PCS
                    </h5>
                    {/* to add a line between both items add a border-top or bt-black or purple. */}
                    <p class="text-black text-md md:text-sm lg:text-[16px] font-bold text-center">
                      Choose what you want for all your gaming needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;

<div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 max-w-sm h-[500px]">
    <a href="#!">
      <img class="rounded-t-lg h-[420px] w-[500px]" src={assets.ps5} alt="" />
    </a>
    <div class="p-4">
      <h5 class="text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900  text-xl font-extrabold text-center mt-[-10px]">
        Playstation 5
      </h5>
      <p class="text-black text-md font-bold text-center mb-[10px]">
        Shop from the PS5, PS4, and More
      </p>
    </div>
  </div>

  <div class="flex justify-center ml-[30px]">
    <div class="rounded-lg shadow-lg bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 max-w-sm h-[500px]">
      <a href="#!">
        <img
          class="rounded-t-lg h-[420px] w-[500px]"
          src={assets.xbox}
          alt=""
        />
      </a>
      <div class="p-4">
        <h5 class="text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900  text-xl font-extrabold text-center mt-[-10px]">
          Xbox Series X / S
        </h5>
        <p class="text-black font-bold text-md text-center mb-[10px]">
          Shop from the Xbox Series X / S and More
        </p>
      </div>
    </div>
  </div>
  <div class="flex justify-center ml-[30px]">
    <div class="rounded-lg shadow-lg bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 max-w-sm h-[500px]">
      <a href="#!">
        <img
          class="rounded-t-lg h-[420px] w-[500px]"
          src={assets.ninswitch}
          alt=""
        />
      </a>
      <div class="p-4">
        <h5 class="text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 text-xl font-extrabold text-center mt-[-10px]">
          Nintendo Switch OLED
        </h5>
        <p class="text-black font-bold text-md text-center mb-[10px]">
          Shop from the Switch OLED and More
        </p>
      </div>
    </div>
  </div>
</div>;
