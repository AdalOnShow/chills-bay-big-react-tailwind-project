import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Button from "../components/Button.jsx";
import { ClubSlides } from "../constants/clubPageData.js";

const ClubHero = () => {
    const [currentSlide, setCurrentSlide] = useState(1);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? ClubSlides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === ClubSlides.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="relative w-full h-[440px] md:h-[600px] overflow-hidden bg-black">
            {ClubSlides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-transform duration-700 ease-in-out ${index === currentSlide ? "translate-x-0" : "translate-x-full"
                        } ${index < currentSlide ? "-translate-x-full" : ""}`}
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover object-center"
                    />
                    <div
                        className="absolute inset-0 bg-black bg-opacity-50 grid grid-cols-1 2xl:grid-cols-2 items-center">
                        <div className="bg-[#00000099] -mt-12 lg:-mt-28 mx-6 lg:mx-28 rounded-lg px-4 md:px-8 py-3 md:py-6">
                            <h1 className="font-bold text-[25px] md:text-[42px] leading-8 md:leading-[54px] text-primary-100 mb-[14px] md:mb-6">{slide.title}</h1>
                            <p className="font-bold text-[19px] md:text-[32px] leading-6 md:leading-[38px] text-primary-100 mb-5">{slide.subtitle}</p>
                            <div className="flex items-center justify-end">
                                <Button text={slide.buttonText} className="" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden lg:flex text-white"
            >
                <SlArrowLeft size={45} />
            </button>
            <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden lg:flex text-white"
            >
                <SlArrowRight size={45} />
            </button>
        </section>
    );
};

export default ClubHero;
