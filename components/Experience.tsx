"use client";

import React from 'react'
import "react-vertical-timeline-component/style.min.css";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component"

import { motion } from "framer-motion";

import { experiences } from "@/data";

const textVariant = ({delay}: {delay: number}) => {
    return {
        hidden: {
            y: -50,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.25,
                delay: delay
            },
        },
    };
};

const ExperienceCard = ({ date, iconBg, icon, company_name, title, points }: {date: string, iconBg: string,
icon: string, company_name: string, title: string, points: string[]}) => {

    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={date}
            iconStyle={{ background: iconBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img
                        src={icon}
                        alt={company_name}
                        className='w-[60%] h-[60%] object-contain'
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-white text-[24px] font-bold'>{title}</h3>
                <p
                    className='text-secondary text-[16px] font-semibold'
                    style={{ margin: 0 }}
                >
                    {company_name}
                </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-white-100 text-[14px] pl-1 tracking-wider'
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};


const Experience = () => {

    return (
        <>
            <motion.div variants={textVariant({ delay: 3 })}>
                <p className={`text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-center`}>
                    What I have done so far
                </p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
                    Work Experience.
                </h2>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline lineColor="#fff">
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            date={experience.date}
                            iconBg={experience.iconBg}
                            icon={experience.icon}
                            company_name={experience.company_name}
                            title={experience.title}
                            points={experience.points}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
}

export default Experience