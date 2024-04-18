import React, { useState } from 'react';
import MapScreen from '../../assets/map.png';
import { CiCalendarDate } from 'react-icons/ci';
import { MdOutlineCancel } from 'react-icons/md';
import { IoPersonOutline } from 'react-icons/io5';

const GoalMarked = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex h-screen">
      {/* Map Section */}
      <div className="w-1/2">
        <img src={MapScreen} alt="Map Screen" className="w-full h-full object-cover" />
      </div>

      {/* Goal Section */}
      <div className="w-1/2 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Goals</h1>
          <MdOutlineCancel className="cursor-pointer"  />
        </div>

        <div className="space-y-4">
          <h3 className='text-lg font-bold'>Increase Account Revenue</h3>
          <div className='flex items-center text-gray-500'>
            <CiCalendarDate size={20} />
            <p className='ml-2'>30 days left</p>
          </div>
          <div className='flex items-center text-gray-500'>
            <IoPersonOutline size={20} />
            <p className='ml-2'>Baylor Scott & White Irving</p>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '20%' }}></div>
          </div>

          {/* Checkbox List */}
          <div className="flex flex-col space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" checked={checked} onChange={handleChange} className="form-checkbox h-4 w-4 text-red-500" />
              <span className="text-gray-700">Increase the revenue for this account</span>
            </label>
          </div>
        </div>

        {/* Create Goal Button */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mt-8 mx-auto block"
          type="button"
          
        >
          Create Goal
        </button>
      </div>
    </div>
  );
};

export default GoalMarked;
