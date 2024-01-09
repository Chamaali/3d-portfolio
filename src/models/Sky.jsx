import skyScene from '../assets/3d/sky.glb'
import {useGLTF} from "@react-three/drei";
import {useRef} from "react";
import {useFrame} from "@react-three/fiber";

const Sky = ({isSpeedNull, islandRotationValue}) => {
    const sky = useGLTF(skyScene)
    const skyRef = useRef()

    useFrame((_, delta) => {
        if(!isSpeedNull){
            skyRef.current.rotation.y += islandRotationValue * 0.2 * delta
        }
    })

    return (
        <mesh ref={skyRef}>
            <primitive object={sky.scene}/>
        </mesh>
    );
};

export default Sky;