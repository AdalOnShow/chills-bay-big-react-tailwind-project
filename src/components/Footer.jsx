import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { footerLinks } from "../constants/homePageData.js";
import Button from "./Button.jsx";

const Footer = () => {
    return (
        <section className="bg-white dark:bg-black dark:text-white">
            <div className="container mx-auto max-w-[1240px] py-20 px-6 md:px-12 xl:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20 contain-content xl:content-start">
                    {/* logo and social links */}
                    <div className="col-span-1 md:cols-span-2 flex flex-col gap-6 order-1 max-w-sm">
                        <a href="/public">
                            <img src="/logo.svg" alt="logo" className="max-w-[166px]" />
                        </a>
                        <p className="text-blueGray dark:text-[#969DAA] text-[15px]">
                            {`Copyright ${new Date().getFullYear()} ©`}
                        </p>

                        {/* social links */}
                        <div className="flex justify-between items-center ">
                            <a href="#">
                                <FaFacebookF size={20}
                                    className="footer-social-icon" />
                            </a>
                            <a href="#">
                                <FaTwitter size={20}
                                    className="footer-social-icon" />
                            </a>
                            <a href="#">
                                <FaInstagram size={20}
                                    className="footer-social-icon" />
                            </a>
                            <a href="#">
                                <FaLinkedinIn size={20}
                                    className="footer-social-icon" />
                            </a>
                            <a href="#">
                                <FaYoutube size={20}
                                    className="footer-social-icon" />
                            </a>
                            <a href="#">
                                <FaTiktok size={20}
                                    className="footer-social-icon" />
                            </a>
                        </div>
                    </div>

                    {/* footer links */}
                    <div
                        className="col-span-1 md:col-span-2 flex justify-center xl:justify-between items-start sm:gap-20 order-3 xl:order-2">
                        {footerLinks.map(({ id, title, links, maxHight }) => (
                            <div key={id}>
                                <h4 className="text-base  font-bold uppercase mb-6">{title}</h4>
                                <div
                                    className={`border-t border-[#E4E7EC] dark:border-[#FBFCFF] pt-7 px-6 flex flex-col flex-wrap space-y-3 gap-x-8 md:gap-x-[94px] ${maxHight}`}>
                                    {links.map(({ id, title, link }) => (
                                        <a href={link} key={id}
                                            className="text-[14px] md:text-base text-[#656B89] dark:text-[#E4E7EC] hover:text-primary">{title}</a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* footer form */}
                    <div className="w-full px-6 py-[30px] rounded-[20px] bg-primary-100 dark:bg-[#151617] order-2 xl:order-3">
                        <div className="flex flex-col">
                            <div className="size-[54px] bg-primary flex-center p-3 rounded-[16px]">
                                <img src="/campus.svg" alt="campus" className="size-[32px]" />
                            </div>
                            <h4 className="text-xl  font-bold uppercase my-4">Become a Partner</h4>
                            <p className="text-base text-[#656B89] dark:text-[#969DAA] pb-6">Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Euismod pellentesque posuere.</p>
                            <Button text="Join Now" className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer
