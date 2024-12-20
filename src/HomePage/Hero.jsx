import { searchComponentData } from "../constants/homePageData.js";
import Button from "../components/Button.jsx";

const Hero = () => {
    return (
        <section className="bg-[url(/hero-bg-mb.png)] md:bg-[url(/hero-bg.png)] bg-cover bg-no-repeat bg-center">
            <div className="container mx-auto max-w-[1240px] px-[30px] xl:px-0 pt-20 pb-[180px] space-y-10">
                <h1 className="font-bold text-[62px] leading-[74px] max-w-[694px] text-white hidden md:block">Find amazing things to do anytime, anywhere in Lagos.</h1>

                <div className="bg-white shadow-lg rounded-lg p-[30px] max-w-3xl">
                    <h2 className="font-bold text-2xl  mb-[30px] md:hidden">Find amazing things to do in Lagos.</h2>
                    <form className="flex flex-col items-center md:flex-row gap-4">
                        {searchComponentData.map(({ id, name, selector }) => (
                            <div key={id} className="flex flex-col w-full md:w-1/4">
                                <label htmlFor={name} className="text-blueGray text-xs mb-1">
                                    Location
                                </label>
                                <select
                                    id={name}
                                    className="border border-[#D6EBFD] rounded-[8px] p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                >
                                    {selector.map((item, i) => (
                                        <option key={i} className="text-[15px] text-[#656B89]">{item}</option>
                                    ))}
                                </select>
                            </div>
                        ))}

                        {/* Search Button */}
                        <div className="w-full md:w-1/4">
                            <Button text="Search" className="w-full h-10 md:h-[60px] mt-1" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Hero
