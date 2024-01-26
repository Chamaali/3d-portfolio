import {projects} from "../constants/index.js";
import {Link} from "react-router-dom";
import {arrow} from "../assets/icons/index.js";
import {CTA} from "../components/CTA.jsx";

const Projects = () => {
    return (
        <section className='max-container h-full'>
            <h1 className='head-text'>
                My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
            </h1>

            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A culpa cumque dolore earum, expedita fugiat laboriosam obcaecati reiciendis suscipit veniam? Aspernatur corporis cumque, explicabo nam omnis pariatur quis tenetur veritatis.</span><span>Consequatur deleniti ipsum, iusto maxime nisi nobis quis similique. Accusantium commodi, cum doloribus ducimus, eaque eligendi explicabo facilis id ipsa iusto magnam necessitatibus quibusdam quidem quisquam recusandae reiciendis sit vel!</span><span>Doloremque enim illum laboriosam necessitatibus ratione. Ducimus facere facilis molestiae nesciunt optio quam sint! Consequuntur cumque distinctio error harum laborum pariatur voluptas voluptatem. Debitis, excepturi perferendis quod quos reiciendis temporibus.</span>
                </p>
            </div>

            <div className='flex flex-wrap my-20 gap-16'>
                {projects.map((project) => (
                    <div key={project.link} className='lg:w-[400px] w-full gap-20 items-start lg:flex'>
                        <div className='block-container w-12 h-12'>
                            <div className={`btn-back rounded-xl ${project.theme}`}/>

                            <Link to={project.link}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  className='btn-front rounded-xl flex-center'
                            >
                                <img src={project.iconUrl}
                                     alt={project.name}
                                     className='w-1/2 h-1/2 object-contain'
                                />
                            </Link>

                        </div>

                        <div className='flex flex-col'>
                            <h4 className='text-2xl font-poppins font-semibold'>
                                {project.name}
                            </h4>
                            <p className='mt-2 text-slate-500'>
                                {project.description}
                            </p>
                            <div>
                                <Link to={project.link}
                                      target='_blank'
                                      rel='noopener noreferrer'
                                      className='font-semibold text-blue-600'
                                >
                                    <div className='mt-2'>
                                        Live Link
                                        <img src={arrow}
                                             alt="arrow"
                                             className='w-4 h-4 object-contain'
                                        />
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <hr className='border-slate-200'/>

            <CTA/>
        </section>
    );
};

export default Projects;