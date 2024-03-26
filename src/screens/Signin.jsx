import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logopic.png';
import CircleImg from '../assets/circleimg.png';
import Globe from '../assets/globe.png';

const Signin = () => {
  return (
    <div className='grid grid-cols-2 h-screen '>
      <div className='h-full w-full overflow-y-auto '>
        <div className='w-44'>
        <img src={Logo} alt='logo' className='w-full h-full'/>
        </div>
        <form className='px-20 -mt-5 '>
        <div>
          <h2 className='font-inter font-bold text-2xl'>Welcome Back</h2>
          <p className='font-inter text-[#5C5C5C] text-[14px]'> Let's get you starte from where you stopped.</p>
        </div>

        <div className='flex flex-col gap-y-1 mt-12'>
          <label className='font-inter' htmlFor="email">Email <span className='text-[#ed0202]'>*</span></label>
          <input type="text" placeholder='example@company.com' className='border-2 rounded-2xl placeholder:text-[#d7d7d7] px-3 py-2 border-[#dfdfdf] outline-none w-full'/>
        </div>



        <div className='flex flex-col gap-y-1 mt-7'>
          <label className='font-inter' htmlFor="password">Password <span className='text-[#ed0202]'>*</span></label>
          <input type="password" placeholder='********' className='border-2 rounded-2xl placeholder:text-[#d7d7d7] px-3 py-2 border-[#dfdfdf] outline-none w-full'/>
        </div>

        <div className='flex items-center justify-between mt-5'>
            <div className='flex items-center gap-x-1'>
                <input type="checkbox" />
                <span className='font-inter text-[#777777] text-[12px]'>Remember me</span>
            </div>
            <Link className='font-inter text-[#777777] text-[12px]'>Forgotton Password?</Link>
        </div>

          <button className='bg-[#4169e1] w-full py-2 rounded-2xl text-white font-inter font-semibold mt-6'>Signin</button>
          <p className='font-inter text-[14px] flex items-center gap-x-1 text-center justify-center mt-1'>Dont have an account? <Link to={'/'} className='text-[#4169e1] font-semibold italic text-[14px] underline'>Signup</Link></p>
        </form>

      </div>
      <div className='bg-blue-500 h-full flex flex-col items-center'>
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
