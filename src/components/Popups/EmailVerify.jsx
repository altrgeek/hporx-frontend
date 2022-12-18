import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
// import { callApiRecuit } from '../../utils/CallApi';
import { toast, ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
// import { updateUser } from '../../Redux/RecruitAuthSlice/RecruitAuthSlice'
const EmailVerify = ({ handleClose }) => {

    const [emailotp, setemailotp] = useState("")

    const onChangeOTP = (otp) => {
        setemailotp(otp)
    }


    let user = useSelector((state) => state.recruitAuth.userInfo)


    const onSubmit = async (e) => {
        e.preventDefault()
        // let value = {
        //     "email": user?.email,
        //     "verification_code": emailotp
        // }
        // try {
        // let res = await callApiRecuit('/users/verify-code', 'post', value)
        // if (res.status === "Success") {
        //     toast.success(res.success)
        // if (user?.verify === emailotp) {
            handleClose()
            toast.success("Email is verification done ")

            // updateUser(true)
        // }
        // else {
        //     toast.error("Otp is not Valid")

        // }
        //     }
        //     else {
        //         toast.error(res.error)

        //     }
        // }
        // catch (err) {
        //     toast.error(err)
        // }

    }


    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className='w-full lg:px-20 text-center  px-2 py-5'>
                <h1 className='text-white font-light text-center text-2xl mb-5'>Verify Email & Email Address
                    <br />
                    <span className='text-[13px] mt-[-20px]'>Verification Code is sent to you,Please enter that code here. </span>

                </h1>
                <div>
                    <div className='mb-5 flex justify-center'>
                        <OtpInput
                            value={emailotp}
                            onChange={onChangeOTP}
                            placeholder="----"
                            numInputs={4}
                            separator={<span style={{ width: "8px" }}></span>}
                            isInputNum={true}
                            shouldAutoFocus={true}
                            inputStyle={{
                                border: "1px solid white",
                                textAlign: 'center',
                                borderRadius: "8px",
                                width: "35px",
                                height: "35px",
                                fontSize: "12px",
                                color: "#000",
                                fontWeight: "400",
                                caretColor: "blue"
                            }}
                            focusStyle={{
                                border: "1px solid #ffff",
                                outline: "none"
                            }}
                        />
                    </div>

                </div>
                <button onClick={(e) => onSubmit(e)} className='bg-white text-[#00492C]  px-2 py-2 rounded-full  font-medium tracking-widest mb-5 w-4/5 m-auto block'>Finish</button>
            </div>
        </div>
    )
}

export default EmailVerify