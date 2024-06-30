import React from 'react'
import Books from "../components/image.jpg";
function Banner() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
                <div className='w-full md:w-1/2 md:mt-32 mt-12 order-2 md:order-1'>
                    <div className='space-y-12'>
                        <h1 className='md:text-4xl text-2xl font-bold'>That’s the thing about
                            <span className='text-pink-500'> books.</span>
                            They let you <span className='text-pink-500'>travel </span>
                            without moving your feet..</h1>
                        <p className='md:text-xl'>
                            There is more treasure in books than in all the pirate's foot on Treasure Island.
                            Books are an invaluable part of our lives. They are the inevitable tool for knowledge,
                            and entertainment and have been proven to be stress relievers.
                        </p>
                        <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                            fill="currentColor" className="w-4 h-4 opacity-70">
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 
                              8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Email" />
                    </label>
                   
                    </div>
                    <button className="btn mt-6 btn-secondary">Get Started</button>
                    
                </div>
                <div className='order-1 md:order-2 w-full md:w-1/2'>
                <img src={Books} alt="/" className='w-92 h-92'/>
                </div>


            </div>

        </>

    )
}

export default Banner