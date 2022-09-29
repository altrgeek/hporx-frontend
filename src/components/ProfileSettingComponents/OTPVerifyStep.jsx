import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
import { BsCheckCircleFill } from "react-icons/bs";
const OTPVerifyStep = () => {
    const [mobileOTP, setmobileOTP] = useState("")
    const [emailOTP, setemailOTP] = useState("")
    const changeMobileOTP = (otp) => {
        setmobileOTP(otp)
    }
    const changeEmailOTP = (otp) => {
        setemailOTP(otp)
    }
    return (
        <div className='col-lg-12 text-center pt-14'>
            <h1 className='text-[#626973] font-sans font-semibold mb-2'>Verify Your Account</h1>
            <h1 className='text-[#999FA9] text-[10px] font-light mb-20'>Click on verify and get OTP code to verify your account</h1>
            <h1 className='text-[#999FA9] text-[10px] font-light mb-2'>Enter OTP that you got on your Mobile</h1>
            <div className='flex justify-center items-end mb-20'>
                <OtpInput
                    value={mobileOTP}
                    onChange={changeMobileOTP}
                    containerStyle={"justify-center"}
                    inputStyle={"border-b border-[#d4d5d6] text-[#65A33A] text-lg font-sans font-semibold !w-[30px] "}
                    focusStyle={"outline-none"}
                    numInputs={4}
                    separator={<span className='text-white'>---</span>}
                />
                <BsCheckCircleFill size={20} className='inline ml-4 text-[#5a8d36] ' />
            </div>
            <h1 className='text-[#999FA9] text-[10px] font-light mb-2'>Enter OTP that you got on your Email</h1>
            <div className='flex justify-center items-end'>
                <OtpInput
                    value={emailOTP}
                    onChange={changeEmailOTP}
                    containerStyle={"justify-center"}
                    inputStyle={"border-b border-[#d4d5d6] text-[#65A33A] text-lg font-sans font-semibold !w-[30px] "}
                    focusStyle={"outline-none"}
                    numInputs={4}
                    separator={<span className='text-white'>---</span>}
                />
                <BsCheckCircleFill size={20} className='inline ml-4 text-[#5a8d36] ' />
            </div>

        </div>
    )
}

export default OTPVerifyStep