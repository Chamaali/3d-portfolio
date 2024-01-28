import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {skills, experiences} from '../constants'
import {CTA} from "../components/CTA.jsx";
import {Tooltip} from "@material-tailwind/react";

const About = () => {
    return (
        <section className='max-container h-full'>
            <h1 className='head-text'>
                Hello, I&apos;m <span className='blue-gradient_text font-semibold drop-shadow'>Ivan</span>
            </h1>

            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p>
                    Front-end developer from Ukraine, based in Poland. I&apos;m specialized in creating
                    fascinating and maintainable applications on React and eager to help businesses
                    achieve their goals
                </p>
            </div>

            <div className='py-10 flex flex-col'>
                <h3 className='subhead-text'>My skills</h3>

                <div className='mt-9 flex flex-wrap justify-evenly gap-20'>
                    {skills.map((skill) => (
                        <Tooltip key={skill.imageUrl}
                                 content={skill.name}
                                 placement={"bottom"}
                                 className='bg-gray-600 px-5 py-2 rounded-xl font-semibold'
                                 animate={{
                                     mount: { scale: 1, y: 0 },
                                     unmount: { scale: 0, y: -25 }
                                 }}
                        >
                            <div className='block-container w-20 h-20'>
                                <div className='btn-back rounded-xl'/>
                                <div className='btn-front rounded-xl flex-center'>
                                    <img className='w-1/2 h-1/2 object-contain'
                                         src={skill.imageUrl} alt={skill.name}/>
                                </div>
                            </div>
                        </Tooltip>
                    ))}
                </div>

            </div>

            <div className='py-16'>
                <h3 className='subhead-text'>Work experience</h3>

                <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                    <p>
                        I worked as a translator for 5+ years, but than decided to change my career and become a developer!🤔
                        <br/>
                        At first I started to learn Python, but soon I&apos;ve become fascinated by frontend and React SPA.
                        That was the moment that define my future and became my present🤗
                    </p>
                </div>

                <div className='mt-12 flex'>
                    <VerticalTimeline>
                        {experiences.map((experience) => (
                            <VerticalTimelineElement
                                key={experience.company_name}
                                date={experience.date}
                                icon={
                                    experience.icon
                                    ? <div className='flex-center w-full h-full'>
                                        <img src={experience.icon}
                                             alt={experience.company_name}
                                             className='w-[60%], h-[60%] object-contain'
                                        />
                                    </div>
                                    : ''
                                }
                                iconStyle={{
                                    background: experience.iconBg
                                }}
                                contentStyle={{
                                    borderBottom: '8px',
                                    borderStyle: 'solid',
                                    borderBottomColor: experience.iconBg,
                                    boxShadow: 'none'
                                }}
                            >
                                <div>
                                    <h3 className='text-black text-xl font-poppins font-semibold'>
                                        {experience.title}
                                    </h3>
                                    <p className='text-black-500 font-medium font-base' style={{margin: 0}}>
                                        {experience.company_name}
                                    </p>
                                </div>

                                <ul className='my-5 list-disc ml-5 space-y-2'>
                                    {experience.points.map((point, index) => (
                                        <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>

            <hr className='border-slate-200'/>

            <CTA/>
        </section>
    );
};

export default About;