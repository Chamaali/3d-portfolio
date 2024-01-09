
import birdScene from '../assets/3d/bird.glb'
import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect, useRef} from "react";
import {useFrame} from "@react-three/fiber";
const Bird = () => {
    const {scene, animations} = useGLTF(birdScene)
    const birdRef = useRef()
    const {actions} = useAnimations(animations, birdRef)

    useEffect(() => {
        actions['Take 001'].play()
    }, []);

    useFrame(({clock, camera}) => {
        //creating sin-moving imitation of fly
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2

        //checking if bird reached certain endpoint
        if(birdRef.current.position.x > camera.position.x + 10){
            //and changing its direction then
            birdRef.current.rotation.y = Math.PI
        } else if(birdRef.current.position.x < camera.position.x - 10){
            birdRef.current.rotation.y = 0
        }

        //making bird fly "away" when it's turned to right
        if(birdRef.current.rotation.y === 0){
            birdRef.current.position.x += 0.01
            birdRef.current.position.z -= 0.01
        } else {
            //and make it fly right, when it's turned to the left
            birdRef.current.position.x -= 0.01
            birdRef.current.position.z += 0.01
        }
    })

    return (
        <mesh ref={birdRef} position={[-7, 1, 1]} scale={[0.003, 0.003, 0.003]}>
            <primitive object={scene}/>
        </mesh>
    );
};

export default Bird;