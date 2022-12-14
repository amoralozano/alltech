import React, { useState } from "react";
// show 7 slides in total if not 8 if there are restrictions!
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import assets from "../assets";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Carusel1() {
  return (
    <div className=" flex bg-black ">
      <div className="container w-full mx-auto mb-[10px] md:mt-[10px] bg-black">
        <h1 className="text-[35px] text-center  md:ml-0 text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600 font-extrabold md:text-left">
          New Favorites Of 2022
        </h1>
        <div className="flex items-center justify-center w-full h-full">
          {/* Carousel for desktop and large size devices */}
          <CarouselProvider
            className="lg:block hidden"
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={7} // 7
            visibleSlides={4} // 2
            step={1}
            infinite={false}
          >
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="absolute z-30 left-0 ml-8    cursor-pointer"
                id="prev"
              >
                <img
                  src={assets.whitearrow}
                  alt="arrowLeft"
                  className="w-[30px] h-[40px] rotate-180"
                />
              </ButtonBack>
              <div className=" h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div
                    id="slider"
                    className="h-full w-full flex lg:gap-6 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                  >
                    <Slide index={0}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car1img1}
                          alt="sitting area"
                          className="object-fill object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-left lg:text-xl font-bold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-20px] ml-[-10px]">
                            The Last of Us Part I
                          </h3>
                          <div className="flex h-full items-end mt-[15px]">
                            <h2 className="lg:text-md font-semibold leading-4 text-left lg:leading-5 text-black ml-[-10px]">
                              PS5
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={1}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car1img2}
                          alt="sitting area"
                          className="object-fill object-center h-[360px] w-full rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-left lg:text-xl font-bold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-20px] ml-[-10px]">
                            Madden 23
                          </h3>
                          <div className="flex h-full items-end mt-[15px]">
                            <h2 className="lg:text-md font-semibold leading-4 text-left lg:leading-5 text-black ml-[-10px]">
                              PS5, Xbox, PC
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={2}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car1img3}
                          alt="sitting area"
                          className="object-fill object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-left lg:text-xl font-bold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-20px] ml-[-10px]">
                            Splatoons 3
                          </h3>
                          <div className="flex h-full items-end mt-[15px]">
                            <h2 className="lg:text-md font-semibold leading-4 text-left lg:leading-5 text-black ml-[-10px]">
                              Nintendo Switch
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={3}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car1img4}
                          alt="sitting area"
                          className="object-fill object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-left lg:text-xl font-bold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-20px] ml-[-10px]">
                            Returnal
                          </h3>
                          <div className="flex h-full items-end mt-[15px]">
                            <h2 className="lg:text-md font-semibold leading-4 text-left lg:leading-5 text-black ml-[-10px]">
                              PS5
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={4}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car1img5}
                          alt="sitting area"
                          className="object-fill object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-left lg:text-xl font-bold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-20px] ml-[-10px]">
                            Elden Ring
                          </h3>
                          <div className="flex h-full items-end mt-[15px]">
                            <h2 className="lg:text-md font-semibold leading-4 text-left lg:leading-5 text-black ml-[-10px]">
                              PC, PS5, Xbox
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={5}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car1img6}
                          alt="sitting area"
                          className="object-cover object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-left lg:text-xl font-bold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-20px] ml-[-10px]">
                            Horizon Forbidden West
                          </h3>
                          <div className="flex h-full items-end mt-[15px]">
                            <h2 className="lg:text-md font-semibold leading-4 text-left lg:leading-5 text-black ml-[-10px]">
                              PS5
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={6}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car1img7}
                          alt="sitting area"
                          className="object-cover object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-left lg:text-xl font-bold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-20px] ml-[-10px]">
                            Nintendo Switch Sports
                          </h3>
                          <div className="flex h-full items-end mt-[15px] ml-[-10px]">
                            <h2 className="lg:text-md font-semibold leading-4 text-left lg:leading-5 text-black">
                              Nintendo Switch
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                  </div>
                </Slider>
              </div>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="absolute z-30 right-0 mr-8 focus:outline-none"
                id="next"
              >
                <img
                  src={assets.whitearrow}
                  alt="arrowLeft"
                  className="w-[30px] h-[40px]"
                />
              </ButtonNext>
            </div>
          </CarouselProvider>

          {/* Carousel for tablet and medium size devices!! */}
          <CarouselProvider
            className="lg:hidden md:block hidden"
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={7}
            visibleSlides={2}
            step={1}
            infinite={true}
          >
            <div className="w-full relative mt-[10px] flex items-center justify-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                id="prev"
              >
                <img
                  src={assets.whitearrow}
                  alt="arrowLeft"
                  className="w-[20px] h-[40px] rotate-180"
                />
              </ButtonBack>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div
                    id="slider"
                    className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                  >
                    <Slide index={0}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car1img1}
                          alt="sitting area"
                          className="object-fill object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-left lg:text-xl font-bold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-20px] ml-[-10px]">
                            The Last of Us Part 1
                          </h3>
                          <div className="flex h-full items-end mt-[15px]">
                            <h2 className="lg:text-md font-semibold leading-4 text-left lg:leading-5 text-black ml-[-10px]">
                              PS5
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={1}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car1img2}
                          alt="sitting area"
                          className="object-fill object-center h-[360px] w-full rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-left lg:text-xl font-bold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-20px] ml-[-10px]">
                            Madden 23
                          </h3>
                          <div className="flex h-full items-end mt-[15px]">
                            <h2 className="lg:text-md font-semibold leading-4 text-left lg:leading-5 text-black ml-[-10px]">
                              PS5, Xbox, PC
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={2}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car1img3}
                          alt="sitting area"
                          className="object-fill object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-left lg:text-xl font-bold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-20px] ml-[-10px]">
                            Splatoons 3
                          </h3>
                          <div className="flex h-full items-end mt-[15px]">
                            <h2 className="lg:text-md font-semibold leading-4 text-left lg:leading-5 text-black ml-[-10px]">
                              Nintendo Switch
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={3}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car1img4}
                          alt="sitting area"
                          className="object-fill object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-left lg:text-xl font-bold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-20px] ml-[-10px]">
                            Returnal
                          </h3>
                          <div className="flex h-full items-end mt-[15px]">
                            <h2 className="lg:text-md font-semibold leading-4 text-left lg:leading-5 text-black ml-[-10px]">
                              PS5
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={4}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car1img5}
                          alt="sitting area"
                          className="object-fill object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-left lg:text-xl font-bold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-20px] ml-[-10px]">
                            Elden Ring
                          </h3>
                          <div className="flex h-full items-end mt-[15px]">
                            <h2 className="lg:text-md font-semibold leading-4 text-left lg:leading-5 text-black ml-[-10px]">
                              PC, PS5, Xbox
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={5}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car1img6}
                          alt="sitting area"
                          className="object-cover object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-left lg:text-xl font-bold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-20px] ml-[-10px]">
                            Horizon Forbidden West
                          </h3>
                          <div className="flex h-full items-end mt-[15px]">
                            <h2 className="lg:text-md font-semibold leading-4 text-left lg:leading-5 text-black ml-[-10px]">
                              PS5
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={6}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car1img7}
                          alt="sitting area"
                          className="object-cover object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-left lg:text-xl font-bold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-20px] ml-[-10px]">
                            Nintendo Switch Sports
                          </h3>
                          <div className="flex h-full items-end mt-[15px] ml-[-10px]">
                            <h2 className="lg:text-md font-semibold leading-4 text-left lg:leading-5 text-black">
                              Nintendo Switch
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                  </div>
                </Slider>
              </div>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                id="next"
              >
                <img
                  src={assets.whitearrow}
                  alt="arrowLeft"
                  className="w-[20px] h-[40px]"
                />
              </ButtonNext>
            </div>
          </CarouselProvider>

          {/* Carousel for mobile and Small size Devices */}
          <CarouselProvider
            className="block md:hidden "
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={7}
            visibleSlides={1}
            step={1}
            infinite={true}
          >
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                id="prev"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonBack>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div
                    id="slider"
                    className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                  >
                    <Slide index={0}>
                      <div className="flex ml-[20px] md:mt-[-80px] flex-shrink-0 relative w-[90%] md:w-full sm:w-auto">
                        <img
                          src={assets.car1img1}
                          alt="sitting area"
                          className=" flex items-center jusitfy-center object-fill object-center w-full h-[550px] md:h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-left lg:text-xl font-bold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-20px] ml-[-10px]">
                            The Last of Us Part I
                          </h3>
                          <div className="flex h-full items-end mt-[15px]">
                            <h2 className="lg:text-md font-semibold leading-4 text-left lg:leading-5 text-black ml-[-10px]">
                              PS5
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={1}>
                      <div className="flex ml-[20px] md:mt-[-80px] flex-shrink-0 relative w-[90%] md:w-full sm:w-auto">
                        {/* why does this one have ml and the other oe doesnt and its the second one?? */}
                        <img
                          src={assets.car1img2}
                          alt="sitting area"
                          className=" flex items-center jusitfy-center object-fill object-center w-full h-[550px] md:h-[360px] rounded-t-md rounded-b-md"
                        />
                        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-left lg:text-xl font-bold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-20px] ml-[-10px]">
                            Madden NFL 22
                          </h3>
                          <div className="flex h-full items-end mt-[15px]">
                            <h2 className="lg:text-md font-semibold leading-4 text-left lg:leading-5 text-black ml-[-10px]">
                              PS5
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={2}>
                      <div className="flex ml-[20px] md:mt-[-80px] flex-shrink-0 relative w-[90%] md:w-full sm:w-auto">
                        <img
                          src={assets.car1img3}
                          alt="sitting area"
                          className=" flex items-center jusitfy-center object-fill object-center w-full h-[550px] md:h-[360px] rounded-t-md rounded-b-md"
                        />
                        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-left lg:text-xl font-bold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-20px] ml-[-10px]">
                            The Last of Us Part I
                          </h3>
                          <div className="flex h-full items-end mt-[15px]">
                            <h2 className="lg:text-md font-semibold leading-4 text-left lg:leading-5 text-black ml-[-10px]">
                              PS5
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={3}>
                      <div className="flex ml-[20px] md:mt-[-80px] flex-shrink-0 relative w-[90%] md:w-full sm:w-auto">
                        <img
                          src={assets.car1img4}
                          alt="sitting area"
                          className=" flex items-center jusitfy-center object-fill object-center w-full h-[550px] md:h-[360px] rounded-t-md rounded-b-md"
                        />
                        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-left lg:text-xl font-bold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-20px] ml-[-10px]">
                            The Last of Us Part I
                          </h3>
                          <div className="flex h-full items-end mt-[15px]">
                            <h2 className="lg:text-md font-semibold leading-4 text-left lg:leading-5 text-black ml-[-10px]">
                              PS5
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={4}>
                      <div className="flex ml-[20px] md:mt-[-80px] flex-shrink-0 relative w-[90%] md:w-full sm:w-auto">
                        <img
                          src={assets.car1img5}
                          alt="sitting area"
                          className=" flex items-center jusitfy-center object-fill object-center w-full h-[550px] md:h-[360px] rounded-t-md rounded-b-md"
                        />
                        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-left lg:text-xl font-bold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-20px] ml-[-10px]">
                            The Last of Us Part I
                          </h3>
                          <div className="flex h-full items-end mt-[15px]">
                            <h2 className="lg:text-md font-semibold leading-4 text-left lg:leading-5 text-black ml-[-10px]">
                              PS5
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={5}>
                      <div className="flex ml-[20px] md:mt-[-80px] flex-shrink-0 relative w-[90%] md:w-full sm:w-auto">
                        <img
                          src={assets.car1img6}
                          alt="sitting area"
                          className=" flex items-center jusitfy-center object-fill object-center w-full h-[550px] md:h-[360px] rounded-t-md rounded-b-md"
                        />
                        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-left lg:text-xl font-bold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-20px] ml-[-10px]">
                            Test
                          </h3>
                          <div className="flex h-full items-end mt-[15px]">
                            <h2 className="lg:text-md font-semibold leading-4 text-left lg:leading-5 text-black ml-[-10px]">
                              PS5
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={6}>
                      <div className="flex ml-[20px] md:mt-[-80px] flex-shrink-0 relative w-[90%] md:w-full sm:w-auto">
                        <img
                          src={assets.car1img7}
                          alt="sitting area"
                          className=" flex items-center jusitfy-center object-fill object-center w-full h-[550px] md:h-[360px] rounded-t-md rounded-b-md"
                        />
                        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-left lg:text-xl font-bold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-20px] ml-[-10px]">
                            The Last of Us Part I
                          </h3>
                          <div className="flex h-full items-end mt-[15px]">
                            <h2 className="lg:text-md font-semibold leading-4 text-left lg:leading-5 text-black ml-[-10px]">
                              PS5
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                  </div>
                </Slider>
              </div>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                id="next"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>
    </div>
  );
}
