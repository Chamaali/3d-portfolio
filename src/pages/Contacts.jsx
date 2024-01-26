import {Suspense, useRef, useState} from "react";
import {useForm} from "react-hook-form";
import * as emailjs from "@emailjs/browser";
import {Canvas} from "@react-three/fiber";
import {Fox} from "../models/Fox.jsx";
import Loader from "../components/Loader.jsx";
import useAlert from "../hooks/useAlert.js";
import Alert from "../components/Alert.jsx";

const Contacts = () => {
    const {register, handleSubmit,formState: { errors }, reset} = useForm()
    const [isLoading, setIsLoading] = useState(false)
    const [currentAnimation, setCurrentAnimation] = useState('idle')

    const {alert, hideAlert, showAlert} = useAlert()


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
        <section className='relative flex lg:flex-row flex-col max-container h-screen'>
            {alert.show && <Alert {...alert}/>}



            <div className='flex-1 min-w-[50%] flex flex-col'>
                <h1 className='head-text'>Get in touch!</h1>

                <form
                    action=""
                    className='w-full flex flex-col gap-7 mt-14'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <label className='text-black-500 font-semibold'>
                        Name
                        <input
                            {...register("name", {required: true})}
                            className='input'
                            placeholder='Enter your name...'
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        {errors.name && <span className='text-red-600'>This  field is required</span>}
                    </label>

                    <label className='text-black-500 font-semibold'>
                        Email
                        <input
                            {...register("email", {required: true})}
                            className='input'
                            type='email'
                            placeholder='example@mail.com'
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        {errors.name && <span className='text-red-600'>This  field is required</span>}
                    </label>

                    <label className='text-black-500 font-semibold'>
                        Your message
                        <textarea
                            {...register("message", {required: true})}
                            className='input'
                            rows={4}
                            placeholder='Just write what you want!'
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        {errors.name && <span className='text-red-600'>This  field is required</span>}
                    </label>


                    <button
                        className='btn'
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Sending...' : 'Send message'}
                    </button>

                </form>
            </div>
            <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
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
                            position={[0.4, 0.1, 0]}
                            rotation={[12.629, -0.6, 0]}
                            scale={[0.5, 0.5, 0.5]}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
};

export default Contacts;