/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Button = ({ text, href, className, transparent, onClick, type }) => {
    return (
        <NavLink to={href ? href : "#"}
            onClick={onClick}
            type={type && "submit"}
            className={`bg-primary hover:bg-primary/80 px-[19px] py-2.5 rounded-[6px] font-bold text-base flex-center ${transparent ? "bg-transparent text-primary border border-primary hover:text-white" : "text-white"}  ${className}`}>
            {text}
        </NavLink>
    )
}
export default Button
