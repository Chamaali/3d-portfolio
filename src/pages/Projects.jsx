import {projects} from "../constants/index.js";
import {Link} from "react-router-dom";
import {arrow} from "../assets/icons/index.js";
import {CTA} from "../components/CTA.jsx";

const Projects = () => {
    return (
        <section className='lg:mx-80 md:mx-40 sm:mx-20 mx-10 h-full'>
            <h1 className='head-text mt-4'>
                My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
            </h1>

            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
               <p className="text-justify text-lg">
                   I have always been interested in working with some new technologies and trying my hand
                   at different approaches. I am currently working on 4 projects and as they are ready they will be added to this site.
               </p>

            </div>

            <div className='flex flex-wrap my-20 gap-16'>
                {projects.map((project) => (
                    <div key={project.link} className='lg:w-[400px] w-full gap-16 items-start lg:flex'>
                        <div className='block-container w-12 h-12'>
                            <div className={`btn-back rounded-xl ${project.theme}`}/>

                            <Link to={project.link}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  className='btn-front rounded-lg flex-center shadow-md'
                            >
                                <img src={project.iconUrl}
                                     alt={project.name}
                                     className='w-1/2 h-1/2 object-contain'
                                />
                            </Link>

                        </div>

                        <div className='flex flex-col'>
                            <h4 className='text-xl pt-2 pl-5 font-poppins font-semibold'>
                                {project.name}
                            </h4>
                            <p className='mt-2 pl-5 text-slate-500 text-justify'>
                                {project.description}
                            </p>
                            <div>
                                <Link to={project.link}
                                      target='_blank'
                                      rel='noopener noreferrer'
                                      className='font-semibold text-blue-600 pl-5'
                                >
                                    <div className='mt-2 pl-5'>
                                        Live/GitHub
                                        {/* <img src={arrow}
                                             alt="arrow"
                                             className='w-4 h-4 object-contain'
                                        /> */}
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <hr className='border-slate-200'/>

            {/* <CTA/> */}
        </section>
    );
};

export default Projects;