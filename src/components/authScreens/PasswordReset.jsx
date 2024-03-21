import React from 'react';
import { Link } from 'react-router-dom';
import logopic from '../image/logopic.png';

const PasswordReset = () => {
  return (
    <div className='w-full h-full flex'>
      <div className='w-1/2 bg-white flex flex-col justify-start items-start'>
        <div className="pl-4 pt-4">
          <img src={logopic} alt="accounts goal image" className='w-64 h-64 text-blue-500' />
        </div>
        <div className="text-right px-32">
          <h1 className='text-3xl text-bold text-left'>Password Reset</h1>
          <p className="text-justify w-full whitespace-normal">
            We have send an OTP to the mail you provided us
          </p>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
            
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="password">
               New Password
              </label>
              <input className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="password">
                Confirm Password
              </label>
              <input className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            </div>

         
    
    <br></br>
            <div className="flex items-center justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-40 rounded-full focus:outline-none focus:shadow-outline" type="button">
                Reset Password
              </button>
            </div>
          </form>
          <p className="text-center pl-8 justify-center">Don't have an account? <a className="text-blue-500 text-bold" href='/Signup'>Sign Up</a></p>
        </div>
      </div>
      <div className='w-1/2 bg-blue-500 h-full flex flex-col justify-end items-center'>
        <h1 className='text-2xl text-bold text-white text-center'>Geo-Client Mapping Interface</h1>
        <p className='text-white mb-8'>Navigate your sales territory with ease! Our Map View helps you locate clients,</p>
      </div>
    </div>
  );
}

export default PasswordReset;
