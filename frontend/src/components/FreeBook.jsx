import React from 'react'
import { useState ,useEffect} from 'react';
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
function FreeBook() {
  const [book, setbook] = useState([]);
    useEffect(() => {
        const getbook = async(req,res)=>{
            try{
              const res = await axios.get("http://localhost:3000/book");
              
             
              setbook(res.data.filter((data)=>data.category === "Free"));
            }
            catch(error)
            {
                console.log(error);
            }
        }
        getbook();
    }, [])
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
 return(
    <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
   <div>
   <h1 className='font-semibold text-xl pb-2'>Free Offered Books</h1>
    <p>Here are some Free book which you can download and read.Go and explore these intersting books and dive into
        this world of Books
    </p>
   </div>
  
   <div>
   <Slider {...settings}>
        {book.map((item)=>(
          <Cards item={item} key={item.id}/>
        ))}
      </Slider>

   </div>
   </div>
   </>

 )
}

export default FreeBook;