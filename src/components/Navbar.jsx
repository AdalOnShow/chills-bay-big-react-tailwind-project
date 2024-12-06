import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { LuUser2 } from "react-icons/lu";
import Button from "./Button.jsx";

const Navbar = () => {
    const [isThingsDropdownOpen, setIsThingsDropdownOpen] = useState(false);
    const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    return (<nav className="container mx-auto">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-[100px]">
                <div className="flex items-center">
                    <a href="/">
                        <img src="/logo.svg" alt="logo" className="max-w-[166px]" />
                    </a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-4">
                    <a href="#" className="hover:text-primary px-3 py-2 font-medium text-lg text-blueGray">Eat &
                        Drink</a>
                    <a href="#" className="hover:text-primary px-3 py-2 font-medium text-lg text-blueGray">
                        <div className="relative">
                            Club
                            <img src="/plus-hot.svg" alt="hot" className="w-[42px] absolute -top-3 -right-5" />
                        </div>
                    </a>
                    <div className="relative px-8">
                        <button
                            onClick={() => setIsThingsDropdownOpen(!isThingsDropdownOpen)}
                            className="hover:text-primary px-3 py-2 rounded-md flex gap-2 items-center font-medium text-lg text-blueGray"
                        >
                            Services
                            <IoIosArrowDown
                                className={`text-primary size-4 ${isThingsDropdownOpen ? "rotate-180" : "rotate-0"}`}
                                size={16} />
                        </button>
                        {isThingsDropdownOpen && (
                            <div className="absolute right-4 mt-2 text-blueGray rounded-md shadow-lg p-2"
                                onClick={() => setIsThingsDropdownOpen(!isThingsDropdownOpen)}>
                                <a
                                    href="#"
                                    className="block px-3 py-2 hover:bg-[#D6EBFD] rounded dropdown-link"
                                >
                                    Water Sports
                                </a>
                                <a
                                    href="#"
                                    className="block px-3 py-2 hover:bg-[#D6EBFD] rounded dropdown-link"
                                >
                                    Day Parties
                                </a>
                                <a
                                    href="#"
                                    className="block px-3 py-2 hover:bg-[#D6EBFD] rounded dropdown-link"
                                >
                                    Outdoors
                                </a>
                                <a
                                    href="#"
                                    className="block px-3 py-2 hover:bg-[#D6EBFD] rounded dropdown-link"
                                >
                                    Rentals
                                </a>
                            </div>)}
                    </div>
                    <a href="#" className="hover:text-primary flex-center relative">
                        <PiShoppingCartSimpleBold size={24} />
                        <div
                            className="absolute top-2 -right-1 size-[14px] bg-primary rounded-full font-bold text-[10px] flex-center text-white hover:text-white">3
                        </div>
                    </a>
                    <div className="relative px-2">
                        <button
                            onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}
                            className="hover:text-primary px-3 py-2 rounded-md flex-center gap-2 font-medium text-lg text-blueGray"
                        >
                            <LuUser2 size={24} />
                            Account
                        </button>
                        {isAccountDropdownOpen && (
                            <div className="absolute right-4 mt-2 text-blueGray rounded-md shadow-lg p-2"
                                onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}
                            >
                                <a
                                    href="#"
                                    className="block px-3 py-2 hover:bg-[#D6EBFD] rounded dropdown-link"
                                >
                                    My Profile
                                </a>
                                <a
                                    href="#"
                                    className="block px-3 py-2 hover:bg-[#D6EBFD] rounded dropdown-link"
                                >
                                    My History
                                </a>
                                <a
                                    href="#"
                                    className="block px-3 py-2 hover:bg-[#D6EBFD] rounded dropdown-link"
                                >
                                    Sign Out
                                </a>
                            </div>)}
                    </div>

                    <Button text="Contact Now" href="/" />
                </div>


                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                        className="focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMobileNavOpen ? (<path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />) : (<path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />)}
                        </svg>
                    </button>
                </div>
            </div>
        </div>


        {/* Mobile Menu */}
        {isMobileNavOpen && (
            <div
                className="lg:hidden bg-[#F5FAFF] px-6 py-10 flex flex-col gap-[35px] w-screen absolute top-24 left-0"
                onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            >
                <a
                    href="#"
                    className="mobile-nav-item"
                >
                    Eat & Drink
                </a>
                <a
                    href="#"
                    className="mobile-nav-item"
                >
                    Events
                </a>
                <a
                    href="#"
                    className="mobile-nav-item"
                >
                    Club
                </a>
                <button
                    onClick={() => setIsThingsDropdownOpen(!isThingsDropdownOpen)}
                    className="mobile-nav-item flex justify-between items-center w-full"
                >
                    Things to do
                    <IoIosArrowDown
                        className={`${isThingsDropdownOpen ? "rotate-180" : "rotate-0"}`}
                        size={24} />
                </button>
                {isThingsDropdownOpen && (
                    <div className="flex flex-col gap-2 justify-start px-4"
                        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
                        <a
                            href="#"
                            className="mobile-nav-item"
                        >
                            Water Sports
                        </a>
                        <a
                            href="#"
                            className="mobile-nav-item"
                        >
                            Day Parties
                        </a>
                        <a
                            href="#"
                            className="mobile-nav-item"
                        >
                            Outdoors
                        </a>
                        <a
                            href="#"
                            className="mobile-nav-item"
                        >
                            Rentals
                        </a>
                    </div>
                )}

                <div className="w-full h-[1px] bg-[#C4C4C4]" />
                <a
                    href="#"
                    className="mobile-nav-item"
                >
                    My Profile
                </a>
                <a
                    href="#"
                    className="mobile-nav-item"
                >
                    Pay With Crypto
                </a>
                <a
                    href="#"
                    className="mobile-nav-item"
                >
                    Cart
                </a>
                <a
                    href="#"
                    className="mobile-nav-item"
                >
                    Contact Us
                </a>
                <a
                    href="#"
                    className="mobile-nav-item"
                >
                    Log Out
                </a>

                <Button text="Get Started" href="/" className="w-48" />
            </div>
        )}
    </nav>
    );
};

export default Navbar;