"use client";
import React, { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { BsChatSquareTextFill } from "react-icons/bs";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { useAppContext } from "@/app/context";

const Sidebar = () => {
  const [active, setActive] = useState(false);
  const [selectedItem, setSelectedItem]= useState(false);
  const {setactiveButton} = useAppContext();
  
  function handleOnClick(listname){
      setSelectedItem(listname)
      if(listname==='Discussion Fourm'){
        setactiveButton('discussion')
        setActive(false)
      }
      if(listname==='Market Stories'){
        setactiveButton('market')
        setActive(false)
      }
      
  }

  return (
    <div className="absolute top-0 lg:relative">
     <div className="flex">
      {active && (
        // SIDEBAR 
        <div className="= h-[100vh] w-[25vh] sm:w-[35vh] bg-[--mainblue] ">
          <div className="pt-4 flex pb-4">
            <div className="w-full flex items-center justify-center h-10 gap-2 text-white pl-2">
              <FaUser className="text-xl" />
              <p className="text-xs">Hello,User</p>
            </div>
            <div className="w-full flex items-center justify-center h-10 text-white">
              <FaBell className="text-xl" />
            </div>
          </div>
          <hr className="border-gray-400 border-t-[1px] w-full" />

          <div className="mt-4 flex gap-2 text-gray-200 text-[12px] sm:text-sm md:text-base  items-center justify-center">
            <ul className="text-white font-light flex flex-col w-full">
              <li onClick={()=>handleOnClick("Discussion Fourm")} className={`flex gap-2 p-2 md:pl-6 w-full items-center ${selectedItem==="Discussion Fourm"? "bg-[--activeblue] pl-2":''}`}> <BsChatSquareTextFill  className="text-base "/><p>Discussion Fourm</p>{selectedItem==='Discussion Fourm' && <IoMdArrowDropright className="flex items-end text-white h-full justify-self-end" />} </li>
              <li onClick={()=>handleOnClick("Market Stories")} className={`flex gap-2 p-2 md:pl-6 w-full items-center ${selectedItem==="Market Stories"? "bg-[--activeblue] pl-2":''}`}><FaCircleDollarToSlot   className="text-base"/><p>Market Stories</p>{selectedItem==='Market Stories' && <IoMdArrowDropright className="text-white h-full flex " />}</li>
              <li  onClick={()=>handleOnClick("Sentiment")} className={`flex gap-2 p-2 w-full pl-8 md:pl-12  ${selectedItem==="Sentiment"? "bg-[--activeblue]":''}`}>Sentiment</li>
              <li  onClick={()=>handleOnClick("Market")} className={`flex gap-2 p-2 w-full pl-8 md:pl-12 ${selectedItem==="Market"? "bg-[--activeblue] ":''}`}>Market</li>
              <li  onClick={()=>handleOnClick("Sector")} className={`flex gap-2 p-2 w-full pl-8  md:pl-12 ${selectedItem==="Sector"? "bg-[--activeblue] ":''}`}>Sector</li>
              <li  onClick={()=>handleOnClick("Watchlist")} className={`flex gap-2 p-2 w-full pl-8  md:pl-12 ${selectedItem==="Watchlist"? "bg-[--activeblue]":''}`}>Watchlist</li>
              <li  onClick={()=>handleOnClick("Events")} className={`flex gap-2 p-2 w-full pl-8  md:pl-12 ${selectedItem==="Events"? "bg-[--activeblue] ":''}`}>Events</li>
              <li  onClick={()=>handleOnClick("News/Interview")} className={`flex gap-2 p-2 w-full pl-8   md:pl-12 ${selectedItem==="News/Interview"? "bg-[--activeblue]":''}`}>News/Interview</li>
            </ul>
          </div>
        </div>
      )}
      {/* SIDEBAR BUTTON CONTAINER */}
        <div
          className={`h-screen flex items-center fixed ${
            active ? " top-0 bg-gray-200 relative" : ""
          } w-4 flex justify-center`}
        >
        {/* SIDEBAR BUTTON */}
          <div
            className="h-20 w-4 bg-slate-700 flex items-center"
            onClick={() => setActive(!active)}
          >
            <IoMdArrowDropright className="text-white h-full" />
          </div>
        </div>
     </div> 
    </div>
  );
};

export default Sidebar;
