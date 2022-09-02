import React from "react";

const ImageCol = () => {
  return (
    <div className="bg-gradient-to-r from-pink-400 via-purple-500 to-purple-600 w-full h-[300px]">
      <section class="overflow-hidden text-gray-700 ">
        <div class="container py-2 mx-auto">
          <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="flex flex-wrap w-1/5">
              <div class="w-[400px] h-[300px] p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                />
              </div>
            </div>
            <div class="flex flex-nowrap w-1/5">
              <div class="w-[400px] h-[300px] p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                />
              </div>
            </div>
            <div class="flex flex-nowrap w-1/5">
              <div class="w-[400px] h-[300px] p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                />
              </div>
            </div>
            <div class="flex flex-nowrap w-1/5">
              <div class="w-[400px] h-[300px] p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                />
              </div>
            </div>
            <div class="flex flex-nowrap w-1/5">
              <div class="w-[400px] h-[300px] p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"
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
