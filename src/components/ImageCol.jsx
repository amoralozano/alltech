import React from "react";
import assets from "../assets";

const ImageCol = () => {
  return (
    <div className="bg-gradient-to-r from-pink-400 via-purple-500 to-purple-600 w-full h-[310px] md:h-[300px] mt-[150px]">
      <section class="overflow-hidden text-gray-700 ">
        <div class="container py-2 mx-auto">
          <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="flex flex-wrap w-1/5">
              <div class="w-[400px] h-[300px] p-[2px] md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src={assets.imagecol2}
                />
              </div>
            </div>
            <div class="flex flex-nowrap w-1/5">
              <div class="w-[400px] h-[300px] p-[2px] md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src={assets.imagecol1}
                />
              </div>
            </div>
            <div class="flex flex-nowrap w-1/5">
              <div class="w-[400px] h-[300px] p-[2px] md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src={assets.imagecol3}
                />
              </div>
            </div>
            <div class="flex flex-nowrap w-1/5">
              <div class="w-[400px] h-[300px] p-[2px] md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src={assets.imagecol4}
                />
              </div>
            </div>
            <div class="flex flex-nowrap w-1/5">
              <div class="w-[400px] h-[300px] p-[2px] md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src={assets.imagecol5}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageCol;
