import planeScene from '../assets/3d/plane.glb'
import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect, useRef} from "react";

const Plane = ({isSpeedNull, ...props}) => {
    const ref = useRef()
    const {scene, animations} = useGLTF(planeScene)
    const {actions} = useAnimations(animations, ref)
    const timeoutRef = useRef(null);


    useEffect(() => {
        if(!isSpeedNull){
            actions['Take 001'].play();
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
        } else {
            timeoutRef.current = setTimeout(() => {
                actions['Take 001'].stop();
            }, 1000); // Delay of 1 second
        }
    }, [actions, isSpeedNull]);

    return (
        <mesh {...props} ref={ref}>
            <primitive object={scene}/>
        </mesh>
    );
};

export default Plane;