import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/authScreens/Signup";
import OtpVerification from "./components/authScreens/OtpVerification";
import Login from "./components/authScreens/Login";
import ForgotPassword from "./components/authScreens/ForgotPassword";
import VerifyPasswordReset from "./components/authScreens/VerifyPasswordReset";
import PasswordReset from "./components/authScreens/PasswordReset";
import SignUpSuccesful from "./components/authScreens/SignUpSuccesful";
import PasswordChanged from "./components/authScreens/PasswordChanged";



function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/verify-password-reset" element={<VerifyPasswordReset/>} />
        <Route path="/password-reset" element={<PasswordReset/>} />
        <Route path="/signup-succesful" element={<SignUpSuccesful/>} />
        <Route path="/password-changed" element={<PasswordChanged/>} />
      </Routes>
    </Router>
 );
}

export default App;
