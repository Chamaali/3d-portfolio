import skyScene from '../assets/3d/sky.glb'
import {useGLTF} from "@react-three/drei";
import {useRef} from "react";
import {useFrame} from "@react-three/fiber";

const Sky = ({islandSpeedValue}) => {
    const sky = useGLTF(skyScene)
    const skyRef = useRef()

    useFrame(() => {
        skyRef.current.rotation.y -= islandSpeedValue * 0.4;
    })

    return (
        <mesh ref={skyRef}>
            <primitive object={sky.scene}/>
        </mesh>
    );
};

export default Sky;