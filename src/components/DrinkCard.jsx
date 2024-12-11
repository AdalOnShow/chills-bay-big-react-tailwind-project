/* eslint-disable react/prop-types */
import Button from "./Button.jsx";

const DrinkCard = ({ id, img, title, subtitle, country }) => {
    return (
        <div key={id} className="w-[160px] md:w-[295px] flex flex-col gap-1 md:gap-2">
            <img src={img} alt={title}
                className="object-cover w-full h-[150px] md:h-[270px] object-center rounded-[18px]" />
            <h3 className="font-bold text-[13px] md:text-[24px]">{title}</h3>
            <p className="font-medium text-[9px] md:text-[15px]">{subtitle}</p>
            <div className="flex gap-2 text-[9px] md:text-[15px]">
                {country.map((country, index) => (
                    <div key={index}>
                        {country}
                    </div>
                ))}
            </div>
            {/*  Button  */}
            <Button text="Reserve Now" className="max-w-[148px] mt-1" />
        </div>

    )
}
export default DrinkCard
