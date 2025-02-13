import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import birdIcon from "/src/assets/icons/bird.png"; 
import { plane } from "../assets/icons/index.js";

const NavigationBar = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  return (
    <header className="bg-white shadow-xl  sticky top-0 z-50">
      <nav className="">
        
            <div className="flex items-center justify-between py-3  xl:mx-80 md:mx-40 sm:mx-20 mx-10">
            <div className="flex items-center">
              <a href="./">
                <img src={plane} alt="Bird Icon" width={60}/>
              </a>
            </div>
            <div className="lg:hidden">
              <button onClick={toggleOffcanvas} className="text-black">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="black"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex space-x-6 font-semibold">
              <NavLink
                to="./about"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-black"
                }
              >
                About
              </NavLink>
              <NavLink
                to="./publications"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-black"
                }
              >
                Publications
              </NavLink>
              <NavLink
                to="./projects"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-black"
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="./contacts"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-black"
                }
              >
                Contacts
              </NavLink>
            </div>
          </div>
        
        {isOffcanvasOpen && (
          <div className="lg:hidden fixed inset-0 w-1/2 right-0 top-0 bg-white justify-self-end z-50 h-fit shadow-xl rounded-es-xl">
            <div className="flex items-center justify-between p-6">

                
              <div>
                <a href="./">
                <img src={plane} alt="Bird Icon" width={50} />
                </a>
              </div>
              
            </div>
            <nav className="flex flex-col space-y-4 p-6 font-semibold">
              <NavLink
                to="./about"
                onClick={toggleOffcanvas}
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-black"
                }

                
              >
                About
              </NavLink>
              <NavLink
                to="./publications"
                onClick={toggleOffcanvas}
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-black"
                }
              >
                Publications
              </NavLink>
              <NavLink
                to="./projects"
                onClick={toggleOffcanvas}
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-black"
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="./contacts"
                onClick={toggleOffcanvas}
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-black"
                }
              >
                Contacts
              </NavLink>

              
            </nav>
            <button onClick={toggleOffcanvas} className="text-gray-400 px-6 pb-6">
                close
              </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavigationBar;
