import React from 'react'
import { useState,useEffect,useRef } from 'react';
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
export const Daftar = () => {
    const [togle, setTogle] = useState(true)
    const [condition, setCondition] = useState(true)
    const [eye, setEye] = useState('text')
    function handlEye() {
        if (condition == true) {

            setTogle(false)
            setCondition(false)
            setTimeout(() => {
                setTogle(true)
                setCondition(true)

            }, 500)
        } else {
            setTogle(true)
            setCondition(true)
        }
    }

    function handle(e) {
        const newData = { ...changee }
        newData[e.target.id] = e.target.value
        setChange(newData)
    }
    // submit(changee)

  return (
    <>
    <label htmlFor='username' className=' block mb-3 mt-5 font-[500] cursor-pointer text-slate-600'>username</label>
    <input type='text' id='username' className='input' placeholder={`masukan username `} onChange={(e) => handle(e)} />
    {/* {type == 'password' ?
        <> */}
    <label htmlFor='password' className='block mb-3 mt-6 font-[500] cursor-pointer text-slate-600'>password</label>
    <div className='relative'>

        <input type={togle ? 'password' : eye} id='password' className='relative input' placeholder={`masukan password `} onChange={(e) => handle(e)}>
        </input>
        <span className='absolute text-slate-600 right-3 top-[13px] cursor-pointer' onClick={(e) => handlEye()}>{togle ? <FaEyeSlash /> : <FaEye />}</span>
    </div>
    {/* </> */}
    {/* :  */}


    {/* } */}

</>
  )
}
