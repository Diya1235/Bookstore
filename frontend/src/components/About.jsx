import React from 'react'
import Navbar from './Navbar'
import Diya from "../components/Diya.jpg";
import Footer from './Footer';

function About() {
  return (
    <>
    <div>
        <Navbar/>
    </div>
    <div>
    <section class="pt-10 overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid items-center grid-cols-1 md:grid-cols-2">

            <div>
                <h2 class="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl mt-10">Hey 👋 I
                    am
                    <br class="block sm:hidden" /> Diya D Singh
                </h2>
                <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                A keen and determinant girl who is passionate and hardworking enough to face
challenges and their by cross all the barriers using my intent. Ready to serve
and learn the flow of the tech field .
                </p>

                <p class="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                    <span class="relative inline-block">
                        <span class="absolute inline-block w-full bottom-0.5 h-2 bolder dark:bg-gray-900"></span>
                    <h4 className="font-Black bold"> Have a question? </h4>
                    </span>
                    <br class="block sm:hidden" />Ask me on <a href="https://x.com/Diyasingh527262" title="Twitter"
                        class="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline">Twitter</a>
                </p>
            </div>

            <div class="relative">
                <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src={Diya} alt="" />
            </div>

        </div>
    </div>
</section>
    </div>
    <div>
        <Footer/>
    </div>
    </>
    
  )
}

export default About