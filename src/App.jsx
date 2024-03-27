import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./screens/Signup";
import OtpVerification from "./screens/OtpVerification";
import ForgotPassword from "./components/authScreens/ForgotPassword";
import VerifyPasswordReset from "./components/authScreens/VerifyPasswordReset";
import PasswordReset from "./components/authScreens/PasswordReset";
import PasswordChanged from "./components/authScreens/PasswordChanged";
import CreateOrganization from "./components/organization/CreateOrganization";
import SignUpSuccesful from "./components/authScreens/PasswordChanged";
import Signin from "./screens/Signin";



function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/verify-password-reset" element={<VerifyPasswordReset/>} />
        <Route path="/password-reset" element={<PasswordReset/>} />
        <Route path="/signup-succesful" element={<SignUpSuccesful/>} />
        <Route path="/password-changed" element={<PasswordChanged/>} />
        <Route path="/create-organization" element={<CreateOrganization/>} />
      </Routes>
    </Router>
 );
}

export default App;
