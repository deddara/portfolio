import {FaLocationArrow} from "react-icons/fa6";

import {socialMedia} from "@/data";
import MagicButton from "@/components/ui/MagicButton";

const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-10" id="contact">
            {/* background grid */}
            <div className="w-full absolute left-0 -bottom-72 min-h-96 pointer-events-none">
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-50 "
                />
            </div>

            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Ready to boost <span className="text-purple">your</span> next big project?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Let’s chat about how I can help transform your vision into a scalable,
                    impactful solution.
                </p>
                <a href="mailto:amirhan16616@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow/>}
                        position="right"
                    />
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light  mb-10 md:mb-0">
                    Copyright © 2025 Amir Muratov
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <a key={info.id} href={info.url} target="_blank" rel="noopener noreferrer">
                            <div
                                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                            >
                                <img src={info.img} alt="icons" width={20} height={20}/>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;