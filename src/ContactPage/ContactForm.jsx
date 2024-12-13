import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import Button from "../components/Button.jsx";
import { contactCardsData } from "../constants/contactPageData.js";

const ContactUsComponent = () => {
    return (
        <section className="container mx-auto max-w-[1240px] px-6 xl:px-0 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
                {/* Contact Info Section */}
                <div className="lg:p-[100px] py-10 md:py-0">
                    <h2 className="font-bold text-2xl md:text-[42px] mb-2">Contact Us</h2>
                    <p className="text-base text-[#656B89] mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nunc, quisque ultricies netus elit
                        massa aliquam quis cras. Enim leo, in massa sapien facilisi netu.
                    </p>
                    <div className="font-bold text-base space-y-4">
                        <div className="flex gap-5">
                            <IoCall className="size-[22px] text-primary" />
                            (840) 371 - 2514
                        </div>
                        <div className="flex gap-5">
                            <IoMdMail className="size-[22px] text-primary" />
                            chills@chillsbay.com
                        </div>
                    </div>
                </div>
                {/* Contact Form Section */}
                <div className="bg-white shadow-xl rounded-[24px] py-[30px] md:py-12 px-5 md:px-[30px]">
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
                            <div className="space-y-2">
                                <label htmlFor="firstName" className="text-[14px] b-2">First Name</label>
                                <input
                                    id="firstName"
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full bg-[#F5FAFF] py-2.5 px-3 rounded-[8px] outline-0 placeholder:text-base placeholder:text-[#969DAA]"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="lastName" className="text-[14px] b-2">Last Name</label>
                                <input
                                    id="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full bg-[#F5FAFF] py-2.5 px-3 rounded-[8px] outline-0 placeholder:text-base placeholder:text-[#969DAA]"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-[14px] b-2">Email Address</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="e.g. johndoe@email.com"
                                    className="w-full bg-[#F5FAFF] py-2.5 px-3 rounded-[8px] outline-0 placeholder:text-base placeholder:text-[#969DAA]"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-[14px] b-2">Phone Number</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full bg-[#F5FAFF] py-2.5 px-3 rounded-[8px] outline-0 placeholder:text-base placeholder:text-[#969DAA]"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-[14px] b-2">Subject</label>
                            <select
                                className="w-full bg-[#F5FAFF] py-2.5 px-3 rounded-[8px] outline-0 placeholder:text-base placeholder:text-[#969DAA]"
                            >
                                <option>Select Option</option>
                                <option>General Inquiry</option>
                                <option>Technical Support</option>
                                <option>Refund Request</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-[14px] b-2">Message</label>
                            <textarea
                                placeholder="Message"
                                rows="4"
                                className="w-full bg-[#F5FAFF] py-2.5 px-3 rounded-[8px] outline-0 placeholder:text-base placeholder:text-[#969DAA]"
                            />
                        </div>
                        <Button text="SEND MESSAGE" type="submit" className="mt-10" />
                    </form>
                </div>
            </div>


            <div className="flex flex-wrap justify-center xl:justify-between items-center gap-10 py-10 md:py-0 md:p-28">
                {contactCardsData.map(({ id, img, title, subtitle, email }) => (
                    <div key={id} className="flex flex-col items-center max-w-[275px] py-6">
                        <div className="bg-[#F5FAFF] size-[130px] rounded-full p-7 mb-5 flex-center">
                            <img src={img} alt={title} />
                        </div>
                        <h4 className="font-bold text-[22px]">{title}</h4>
                        <p className="text-center my-3 text-base text-[#656B89]">{subtitle}</p>
                        <p className="text-primary text-base">{email}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ContactUsComponent;
