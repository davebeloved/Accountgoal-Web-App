import React, { useState } from "react";
import MapScreen from "../../assets/map.png";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import goal from "../../assets/goal.svg"

const CreateNewGoal = () => {
  
 

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

          <img src={goal} alt="goal image"/>
       
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-40 rounded-full focus:outline-none focus:shadow-outline mt-20 mx-auto block"
            type="button"
          >
            Create New Goal
          </button>
        </div>
        
      </div>
      
    </div>
  );
};

export default CreateNewGoal;
