/* eslint-disable react/prop-types */
import { RiCloseLargeFill } from "react-icons/ri";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";
import Button from "./Button.jsx";

const SignUpModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white dark:bg-black rounded-2xl w-full max-w-[1240px] relative shadow-lg mx-6 xl:mx-0 pt-4">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-[#26395C] dark:text-iceBlue hover:text-primary"
                >
                    <RiCloseLargeFill size={24} />
                </button>

                {/* Modal Content */}
                <div className="flex">
                    {/* Left Section */}
                    <div className="hidden md:flex md:w-2/5 bg-[url('/modalBg.png')] bg-cover rounded-l-2xl realative">
                        <div
                            className="rounded-l-2xl bg-gradient-to-b from-[#27447C] to-[#26395C28] absolute top-0 left-0 w-2/5 h-full" />
                        <div className="z-10 text-white relative pt-24 px-10">
                            <h2 className="text-5xl font-extrabold mb-4 text-white">Sign Up</h2>
                            <p className="mb-6 text-white max-w-[390px] text-[15px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus ullamcorper
                                hendrerit
                                quis purus pellentesque. Ac sagittis, convallis non tincidunt interdum eu nullam aliquam
                                maecenas. Enim sed tortor morbi ut suspendisse.
                            </p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-3/5 px-[50px] flex flex-col justify-center items-center pt-4 pb-8">
                        <img src="/logo.svg" alt="logo" className="w-[120px] md:w-[208px]" />
                        <h2 className="text-xl md:text-[32px] font-bold text-center md:text-left w-full mt-2 md:mt-6">Sign up and get exploring!</h2>
                        <p className="font-medium text-[15px] mt-1.5 w-full text-center md:text-left">
                            Already have an account?{' '}
                            <a href="#" className="text-[#0E8BFF] font-bold hover:underline">
                                Sign In
                            </a>
                        </p>

                        {/* Social Sign-Up Buttons */}
                        <div className="space-y-4 w-full my-3 md:my-5">
                            <button
                                className="modal-signUp-btn"
                            >
                                <div className="mr-2 flex-center bg-primary rounded-full size-6">
                                    <FaGoogle size={14} className="text-white" />
                                </div>
                                Sign Up with Google
                            </button>
                            <button
                                className="modal-signUp-btn"
                            >
                                <div className="mr-2 flex-center bg-primary rounded-full size-6">
                                    <FaFacebookF size={14} className="text-white" />
                                </div>
                                Sign Up with Facebook
                            </button>
                            <button
                                className="modal-signUp-btn"
                            >
                                <div className="mr-2 flex-center bg-primary rounded-full size-6">
                                    <FaApple size={14} className="text-white" />
                                </div>
                                Sign Up with Apple
                            </button>
                        </div>

                        <div className="flex-center w-full mb-4">
                            <div className="w-[30%] md:w-[40%] h-[1px] bg-[#E4E7EC]" />
                            <p className="px-2 font-medium text-xs md:text-[15px]">or continue with</p>
                            <div className="w-[30%] md:w-[40%] h-[1px] bg-[#E4E7EC]" />
                        </div>

                        {/* Email and Password Inputs */}
                        <form className="w-full">
                            <label htmlFor="email" className="text-xs md:text-sm mb-1.5">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="e.g. johndoe@email.com"
                                className="modal-form-input mb-3"
                            />
                            <label htmlFor="password" className="text-xs md:text-sm mb-1.5">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Password"
                                className="modal-form-input"
                            />
                            <Button text="Sign Up" className="w-full mt-4" />
                        </form>

                        {/* Terms and Conditions */}
                        <p className="text-xs mt-3 md:mt-4 text-center max-w-[220px] md:max-w-none">
                            By creating an account, you agree to our{' '}
                            <a href="#" className="text-[#0E8BFF] hover:underline">
                                Terms & Conditions
                            </a>{' '}
                            and{' '}
                            <a href="#" className="text-[#0E8BFF] hover:underline">
                                Privacy Policy
                            </a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>);
};

export default SignUpModal;
