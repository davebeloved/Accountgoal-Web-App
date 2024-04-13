import React, { useEffect, useRef } from 'react';

import logopic from '../image/logopic.png';

//import { useNavigate } from 'react-router-dom';

const OrganizationSuccess = () => {

  


  return (
    <div className='h-screen  '>
      <div className=' h-full'>

      <div className='w-60 h-60 mb-10 lg:mb- lg:mx-0 mx-auto '>
        <img src={logopic} alt="logo" className='w-full h-full object-cover object-center'/>
      </div>
      <div className=' flex flex-col items-center justify-center  '>
        <div className='h-[150px] w-[150px]'>
        

        </div>
        
        <h2 className='font-bold font-inter text-[30px]'>Organization Successfully<br/>
        <h2 className='font-bold font-inter text-[30px] text-center'>Created</h2>
        </h2>
        <p className='font-inter text-[#777777]'>“Welcome aboard – you're all set to explore and utilize our powerful  tools!"</p>
      </div>

      </div>
    </div>
  )
}

export default OrganizationSuccess;