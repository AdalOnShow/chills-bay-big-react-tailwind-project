/* eslint-disable react/prop-types */
import Button from "./Button.jsx";
import { FiCalendar } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";

const DrinkCard = ({ id, img, title, subtitle, days, time, date }) => {
    return (
        <div key={id} className="w-[160px] md:w-[295px] flex flex-col gap-1 md:gap-2">
            <div className="relative w-full h-[150px] md:h-[270px]">
                <img src={img} alt={title}
                    className="object-cover w-full h-full object-center rounded-[18px]" />
                <div className="px-2.5 md:px-[17px] py-1 md:py-[11px] rounded-[10px] bg-[#FBFCFF] absolute top-4 right-4">
                    <p className="font-bold text-[10px] md:text-[15px] text-center text-[#26395C]">{date}</p>
                </div>
            </div>
            <h3 className="font-bold text-[13px] md:text-[24px]">{title}</h3>
            <p className="font-medium text-[9px] md:text-[15px]">{subtitle}</p>
            <div className="flex gap-2">
                <div className="flex-center gap-1 text-[8px] md:text-[15px] text-white">
                    <FiCalendar />
                    {days}
                </div>
                <div className="flex-center gap-1 text-[8px] md:text-[15px] text-white">
                    <FaRegClock />
                    {time}
                </div>
            </div>
            <Button text="Book Now" className="max-w-[148px] mt-1" />
        </div>

    )
}
export default DrinkCard
