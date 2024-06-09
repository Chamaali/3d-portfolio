import {Suspense, useState} from "react";
import {useForm} from "react-hook-form";
import * as emailjs from "@emailjs/browser";
import {Canvas} from "@react-three/fiber";
import {Fox} from "../models/Fox.jsx";
import Loader from "../components/Loader.jsx";
import useAlert from "../hooks/useAlert.js";
import Alert from "../components/Alert.jsx";
import Bird from "../models/Bird.jsx";

const Contacts = () => {
    const {register, handleSubmit,formState: { errors }, reset} = useForm()
    const [isLoading, setIsLoading] = useState(false)
    const [currentAnimation, setCurrentAnimation] = useState('idle')

    const {alert, hideAlert, showAlert} = useAlert()

    const adjustFoxScale = () => {
        let screenScale = [0.7, 0.7, 0.7]
        let screenPosition = [0.4, 0.1, 0]
        let rotation = [12.629, -0.6, 0]

        if(window.innerWidth < 430) {
            screenScale = [0.7, 0.7, 0.7]
        } else if(window.innerWidth < 768 && window.innerWidth > 430){
            screenScale = [0.8, 0.8, 0.8]
            screenPosition = [1, 0.4, 0]
            rotation = [12.629, -0.8, 0]
        }

        return [screenScale, screenPosition, rotation]
    }
    const [screenScale, screenPosition, rotation] = adjustFoxScale()

    const handleFocus = () => {
        setCurrentAnimation('walk')
    }
    const handleBlur = () => {
        setCurrentAnimation('idle')
    }
    const onSubmit = (data) => {
        setIsLoading(true)
        setCurrentAnimation('hit')
        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: data.name,
                to_name: 'Ivan',
                from_email: data.email,
                message: data.message
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            ).then(() => {
                showAlert({
                    text: 'Message sent!',
                    type: 'success'
                })
                setTimeout(() => {
                    hideAlert()
                    setCurrentAnimation('idle')
                }, 3000)

            setIsLoading(false)
            reset()
        }).catch((error) => {
            showAlert({
                text: 'Message didn\'t received :( !'
            })
            setIsLoading(false)
            setCurrentAnimation('idle')
            console.log(error)
        })
    }

    return (
        <section className='relative lg:flex-row  max-container h-screen '>
            
<div className="grid justify-items-stretch  p-8 rounded-xl  bg-white shadow-2xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
<div>
    <h1 className="text-3xl text-center font-medium pb-3">Contact me</h1>
    <p className="text-lg">I'm always open to new projects and opportunities.</p>
    
    <div className="grid  gap-4">
    <table className=" mt-8 table-auto place-self-center">
        
        <tbody>
          <tr>
            <td className="px-4 py-2  text-right text-lg">Phone:</td>
            <td className="px-4 py-2 font-semibold  text-xl">+94 76 600 81</td>
          </tr>
          <tr>
            <td className="px-4 py-2  text-right text-lg">Whatsapp:</td>
            <td className="px-4 py-2 font-semibold  text-xl">+94 76 600 81</td>
          </tr><tr>
            <td className="px-4 py-2  text-right text-lg">Email:</td>
            <td className="px-4 py-2 font-semibold  text-xl">chamaalidilka@gmail.com</td>
          </tr><tr>
            <td className="px-4 py-2  text-right text-lg">LinkedIn:</td>
            <td className="px-4 py-2 font-semibold  text-xl">https://www.linkedin.com/in/chamaali-dilka/</td>
          </tr><tr>
            <td className="px-4 py-2  text-right text-lg">Github:</td>
            <td className="px-4 py-2 font-semibold  text-xl">Chamaali</td>
          </tr>
        </tbody>
      </table>
    </div>
<div className="grid  place-items-end ">
      <div className='lg:w-1/2 lg:h-auto md:h-[550px] '>
                <Canvas
                    camera={{
                        position: [0, 0, 5],
                        fov: 75,
                        near: 0.1,
                        far: 1000,
                    }}
                >
                    <directionalLight position={[0, 0, 1]} intensity={2.5}/>
                    <ambientLight intensity={0.5}/>

                    <spotLight
                        position={[10, 10, 10]}
                        angle={0.15}
                        penumbra={1}
                        intensity={2}
                    />

                    <Suspense fallback={<Loader/>}>
                        <Fox
                            currentAnimation={currentAnimation}
                            position={screenPosition}
                            rotation={rotation}
                            scale={screenScale}
                        />
{/* <Bird/> */}
                    </Suspense>
                </Canvas>
            </div> 
            </div>
        
</div>

</div>
        </section>
    );
};

export default Contacts;