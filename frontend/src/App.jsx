import React from 'react'
import Home from './Home/Home.jsx'

import {Navigate, Route,Routes} from "react-router-dom";
import Book from './Books/books.jsx';
import Signup from './components/Signup.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import { Toaster} from "react-hot-toast";
import { useAuth } from './context/Authprovider.jsx';

const App = () => {
  const [authUser,setauthUser] = useAuth()
    console.log(authUser);
  return (
    <>
   {/*<Home/>
   <Books/>*/}
   <div className='dark:bg-slate-900 dark:text-white'>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/books" element={authUser?<Book/>:<Navigate to="/signup"/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about" element={<About/>}/>
   </Routes>
   <Toaster/>

   </div>
  
    </>
  )
}

export default App