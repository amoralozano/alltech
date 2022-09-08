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

export default function Carusel2() {
  return (
    <div className="bg-black mb-[-70px]">
      <div className="container w-full mx-auto mb-[40px] mt-[-90px] bg-black">
        <h1 className="text-[35px] text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600 font-extrabold text-left">
          Top picks for you
        </h1>
        <div className="flex items-center justify-center w-full h-full py-24 sm:py-8">
          {/* Carousel for desktop and large size devices */}
          <CarouselProvider
            className="lg:block hidden"
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={7} // 7
            visibleSlides={3} // 2
            step={1}
            infinite={false}
          >
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="absolute z-30 left-0 ml-8 focus:outline-none  focus:ring-2 focus:ring-offset-2   cursor-pointer"
                id="prev"
              >
                <img
                  src={assets.backarrow}
                  alt="arrowLeft"
                  className="w-[20px] h-[40px]"
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
                          src={assets.car2img1}
                          alt="sitting area"
                          className="object-fill object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-3xl text-center lg:text-2xl font-extrabold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-10px]">
                            PS5 Color Controllers
                          </h3>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={1}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car2img2}
                          alt="sitting area"
                          className="object-fill object-center h-[360px] w-full rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-3xl text-center lg:text-2xl font-extrabold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-10px]">
                            Xbox Color Controllers
                          </h3>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={2}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car2img3}
                          alt="sitting area"
                          className="object-fill object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-3xl text-center lg:text-2xl font-extrabold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-10px]">
                            Nintendo Switch Joycons
                          </h3>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={3}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car2img4}
                          alt="sitting area"
                          className="object-fill object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-3xl text-center lg:text-2xl font-extrabold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-10px]">
                            Xbox Skins
                          </h3>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={4}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car2img5}
                          alt="sitting area"
                          className="object-fit object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-center lg:text-2xl font-extrabold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-10px]">
                            Nintendo Switch Skins
                          </h3>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={5}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car2img6}
                          alt="sitting area"
                          className="object-cover object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-center lg:text-2xl font-extrabold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-10px]">
                            PS5 Controller Skins
                          </h3>
                        </div>
                      </div>
                      {/* <div className="flex flex-shrink-0 shadow-xl relative w-full sm:w-auto">
                      <img
                        src="https://i.ibb.co/DWrGxX6/carosel-2.png"
                        alt="sitting area"
                        className="object-cover object-center w-full h-[100%]"
                      />
                      <div className="bg-white absolute inset-x-0 bottom-[40px] w-full h-[90px] p-6">
                        <h3 className="text-xl text-left lg:text-xl font-bold leading-5 lg:leading-6 text-black">
                          Minimal Interior with Car
                        </h3>
                        <div className="flex h-full items-end mt-[-15px]">
                          <h2 className="lg:text-md font-semibold leading-4 text-left lg:leading-5 text-black">
                            Catalog 2
                          </h2>
                        </div>
                      </div>
                    </div> */}
                    </Slide>
                    <Slide index={6}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car2img7}
                          alt="sitting area"
                          className="object-cover object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-center lg:text-2xl font-extrabold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-10px]">
                            Xbox Controller Skins
                          </h3>
                        </div>
                      </div>
                    </Slide>
                  </div>
                </Slider>
              </div>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="absolute z-30 right-0 mr-8 focus:outline-none  focus:ring-2 focus:ring-offset-2 "
                id="next"
              >
                <img
                  src={assets.backarrow}
                  alt="right"
                  className="w-[20x] h-[40px] rotate-180"
                />
              </ButtonNext>
            </div>
          </CarouselProvider>

          {/* Carousel for tablet and medium size devices */}
          <CarouselProvider
            className="lg:hidden md:block hidden"
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={12}
            visibleSlides={2}
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
                    className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                  >
                    <Slide index={0}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/fDngH9G/carosel-1.png"
                          alt="black chair and white table"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 1
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={1}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/DWrGxX6/carosel-2.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={2}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/tCfVky2/carosel-3.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={3}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/rFsGfr5/carosel-4.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={4}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/fDngH9G/carosel-1.png"
                          alt="black chair and white table"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={5}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/DWrGxX6/carosel-2.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={6}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/tCfVky2/carosel-3.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={7}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/rFsGfr5/carosel-4.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={8}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/fDngH9G/carosel-1.png"
                          alt="black chair and white table"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={9}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/DWrGxX6/carosel-2.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={10}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/tCfVky2/carosel-3.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={11}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/rFsGfr5/carosel-4.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
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

          {/* Carousel for mobile and Small size Devices */}
          <CarouselProvider
            className="block md:hidden "
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={12}
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
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/fDngH9G/carosel-1.png"
                          alt="black chair and white table"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 1
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={1}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/DWrGxX6/carosel-2.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={2}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/tCfVky2/carosel-3.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={3}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/rFsGfr5/carosel-4.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={4}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/fDngH9G/carosel-1.png"
                          alt="black chair and white table"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={5}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/DWrGxX6/carosel-2.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={6}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/tCfVky2/carosel-3.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={7}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/rFsGfr5/carosel-4.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={8}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/fDngH9G/carosel-1.png"
                          alt="black chair and white table"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={9}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/DWrGxX6/carosel-2.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={10}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/tCfVky2/carosel-3.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={11}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src="https://i.ibb.co/rFsGfr5/carosel-4.png"
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                            Catalog 2
                          </h2>
                          <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                              Minimal Interior
                            </h3>
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
