import React, { useState } from "react";
import MapScreen from "../assets/map.png";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";

const TodoList = () => {

    const [isChecked, setIsChecked] = useState(false);
  
    const handleToggle = () => {
      setIsChecked(!isChecked);
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
                <h1 className="text-3xl font-bold font-inter">To-do List</h1>
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
              Todo<span className="text-[#ed0202]">*</span>
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
              Attach Client<span className="text-[#ed0202]">*</span>
            </label>
              <select className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="pirorityType">
               <option value="">Select Client </option> 
                <option value="basic">Israel@accountsgoal.com</option>
                <option value="standard">Israel@gloriation.com</option>
                <option value="advanced">Davidson@gloriation.com</option>
              </select>
          </div>
          <div className="flex flex-col gap-y-1 mt-14 md:mt-10">
            <label className="font-inter text-[14px]" htmlFor="start date">
              End Date<span className="text-[#ed0202]">*</span>
            </label>
            <input
              type="date"
              placeholder=""
              name="date"
              className="border-2 rounded-2xl placeholder:text-[#d7d7d7] px-3 py-2 border-[#dfdfdf] outline-none w-[461px] h-[54px]"
            />
          </div>

          <div className="flex flex-col gap-y-1 mt-14 md:mt-10">
  <div className="flex items-center justify-between">
    <label className="font-inter text-[14px]" htmlFor="start date">
      No end date for task<span className="text-[#ed0202]">*</span>
    </label>
    <div
      className={`w-12 h-7 bg-gray-400 rounded-full relative cursor-pointer transition-colors duration-300 ${
        isChecked ? 'bg-gray-500' : ''
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

  <div>
  <label className="font-inter text-lg text-gray-700" htmlFor="priority">
    Set Priority<span className="text-red-500">*</span>
            </label>
    <br/>
    <br/>

    
  <div className="flex justify-center space-x-4">
    <button className="bg-red-500 hover:bg-blue-700 text-white font-bold rounded-full px-4 py-2" type="button">
      High Priority
    </button>
    <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold rounded-full px-4 py-2" type="button">
      Medium Priority
    </button>
    <button className="bg-green-500 hover:bg-blue-700 text-white font-bold rounded-full px-4 py-2" type="button">
      Low Priority
    </button>
  </div>
    
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
  {/* Check button will be implemented below this line */}
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
            + Create Todo
          </button>
          
          
        </div>
        <div className="mt-4">
 <p className="text-center text-gray-500 text">Set Immediate appointment</p>
</div>
        </div>
          </div>
          
        
      </div>
      </div>
      
    
  );
};

export default TodoList;

