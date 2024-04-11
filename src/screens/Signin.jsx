import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logopic.png';
import CircleImg from '../assets/circleimg.png';
import Globe from '../assets/globe.png';
import { useLoginMutation } from '../store/authApi';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../store/userSlice';
import Loading from '../components/Loading';

const Signin = () => {
const [emptyField, setEmptyField] = useState(null)
const [err, setErr] = useState(null)
  const [login, { isLoading, isError }] = useLoginMutation();
  const { usersInfo } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [succeed, setSucceed] = useState(null)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !pwd) {
      setEmptyField("Please fill all fields");
      // console.log("please fill all fields");
      return;
    }

    try {
      const res = await login({ email, password: pwd }).unwrap();
      dispatch(setCredentials({ ...res }));
      if (res) {
        setSucceed("Login Successfully, Redirecting to Home Page");
        setTimeout(() => {
          navigate('/')
        }, 3000)
        
      }
    } catch (error) {
      console.log(error.data.msg);
      // console.log(error.data.msg);
      setErr(error?.data?.msg);
    }
  };
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:h-screen '>
    <div className='h-full w-full md:overflow-y-auto -mt-12'>
      <div className='md:w-44 w-52 mx-auto md:mx-0'>
        <img src={Logo} alt='logo' className='w-full h-full'/>
        </div>
        <form onSubmit={handleSubmit} className='px-8 md:px-10 lg:px-20 -mt-7 '>
        <div>
        <h2 className='font-inter font-bold text-center -mt-16 md:-mt-0 md:text-left text-xl'>Welcome Back</h2>
        <p className='font-inter text-[#5C5C5C] text-[12px] md:text-[14px] text-center md:text-left'> Let's get you starte from where you stopped.</p>
        </div>

        {isError && (
          <p className="bg-[#B20000] mt-3 text-white font-dmSans py-2 px-3">{err || 'Please check your internet connection and try again'}</p>
        )}
        {emptyField && (
          <p className="bg-[#B20000] mt-3 text-white font-dmSans py-2 px-3">
            {emptyField}
          </p>
        )}
        {succeed && (
          <p className="bg-[#36A74A] mt-3 text-white font-dmSans py-2 px-3">
            {succeed}
          </p>
        )}{" "}
        <div className='flex flex-col gap-y-1 mt-12'>
          <label className='font-inter' htmlFor="email">Email <span className='text-[#ed0202]'>*</span></label>
          <input onChange={(e)=>setEmail(e.target.value)} name='email' value={email} type="text" placeholder='example@company.com' className='border-2 rounded-2xl placeholder:text-[#d7d7d7] px-3 py-2 border-[#dfdfdf] outline-none w-full'/>
        </div>



        <div className='flex flex-col gap-y-1 mt-7'>
          <label className='font-inter' htmlFor="password">Password <span className='text-[#ed0202]'>*</span></label>
          <input onChange={(e)=>setPwd(e.target.value)} name='pwd' value={pwd} type="password" placeholder='********' className='border-2 rounded-2xl placeholder:text-[#d7d7d7] px-3 py-2 border-[#dfdfdf] outline-none w-full'/>
        </div>

        <div className='flex items-center justify-between mt-5'>
            <div className='flex items-center gap-x-1'>
                <input type="checkbox" />
                <span className='font-inter text-[#777777] text-[12px]'>Remember me</span>
            </div>
            <Link to={'/forgot-password'} className='font-inter text-[#777777] text-[12px]'>Forgotton Password?</Link>
        </div>

        <button type='submit' className={`${isLoading ? 'bg-blue-200 flex items-center justify-center w-full py-2 rounded-2xl text-white font-inter font-semibold mt-6' : 'bg-[#4169e1] w-full py-2 rounded-2xl text-white font-inter font-semibold mt-6'}`}>{isLoading ? <Loading /> : 'Signin'}</button>
          <p className='font-inter text-[14px] flex items-center gap-x-1 text-center justify-center mt-1'>Dont have an account? <Link to={'/signup'} className='text-[#4169e1] font-semibold italic text-[14px] underline'>Signup</Link></p>
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

export default Signin








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
