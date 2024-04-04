import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
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



function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/sucess-register" element={<SuccessRegister />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp-password-reset" element={<VerifyPasswordReset />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/password-changed" element={<PasswordChanged/>} />
        <Route path="/create-organization" element={<CreateOrganization/>} />
        <Route path="/invite-others" element={<InviteOthers/>} />
      </Routes>
    </Router>
 );
}

export default App;
