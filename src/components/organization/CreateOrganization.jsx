import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import logopic from '../image/logopic.png';
import orgimage from '../image/orgimage.png';

const CreateOrganization = () => {
  const [companyData, setCompanyData] = useState({
    "companyName": "",
    "companyType": "",
    "companySize": "",
  });

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setCompanyData({...companyData, [name]: value})
  }

  localStorage.setItem('companyDetails', JSON.stringify(companyData));
  const navigate = useNavigate();
  return (
    <div className=' flex h-screen'>
    <div className=' bg-white flex flex-col gap-y-10 py-7 justify-start items-start overflow-y-auto w-full h-full'>
      <div className="pl-4 pt-4 flex flex-row gap-x-5 justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-200">
    <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
   
 </svg> 
 <h1 className=' text-center text-black text-2xl font-bold font-inter' >Organization</h1>
 </div>

        <div className="text- px-16 ">
          <h1 className='text-xl text-black text-bold text-left font-bold font-inter'>Create Organization</h1>
          <p className="text-justify w-full whitespace-normal">
            It's your first step towards streamlined management and enhanced productivity
          </p>
          <form className="bg-white  rounded px-8 pt-6 pb-8 mb-4 w-full">
          <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="fullname">
                Company Name
              </label>
              <input 
              onChange={handleChange}
              className="shadow appearance-none border rounded-full w-full py-2 px-3 text-blacl leading-tight focus:outline-none focus:shadow-outline" 
              id="fullname" 
              type="text" 
              value={companyData.companyName}
              name='companyName'
              placeholder="company name" />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb- text-left" htmlFor="password">
                Organization Size
              </label>
              <div className="flex flex-row justify-between bg-white shadow-md rounded px-4 py-">
                <div className="flex items-center justify-center bg-white rounded-full p-2">
                  <input
                    onChange={handleChange}
                    type="radio"
                    id="size1-20"
                    value={'1-20'}
                    name="companySize"
                    className="form-radio h-5 w-5 text-blue-500 mr-2"
                  />
                  <label htmlFor="size1-20" className="text-gray-700">
                    1-20
                  </label>
                </div>
                <div className="flex items-center justify-center bg-white rounded-full p-2">
                  <input
                    onChange={handleChange}
                    type="radio"
                    id="size20-50"
                    value={'20-50'}
                    name="companySize"
                    className="form-radio h-5 w-5 text-blue-500 mr-2"
                  />
                  <label htmlFor="size20-50" className="text-gray-700">
                    20-50
                  </label>
                </div>
                <div className="flex items-center justify-center bg-white rounded-full p-2">
                  <input
                   onChange={handleChange}
                    type="radio"
                    id="size50-100"
                    value={'50-100'}
                    name="companySize"
                    className="form-radio h-5 w-5 text-blue-500 mr-2"
                  />
                  <label htmlFor="size50-100" className="text-gray-700">
                    50-100
                  </label>
                </div>
                <div className="flex items-center justify-center bg-white rounded-full p-2">
                  <input
                    onChange={handleChange}
                    type="radio"
                    id="size100+"
                    value={'100 Above'}
                    name="companySize"
                    className="form-radio h-5 w-5 text-blue-500 mr-2"
                  />
                  <label htmlFor="size100+" className="text-gray-700">
                    100 Above
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="fullname">
                Company Type
              </label>
              <select  onChange={handleChange} name='companyType' value={companyData.companyType} className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="companyType">
               <option value="">Select Company Type</option> 
                <option value="basic">Basic</option>
                <option value="standard">Standard</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

      
            <div className="">
              <button onClick={()=>navigate('/invite-others')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-40 rounded-full focus:outline-none focus:shadow-outline w-full" type="button">
                Next
              </button>
            </div>
          </form>
          
        </div>
      </div>
      <div className='w-full py-10  bg-blue-500 h-screen flex flex-col gap-y-6 justify- items-center'>
      <div className='w-[300px]'>
        <img src={orgimage} alt="accounts goal organization image" className=' text-blue-500 w-full h-full object-cover object-center' />
      </div>
      <div>

      </div>
    <div>
    <h1 className='text-2xl font-bold text-white text-center'>Build, Grow, Thrive: Launch your Organization and <br/>Unite Visionaries</h1>

<p className='text-[#f6f6f6] mb-8'>Transforming your ideas into impact: Forge your Team and Amplify your Mission</p>
    </div>
      </div>
    </div>
  );
}

export default CreateOrganization;
