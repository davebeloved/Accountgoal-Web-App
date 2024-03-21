import React from 'react';
import logopic from '../image/logopic.png';

const SignUpSuccesful = () => {
  return (
    <div className='  justify-start items-start'>
      <div className='bg-white flex flex-col justify-start items-start'>
        <div className="pl-4 pt-4">
          <img src={logopic} alt="accounts goal image" className='w-64 h-64 text-blue-500' />
        </div>
        <div className="flex flex-col justify-center items-center mt-12 text-center">
          <h1 className='text-3xl text-bold'>Accounts Successfully Created</h1>
          <p className="text-justify w-full whitespace-normal">
            "Welcome onboard - you're set to explore and utilize our powerful tools!"
          </p>
          </div>
      </div>
    </div>
  )
}

export default SignUpSuccesful
