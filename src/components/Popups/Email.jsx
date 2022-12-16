import React, { useState } from 'react'
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { BsFillCalendar2DateFill } from 'react-icons/bs'
import { callPublicApi } from '../../utils/CallApi';
import { toast, ToastContainer } from 'react-toastify';
const Email = ({ handleNext }) => {

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  const [expiryDate, setexpiryDate] = useState({ day: dd, month: mm, year: yyyy })
  const [email, setEmail] = useState('')

  // ****************** Datepicker Content ***********
  const renderCustomInput = ({ ref }) => (
    < div className='relative cursor-pointe w-full'>
      <input readOnly ref={ref} // necessary  placeholder="yyy-mm-dd"
        value={expiryDate ? `${expiryDate.year}/${expiryDate.month}/${expiryDate.day}` : ''}
        className='lg:w-[380px] datepicker w-full mb-5 text-[#CCCCCC] font-sans bg-transparent focus:outline-none border border-white rounded-lg py-2 px-2 placeholder:text-sm placeholder:font-medium'
      />
      <div className={` absolute text-white  top-3 cursor-pointer right-5`}>   <BsFillCalendar2DateFill />   </div>

    </div >
  )



  const handleSend = async () => {

    let value = {
      "email": email
    }
    try {
      let res = await callPublicApi('/verifications/sendCodeOnEmail', 'post', value)
      if (res.status === "Success") {
        toast.success(res.success)
        handleNext()
      }
      else {
        toast.error(res.error)

      }
    }
    catch (err) {
      toast.error(err)
    }

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
      <div className='w-full lg:px-20  px-2 py-5'>
        <form onSubmit={handleSend}>
          <h1 className='text-white font-light text-center text-xl mb-5'>Please Enter your Date of birth and email address</h1>
          <div>
            <div className="">
              <DatePicker
                value={expiryDate}
                calendarPopperPosition="bottom"
                onChange={setexpiryDate}
                renderInput={renderCustomInput} // render a custom input
                shouldHighlightWeekends
              />
            </div>

            <div className='mb-5'>
              <input type="email" placeholder='Email Address' name="email" onChange={(e) => setEmail(e.target.value)} className=' w-full mb-5 text-[#CCCCCC] font-sans  focus:outline-none border bg-transparent  border-white  rounded-lg py-2 px-2 placeholder:text-sm placeholder:font-medium' />
            </div>

          </div>
          <button className='bg-white text-[#00492C]  px-2 py-2 rounded-full  font-medium tracking-widest mb-5 w-4/5 m-auto block'>Next</button>
        </form>
      </div>
    </div>
  )
}

export default Email     