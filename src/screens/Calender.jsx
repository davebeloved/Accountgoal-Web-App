


import React from 'react';

import CalendarScreen from "../assets/calender.png";

const Calendar = () => {
  return (
    <div className='h-full'>
    <div className=""> {/* This div will take up the remaining space */}
        <img src={CalendarScreen} alt='map screen image' className='w-full h-full object-cover object-center' />
      </div>
    </div>
    
  )
}

export default Calendar
