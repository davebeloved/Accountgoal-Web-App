import React, { useEffect, useState } from 'react';
import Layer_1 from "../assets/Layer_1.svg";
import { sideBarLinks } from '../data';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiOutlineLogout } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../store/userSlice';

const SideBar = () => {
  const { pathname } = useLocation();
const { usersInfo } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      if (localStorage.getItem('usersInfo')){
          dispatch(logoutUser());
          setTimeout(() => {    
            navigate('/signin')
          }, 100)
          
      }
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div>
    <div className="bg-blue-500 w-20 h-full fixed top-0 bottom-0 flex flex-col items-center gap-6">
      <div className="w-[26.11px] h-[42px] mt-5">
        <img src={Layer_1} alt='Layer1 Image' className='w-full h-full object-cover object-center' />
      </div>
  
      <div className="flex flex-col items-center gap-y-6 mt-3">
        {sideBarLinks?.map((links, i)=>{
          const { label, path, icon } = links;
          const activeLink = pathname === path;
          return (
            <Link to={path} key={i} className={`${activeLink ? 'flex flex-col items-center font-inter text-[#FFFFFF] font-bold' : 'flex flex-col items-center font-inter text-[#C5C5C5]'}`}>
              <span>{icon}</span>
              <span>{label}</span>
            </Link>
          )
        })}

        <div>
        <Link onClick={logoutHandler}  className={`${pathname === '/logout' ? 'flex flex-col items-center font-inter text-[#FFFFFF] font-bold' : 'flex flex-col items-center font-inter text-[#C5C5C5]'}`}>
            <span><HiOutlineLogout /></span>
            <span>Logout</span>
          </Link>
        </div>
      </div>



  

     
    </div>
    </div>
  )
}

export default SideBar