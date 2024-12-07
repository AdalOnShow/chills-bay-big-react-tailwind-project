/* eslint-disable react/prop-types */
const Button = ({ text, href, className, transparent,onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-primary hover:bg-primary/80 px-[19px] py-2.5 rounded-[6px] font-bold text-base flex-center ${transparent ? "bg-transparent text-primary border border-primary hover:text-white" : "text-white"}  ${className}`}>
            <a href={href ? href : "#"}>
                {text}
            </a>
        </button>
    )
}
export default Button
