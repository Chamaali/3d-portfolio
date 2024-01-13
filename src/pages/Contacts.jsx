import {useRef, useState} from "react";
import {useForm} from "react-hook-form";

const Contacts = () => {
    const {register, handleSubmit,formState: { errors },} = useForm()
    const [isLoading, setIsLoading] = useState(false)
    const formRef = useRef(null)

    const handleChange = () => {
    }
    const handleFocus = () => {
    }
    const handleBlur = () => {
    }
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <section className='relative flex lg:flex-row flex-col max-container'>
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
                            placeholder='Enter your name...'
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
        </section>
    );
};

export default Contacts;