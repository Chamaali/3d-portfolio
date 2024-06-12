import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Suspense, useEffect, useRef, useState} from 'react';
import sakura from '../assets/sakura.mp3'
import {soundoff, soundon} from "../assets/icons/index.js";

import {skills, experiences} from '../constants'
import {CTA} from "../components/CTA.jsx";
import {timeline, Tooltip} from "@material-tailwind/react";

const About = () => {
    const audioRef = useRef(new Audio(sakura))

    audioRef.current.volume = 0.4
    audioRef.current.loop = true
    const [isPlayingMusic, setIsPlayingMusic] = useState(false)

    useEffect(() => {
        if(isPlayingMusic){
            audioRef.current.play()
        }

        return () => {
            audioRef.current.pause()
        }
    }, [isPlayingMusic]);


    return (
        <section className='xl:mx-80 md:mx-40 sm:mx-20 mx-10 h-full'>
            <h1 className='head-text mt-6'>
                Hello, I&apos;m <span className='blue-gradient_text font-semibold drop-shadow'>Chamaali Dilka</span>
            </h1>

            <div className='mt-5 mb-5 flex flex-col gap-3 text-slate-500'>
                <p className='text-justify text-lg'>
                Enthusiastic undergraduate pursuing a degree in Computing and Information Systems, specializing in Full-stack Web Development and Android Development, with 5+ years of experience in web development. I am a self-motivated and self learner. Eager to leverage my skills and knowledge in a Software Engineering internship role to contribute effectively to innovative projects and provide an effective service. 
                </p>
            </div>

            <hr className='border-slate-200'/>


            <div className='py-5 flex flex-col'>
                <h3 className='subhead-text pt-5 pb-3'>My skills</h3>

                <div className='grid grid-cols-5 lg:grid-cols-12  gap-y-10 pt-5'>
                    {skills.map((skill) => (
                        <Tooltip key={skill.imageUrl}
                                 content={skill.name}
                                 placement={"bottom"}
                                 className='bg-gray-600 px-5 py-2 rounded-xl font-semibold'
                                 animate={{
                                     mount: { scale: 1, y: 0 },
                                     unmount: { scale: 0, y: -25 },
                                     

                                 }}
                        >
                            <div className=' block-contain w-12 h-12'>
                                <div className='btn-back rounded-xl'/>
                                <div className='btn-front rounded-xl flex-center'>
                                    <img className='w-2/3 h-2/3 object-contain'
                                         src={skill.imageUrl} alt={skill.name}/>
                                </div>
                            </div>
                        </Tooltip>
                    ))}
                </div>

            </div> 

            <hr className='border-slate-200'/>



            <div className='py-5'>
                <h3 className='subhead-text pt-3' >Experience and Education</h3>

                {/* <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                    <p>
                        I worked as a translator for 8+ years, but decided to change my career and become a developer!🤔
                        <br/>
                    </p>
                </div> */}

                <div className='mt-5 flex'>
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

            {/* <CTA/> */}


            {/* <div className='py-16'>
                <h3 className='subhead-text'>Achievements, Awards and Certification</h3>
                
                </div> */}


{/* <div className='absolute bottom left-2'>
                <img src={isPlayingMusic ? soundon : soundoff}
                     alt="music"
                     className='w-7 h-7 cursor-pointer object-contain'
                     onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                />
            </div> */}
        </section>
    );
};

export default About;