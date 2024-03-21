import React from 'react';
import { Link } from 'react-router-dom';
import logopic from '../image/logopic.png';

const VerifyPasswordReset = () => {
  return (
    <div className='w-full h-full flex'>
      <div className='w-1/2 bg-white flex flex-col justify-start items-start'>
        <div className="pl-4 pt-4">
          <img src={logopic} alt="accounts goal image" className='w-64 h-64 text-blue-500' />
        </div>
        <div className="text-right px-32">
          <h1 className='text-3xl text-bold text-left'>Password Reset</h1>
          <p className="text-justify w-full whitespace-normal">
            We've sent an otp to the mail you provided us
          </p>
          <br/><br/><br/>

          <div className="flex justify-center items-center">
      
        <input
          
          type="text"
          maxLength={4}
          className="w-12 h-12 mx-1 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          
          />
        <input
          
          type="text"
          maxLength={4}
          className="w-12 h-12 mx-1 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          
          />
        <input
          
          type="text"
          maxLength={4}
          className="w-12 h-12 mx-1 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          
          />
        <input
          
          type="text"
          maxLength={1}
          className="w-12 h-12 mx-1 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          
          />
          
        </div>

        <br/> <br/> <br/>
          
            <div className="flex items-center justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-40 rounded-full focus:outline-none focus:shadow-outline" type="button">
                Verify
              </button>
            </div>

            <br/> <br/> 
          
          <p className="text-center pl-8 justify-right">Send code again <strong>00.30</strong></p>
        </div>
      </div>
      <div className='w-1/2 bg-blue-500 h-full flex flex-col justify-end items-center'>
        <h1 className='text-2xl text-bold text-white text-center'>Geo-Client Mapping Interface</h1>
        <p className='text-white mb-8'>Navigate your sales territory with ease! Our Map View helps you locate clients,</p>
      </div>
    </div>
  );
}

export default VerifyPasswordReset;
