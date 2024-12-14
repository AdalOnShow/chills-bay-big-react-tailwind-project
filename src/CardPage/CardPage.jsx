import { useState } from 'react';
import { FaCalendar, FaCheckCircle, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../components/Button.jsx";
import ThanksModal from "../components/ThanksModal.jsx";

const CardPage = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'The 90s with DJ Neptune',
            date: 'Dec 12 2022',
            time: '9:00 PM',
            location: 'Quilox Club',
            price: 45000,
            quantity: 1,
            image: 'card-1.png',
        },
        {
            id: 2,
            name: 'Water Sports at Ikoyi Bay',
            // date: '',
            // time: '',
            // location: '',
            price: 90000,
            quantity: 2,
            image: 'card-2.png',
        },
    ]);

    const handleQuantityChange = (id, delta) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
            )
        );
    };

    const handleDelete = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = subtotal * 0.05;

    const [isThanksModalOpen, setThanksIsModalOpen] = useState(false);

    return (
        <div className="container mx-auto md:px-[30px] xl:px-0 max-w-[1240px] flex flex-col lg:flex-row justify-between pt-7 md:pt-[105px]">
            {/* Cart Section */}
            <div className="w-full lg:w-[60%] px-6 md:px-[30px] bg-white rounded-l-md shadow-sm lg:border-r border-[#E4E7EC]">
                <h2 className="font-bold text-[12px] md:text-[15px] text-[#969DAA]">Your Cart</h2>
                <div className="divide-y divide-[#E4E7EC]">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-start justify-between py-6"
                        >
                            <div className="flex items-start">
                                <div className="mr-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="size-[70px] md:size-[130px] object-cover rounded-md"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[12px] md:text-[22px] mb-2">{item.name}</h3>
                                    <div className="font-bold text-[8px] md:text-[15px] flex flex-wrap gap-1 md:gap-4 gap-y-1 md:gap-y-3">
                                        {item.date && (
                                            <div className="flex-center gap-1.5">
                                                <FaCalendar className="size-2.5 md:size-[19px] text-primary" />
                                                {item.date}
                                            </div>
                                        )}
                                        {item.location && (
                                            <div className="flex-center gap-1.5">
                                                <FaLocationDot className="size-2.5 md:size-[19px] text-primary" />
                                                {item.location}
                                            </div>
                                        )}
                                        {item.time && (
                                            <div className="flex-center gap-1.5">
                                                <FaClock className="size-2.5 md:size-[19px] text-primary" />
                                                {item.time}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 md:space-x-4">
                                <div className="flex items-center border px-2 rounded font-bold text-[10px] md:text-[15px]">
                                    <button
                                        className="px-1 md:px-2"
                                        onClick={() => handleQuantityChange(item.id, -1)}
                                    >
                                        -
                                    </button>
                                    <span className="px-1 md:px-2">{item.quantity}</span>
                                    <button
                                        className="px-1 md:px-2"
                                        onClick={() => handleQuantityChange(item.id, 1)}
                                    >
                                        +
                                    </button>
                                </div>
                                <p className="font-bold text-[10px] md:text-[15px]">₦{(item.price * item.quantity).toLocaleString()}
                                </p>
                                <button
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    <MdDeleteForever size={24} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Summary Section */}
            <div
                className="w-full lg:w-[40%] p-6 md:p-[30px] mt-4 lg:mt-0 bg-white rounded-r-md shadow-sm divide-y divide-[#E4E7EC]">
                <div className="py-4 flex gap-2">
                    <FaCheckCircle className="text-primary size-5 md:size-[26px]" />
                    <div className="">
                        <h2 className="font-bold text-[15px] md:text-xl mb-1 md:mb-2">Account Information</h2>
                        <p className="text-xs md:text-[15px]">Tunde Chukwu</p>
                        <p className="text-xs md:text-[15px]">tundechukwu12@gmail.com</p>
                    </div>
                </div>
                <div className="py-4 flex gap-2">
                    <FaCheckCircle className="text-primary size-5 md:size-[26px]" />
                    <div className="">
                        <h2 className="font-bold text-[15px] md:text-xl mb-1 md:mb-2">Phone number</h2>
                        <p className="text-xs md:text-[15px]">+2341123465799</p>
                    </div>
                </div>
                <div className="py-4 flex gap-2">
                    <FaCheckCircle className="text-primary size-5 md:size-[26px]" />
                    <div className="">
                        <div className="flex items-start gap-2">
                            <h2 className="font-bold text-[15px] md:text-xl mb-1 md:mb-2">Payment</h2>
                            <p className="text-[15px] md:text-xl text-[#969DAA]">card</p>
                            <IoIosArrowDown className="size-[18px] md:size-[26px] text-[#969DAA] mt-1" />
                        </div>
                        <div className="flex gap-10">
                            <div className="flex-center gap-2">
                                <img src="/masterCard.png" alt="master card logo" className="w-[42px]" />
                                <div className="text-xs md:font-[15px]">
                                    <p>1111 2222 3333 4444</p>
                                    <p>10/20</p>
                                </div>
                            </div>
                            <p className="text-xs md:text-[15px]">***</p>
                        </div>
                    </div>
                </div>

                {/* Total Summary */}
                <div className="pt-[35px]">
                    <div className="flex justify-between mb-2">
                        <p className="text-[15px]">Subtotal</p>
                        <p className="font-bold text-[15px]">₦{subtotal.toLocaleString()}</p>
                    </div>
                    <div className="flex justify-between mb-2">
                        <p className="text-[15px]">Tax</p>
                        <p className="font-bold text-[15px]">₦{tax.toLocaleString()}</p>
                    </div>
                    <Button onClick={() => setThanksIsModalOpen(!isThanksModalOpen)} text="Book Tickets" className="w-full mt-6" />
                </div>
            </div>

            <ThanksModal isOpen={isThanksModalOpen} onClick={() => {
                setThanksIsModalOpen(!setThanksIsModalOpen)
                setCartItems([])
            }
            }
            />

        </div>
    );
};

export default CardPage;
