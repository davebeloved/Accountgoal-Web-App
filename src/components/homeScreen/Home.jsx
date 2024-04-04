import React from 'react';
import { FaRegMap } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { LuListChecks } from "react-icons/lu";
import { GoGoal } from "react-icons/go";
import { BiSupport } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import Layer_1 from "../image/Layer_1.svg";
import MapScreen from "../image/mapscreen.png";

const Home = () => {
  return (
    <div className='flex'>
    <div className="bg-blue-500 w-20 h-[982px] flex flex-col items-center gap-6">
    <img src={Layer_1} alt='Layer1 Image' className="w-[26.11px] h-[42px] absolute top-[21px] left-[27px]" />
    <br/>
    <br/>
    <br/>
      <div className="flex flex-col items-center gap-1 text-white">
        <FaRegMap className="w-7 h-7" />
        <span>Map</span>
      </div>

      <div className="flex flex-col items-center gap-1 text-white">
        <LuCalendarDays className="w-7 h-7" />
        <span>Calendar</span>
      </div>

      <div className="flex flex-col items-center gap-1 text-white">
        <LuListChecks className="w-7 h-7" />
        <span>Todo list</span>
      </div>

      <div className="flex flex-col items-center gap-1 text-white">
        <GoGoal className="w-7 h-7" />
        <span>Goals</span>
      </div>

      <div className="flex flex-col items-center gap-1 text-white">
        <BiSupport className="w-7 h-7" />
        <span>Support</span>
      </div>

      <div className="flex flex-col items-center gap-1 text-white">
        <HiOutlineLogout className="w-7 h-7" />
        <span>Logout</span>
      </div>

     
    </div>
    <div className="flex-grow"> {/* This div will take up the remaining space */}
        <img src={MapScreen} alt='map screen image' className='w-full h-full object-cover' />
      </div>
    </div>
    
  )
}

export default Home
