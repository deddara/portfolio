import React from "react"
import {motion} from "framer-motion";
import {fadeIn, textVariant} from "@/lib/utils";
import {projects} from "@/data";
import {Tilt} from 'react-tilt'

const ProjectCard = ({index, title, des, img, urlImg, iconLists, link}: {
    index: number, id: number, title: string
    des: string, img: string, urlImg: string, iconLists: string[], link: string
}) => {
    return (
        <motion.div
            variants={fadeIn({direction: "", type: "spring", delay: index * 0.5, duration: 0.75})}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.1}}
            className="border border-white/[0.2] rounded-2xl"
        >
            <Tilt
                options={{
                    max: 10,
                    scale: 1,
                    speed: 450,
                }}
                // Make Tilt container a flex column and fill available height
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full flex flex-col h-full"
            >
                {/* Top Section (image) */}
                <div className="relative w-full h-[230px]">
                    <img
                        src={img}
                        alt="project_image"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div
                            onClick={() => window.open(link, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <img
                                src={urlImg}
                                alt="source code"
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Middle Section (title, description) */}
                {/* flex-1 ensures this section takes up remaining space, pushing the icon row down */}
                <div className="mt-5 flex-1">
                    <h3 className="text-white font-bold text-[24px]">{title}</h3>
                    <p className="mt-2 text-[#C1C2D3] text-[14px]">{des}</p>
                </div>

                {/* Bottom Section (icon row) */}
                <div className="flex items-center justify-between mt-8">
                    <div className="flex items-center">
                        {iconLists.map((icon, iconIndex) => (
                            <div
                                key={icon}
                                className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8
                       flex justify-center items-center"
                                style={{
                                    transform: `translateX(-${5 * iconIndex * 2}px)`,
                                }}
                            >
                                <img src={icon} alt={icon} className="p-2"/>
                            </div>
                        ))}
                    </div>
                    {/* If you want something else on the right, place it here */}
                </div>
            </Tilt>
        </motion.div>
    )
}

const Projects = () => {
    return (
        <div className="py-20" id="projects">
            <motion.div variants={textVariant({delay: 0})} initial="hidden"
                        whileInView="show" viewport={{once: true, amount: 0.2}}>
                <p className={`sm:text-[18px] text-[14px] text-[#C1C2D3] uppercase tracking-wider text-center`}>
                    Showcasing my craft
                </p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
                    Selected Projects
                </h2>
            </motion.div>

            <div className="full flex justify-center">
                <motion.p variants={fadeIn({direction: "", type: "", delay: 0.1, duration: 1})} initial="hidden"
                          whileInView="show" viewport={{once: true, amount: 0.2}}
                          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-white"
                >
                    Below are some notable projects and hackathon contributions I’ve made.
                    I enjoy tackling complex challenges, leveraging distributed systems,
                    and optimizing architectures for scale.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7 justify-center'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </div>
    )
}

export default Projects