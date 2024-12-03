/* eslint-disable react/prop-types */
const Button = ({ text, href, className }) => {
    return (
        <button
            className={`bg-primary hover:bg-primary/80 px-[19px] py-2.5 rounded-[6px] text-white font-bold text-base ${className}`}>
            <a href={href}>
                {text}
            </a>
        </button>
    )
}
export default Button
