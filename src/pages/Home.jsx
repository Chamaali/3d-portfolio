import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader.jsx";
import Island from "../models/Island.jsx";
import Sky from "../models/Sky.jsx";
import Bird from "../models/Bird.jsx";
import Plane from "../models/Plane.jsx";
import HomeInfo from "../components/HomeInfo.jsx";

import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons/index.js";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [islandRotationValue, setIslandRotationValue] = useState(0);
  const [islandSpeedValue, setIslandSpeedValue] = useState(0);
  const [isSpeedNull, setIsSpeedNull] = useState(true);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustIslandForScreenSize = () => {
    let screenScale;
    let screenPosition = [0, -6.5, -38];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.4, 0.4, 0.4];
    } else {
      screenScale = [0.7, 0.7, 0.7];
    }

    return [screenScale, screenPosition, rotation];
  };
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1, 1, 1];
      screenPosition = [-0.1, -2, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -3, -4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="top-0 w-full h-screen top-0 ">



      <div className=" top-24 left-6 z-10 fixed">
        <img
          src={isPlayingMusic ? soundon : soundoff}
          alt="music"
          className="w-7 h-7 cursor-pointer object-contain"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>



      <div className=" top-28 fixed left-0 right-0 z-10 flex-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>



<div className="fixed top-10 w-full h-full">
    
<Canvas
        className={` ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          {/* <Bird/> */}
          <Sky islandSpeedValue={islandSpeedValue} />

          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            setIsSpeedNull={setIsSpeedNull}
            setIslandRotationValue={setIslandRotationValue}
            islandRotationValue={islandRotationValue}
            setIslandSpeedValue={setIslandSpeedValue}
          />
          <Plane
            isRotating={isRotating}
            position={planePosition}
            scale={planeScale}
            rotation={[0, 20.2, 0]}
            isSpeedNull={isSpeedNull}
          />
        </Suspense>
      </Canvas>

</div>
      {/* <hr className='border-slate-200'/>


             */}
    </section>
  );
};

export default Home;
