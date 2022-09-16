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

export default function Carusel3() {
  return (
    <div className="bg-black">
      <div className="container w-full mx-auto mb-[40px] mt-[200px] md:mt-[10px] lg:mt-[-40px] bg-black">
        <h1 className="text-[35px] text-center text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600 font-extrabold md:text-left">
          Top Tech Of 2022
        </h1>
        <div className="flex items-center justify-center w-full h-full py-8 md:py-8">
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
                          src={assets.car3img1}
                          alt="sitting area"
                          className="object-fill object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-center lg:text-xl font-extrabold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-15px]">
                            Oculus Quest 2
                          </h3>
                          <div className="flex h-full items-end mt-[5px] rounded-b-md">
                            <h2 className="lg:text-md font-semibold leading-4 text-center ml-[45%] mb-[-5px] lg:leading-5 text-black">
                              Meta
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={1}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car3img3}
                          alt="sitting area"
                          className="object-fill object-center h-[360px] w-full rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-center lg:text-xl font-extrabold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-15px]">
                            Playstation 4 VR
                          </h3>
                          <div className="flex h-full items-end mt-[5px] rounded-b-md">
                            <h2 className="lg:text-md font-semibold leading-4 text-center ml-[35%] mb-[-5px] lg:leading-5 text-black">
                              Playstation
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={2}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car3img5}
                          alt="sitting area"
                          className="object-fill object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-center lg:text-xl font-extrabold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-15px]">
                            HTC Vive Pro 2
                          </h3>
                          <div className="flex h-full items-end mt-[5px] rounded-b-md">
                            <h2 className="lg:text-md font-semibold leading-4 text-center ml-[45%] mb-[-5px] lg:leading-5 text-black">
                              HTC
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={3}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car3img6}
                          alt="sitting area"
                          className="object-fill object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-center lg:text-xl font-extrabold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-15px]">
                            Nintendo Switch OLED
                          </h3>
                          <div className="flex h-full items-end mt-[5px] rounded-b-md">
                            <h2 className="lg:text-md font-semibold leading-4 text-center ml-[45%] mb-[-5px] lg:leading-5 text-black">
                              Nintendo
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={4}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car3img2}
                          alt="sitting area"
                          className="object-cover object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-center lg:text-xl font-extrabold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-15px]">
                            Steam Deck
                          </h3>
                          <div className="flex h-full items-end mt-[5px] rounded-b-md">
                            <h2 className="lg:text-md font-semibold leading-4 text-center mb-[-5px] ml-[45%] lg:leading-5 text-black">
                              Steam
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={5}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car3img4}
                          alt="sitting area"
                          className="object-cover object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-center lg:text-xl font-extrabold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-15px]">
                            Smart Rayban
                          </h3>
                          <div className="flex h-full items-end mt-[5px] rounded-b-md">
                            <h2 className="lg:text-md font-semibold leading-4 text-center mb-[-5px] ml-[45%] lg:leading-5 text-black">
                              Rayban
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={6}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car3img7}
                          alt="sitting area"
                          className="object-cover object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-center lg:text-xl font-extrabold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-15px]">
                            Specticles 3
                          </h3>
                          <div className="flex h-full items-end mt-[5px] rounded-b-md">
                            <h2 className="lg:text-md font-semibold leading-4 text-center mb-[-5px] ml-[40%] lg:leading-5 text-black">
                              Snapchat
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
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                id="prev"
              >
                <img
                  src={assets.backarrow}
                  alt="arrowLeft"
                  className="w-[15px] h-[50px]"
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
                          src={assets.car3img1}
                          alt="sitting area"
                          className="object-fill object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-center lg:text-xl font-extrabold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-15px]">
                            Oculus Quest 2
                          </h3>
                          <div className="flex h-full items-end mt-[5px] rounded-b-md">
                            <h2 className="lg:text-md font-semibold leading-4 text-center ml-[45%] mb-[-5px] lg:leading-5 text-black">
                              Meta
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={1}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car3img3}
                          alt="sitting area"
                          className="object-fill object-center h-[360px] w-full rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-center lg:text-xl font-extrabold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-15px]">
                            Playstation 4 VR
                          </h3>
                          <div className="flex h-full items-end mt-[5px] rounded-b-md">
                            <h2 className="lg:text-md font-semibold leading-4 text-center ml-[35%] mb-[-5px] lg:leading-5 text-black">
                              Playstation
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={2}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car3img5}
                          alt="sitting area"
                          className="object-fill object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-center lg:text-xl font-extrabold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-15px]">
                            HTC Vive Pro 2
                          </h3>
                          <div className="flex h-full items-end mt-[5px] rounded-b-md">
                            <h2 className="lg:text-md font-semibold leading-4 text-center ml-[45%] mb-[-5px] lg:leading-5 text-black">
                              HTC
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={3}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car3img6}
                          alt="sitting area"
                          className="object-fill object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-center lg:text-xl font-extrabold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-15px]">
                            Nintendo Switch OLED
                          </h3>
                          <div className="flex h-full items-end mt-[5px] rounded-b-md">
                            <h2 className="lg:text-md font-semibold leading-4 text-center ml-[45%] mb-[-5px] lg:leading-5 text-black">
                              Nintendo
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={4}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car3img2}
                          alt="sitting area"
                          className="object-cover object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-center lg:text-xl font-extrabold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-15px]">
                            Steam Deck
                          </h3>
                          <div className="flex h-full items-end mt-[5px] rounded-b-md">
                            <h2 className="lg:text-md font-semibold leading-4 text-center mb-[-5px] ml-[45%] lg:leading-5 text-black">
                              Steam
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={5}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car3img4}
                          alt="sitting area"
                          className="object-cover object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-center lg:text-xl font-extrabold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-15px]">
                            Smart Rayban
                          </h3>
                          <div className="flex h-full items-end mt-[5px] rounded-b-md">
                            <h2 className="lg:text-md font-semibold leading-4 text-center mb-[-5px] ml-[45%] lg:leading-5 text-black">
                              Rayban
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={6}>
                      <div className="flex flex-shrink-0 shadow-xl relative w-[300px] h-[420px] sm:w-auto">
                        <img
                          src={assets.car3img7}
                          alt="sitting area"
                          className="object-cover object-center w-full h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6 rounded-b-md">
                          <h3 className="text-xl text-center lg:text-xl font-extrabold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-15px]">
                            Specticles 3
                          </h3>
                          <div className="flex h-full items-end mt-[5px] rounded-b-md">
                            <h2 className="lg:text-md font-semibold leading-4 text-center mb-[-5px] ml-[40%] lg:leading-5 text-black">
                              Snapchat
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
                  src={assets.backarrow}
                  alt="right"
                  className="w-[15px] h-[50px] rotate-180"
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
                <img
                  src={assets.backarrow}
                  alt="arrowLeft"
                  className="w-[10px] h-[20px]"
                />
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
                          src={assets.car3img1}
                          alt="sitting area"
                          className=" flex items-center jusitfy-center object-fill object-center w-full h-[450px] md:h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6">
                          <h3 className="text-xl text-center md:text-center lg:text-xl font-bold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-5px] ml-[-10px]">
                            Meta Quest 2
                          </h3>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={1}>
                      <div className="flex ml-[20px] md:mt-[-80px] flex-shrink-0 relative w-[90%] md:w-full sm:w-auto">
                        <img
                          src={assets.car3img3}
                          alt="sitting area"
                          className=" flex items-center jusitfy-center object-fill object-center w-full h-[450px] md:h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6">
                          <h3 className="text-xl text-center md:text-left lg:text-xl font-bold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-5px] ml-[-10px]">
                            Playstation 4 VR
                          </h3>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={2}>
                      <div className="flex ml-[20px] md:mt-[-80px] flex-shrink-0 relative w-[90%] md:w-full sm:w-auto">
                        <img
                          src={assets.car3img5}
                          alt="sitting area"
                          className=" flex items-center jusitfy-center object-fill object-center w-full h-[450px] md:h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6">
                          <h3 className="text-xl text-center md:text-left lg:text-xl font-bold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-5px] ml-[-10px]">
                            HTC Vive Pro 2
                          </h3>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={3}>
                      <div className="flex ml-[20px] md:mt-[-80px] flex-shrink-0 relative w-[90%] md:w-full sm:w-auto">
                        <img
                          src={assets.car3img6}
                          alt="sitting area"
                          className=" flex items-center jusitfy-center object-fill object-center w-full h-[450px] md:h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6">
                          <h3 className="text-xl text-center md:text-left lg:text-xl font-bold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-5px] ml-[-10px]">
                            Nintendo Switch OLED
                          </h3>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={4}>
                      <div className="flex ml-[20px] md:mt-[-80px] flex-shrink-0 relative w-[90%] md:w-full sm:w-auto">
                        <img
                          src={assets.car3img2}
                          alt="sitting area"
                          className=" flex items-center jusitfy-center object-fill object-center w-full h-[450px] md:h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6">
                          <h3 className="text-xl text-center md:text-left lg:text-xl font-bold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-5px] ml-[-10px]">
                            Steam Deck
                          </h3>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={5}>
                      <div className="flex ml-[20px] md:mt-[-80px] flex-shrink-0 relative w-[90%] md:w-full sm:w-auto">
                        <img
                          src={assets.car3img4}
                          alt="sitting area"
                          className=" flex items-center jusitfy-center object-cover object-center w-full h-[450px] md:h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6">
                          <h3 className="text-xl text-center md:text-left lg:text-xl font-bold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-5px] ml-[-10px]">
                            Smart Rayban
                          </h3>
                        </div>
                      </div>
                    </Slide>
                    <Slide index={6}>
                      <div className="flex ml-[20px] md:mt-[-80px] flex-shrink-0 relative w-[90%] md:w-full sm:w-auto">
                        <img
                          src={assets.car3img7}
                          alt="sitting area"
                          className=" flex items-center jusitfy-center object-cover object-center w-full h-[450px] md:h-[360px] rounded-t-md"
                        />
                        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 absolute inset-x-0 bottom-0 w-full h-[60px] p-6">
                          <h3 className="text-xl text-center md:text-left lg:text-xl font-bold leading-5 lg:leading-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-gray-900 mt-[-5px] ml-[-10px]">
                            Specticles 3
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
                className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                id="next"
              >
                <img
                  src={assets.backarrow}
                  alt="right"
                  className="w-[10x] h-[20px] rotate-180"
                />
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>
    </div>
  );
}
