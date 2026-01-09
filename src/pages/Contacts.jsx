import { Suspense, useEffect, useRef, useState } from "react";

import { useForm } from "react-hook-form";
import * as emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Fox } from "../models/Fox.jsx";
import Loader from "../components/Loader.jsx";
import useAlert from "../hooks/useAlert.js";
import Alert from "../components/Alert.jsx";
import Bird from "../models/Bird.jsx";
import { github, gmail, linkedin, x, instagram } from "../assets/icons/index.js";

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
          to_name: "Chamaali",
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
    <section className="xl:mx-80 md:mx-40 sm:mx-20 mx-10 h-full">
      {alert.show && <Alert {...alert} />}

      <h1 className="text-3xl font-bold my-6">
        Get in{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Touch
        </span>
      </h1>

      <p className="text-slate-500 mt-4 leading-relaxed">
        Thank you for visiting my website! I am a passionate software engineer
        specializing in building robust, scalable applications. Whether you
        have a project idea, a collaboration opportunity, or just want to
        connect, I'd love to hear from you.
      </p>

      <div className="flex flex-col lg:flex-row gap-10 mt-12">
        {/* Contact Info Cards */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Phone Card */}
          <div className="glassmorphism p-6 rounded-2xl hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00c6ff] to-[#0072ff] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Phone / WhatsApp</p>
                <a href="tel:+94763560081" className="text-black-500 font-semibold text-lg hover:text-blue-500 transition-colors">
                  +94 76 356 0081
                </a>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="glassmorphism p-6 rounded-2xl hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00c6ff] to-[#0072ff] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Email</p>
                <a href="mailto:chamaalidilka@gmail.com" className="text-black-500 font-semibold text-lg hover:text-blue-500 transition-colors break-all">
                  chamaalidilka@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="glassmorphism p-6 rounded-2xl">
            <p className="text-slate-400 text-sm mb-4">Connect with me</p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/chamaali-dilka/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all"
              >
                <img src={linkedin} alt="LinkedIn" className="w-7 h-7" />
              </a>
              <a
                href="https://github.com/Chamaali"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all"
              >
                <img src={github} alt="GitHub" className="w-7 h-7" />
              </a>
              <a
                href="https://www.instagram.com/chamaa_dil/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all"
              >
                <img src={instagram} alt="Instagram" className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-6 neo-brutalism-white p-8 rounded-2xl"
          >
            <div>
              <label className="text-black-500 font-semibold">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="input"
                placeholder="John Doe"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="text-black-500 font-semibold">
                Email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="input"
                placeholder="john@example.com"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="text-black-500 font-semibold">
                Message
              </label>
              <textarea
                rows={5}
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
                className="textarea"
                placeholder="How can I help you?"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
