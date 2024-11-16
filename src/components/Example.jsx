import React, { useState } from 'react'
import './forgotpassword.css'
import Create from '../ui/Create'
import Button from '../ui/Button'
import BackToLogin from '../ui/BackToLogin'
import { MdOutlineAttachEmail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
const ForgotPassword = () => {

    const [email,setEmail] = useState('')
    const navigate = useNavigate()
    const emailChange = (e)=>{
        setEmail(e.target.value)
    }
    const submitHandle = (e)=>{
        e.preventDefault()
        navigate('/otp-verify');

    }
  return (
    <div className='files-main'>
      <form onSubmit={submitHandle}>
        <div className="files-container">
            <div className="files-header">
                <MdOutlineAttachEmail />
                <p className="files-heading">Forgot your passwprd</p>
                <p className="files-title">Enter your registered email we will send a 6-digit OTP</p>
            </div>
            <div className="files-item">
                <label>Email</label>
                <Create onChange={emailChange} type='email' required placeholder='Enter your email' />
            </div>
            <div className="files-action">
                <Button>Send OTP</Button>
            </div>
            <div>
                <BackToLogin />
            </div>
        </div>
      </form>
    </div>
  )
}

export default ForgotPassword




import React, { useState } from 'react';
import Create from '../ui/Create';
import Button from '../ui/Button';
import BackToLogin from '../ui/BackToLogin';
import { RxUpdate } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

const UpdatePassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // Fixed typo here
    const navigate = useNavigate();

    const passwordChange = (e) => {
        setPassword(e.target.value);
    };

    const confirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value); // Fixed typo here
    };

    const submitHandle = (e) => {
        e.preventDefault();
        console.log(password, confirmPassword);
        navigate('/login');
    };

    return (
        <div className='files-main'>
            <form onSubmit={submitHandle}>
                <div className="files-contain">
                    <div className="files-header">
                        <RxUpdate />
                        <p className="files-heading">New Password</p>
                        <p className="files-title">Enter at least 6-digit long password</p>
                    </div>
                    <div className="files-item">
                        <label>Password *</label>
                        <Create onChange={passwordChange} type='text' required placeholder='New password' />
                    </div>

                    <div className="files-item">
                        <label>Confirm Password *</label>
                        <Create onChange={confirmPasswordChange} type='text' required placeholder='Confirm password' />
                    </div>
                    <div className="files-action">
                        <Button>Update Password</Button>
                    </div>
                    <div>
                        <BackToLogin />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdatePassword;


import React, { useEffect, useRef, useState } from 'react'
import './verifyotp.css'
import Create from '../ui/Create'
import Button from '../ui/Button'
import BackToLogin from '../ui/BackToLogin'
import { FaFingerprint } from 'react-icons/fa'
import Timer from './Timer'
import { useNavigate } from 'react-router-dom'

const VerifyOtp = () => {
    const navigate = useNavigate();

    // Create a single array ref
    const inputRef = useRef(Array(6).fill(null));

    // State to store each OTP digit
    const [otp, setOtp] = useState(Array(6).fill(''));

    useEffect(() => {
        // Focus on the first input field on load
        if (inputRef.current[0]) {
            inputRef.current[0].focus();
        }
    }, []);

    const inputChange = (e, index) => {
        const value = e.target.value.slice(0, 1); // Only allow a single digit
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move focus to the next input if available
        if (value && index < inputRef.current.length - 1) {
            inputRef.current[index + 1].focus();
        }
    };

    const submitHandle = (e) => {
        e.preventDefault();
        const finalOtp = otp.join('');
        console.log(finalOtp);
        navigate('/password-update');
    };

    return (
        <div className='files-main'>
            <form onSubmit={submitHandle}>
                <div className="files-container">
                    <div className="files-header">
                        <FaFingerprint />
                        <p className="files-heading">Verify your OTP</p>
                        <p className="files-title">Enter the 6-digit OTP we just sent to your email</p>
                    </div>
                    <div className="files-item">
                        <label>OTP *</label>
                        <div className='otp-container'>
                            {otp.map((_, index) => (
                                <input
                                    key={index}
                                    type='number'
                                    required
                                    className='ui-create otp-input'
                                    value={otp[index]}
                                    onChange={(e) => inputChange(e, index)}
                                    ref={(el) => (inputRef.current[index] = el)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="files-action">
                        <Button>Verify</Button>
                    </div>
                    <div>
                        <Timer />
                    </div>
                    <div>
                        <BackToLogin />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default VerifyOtp;
 

import React from 'react'
import Countdown from 'react-countdown'

const Timer = () => {
  return (
    <div className='timer'>
      <Countdown date={Date.now()+1*60*100} />
    </div>
  )
}

export default Timer


import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Retrieve users from local storage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  return (
    <div className="user-list">
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
