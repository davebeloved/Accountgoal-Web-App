import React, { useState } from "react";
import MapScreen from "../assets/map.png";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";

const Goals = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);

    //console.log("Goals component is rendering");
  };

  return (
    <div className="flex h-screen">
      <div className="">
        <img
          src={MapScreen}
          alt="map screen image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-">
        <div className="justify-items-start p-4">
          <div className="flex justify-between w-full">
            {" "}
            {/* Adjusted to use flex and justify-between */}
            <div className="flex gap-x-10 items-center w-full">
              {" "}
              {/* Adjusted to use flex and justify-start */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold font-inter">Goals</h1>
              </div>
            </div>
            <div>
              <div className="mr-3">
                <MdOutlineCancel className="w-8 h-8" />
              </div>
            </div>
          </div>

          <div className="px-10 mt-16">
          <div className="flex flex-col gap-y-1 mt-14 md:mt-4">
            <label className="font-inter text-[14px]" htmlFor="start date">
              Goal Name <span className="text-[#ed0202]">*</span>
            </label>
            <input
              type="text"
              placeholder=""
              name="email"
              className="border-2 rounded-2xl placeholder:text-[#d7d7d7] px-3 py-2 border-[#dfdfdf] outline-none w-[461px] h-[54px]"
            />
          </div>
          <div className="flex flex-col gap-y-1 mt-14 md:mt-10">
            <label className="font-inter text-[14px]" htmlFor="start date">
              End Date<span className="text-[#ed0202]">*</span>
            </label>
            <input
              type="date"
              placeholder=""
              name="email"
              className="border-2 rounded-2xl placeholder:text-[#d7d7d7] px-3 py-2 border-[#dfdfdf] outline-none w-[461px] h-[54px]"
            />
          </div>
          </div>
    

          <div className="flex flex-col gap-y-1 mt-14 md:mt-10 px-5">
            <h1 className="text-3xl font-bold ">
              Sub Goals
            </h1>
            <div className="flex items-center gap-x-4 mt-3 ml-12">
              <div className="h-7 w-7 overflow-hidden border-2 border-black cursor-pointer">
              <input type="checkbox" className="bg-transparent h-full w-full"/>
              </div>
              <h3 className="font-inter text-[20px] text-[#C5C5C5]">List item</h3>
            </div>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
       
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-40 rounded-full focus:outline-none focus:shadow-outline mt-20 mx-auto block"
            type="button"
          >
            Create Goal
          </button>
        </div>
        
      </div>
      
    </div>
  );
};

export default Goals;
