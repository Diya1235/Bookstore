import React from 'react'
import Cards from './Cards';
import axios from "axios";
import {Link} from "react-router-dom";
import { useState ,useEffect} from 'react';
function Books() {
    const [book, setbook] = useState([]);
    useEffect(() => {
        const getbook = async(req,res)=>{
            try{
              const res = await axios.get("http://localhost:3000/book");
              console.log(res.data);
             
              setbook(res.data)
            }
            catch(error)
            {
                console.log(error);
            }
        }
        getbook();
    }, [])
    
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  '>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl font-semibold md:text-4xl'>Hi <span className='text-pink-500'> Readers</span>! Happy to see you here!!</h1>
            <p className='md:text-xl mt-4'>
            Books are packed with knowledge, they give you life lessons,
             and they teach you about hardships, love, fear, and every little thing that is a part of life.
            </p>
            <Link to="/">
            <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
            </Link>
            
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
                book.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
   
            }
        </div>


    </div>
    </>
  )
}

export default Books