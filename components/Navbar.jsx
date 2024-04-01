'use client'
import React from 'react'
import { useAppContext } from '@/app/context'

const Navbar = () => {
  
 const {activebutton, setactiveButton} = useAppContext();
    
    
    function handleClick(buttonname){
      setactiveButton(activebutton===buttonname? buttonname : buttonname)
    }
    
  return (
    <div className='flex lg:hidden -z-10'>
        <span className=' pl-1 h-10 bg-black'></span> 
        <div className='bg-[--mainblue] text-white w-full flex justify-center h-8 text-sm'>
            <button className={`w-full ${activebutton==="discussion"? "bg-[--activeblue] border-b-2 border-red-600 ": ''} `} onClick={()=>handleClick('discussion')}>Discussion Fourm</button>
            <button className={`w-full ${activebutton==="market"? "bg-[--activeblue] border-b-2 border-red-600 ": ''} `} onClick={()=>handleClick('market')}>Market Stories</button>
        </div>
        <span className='pl-1  h-10 bg-black'></span>
        
    </div>
  )
}

export default Navbar