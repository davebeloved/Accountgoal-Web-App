import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Signup from "./screens/Signup";
import OtpVerification from "./screens/OtpVerification";
import ForgotPassword from "./screens/ForgotPassword";
import VerifyPasswordReset from "./screens/VerifyPasswordReset";
import PasswordReset from "./screens/PasswordReset";
import PasswordChanged from "./screens/PasswordChanged";
import CreateOrganization from "./components/organizationScreen/CreateOrganization";
import Signin from "./screens/Signin";
import SuccessRegister from "./screens/SuccessRegister";
import InviteOthers from "./components/organizationScreen/InviteOthers";
import InvitationSent from "./components/organizationScreen/InvitationSent";
import OrganizationSuccess from "./components/organizationScreen/OrganizationSuccess";
import Home from "./components/homeScreen/Home";
import Goals from "./components/homeScreen/Goals";
import Layout from "./components/Layout";
import TodoList from "./components/homeScreen/TodoList";




const App = ()=> {
const {usersInfo} = useSelector(state=>state.auth);
const navigate = useNavigate();
useEffect(()=>{
  if(!usersInfo?.token){
    navigate('/signin')
    
  }
}, [])
//console.log(usersInfo)
  return (
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path ="/goals" element={<Goals />} />
        <Route path ="/todo-list" element={<TodoList />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/sucess-register" element={<SuccessRegister />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp-password-reset" element={<VerifyPasswordReset />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/password-changed" element={<PasswordChanged/>} />
        <Route path="/create-organization" element={<CreateOrganization/>} />
        <Route path="/invite-others" element={<InviteOthers/>} />
        <Route path = "invitation-sent" element= {<InvitationSent/>}/>
        <Route path = "organization-success" element= {<OrganizationSuccess/>}/>
       
        {/* <Route path = "home" element= {<Home/>}/> */}
        

      </Routes>
 );
}

export default App;

