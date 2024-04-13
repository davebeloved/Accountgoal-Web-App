import React, { useState } from "react";
import CalendarScreen from "../../assets/calender.png";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const CalenderEvent = () => {

    const [isChecked, setIsChecked] = useState(false);
  
    const handleToggle = () => {
      setIsChecked(!isChecked);
    };
 
  

  return (
    <div className="flex h-screen">
      <div className="">
        <img
          src={CalendarScreen}
          alt="map screen image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-">
        <div className="justify-items-start p-4">
          <div className="flex justify-between w-full">
            {" "}
          
            <div className="flex gap-x-10 items-center w-full">
              {" "}
              
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
                <h1 className="text-3xl font-bold font-inter">Calendar</h1>
              </div>
            </div>
            <div>
              <div className="mr-3">
                <MdOutlineCancel className="w-8 h-8 text" />
              </div>
            </div>
          </div>

          <div className="px-10 mt-16">
          <div className="flex flex-col gap-y-1 mt-14 md:mt-4">
            <label className="font-inter text-[14px]" htmlFor="start date">
              Event Name<span className="text-[#ed0202]">*</span>
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
    Location<span className="text-[#ed0202]">*</span>
  </label>
  <div className="relative">
    <CiLocationOn className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400 w-6 h-6" />
    <input
      type="text"
      id="location"
      placeholder=""
      name="location"
      className="pl-10 border-2 rounded-2xl placeholder:text-[#d7d7d7] px-3 py-2 border-[#dfdfdf] outline-none w-[461px] h-[54px]"
    />
  </div>
</div>

          <div className="flex flex-col gap-y-1 mt-14 md:mt-10">
            <label className="font-inter text-[14px]" htmlFor="start date">
              Meeting Link<span className="text-[#ed0202]">*</span>
            </label>
            <input
              type="text"
              placeholder=""
              name="meeting-time"
              className="border-2 rounded-2xl placeholder:text-[#d7d7d7] px-3 py-2 border-[#dfdfdf] outline-none w-[461px] h-[54px]"
            />
              
          </div>

          <div className="flex flex-col gap-y-1 mt-14 md:mt-10">
            <label className="font-inter text-[14px]" htmlFor="start date">
              Date<span className="text-[#ed0202]">*</span>
            </label>
            <input
              type="date"
              placeholder=""
              name="email"
              className="border-2 rounded-2xl placeholder:text-[#d7d7d7] px-3 py-2 border-[#dfdfdf] outline-none w-[461px] h-[54px]"
            />
              
          </div>

          <div className="flex flex-col gap-y-1 mt-14 md:mt-10">
            <label className="font-inter text-[14px]" htmlFor="start date">
              Start Time<span className="text-[#ed0202]">*</span>
            </label>
            <input
              type="time"
              placeholder=""
              name="email"
              className="border-2 rounded-2xl placeholder:text-[#d7d7d7] px-3 py-2 border-[#dfdfdf] outline-none w-[461px] h-[54px]"
            />
              
          </div>
          <div className="flex flex-col gap-y-1 mt-14 md:mt-10">
            <label className="font-inter text-[14px]" htmlFor="start date">
              End Time<span className="text-[#ed0202]">*</span>
            </label>
            <input
              type="time"
              placeholder=""
              name="email"
              className="border-2 rounded-2xl placeholder:text-[#d7d7d7] px-3 py-2 border-[#dfdfdf] outline-none w-[461px] h-[54px]"
            />
              
          </div>
          
          <div className="flex flex-col gap-y-1 mt-14 md:mt-10">
  <div className="flex items-center justify-between">
    <label className="font-inter text-[14px]" htmlFor="start date">
      Set Reminder<span className="text-[#ed0202]">*</span>
    </label>
    <div
      className={`w-12 h-7 bg-blue-500 rounded-full relative cursor-pointer transition-colors duration-300 ${
        isChecked ? 'bg-blue-500' : ''
      }`}
      onClick={handleToggle}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 left-1 transition-transform duration-300 ${
          isChecked ? 'translate-x-5' : ''
        }`}
      />
    </div>
  </div>
  
</div>


            <br/>
          
          <div className="flex flex-col gap-y-1 mt-14 md:mt-4">
            <label className="font-inter text-[14px]" htmlFor="start date">
              Type note<span className="text-[#ed0202]">*</span>
            </label>
            <input
              type="text"
              placeholder=""
              name="email"
              className="border-2 rounded-2xl placeholder:text-[#d7d7d7] px-3 py-2 border-[#dfdfdf] outline-none w-[461px] h-[54px]"
            />
          
        
          
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-40 rounded-full focus:outline-none focus:shadow-outline mt-20 mx-auto block"
            type="button"
          >
            + Create Event
          </button>
        </div>
        </div>
          </div>
        
      </div>
      </div>
      
    
  );
};

export default CalenderEvent;