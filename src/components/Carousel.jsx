/* eslint-disable react/prop-types */
import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { FaCalendar, FaClock, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { IoPricetag } from "react-icons/io5";
import Button from "./Button.jsx";

const Carousel = ({ carouselTitle, carouselData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-0 py-14 md:py-16">
            <h2 className="hidden md:block font-bold text-[42px] text-center  mb-10">
                {carouselTitle}
            </h2>
            <h3 className="font-bold text-2xl md:text-[32px] md:ml-[108px] mb-9 max-w-[240px] md:max-w-xl">Upcoming
                events this weekend</h3>

            <div className="relative">
                <button
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 hidden md:flex"
                >
                    <SlArrowLeft size={45} />
                </button>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-white lg:px-[108px]">

                    <img
                        src={carouselData[currentIndex].image}
                        alt={carouselData[currentIndex].title}
                        className="w-full md:w-2/3 lg:w-1/2 md:h-[620px] object-cover rounded-lg h-[350px]"
                    />

                    <div className="flex lg:hidden justify-center gap-4 mt-[18px]">
                        {carouselData.map((_, index) => (
                            <button
                                key={index}
                                className={`size-3 md:size-4 rounded-full ${index === currentIndex ? "bg-blueGray" : "bg-[#969DAA]"
                                    }`}
                                onClick={() => setCurrentIndex(index)}
                            ></button>
                        ))}
                    </div>

                    <div className="md:ml-6 mt-6 md:mt-0 text-center md:text-left max-w-[400px]">
                        <h3 className="font-bold text-2xl md:text-[42px] md:leading-[54px]  mb-5 text-left max-w-[220px] md:max-w-none">
                            {carouselData[currentIndex].title}
                        </h3>
                        <p className="text-left text-base md:text-xl ">{carouselData[currentIndex].description}</p>
                        <div
                            className="flex flex-col gap-2 md:max-w-[380px] my-[30px] space-y-4 md:space-y-6 max-w-[290px]">
                            <div className="flex justify-between items-center font-bold text-[17px] md:text-xl ">
                                <div className="flex-center gap-3.5">
                                    <FaCalendar size={24} className="text-primary" />
                                    Dec 12 2022
                                </div>
                                <div className="flex-center gap-3.5">
                                    <FaLocationDot size={24} className="text-primary" />
                                    TBS Lagos
                                </div>
                            </div>
                            <div className="flex justify-between items-center font-bold text-xl ">
                                <div className="flex-center gap-3.5">
                                    <FaClock size={24} className="text-primary" />
                                    9:00 PM
                                </div>
                                <div className="flex-center gap-3.5">
                                    <IoPricetag size={24} className="text-primary" />
                                    N20,000
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Button text="Add to cart" className="w-full" transparent />
                                <Button text="Book Now" className="w-full" />
                            </div>
                        </div>
                        <div className="flex justify-start items-center  text-xl gap-4">
                            Connect with us on:
                            <a href="#">
                                <FaTwitter size={24} className="text-primary" />
                            </a>
                            <a href="#">
                                <RiInstagramFill size={24} className="text-primary" />
                            </a>
                        </div>
                    </div>

                </div>
                <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 hidden md:flex"
                >
                    <SlArrowRight size={45} />
                </button>
            </div>

            <div className="hidden lg:flex justify-center gap-4 mt-10">
                {carouselData.map((_, index) => (
                    <button
                        key={index}
                        className={`size-4 rounded-full ${index === currentIndex ? "bg-blueGray" : "bg-[#969DAA]"
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
