import React from "react";

const Favorites = () => {
  return (
    <div className="bg-black w-full h-[800px] mb-[-30px] mt-[50px]">
      <br />
      <h1 className="text-[36px] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-200 to-purple-500 mb-[10px]">
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
            className="text-purple-500 hover:border-b-purple-700 border-b-purple-300  w-full block text-lg font-extrabold leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 focus:border-b-purple-700"
            id="tabs-home-tabFill"
            data-bs-toggle="pill"
            data-bs-target="#tabs-homeFill"
            role="tab"
            aria-controls="tabs-homeFill"
            aria-selected="true"
          >
            For Working
          </a>
        </li>
        <li class="nav-item flex-auto text-center" role="presentation">
          <a
            href="#tabs-profileFill"
            className=" text-purple-500 hover:border-b-purple-700 border-b-purple-300 w-full block text-lg font-extrabold leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 focus:border-b-purple-700 "
            id="tabs-profile-tabFill"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profileFill"
            role="tab"
            aria-controls="tabs-profileFill"
            aria-selected="false"
          >
            For Every Day Use
          </a>
        </li>
        <li class="nav-item flex-auto text-center" role="presentation">
          <a
            href="#tabs-messagesFill"
            class="text-purple-500 hover:border-b-purple-700 border-b-purple-300 w-full block text-lg font-extrabold leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 focus:border-b-purple-700"
            id="tabs-messages-tabFill"
            data-bs-toggle="pill"
            data-bs-target="#tabs-messagesFill"
            role="tab"
            aria-controls="tabs-messagesFill"
            aria-selected="false"
          >
            For Winter
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
          <div className=" flex-col justify-center items-center ml-[120px] w-[80%] h-[250px]">
            <div class="flex justify-center">
              <div class="rounded-lg shadow-lg bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 max-w-sm h-[500px]">
                <a href="#!">
                  <img
                    class="rounded-t-lg h-[80%]"
                    src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                    alt=""
                  />
                </a>
                <div class="p-4">
                  <h5 class="text-gray-900 text-xl font-extrabold text-left mb-2">
                    Card title
                  </h5>
                  <p class="text-gray-700 text-md font-bold text-left mb-[10px]">
                    Lighter, faster, Hotter, Beter
                  </p>
                </div>
              </div>

              <div class="flex justify-center ml-[30px]">
                <div class="rounded-lg shadow-lg bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 max-w-sm">
                  <a href="#!">
                    <img
                      class="rounded-t-lg h-[80%]"
                      src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                      alt=""
                    />
                  </a>
                  <div class="p-4">
                    <h5 class="text-gray-900 text-xl font-extrabold text-left mb-2">
                      Card title
                    </h5>
                    <p class="text-gray-700 text-md text-left mb-[10px]">
                      Lighter, faster, Hotter, Beter
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex justify-center ml-[30px]">
                <div class="rounded-lg shadow-lg bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 max-w-sm">
                  <a href="#!">
                    <img
                      class="rounded-t-lg h-[80%]"
                      src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                      alt=""
                    />
                  </a>
                  <div class="p-4">
                    {/* changing the padding to see if it better aligns the model */}
                    <h5 class="text-gray-900 text-xl font-extrabold text-left mb-2">
                      Card title
                    </h5>
                    <p class="text-gray-700 text-md text-left mb-[10px]">
                      Lighter, faster, Hotter, Beter
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
          <div className=" flex-col justify-center items-center ml-[120px] w-[80%]  h-[250px]">
            <div class="flex justify-center">
              <div class="rounded-sm shadow-lg bg-gradient-to-r from-purple-500 via-purple-400 to-pink-300 max-w-sm h-[500px]">
                <a href="#!">
                  <img
                    class="rounded-t-lg h-[80%]"
                    src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                    alt=""
                  />
                </a>
                <div class="p-4">
                  <h5 class="text-gray-900 text-xl font-extrabold text-left mb-2">
                    Card title
                  </h5>
                  <p class="text-gray-700 text-md text-left mb-[10px]">
                    Lighter, faster, Hotter, Beter
                  </p>
                </div>
              </div>

              <div class="flex justify-center ml-[30px]">
                <div class="rounded-sm shadow-lg bg-gradient-to-r from-purple-500 via-purple-400 to-pink-300 max-w-sm">
                  <a href="#!">
                    <img
                      class="rounded-t-lg h-[80%]"
                      src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                      alt=""
                    />
                  </a>
                  <div class="p-4">
                    <h5 class="text-gray-900 text-xl font-extrabold text-left mb-2">
                      Card title
                    </h5>
                    <p class="text-gray-700 text-md text-left mb-[10px]">
                      Lighter, faster, Hotter, Beter
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex justify-center ml-[30px]">
                <div class="rounded-sm shadow-lg bg-gradient-to-r from-purple-500 via-purple-400 to-pink-300 max-w-sm">
                  <a href="#!">
                    <img
                      class="rounded-t-lg h-[80%]"
                      src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                      alt=""
                    />
                  </a>
                  <div class="p-4">
                    {/* changing the padding to see if it better aligns the model */}
                    <h5 class="text-gray-900 text-xl font-extrabold text-left mb-2">
                      Card title
                    </h5>
                    <p class="text-gray-700 text-md text-left mb-[10px]">
                      Lighter, faster, Hotter, Beter
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
          <div className=" flex-col justify-center items-center ml-[120px] w-[80%]  h-[250px]">
            <div class="flex justify-center">
              <div class="rounded-lg shadow-lg bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 max-w-sm h-[500px]">
                <a href="#!">
                  <img
                    class="rounded-t-lg h-[80%]"
                    src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                    alt=""
                  />
                </a>
                <div class="p-4">
                  <h5 class="text-gray-900 text-xl font-extrabold text-left mb-2">
                    Card title
                  </h5>
                  <p class="text-gray-700 text-md text-left mb-[10px]">
                    Lighter, faster, Hotter, Beter
                  </p>
                </div>
              </div>

              <div class="flex justify-center ml-[30px]">
                <div class="rounded-lg shadow-lg bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 max-w-sm">
                  <a href="#!">
                    <img
                      class="rounded-t-lg h-[80%]"
                      src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                      alt=""
                    />
                  </a>
                  <div class="p-4">
                    <h5 class="text-gray-900 text-xl font-extrabold text-left mb-2">
                      Card title
                    </h5>
                    <p class="text-gray-700 text-md text-left mb-[10px]">
                      Lighter, faster, Hotter, Beter
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex justify-center ml-[30px]">
                <div class="rounded-lg shadow-lg bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500  max-w-sm">
                  <a href="#!">
                    <img
                      class="rounded-t-lg h-[80%]"
                      src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                      alt=""
                    />
                  </a>
                  <div class="p-4">
                    {/* changing the padding to see if it better aligns the model */}
                    <h5 class="text-gray-900 text-xl font-extrabold text-left mb-2">
                      Card title
                    </h5>
                    <p class="text-gray-700 text-md text-left mb-[10px]">
                      Lighter, faster, Hotter, Beter
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
