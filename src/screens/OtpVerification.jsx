import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logopic.png';
import CircleImg from '../assets/circleimg.png';
import Globe from '../assets/globe.png';

const OtpVerification = () => {

  const [loading, setLoading] =  useState(false);

  const [error, setError] =  useState(null);

  const [otp1, setOtp1] = useState("")
  const [otp2, setOtp2] = useState("")
  const [otp3, setOtp3] = useState("")
  const [otp4, setOtp4] = useState("")
  const [userId, setUserId] = useState("");
  const  [sucess, setSucess] = useState(null);

  const [data, setData] = useState([])
  useEffect(() => {
      if(localStorage.getItem("usersparameter")){
        setData(JSON.parse(localStorage.getItem("usersparameter")))
      }
  }, [])
  
  

  

const Navigate = useNavigate()

const handleSubmit =  async (e) => {
  e.preventDefault()

  let credentials= {userId: data.userId, otp: otp1 + otp2 + otp3 + otp4};

  try {
    setLoading: true;
    
    const response = await axios.post("https://api.accountsgoal.com/api/verifyotp", credentials, {
      headers: {
        "Content-Type": "application/json; charset= UTF-8",
        "Access-Control-Allow-Origin": "*",
      }
    })

    if(response) {
      setSucess("OTP Veified Succesfully")
      console.log(response.data.message);
      setTimeout(() => {
        Navigate("/signup-succesful")
      }, 1000);

    }
    setLoading(false)
    
  } catch (error) {
    setError(error.response?.data?.msg)
    setLoading(false);
    console.log(error);
    
  }

}
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:h-screen '>
    <div className='h-full w-full md:overflow-y-auto -mt-12'>
      <div className='md:w-44 w-52 mx-auto md:mx-0'>
        <img src={Logo} alt='logo' className='w-full h-full'/>
        </div>
        <form className='px-8 md:px-10 lg:px-20 -mt-7 '>
        <div>
        <h2 className='font-inter font-bold text-center -mt-16 md:-mt-0 md:text-left text-xl'>OTP Verification</h2>
        <p className='font-inter text-[#5C5C5C] text-[12px] md:text-[14px] text-center md:text-left'> We’ve sent an otp to the mail you provided us</p>
        </div>

        
        {error && (<p className='bg-red-500 text-center  text-white py-3 w-full mt-5 '>{error}</p>)}
        {sucess && (<p className='bg-green-500 text-center text-white py-3 w-full mt-5 '>{error}</p>)}

        <div className='flex items-center gap-x-3 justify-center'>
   <input type='hidden' onChange={(e) => setUserId(e.target.value)} value={data.userId} name='userId' onSubmit={handleSubmit} />
        <div className='border-2 border-[#d7d7d7d7] w-20 h-20 rounded-full overflow-hiddenborder-[#dfdfdf] my-20 flex items-center justify-center'>
          <input type="text" onChange={(e) => setOtp1(e.target.value)} value={otp1} name='otp1' className='border-2   px-3 text-center text-2xl py-2  outline-none w-full h-full border-none bg-transparent rounded-full flex items-center justify-center'/>
        </div>

        <div className='border-2 border-[#d7d7d7d7] w-20 h-20 rounded-full overflow-hiddenborder-[#dfdfdf] my-20 flex items-center justify-center'>
          <input type="text" onChange={(e) => setOtp2(e.target.value)} value={otp2} name='otp2'  className='border-2   px-3 text-center text-2xl py-2  outline-none w-full h-full border-none bg-transparent rounded-full flex items-center justify-center'/>
        </div>

        <div className='border-2 border-[#d7d7d7d7] w-20 h-20 rounded-full overflow-hiddenborder-[#dfdfdf] my-20 flex items-center justify-center'>
          <input type="text" onChange={(e) => setOtp3(e.target.value)} value={otp3} name='otp3'  className='border-2   px-3 text-center text-2xl py-2  outline-none w-full h-full border-none bg-transparent rounded-full flex items-center justify-center'/>
        </div>

        <div className='border-2 border-[#d7d7d7d7] w-20 h-20 rounded-full overflow-hiddenborder-[#dfdfdf] my-20 flex items-center justify-center'>
          <input type="text"  onChange={(e) => setOtp4(e.target.value)} value={otp4} name='otp1'  className='border-2   px-3 text-center text-2xl py-2  outline-none w-full h-full border-none bg-transparent rounded-full flex items-center justify-center'/>
        </div>
        </div>



          <button type='submit'  className='bg-[#4169e1] w-full py-2 rounded-2xl text-white font-inter font-semibold mt-6'>Verify</button>
          <p className='font-inter text-[14px] flex items-center gap-x-1 text-center justify-end mt-1'>Send code again <span to={'/'} className='te font-bold  text-[14px] '>00:30</span></p>
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

export default OtpVerification








// import React from 'react';
// import { Link } from 'react-router-dom';
// import logopic from '../image/logopic.png';
// import circleimg from '../image/circleimg.png';

// const Signup = () => {
//   return (
//     <div className='w-full h-full flex'>
//       <div className='w-1/2 bg-white flex flex-col justify-start items-start'>
//       <div className="pl-4 pt-0 ">
//   <img src={logopic} alt="accounts goal image" className='w-64 h-64 text-blue-500' />
// </div>

//         <div className="text-right px-32 mt-0">
//           <h1 className='text-3xl text-bold text-left'>Create account</h1>
//           <p className="text-justify w-full whitespace-normal">
//             It's your first step towards the streamline management and enhanced<br />
//             productivity
//           </p>
//           <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
//             <div className="mb-4">
//               <label className="block text-black text-sm font-bold mb-2 text-left" htmlFor="email">
//                 Email
//               </label>
//               <input className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="odunsi@companyname.com" />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="fullname">
//                 Full Name
//               </label>
//               <input className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullname" type="text" placeholder="Nicholas Odunsi" />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="phone">
//                 Phone Number
//               </label>
//               <input className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="+160132776328" />
//             </div>
//             <div className="mb-6">
//               <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="password">
//                 Password
//               </label>
//               <input className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
//             </div>
//             <div className="flex items-center justify-center">
//               <button className="bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-44 rounded-full focus:outline-none focus:shadow-outline" type="button">
//                 Sign Up
//               </button>
//             </div>
//           </form>
//           <p className="text-center pl-8 justify-center">Already have an account? <a className="text-blue-500 text-bold" href='/login'>Login</a></p>
//         </div>
//       </div>
//       <div className='w-1/2 h-screen bg-blue-500 flex flex-col justify-end items-center'>
//       <img src={circleimg} alt="accounts goal 3d image" className='w-692 h-732  text-blue-500 justify-center' />
//         <h1 className='text-2xl text-bold text-white text-center'>Geo-Client Mapping Interface</h1>
//         <p className='text-white mb-8'>Navigate your sales territory with ease! Our Map View helps you locate clients,</p>
//       </div>
//     </div>
//   );
// }

// export default Signup;
