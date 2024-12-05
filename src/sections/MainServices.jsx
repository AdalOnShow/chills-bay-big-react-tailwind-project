import { carouselData, mainServiceData } from "../constants/index.js";
import { useState } from "react";

const MainServices = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <section className="container mx-auto max-w-[1240px] pt-[68px] pb-[50px]">
            <h2 className="hidden lg:block font-bold text-[42px] text-center text-blueGray lg:mb-10">Why Use Chillsbay?</h2>
            <div className="lg:w-[1240x] bg-[#f5faff] lg:shadow-md px-6 py-14 flex-center flex-col lg:flex-row gap-[56px] lg:gap-[70px]">
                {mainServiceData.map(({ id, img, title, subtitle }) => (
                    <div key={id}
                        className="hidden lg:flex justify-center items-center flex-col space-y-2.5 w-full px-2">
                        <div className="size-32 bg-[#ecf6fe] flex-center p-1 rounded-md">
                            <img src={img} alt={title} className="size-full object-cover" />
                        </div>
                        <h2 className="font-bold text-[32px] max-w-[290px] text-center">{title}</h2>
                        <p className="text-2xl text-black text-center">{subtitle}</p>
                    </div>

                ))}

                <div key={mainServiceData[currentIndex].id}
                    className="flex lg:hidden justify-center items-center flex-col space-y-2.5 w-full px-2">
                    <h2 className="lg:hidden font-bold text-2xl text-center text-blueGray mb-10">Why Use Chillsbay?</h2>
                    <div className="size-32 bg-[#ecf6fe] flex-center p-1 rounded-md">
                        <img src={mainServiceData[currentIndex].img} alt={mainServiceData[currentIndex].title}
                            className="size-full object-cover" />
                    </div>
                    <h2 className="font-bold text-2xl lg:text-[32px] max-w-[290px] text-center">{mainServiceData[currentIndex].title}</h2>
                    <p className="text-2xl text-black text-center max-w-md">{mainServiceData[currentIndex].subtitle}</p>
                </div>


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
            </div>
        </section>
    )
}
export default MainServices
