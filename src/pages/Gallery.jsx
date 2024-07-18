import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Suspense, useEffect, useRef, useState } from "react";
import sakura from "../assets/sakura.mp3";
import { research, soundoff, soundon } from "../assets/icons/index.js";

import { skills, experiences } from "../constants";
import { CTA } from "../components/CTA.jsx";
import { timeline, Tooltip } from "@material-tailwind/react";
import { publications } from "../constants/index.js";
// import  {research}  from '../assets/icons/index.js';

const Gallery = () => {
  const audioRef = useRef(new Audio(sakura));

  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  return (
    <section className="xl:mx-80 md:mx-40 sm:mx-20 mx-10 h-full">
      <h1 className="head-text my-6">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Publications
        </span>
      </h1>

      {/* <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p className="text-justify text-lg">
          Welcome to the Gallery, a curated space showcasing my collection of
          Research, Achievements, and Memories. Each piece represents
          significant milestones and moments I've gathered over time. I'm
          delighted to share these with you, offering a glimpse into my journey
          and accomplishments. I invite you to explore and learn more about each
          item, and I hope you find them as inspiring and meaningful as they are
          to me.
        </p>
      </div> */}

      <div>
        <div className="flex mt-10   mb-6">
          <div className="block-container shadow-md rounded-xl w-12 h-12 bg-white">
            <div className="grid place-items-center bg-white btn-back rounded-xl ">
              <div className="btn-front rounded-lg flex-center shadow">
                <img
                  src={research}
                  alt="arrow"
                  className="w-3/5 h-3/5 object-contain"
                />
              </div>
            </div>
          </div>

          <h3 className="subhead-text pl-6">Publications</h3>
        </div>

        <div className="grid md:grid-cols-2  sm:grid-cols-2 xs:grid-cols-1 grid-cols-1  gap-5">
          <div
            className=" rounded-lg shadow-xl px-4 py-2 text-justify border border-slate-200">
            <div className="px-2 pb-3 pt-5 font-serif ">
              <p className="pb-2 text-sm">
                D. Hwc, I. Imsc, S. Jdc, P. Ghm, W. Wvsk, and W. Pmta,
                “Revolutionizing Tea Quality Measurement using Multi Method
                Approach: An Innovative Mobile Application Approach.”
              </p>
            </div>
            <div className="px-2 pb-3 pt-5 font-serif ">
              <p className="pb-2 text-sm">
                E. Easks., S. Hmvmb, D. Hwc, W. Wmkc, “Design and Development of
                Unique Playable Farming App for Link Famers and Dwellers”
              </p>
            </div>
          </div>
          {/* {publications.map((publication) => (
            <div
              className=" rounded-lg shadow-xl px-4 py-2 text-justify border border-slate-200"
              key={publication.id}
            >
              <div className="px-2 pb-3 pt-5 font-serif ">

              
                <p className="font-bold text-md pb-2">{publication.title}</p>
                <p className="pb-2 text-sm">{publication.authors}</p>
                <p className="pb-2 italic font-semibold text-sm">
                  {publication.keywords}
                </p>
                <p className="text-sm">{publication.year}</p>
              </div>
        
            </div>
          ))} */}
        </div>
      </div>

      {/* <div>
                <p className='text-xl font-bold py-5'>Achievements</p>

                <div className='grid md:grid-cols-4  sm:grid-cols-3 xs:grid-cols-2 grid-cols-2  gap-3'>
                    <div className=' rounded-lg shadow-xl '>
                        
                        <img src="/src/assets/images/hero.jpg" alt='' className='rounded-t-xl'/>
                        <div className='px-2 py-4'>
                        <p>Won 2nd place</p>
                        <p>Hackathon competition</p>
                        <p>2021</p>
                        </div>
                    </div>
                    <div className=' rounded-lg shadow-xl '>
                        
                        <img src="/src/assets/images/hero.jpg" alt='' className='rounded-t-xl'/>
                        <div className='px-2 py-4'>
                        <p>Won 2nd place</p>
                        <p>Hackathon competition</p>
                        <p>2021</p>
                        </div>
                    </div>
                    <div className=' rounded-lg shadow-xl '>
                        
                        <img src="/src/assets/images/hero.jpg" alt='' className='rounded-t-xl'/>
                        <div className='px-2 py-4'>
                        <p>Won 2nd place</p>
                        <p>Hackathon competition</p>
                        <p>2021</p>
                        </div>
                    </div>
                    
                </div>
            </div>


            <div>
                <p className='text-xl font-bold py-5'>Gallery</p>

                <div className='grid md:grid-cols-6  sm:grid-cols-4 xs:grid-cols-2 grid-cols-2 gap-3'>
                    <div className='rounded-lg shadow-xl '>
                        
                        <img src="/src/assets/images/hero.jpg" alt='' className='rounded-xl'/>
                        
                    </div>
                    <div className='rounded-lg shadow-xl '>
                        
                        <img src="/src/assets/images/hero.jpg" alt='' className='rounded-xl'/>
                       
                    </div>
                    <div className='rounded-lg shadow-xl '>
                        
                        <img src="/src/assets/images/hero.jpg" alt='' className='rounded-xl'/>
                       
                    </div>
                    <div className='rounded-lg shadow-xl '>
                        
                        <img src="/src/assets/images/hero.jpg" alt='' className='rounded-xl'/>
                       
                    </div>
                    <div className='rounded-lg shadow-xl '>
                        
                        <img src="/src/assets/images/hero.jpg" alt='' className='rounded-xl'/>
                       
                    </div>
                    <div className='rounded-lg shadow-xl '>
                        
                        <img src="/src/assets/images/hero.jpg" alt='' className='rounded-xl'/>
                       
                    </div>
                    
                </div>
            </div> */}
    </section>
  );
};

export default Gallery;
