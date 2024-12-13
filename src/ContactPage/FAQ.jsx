import { useState } from 'react';
import { faqs } from "../constants/contactPageData.js";
import { FiPlus } from "react-icons/fi";

const FAQComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-[#fbfcff] py-[30px] md:py-20 xl:py-[135px]">
            <div className="container mx-auto max-w-3xl px-6 xl:px-0">
                <div className="max-w-[630px] text-center mx-auto mb-[30px] md:mb-10">
                    <h2 className="font-bold text-[22px] md:text-[32px] mb-2 md:mb-4">Frequently Asked Questions</h2>
                    <p className="text-[#656B89] text-[14px] md:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus nunc, purus est sem volutpat at
                        at. Ultricies erat leo risus, eget venenatis tristique morbi.
                    </p>
                </div>
                <div className="space-y-4 md:space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="rounded-[20px] overflow-hidden shadow-md p-[14px] md:p-8 bg-white transition-all"
                        >
                            <div
                                className="flex justify-between items-start cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="font-bold text-base md:text-[22px]">{faq.question}</h3>
                                <button className={`size-6 md:size-10 rounded-full flex-center p-1 md:p-2 ${activeIndex === index ? 'bg-primary text-white rotate-[45deg]' : ''}`}>
                                    <FiPlus size={28} />
                                </button>
                            </div>
                            {activeIndex === index && (
                                <div className="text-[14px] md:text-base text-[#656B89] mt-[15px]">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQComponent;
