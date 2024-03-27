import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logopic.png';
import CircleImg from '../assets/circleimg.png';
import Globe from '../assets/globe.png';

const VerifyPasswordReset = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:h-screen '>
    <div className='h-full w-full md:overflow-y-auto -mt-12'>
      <div className='md:w-44 w-52 mx-auto md:mx-0'>
        <img src={Logo} alt='logo' className='w-full h-full'/>
        </div>
        <form className='px-8 md:px-10 lg:px-20 -mt-7 '>
        <div>
        <h2 className='font-inter font-bold text-center -mt-16 md:-mt-0 md:text-left text-xl'>Password Reset</h2>
        <p className='font-inter text-[#5C5C5C] text-[12px] md:text-[14px] text-center md:text-left'>We’ve sent an otp to the mail you provided us</p>
        </div>
        <div className='flex items-center gap-x-3 justify-center'>

        <div className='border-2 border-[#d7d7d7d7] w-20 h-20 rounded-full overflow-hiddenborder-[#dfdfdf] my-20 flex items-center justify-center'>
          <input type="text"  className='border-2   px-3 text-center text-2xl py-2  outline-none w-full h-full border-none bg-transparent rounded-full flex items-center justify-center'/>
        </div>

        <div className='border-2 border-[#d7d7d7d7] w-20 h-20 rounded-full overflow-hiddenborder-[#dfdfdf] my-20 flex items-center justify-center'>
          <input type="text"  className='border-2   px-3 text-center text-2xl py-2  outline-none w-full h-full border-none bg-transparent rounded-full flex items-center justify-center'/>
        </div>

        <div className='border-2 border-[#d7d7d7d7] w-20 h-20 rounded-full overflow-hiddenborder-[#dfdfdf] my-20 flex items-center justify-center'>
          <input type="text"  className='border-2   px-3 text-center text-2xl py-2  outline-none w-full h-full border-none bg-transparent rounded-full flex items-center justify-center'/>
        </div>

        <div className='border-2 border-[#d7d7d7d7] w-20 h-20 rounded-full overflow-hiddenborder-[#dfdfdf] my-20 flex items-center justify-center'>
          <input type="text"  className='border-2   px-3 text-center text-2xl py-2  outline-none w-full h-full border-none bg-transparent rounded-full flex items-center justify-center'/>
        </div>
        </div>



          <button className='bg-[#4169e1] w-full py-2 rounded-2xl text-white font-inter font-semibold mt-6'>Verify</button>
          <p className='font-inter text-[14px] flex items-center gap-x-1 text-center justify-center mt-3'>Send code again <span to={'/'} className='te font-bold  text-[14px] '>00:30</span></p>
        </form>

      </div>
      <div className='hidden md:flex bg-blue-500 h-full  flex-col items-center'>
        <div className='relative h-[400px] w-full pt-10 flex flex-col items-center'>
        <div className='circleImg w-[400px] h-[400px] rounded-full flex flex-col justify-center items-center'>
        </div>
        <img src={Globe} alt="" className='absolute top-28 w-[600px]'/>
        </div>
        <div>
          <h2 className='font-bold text-center text-2xl font-inter text-white mt-4'>Geo-Client Mapping Interface</h2>
          <p className='font-inter text-[#f3f3f3f3] text-center text-[16px] font-normal'>Navigate your sales territory with ease! Our Map View helps you locate <br /> clients,</p>
        </div>
      </div>
    </div>
  )
}

export default VerifyPasswordReset






