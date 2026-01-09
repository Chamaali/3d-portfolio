import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Suspense, useEffect, useRef, useState } from "react";
import sakura from "../assets/sakura.mp3";
import { research, soundoff, soundon } from "../assets/icons/index.js";

import { skills, experiences } from "../constants/index.js";
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
            <h1 className="text-3xl font-bold my-6">
                My{" "}
                <span className="blue-gradient_text font-semibold drop-shadow">
                    Publications
                </span>
            </h1>



            <div>
                <div className="flex mt-10   mb-6">
                    <div className="block-container shadow-md rounded-xl w-12 h-12 bg-white">
                        <div className="grid place-items-center bg-white btn-back rounded-xl ">
                            <div className="btn-front rounded-lg flex-center shadow">
                                <img
                                    src={research}
                                    alt="arrow"
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>
                    </div>

                   
                </div>

                <div className="grid md:grid-cols-1  sm:grid-cols-2 xs:grid-cols-1 grid-cols-1  gap-5">
                    <div
                        className=" rounded-lg shadow-xl px-4 py-2 text-justify border border-slate-200">
                        <div className="px-2 pb-3 pt-5 font-serif ">
                            <p className="pb-2 text-sm">
                                D. Hwc, I. Imsc, S. Jdc, P. Ghm, W. Wvsk, and W. Pmta,
                                “Revolutionizing Tea Quality Measurement using Multi Method
                                Approach: An Innovative Mobile Application Approach.”
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div>
                <div className="flex mt-10   mb-6">
                    <div className="block-container shadow-md rounded-xl w-12 h-12 bg-white">
                        <div className="grid place-items-center bg-white btn-back rounded-xl ">
                            <div className="btn-front rounded-lg flex-center shadow">
                                <img
                                    src={research}
                                    alt="arrow"
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-1  sm:grid-cols-2 xs:grid-cols-1 grid-cols-1  gap-5">
                    <div
                        className=" rounded-lg shadow-xl px-4 py-2 text-justify border border-slate-200">
                        
                        <div className="px-2 pb-3 pt-5 font-serif ">
                            <p className="pb-2 text-sm">
                                E. Easks, S. Hmvmb, D. Hwc, W. Wmkc, “Design and Development of
                                Unique Playable Farming App for Link Famers and Dwellers”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex mt-10   mb-6">
                    <div className="block-container shadow-md rounded-xl w-12 h-12 bg-white">
                        <div className="grid place-items-center bg-white btn-back rounded-xl ">
                            <div className="btn-front rounded-lg flex-center shadow">
                                <img
                                    src={research}
                                    alt="arrow"
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-1  sm:grid-cols-2 xs:grid-cols-1 grid-cols-1  gap-5">
                    <div
                        className=" rounded-lg shadow-xl px-4 py-2 text-justify border border-slate-200">
                        
                        <div className="px-2 pb-3 pt-5 font-serif ">
                            <p className="pb-2 text-sm">
                                D. Hwc, T. Am, W. Wvsk, “Analyzing the Impact of Environmental Factors on the Color of Tea and its Impact on Human Health: Optimizing Tea Quality”
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Gallery;
