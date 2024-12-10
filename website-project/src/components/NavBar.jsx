import React, { useState } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";

const NavBar = () => {
const [nav, setNav] = useState(false);

const links =[
  {
    id:1,
    link:'Home'
  },
  {
    id:2,
    link:'About'
  },
  {
    id:3,
    link:'Projects'
  },
  {
    id:4,
    link:'Skills'
  },
  {
    id:5,
    link:'Contact'
  },
]

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black">
      <div>
        <h1 className="text-3xl font-signature ml-2">Priyanka</h1>
      </div>
      {/*the code below is for menu bar for website screen. Links are added using an array  */}
      <ul className="hidden md:flex">
        {links.map(({id, link}) => (
           <li key={id} className="text-3xl px-4 cursor-pointer capitalize font-medium
            text-gray-500 hover:scale-105 duration-200 ">
              {link}
            </li>

        ))}
       
      </ul>
        {/*the code below is for menu bar for mobile screen */}
      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden' >
        {nav ?  <FaTimes size={30}/> :  <FaBars size={30}/>}
       
      </div>

      {nav &&(
        <ul className='flex flex-col justify-center items-center absolute top-0 w-full h-screen bg-gradient-to-b
        from-black to-gray-800 text-gray-500'>
 
           {links.map(({id, link}) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200 ">
               {link}
             </li>
         ))}
       </ul>
      )}

      
    </div>
  );
};

export default NavBar;
