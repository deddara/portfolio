import React from "react"
import {motion} from "framer-motion";
import {fadeIn, textVariant} from "@/lib/utils";
import {projects} from "@/data";
import {Tilt} from 'react-tilt'

const ProjectCard = ({index, title, des, img, iconLists, link} : {index: number, id: number, title: string
des: string, img: string, iconLists: string[], link: string}) => {
    return (
        <motion.div variants={fadeIn({direction: "", type: "spring", delay: index * 0.5, duration: 0.75})} initial="hidden"
                    whileInView="show" viewport={{once: true, amount: 0.1}}>
            <Tilt
                options={{
                    max: 10,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
            >
                <div className='relative w-full h-[230px]'>
                    <img
                        src={img}
                        alt='project_image'
                        className='w-full h-full object-cover rounded-2xl'
                    />

                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div
                            onClick={() => window.open(link, "_blank")}
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <img
                                src=""
                                alt='source code'
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{title}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{des}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                        <p
                            className={`text-[14px] text-white}`}
                        >
                            aboba
                        </p>
                </div>
            </Tilt>
        </motion.div>
    )
}

const Projects = () => {
    return (
        <>
        <motion.div variants={textVariant({delay: 0})} initial="hidden"
                        whileInView="show" viewport={{once: true, amount: 0.2}}>
                <p className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider`}>
                    What I have done so far
                </p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                    Projects.
                </h2>
            </motion.div>

            <div className="full flex ">
                <motion.p variants={fadeIn({direction: "", type: "", delay: 0.1, duration: 1})} initial="hidden"
                          whileInView="show" viewport={{once: true, amount: 0.2}}
                          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-white"
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently
                    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    )
}

export default Projects