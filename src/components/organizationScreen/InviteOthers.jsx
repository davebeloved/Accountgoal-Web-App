import React from 'react';
import { Link } from 'react-router-dom';
import logopic from '../image/logopic.png';
import orgimage from '../image/orgimage.png';
import { AiOutlinePlusCircle } from "react-icons/ai";

const InviteOthers = () => {
  return (
    <div className=' flex '>
      <div className='w-1/2 bg-white flex flex-col justify-start items-start '>
        <div className="pl-4 pt-4 flex flex-row justify-between">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
   
 </svg> 
 <h1 className='text-bold-3xl'>Organization</h1>
 <div class="flex space-x-4 text-blue-500 ..."></div>


        {/** <img src={logopic} alt="accounts goal image" className='w-64 h-64 text-blue-500' />
        * */} 
        </div>
        <br/><br/>
        <div className="text-right px-32">
          <h1 className='text-3xl text-bold text-left'>Invite Others</h1>
          <p className="text-justify w-full whitespace-normal">
            Use email or generate a unique link to easily bring new <br/> members onboard and collaborate effectively.
          </p><br/><br/>
          
          <div className='flex flex-row justify-between'>
          <h3>Add Members</h3>
          <Link to="/generate-link" className="text-blue-500">Generate Link</Link>
          </div>
          
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
          <div className='flex flex-col gap-y-1 mt-14 md:mt-4'>
          
          <input type="text" placeholder='odunsi@company.com'   name="email" className='border-2 rounded-2xl placeholder:text-[#d7d7d7] px-3 py-2 border-[#dfdfdf] outline-none w-full'/>
          
        </div>
        <div className='flex flex-col gap-y-1 mt-14 md:mt-4'>
        <input type="text" placeholder='odunsi@company.com'   name="email" className='border-2 rounded-2xl placeholder:text-[#d7d7d7] px-3 py-2 border-[#dfdfdf] outline-none w-full'/>
        </div>
        
        <div className='flex flex-col gap-y-1 mt-14 md:mt-4'>
        <input type="text" placeholder='odunsi@company.com'   name="email" className='border-2 rounded-2xl placeholder:text-[#d7d7d7] px-3 py-2 border-[#dfdfdf] outline-none w-full'/>
        </div>

        <div className='flex flex-col gap-y-1 mt-14 md:mt-4'>
        <input type="text" placeholder='odunsi@company.com'   name="email" className='border-2 rounded-2xl placeholder:text-[#d7d7d7] px-3 py-2 border-[#dfdfdf] outline-none w-full'/>
        </div>
        <br/>
        <div className='flex justify-end'>
          <h3 className='text-yellow-500 flex items-center'> <AiOutlinePlusCircle className="mr-2" /> Add more members </h3>
          
          </div>


            
    <br></br>
            <div className="flex items-center justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-40 rounded-full focus:outline-none focus:shadow-outline" type="button">
                Send Invitation
              </button>
              
              {/* <p>Skip>>>   </p> */}
             
            </div>
            <br/>
            <div>
            <p className='flex justify-center'> Skip&gt;&gt;&gt;    </p>
            </div>
            
          </form>
          
        </div>
      </div>
      <div className='w-1/2  bg-blue-500 h-screen flex flex-col justify-end items-center'>
      <div className='absolute top-[84px] left-[916px]'>
        <img src={orgimage} alt="accounts goal organization image" className='w-[440px] h-[447px] text-blue-500' />
      </div>
        <h1 className='text-2xl text-bold text-white text-center'>Build, Grow, Thrive: Launch your Organization and <br/>Unite Visionaries</h1>

        <p className='text-white mb-8'>Transforming your ideas into impact: Forge your Team and Amplify your <br/> Mission</p>
      </div>
    </div>
  );
}

export default InviteOthers;
