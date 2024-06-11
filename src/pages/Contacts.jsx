import { Suspense, useEffect, useRef, useState } from "react";

import { useForm } from "react-hook-form";
import * as emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Fox } from "../models/Fox.jsx";
import Loader from "../components/Loader.jsx";
import useAlert from "../hooks/useAlert.js";
import Alert from "../components/Alert.jsx";
import Bird from "../models/Bird.jsx";
import { github, gmail, linkedin, x } from "../assets/icons/index.js";

import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons/index.js";

const Contacts = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("hit");

  const { alert, hideAlert, showAlert } = useAlert();

  const adjustFoxScale = () => {
    let screenScale = [0.7, 0.7, 0.7];
    let screenPosition = [0.4, 0.1, 0];
    let rotation = [12.629, -0.6, 0];

    if (window.innerWidth < 430) {
      screenScale = [0.7, 0.7, 0.7];
    } else if (window.innerWidth < 768 && window.innerWidth > 430) {
      screenScale = [0.8, 0.8, 0.8];
      screenPosition = [1, 0.4, 0];
      rotation = [12.189, 1.3, 0.2];
    }

    return [screenScale, screenPosition, rotation];
  };
  const [screenScale, screenPosition, rotation] = adjustFoxScale();

  const handleFocus = () => {
    setCurrentAnimation("walk");
  };
  const handleBlur = () => {
    setCurrentAnimation("idle");
  };
  const onSubmit = (data) => {
    setIsLoading(true);
    setCurrentAnimation("hit");
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          to_name: "Ivan",
          from_email: data.email,
          message: data.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        showAlert({
          text: "Message sent!",
          type: "success",
        });
        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("idle");
        }, 3000);

        setIsLoading(false);
        reset();
      })
      .catch((error) => {
        showAlert({
          text: "Message didn't received :( !",
        });
        setIsLoading(false);
        setCurrentAnimation("idle");
        console.log(error);
      });
  };

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
    //

    <section className="xl:mx-80 md:mx-40 sm:mx-20 mx-10 h-full  text-black">
      <h1 className="head-text mt-6 text-black font-semibold drop-shadow ">
        <span className="blue-gradient_text font-semibold drop-shadow">
          Contact
        </span>{" "}
        me
      </h1>

      <div className="mt-5 flex flex-col gap-3 ">
        <p className="text-justify text-slate-500 pb-5">
          Thank you for visiting my website! I am a passionate software engineer
          specializing in building robust, scalable applications. Whether you
          have a project idea, a collaboration opportunity, or just want to
          connect, I'd love to hear from you. Please feel free to reach out to
          me through any of the following methods.
        </p>

        <hr className="border-slate-200" />

        <div className="w-full max-w-md mx-auto my-5 py-5 shadow-xl rounded-xl blue-gradient_bg  text-white">
          <table className=" table-auto  w-full">
            <tbody>
              <tr>
                <td colSpan="3" className="px-4 text-center text-xs md:text-sm">
                  Phone/WhatsApp
                </td>
              </tr>
              <tr>
                <td
                  colSpan="3"
                  className="px-4 pb-6 text-center font-semibold font-mono  text-base   md:text-xl  "
                >
                  +94763560081
                </td>
              </tr>
              <tr>
                <td colSpan="3" className="px-4 text-center text-xs md:text-sm">
                  Email
                </td>
              </tr>
              <tr>
                <td
                  colSpan="3"
                  className="px-4 pb-6 text-center font-semibold font-mono  text-base   md:text-xl  "
                >
                  chamalidilka@gmail.com
                </td>
              </tr>

              <tr>
                <td
                  colSpan="3"
                  className=" px-4 py-2 font-medium font-mono md:text-xl text-xs"
                >
                  <div className="grid grid-cols-3 place-items-center">
                    <a
                      className="no-underline"
                      href="https://www.linkedin.com/in/chamaali-dilka/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedin} alt="ss" className="w-10 md:w-16 " />
                    </a>
                    <a
                      className="no-underline"
                      href="https://github.com/Chamaali"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} alt="ss" className="w-10 md:w-16 " />
                    </a>

                    <a
                      className="no-underline"
                      href="https://x.com/ChamaliDilka"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={x} alt="ss" className="w-10 md:w-16" />
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="grid  place-items-end ">
           <div className="lg:w-1/2 lg:h-auto md:h-[550px] ">
            <Canvas
              camera={{
                position: [0, 0, 5],
                fov: 75,
                near: 0.1,
                far: 1000,
              }}
            >
              <directionalLight position={[0, 0, 1]} intensity={2.5} />
              <ambientLight intensity={0.5} />

              <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                intensity={2}
              />

              <Suspense fallback={<Loader />}>
                <Fox
                  currentAnimation={currentAnimation}
                  position={screenPosition}
                  rotation={rotation}
                  scale={screenScale}
                />
                <Bird/>
              </Suspense>
            </Canvas>
          </div>
           <hr className='border-slate-200'/> 
        </div>  


        <hr className='border-slate-200'/>

        <CTA/>
      </div>

      <hr className='border-slate-200'/>

      <div className='absolute bottom left-2'>
                <img src={isPlayingMusic ? soundon : soundoff}
                     alt="music"
                     className='w-7 h-7 cursor-pointer object-contain'
                     onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                />
            </div> */}
    </section>
  );
};

export default Contacts;
