import React, { useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { MdClose } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import moment from 'moment';
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'
import { useFieldArray } from "react-hook-form";
import Surgical from '../AppoinmtentSubmodule/Surgical';
const schema = yup.object({
  name: yup.string().required('Operation Name is Required'),
  past: yup.string().required('Past Operations is Required'),
  medicine: yup.string().required(' Medicine  is Required'),
  dosage: yup.string().required(' Dosage  is Required'),
  timeMed: yup.string().required(' Medicine Time  is Required'),
  test: yup
    .array()
    .of(
      yup.object({
        name: yup.string().required(),
        past: yup
          .string()

          .required(),
      })
    )
    .required(),
  // image: yup.string().mixed().test('required', ' File  is Required', value => {
  //   return value && value.length
  // }),
});

let renderCount = 0;


const SurgicalHistory = ({ handleNext, handleBack }) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  const [quoteDate, setquoteDate] = useState({
    day: dd,
    month: mm,
    year: yyyy,
  });
  const [companySetting, setCompanySetting] = useState(true);

  const {
    register,
    watch,
    reset,
    control,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema), defaultValues: { test: [{ name: "", past: "", date: "" }] } });



  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
    rules: { required: " All field are requird" }
  });

  // ****************** Datepicker Content ***********
  const renderCustomInput = ({ ref }) => (
    <div className='relative w-full cursor-pointe'>
      <input
        readOnly
        ref={ref}
        value={
          quoteDate
            ? `${quoteDate.year}/${quoteDate.month}/${quoteDate.day}`
            : ''
        }
        className={` border p-2 focus:outline-blue-500 rounded-sm w-full cursor-pointer z-30  px-2 py-2 `}
      />
      <div className={`visible absolute top-3 cursor-pointer right-5`}>
        {' '}
        <FcCheckmark />{' '}
      </div>
    </div>
  );

  const handleChangeDate = (data) => {
    const date = moment(data).format('yyyy-M-D').split('-');
    setquoteDate({ day: +date[2], month: +date[1], year: +date[0] });
  };

  const onSubmit = async (data) => {
    handleNext()
  };


  console.log("error", errors)


  return (
    <div className='bscontainer-fluid'>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='row p-11'>
          <div className='flex'>
            <div className='flex items-center justify-between col-lg-12 '>
              <h2 className='text-[18px] font-medium'>Surgical History</h2>
              <button type='button' onClick={() => {
                append({ name:"", past:"", date:"" });
              }} className='flex items-center p-2 text-white bg-red-500 hover:bg-green-600'>
                Add <BsFillPlusCircleFill className='ml-2' />
              </button>
            </div>
          </div>

          {
            fields.map((item, index) => (
              <>

                <div className='relative mb-4 col-lg-4'>
                  <label className='block mb-1 text-sm font-medium' htmlFor='name'>
                    Operation Name{' '}
                  </label>
                  <div className='absolute right-5 top-10'>
                    {!errors.test?.[index]?.name && watch(`test[${index}].name`) ? (
                      <FcCheckmark />
                    ) : errors.test?.[index]?.name ? (
                      <div className='text-red-500 '>
                        <MdClose />
                      </div>
                    ) : null}
                  </div>
                  <input
                    name={`test[${index}].name`}
                    {...register(`test[${index}].name`)}
                    autoComplete='off'
                    className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.test?.[index]?.name && 'border-red-400'
                      }`}
                    id='name'
                    placeholder='Operational Name'
                  />


                  <span
                    hidden={watch(`test[${index}].name`)}
                    className='absolute text-red-400 text-lg font-medium  top-9 left-[170px]'
                  >
                    *
                  </span>

                  {errors.test?.[index]?.name && (
                    <p className='text-sm text-red-500'>{errors.test?.[index]?.name.message}</p>
                  )}
                </div>

                <div className='relative mb-4 col-lg-4'>
                  <label className='block mb-1 text-sm font-medium' htmlFor='name'>
                    Past Operations
                  </label>

                  <div className='absolute right-5 top-10'>
                    {!errors.test?.[index]?.past && watch(`test[${index}].past`) ? (
                      <FcCheckmark />
                    ) : errors.test?.[index]?.past ? (
                      <div className='text-red-500 '>
                        <MdClose />
                      </div>
                    ) : null}
                  </div>
                  <input
                    name={`test[${index}].past`}
                    {...register(`test[${index}].past`)}
                    autoComplete='off'
                    className={`border p-2 focus:outline-blue-500 rounded-sm w-full   ${errors.test?.[index]?.past && 'border-red-400'
                      }`}
                    id='name'
                    placeholder='Past Operational'
                  />


                  <span
                    hidden={watch(`test[${index}].past`)}
                    className='absolute text-red-400 text-lg font-medium  top-9 left-[170px]'
                  >
                    *
                  </span>
                  {errors.test?.[index]?.past &&
                    <p className='text-sm text-red-500'>{errors.test?.[index]?.past.message}</p>
                  }
                  {/* {errors.items?.[index]?.past && (
                    <p className='text-sm text-red-500'>{errors.items?.[index]?.past.message}</p>
                  )} */}



                </div>

                <div className='mb-4 col-lg-4 '>
                  <label className='block mb-1 text-sm font-medium '>
                    Operation Date
                  </label>
                  <div className='relative flex items-center'>
                    <DatePicker
                      value={quoteDate}
                      name='quoteDate'
                      onChange={(date) => setquoteDate(date)}
                      renderInput={renderCustomInput} // render a custom input
                      shouldHighlightWeekends
                      calendarPopperPosition='bottom'
                    />
                    {
                      index > 0 &&
                      <button className='p-2 ml-2 text-white bg-red-500 hover:bg-green-600'>
                        <MdDelete />
                      </button>
                    }
                  </div>
                </div>
              </>
            ))
          }

          {/* <Surgical {...{ control, register, getValues, watch, setValue, errors }} /> */}
          <div className='flex'>
            <div className='flex items-center justify-between col-lg-12 '>
              <h2 className='text-[18px] font-medium'>Medications Suppliments</h2>
              <button className='flex items-center p-2 text-white bg-red-500 hover:bg-green-600'>
                Add <BsFillPlusCircleFill className='ml-2' />
              </button>
            </div>
          </div>


          <div className='relative mb-4 col-lg-4'>
            <label className='block mb-1 text-sm font-medium' htmlFor='name'>
              Medicine{' '}
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.name && watch('name') ? (
                <FcCheckmark />
              ) : errors.name ? (
                <div className='text-red-500 '>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <input
              {...register('me')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.name && 'border-red-400'
                }`}
              name='name'
              id='name'
              type='text'
              placeholder='Medicine'
            />
            <span
              hidden={watch('name')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[95px]'
            >
              *
            </span>

            {errors.name && (
              <p className='text-sm text-red-500'>{errors.name.message}</p>
            )}
          </div>

          <div className='relative mb-4 col-lg-4'>
            <label className='block mb-1 text-sm font-medium' htmlFor='name'>
              Dosage
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.dosage && watch('dosage') ? (
                <FcCheckmark />
              ) : errors.dosage ? (
                <div className='text-red-500 '>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <input
              {...register('dosage')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.dosage && 'border-red-400'
                }`}
              name='dosage'
              id='dosage'
              type='text'
              placeholder='Dosage'
            />
            <span
              hidden={watch('dosage')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[95px]'
            >
              *
            </span>

            {errors.name && (
              <p className='text-sm text-red-500'>{errors.dosage.message}</p>
            )}
          </div>

          <div className='relative mb-4 col-lg-2'>
            <div>
              <div className='mb-3 text-sm font-semibold text-slate-800'>
                Taking Now
              </div>
              <div className='flex items-center'>

                <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox"
                    checked={companySetting}
                    onChange={() => setCompanySetting(!companySetting)}
                    id="default-toggle"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <div className='ml-2 text-sm italic text-slate-400'>
                    {companySetting ? 'True' : 'False'}
                  </div>
                </label>



              </div>
            </div>
          </div>
          <div className='relative mb-4 col-lg-2'>
            <div>
              <div className='mb-3 text-sm font-semibold text-slate-800'>
                Is Surgery Done
              </div>
              <div className='flex items-center'>

                <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox"
                    checked={companySetting}
                    onChange={() => setCompanySetting(!companySetting)}
                    id="default-toggle"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <div className='ml-2 text-sm italic text-slate-400'>
                    {companySetting ? 'True' : 'False'}
                  </div>
                </label>



              </div>
            </div>
          </div>

          <div className='relative mb-4 col-lg-6'>
            <label className='block mb-1 text-sm font-medium' htmlFor='name'>
              Times Of Medicine
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.name && watch('name') ? (
                <FcCheckmark />
              ) : errors.name ? (
                <div className='text-red-500 '>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <input
              {...register('name')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.name && 'border-red-400'
                }`}
              name='name'
              id='name'
              type='text'
              placeholder='timesOfMedicine'
            />
            {/* <span
              hidden={watch('name')}
              className='absolute text-red-400 text-lg font-medium  top-9 left-[95px]'
            >
              *
            </span> */}

            {errors.name && (
              <p className='text-sm text-red-500'>{errors.name.message}</p>
            )}
          </div>

          <div className='relative mb-4 col-lg-6'>
            <label className='block mb-1 text-sm font-medium' htmlFor='name'>
              Prescription File
            </label>
            <div className='relative flex items-center'>
              <input
                type="file"
                className={`border p-[5px] focus:outline-blue-500 rounded-sm w-full  `}
              />
              <button className='p-2 ml-2 text-white bg-red-500 hover:bg-green-600'>
                <MdDelete />
              </button>
            </div>
          </div>


          <div className='flex justify-between col-lg-12'>
            <button onClick={(e) => handleBack(e)} className='p-2 text-white bg-red-500 hover:bg-green-600'>
              Back
            </button>
            <button className='p-2 text-white bg-red-500 hover:bg-green-600'>
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SurgicalHistory;
