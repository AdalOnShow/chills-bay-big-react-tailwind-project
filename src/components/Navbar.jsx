import { useEffect, useState } from "react";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { LuUser2 } from "react-icons/lu";
import Button from "./Button.jsx";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import SignUpModal from "./SignUpModal.jsx";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isThingsDropdownOpen, setIsThingsDropdownOpen] = useState(false);
    const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const bodyClass = document.body.classList;
        isModalOpen ? bodyClass.add("no-scroll") : bodyClass.remove("no-scroll");
        return () => bodyClass.remove("no-scroll");
    }, [isModalOpen]);

    const isUserSignedIn = false

    return (
        <nav className="container mx-auto z-10">
            <div className="mx-auto max-w-[1240px] px-6 xl:px-0">
                <div className="flex justify-between items-center h-[100px]">
                    <div className="flex items-center">
                        <NavLink to="/" f>
                            <img src="/logo.svg" alt="logo" className="max-w-[166px]" />
                        </NavLink>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex space-x-4">
                        <NavLink to="/drink" className="hover:text-primary px-3 py-2 font-medium text-lg">Eat &
                            Drink</NavLink>
                        <NavLink to="/club" className="hover:text-primary px-3 py-2 font-medium text-lg">
                            <div className="relative">
                                Club
                                <img src="/plus-hot.svg" alt="hot" className="w-[42px] absolute -top-3 -right-5" />
                            </div>
                        </NavLink>
                        <div className="relative px-8">
                            <button
                                onClick={() => setIsThingsDropdownOpen(!isThingsDropdownOpen)}
                                className="hover:text-primary px-3 py-2 rounded-md flex gap-2 items-center font-medium text-lg "
                            >
                                Services
                                <IoIosArrowDown
                                    className={`text-primary size-4 ${isThingsDropdownOpen ? "rotate-180" : "rotate-0"}`}
                                    size={16} />
                            </button>
                            {isThingsDropdownOpen && (
                                <div className="absolute right-4 mt-2 rounded-md shadow-lg p-2 bg-white z-10"
                                    onClick={() => setIsThingsDropdownOpen(!isThingsDropdownOpen)}>
                                    {
                                        [
                                            { name: "Water Sports", href: "#" },
                                            { name: "Day Parties", href: "#" },
                                            { name: "Outdoors", href: "#" },
                                            { name: "Rentals", href: "#" },
                                        ].map((item, index) => (
                                            <a key={index} href={item.href}
                                                className="block px-3 py-2 hover:bg-[#D6EBFD] rounded dropdown-link">
                                                {item.name}
                                            </a>
                                        ))
                                    }
                                </div>)}
                        </div>
                        <NavLink to="/card" className="hover:text-primary flex-center relative">
                            <PiShoppingCartSimpleBold size={24} />
                            <div
                                className="absolute top-2 -right-1 size-[14px] bg-primary rounded-full font-bold text-[10px] flex-center text-white hover:text-white">2
                            </div>
                        </NavLink>
                        <div className="relative px-2">
                            <button
                                onClick={isUserSignedIn ? (setIsAccountDropdownOpen(!isAccountDropdownOpen)) : (() => setIsModalOpen(!isModalOpen))}
                                className="hover:text-primary px-3 py-2 rounded-md flex-center gap-2 font-medium text-lg "
                            >
                                <LuUser2 size={24} />
                                Account
                            </button>
                            {isAccountDropdownOpen && (
                                <div className="absolute right-4 mt-2  rounded-md shadow-lg p-2 bg-white"
                                    onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}
                                >
                                    {
                                        [
                                            { name: "My Profile", href: "#" },
                                            { name: "My History", href: "#" },
                                            { name: "Sign Out", href: "#" },
                                        ].map((item, index) => (
                                            <a key={index} href={item.href}
                                                className="block px-3 py-2 hover:bg-[#D6EBFD] rounded dropdown-link">
                                                {item.name}
                                            </a>
                                        ))
                                    }
                                </div>)}
                        </div>

                        <Button text="Contact Now" href="/contact" />
                    </div>


                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                            className="focus:outline-none"
                        >
                            {
                                isMobileNavOpen ? (
                                    <IoMdClose size={24} />
                                ) : (
                                    <HiOutlineMenuAlt1 size={24} />
                                )
                            }
                        </button>
                    </div>
                </div>
            </div>


            {/* SignUp Modal */}
            <SignUpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(!setIsModalOpen)} />

            {/* Mobile Menu */}
            {isMobileNavOpen && (
                <div
                    className="lg:hidden bg-[#F5FAFF] px-6 py-10 flex flex-col gap-[35px] w-screen absolute top-24 left-0 z-10"
                >
                    {
                        [
                            { name: "Eat & Drink", href: "/drink" },
                            { name: "Events", href: "/events" },
                            { name: "Club", href: "/club" },

                        ].map((item, index) => (
                            <NavLink to={item.href}
                                key={index}
                                className="mobile-nav-item"
                                onClick={() => setIsMobileNavOpen(false)}
                            >{item.name}</NavLink>
                        ))
                    }
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
                        <div className="flex flex-col gap-2 justify-start px-4">
                            {
                                [
                                    { name: "Water Sports", href: "#" },
                                    { name: "Day Parties", href: "#" },
                                    { name: "Outdoors", href: "#" },
                                    { name: "Rentals", href: "#" },
                                ].map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className="mobile-nav-item"
                                        onClick={() => setIsMobileNavOpen(false)}
                                    >{item.name}</a>
                                ))
                            }
                        </div>
                    )}

                    <div className="w-full h-[1px] bg-[#C4C4C4]" />
                    {
                        [
                            { name: "My History", href: "#" },
                            { name: "My Profile", href: "#" },
                            { name: "Pay With Crypto", href: "#" },
                            { name: "Cart", href: "/card" },
                            { name: "Contact Us", href: "/contact" },
                            { name: "Log Out", href: "#" },
                        ].map((item, index) => (
                            <NavLink
                                to={item.href}
                                key={index}
                                className="mobile-nav-item"
                                onClick={() => setIsMobileNavOpen(false)}
                            >{item.name}</NavLink>
                        ))
                    }

                    <Button onClick={() => setIsModalOpen(!isModalOpen)} text="Get Started" href="/"
                        className="w-48" />
                </div>
            )}
        </nav>
    );
};

export default Navbar;