/*import React, { useState } from "react";
import MapScreen from "../../assets/map.png";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";

import { IoPersonOutline } from "react-icons/io5";

const GoalsCreated = () => {
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
            <div className="flex gap-x-10 items-center w-full">
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

          <br/>
          <br/>
          <div className="flex flex-col space-y-4">
  <div className="bg-white rounded-lg shadow-md p-4">
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-lg font-medium">Increase Account revenue</h3>
        <div className="flex items-center">
          <CiCalendarDate />
          <p className="text-gray-500 ml-2">30 days left</p>
        </div>
      </div>
      <div className="bg-yellow-500 rounded-full w-12 h-12 flex items-center justify-center">
        <span className="text-white font-bold">60%</span>
      </div>
    </div>
    <IoPersonOutline />
    <p className="text-gray-600 font-medium">Baylor scott & White Irving</p>
  </div>

  <div className="bg-white rounded-lg shadow-md p-4">
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-lg font-medium">Increase Account revenue</h3>
        <CiCalendarDate />
        <p className="text-gray-500">30 days left</p>
      </div>

      <div className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center">
        <span className="text-white font-bold">30%</span>
      </div>
    </div>
    <IoPersonOutline />
    <p className="text-gray-600 font-medium">Baylor scott & White Irving</p>
  </div>

          </div>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <button
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 md:px-40 pr-4 justify-item-center rounded-full whitespace-nowrap focus:outline-none focus:shadow-outline mt-20 mx-auto block"
  type="button"
>
  + Create New Goal
</button>


        </div>
      </div>

  );
};

export default GoalsCreated;*/


import React from 'react';
import MapScreen from '../../assets/map.png';
import { CiCalendarDate } from 'react-icons/ci';
import { MdOutlineCancel } from 'react-icons/md';
import { IoPersonOutline } from 'react-icons/io5';

const GoalsPercent = () => {
  return (
    <div className='flex h-screen'>
      <div className='w-h-screen'>
        <img src={MapScreen} alt='map screen' className='w-full h-full object-cover' />
      </div>
      <div className='w-1/2 p-8 bg-white'>
        <div className='flex justify-between items-center mb-12'>
          <h1 className='text-3xl font-bold'>Goals</h1>
          <MdOutlineCancel className='w-8 h-8 text-gray-500 cursor-pointer' />
        </div>

        {/* Goal Items */}
        <div>
          {[60, 30].map((percentage, index) => (
            <div key={index} className='bg-white rounded-lg shadow-md p-4 mb-6 flex justify-between items-center'>
              {/* Left Section */}
              <div>
                <h3 className='text-lg font-bold'>Increase Account Revenue</h3>
                <div className='flex items-center mt-2 text-gray-500'>
                  <CiCalendarDate size={20} />
                  <p className='ml-2'>30 days left</p>
                </div>
                <div className='flex items-center mt-2 text-gray-500'>
                  <IoPersonOutline size={20} />
                  <p className='ml-2'>Baylor scott & White Irving</p>
                </div>
              </div>

              {/* Right Section */}
              <div 
                style={{ backgroundColor: percentage >= 50 ? '#FBBF24' : '#EF4444' }} 
                className='rounded-full w-12 h-12 flex items-center justify-center'
              >
                {/* Percentage Text */}
                <span 
                  style={{ color: 'white' }} 
                  className='font-bold'
                >
                  {percentage}%
                </span>  
              </div>  
            </div>  
          ))}
        </div>

        {/* Create New Goal Button */}
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <button
          type='button'
          onClick={() => {}}
          style={{ backgroundColor: '#2563EB', color: 'white'}}
          className='py-2 px-40 rounded-full text-lg font-bold mt-20 mx-auto block'
        >
          + Create New Goal
        </button>
      </div>
    </div>
  );
};

export default GoalsPercent;
