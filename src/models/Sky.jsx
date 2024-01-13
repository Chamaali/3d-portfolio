import skyScene from '../assets/3d/sky.glb'
import {useGLTF} from "@react-three/drei";
import {useRef} from "react";
import {useFrame} from "@react-three/fiber";

const Sky = ({isSpeedNull, islandRotationValue, islandSpeedValue}) => {
    const sky = useGLTF(skyScene)
    const skyRef = useRef()
    // const prevIslandRotationValue = useRef(islandRotationValue)


    useFrame((_, delta) => {
        // if(!isSpeedNull){
        //     const rotationDelta = islandRotationValue - prevIslandRotationValue.current
        //     if(rotationDelta > 0) {
        //         skyRef.current.rotation.y -= (islandRotationValue * 0.1 * delta + islandSpeedValue)
        //     } else if(rotationDelta < 0) {
        //         skyRef.current.rotation.y += (islandRotationValue * 0.1 * delta + islandSpeedValue)
        //     }
        //     console.log(islandSpeedValue)
        //     prevIslandRotationValue.current = islandRotationValue
        // }
        skyRef.current.rotation.y -= islandSpeedValue * 0.3;
    })

    return (
        <mesh ref={skyRef}>
            <primitive object={sky.scene}/>
        </mesh>
    );
};

export default Sky;