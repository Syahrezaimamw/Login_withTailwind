import React from 'react'
import google from './search.png'
import { loginAuthentication } from '../service/api';
import { useState } from 'react'
import { FaAccusoft } from "react-icons/fa6";
import { Daftar } from '../components/Daftar';
const Login = () => {
    const [tr, settr] = useState()
    const [changee, setChange] = useState({
        username: '',
        password: ''
    })
    const [data, setData] = useState('')
    const [err, setErr] = useState('')
    async function dataApi() {
        try {
            await loginAuthentication(changee, (condition, value) => condition ? (setData(value), setErr('s')) : (setData(''), setErr(value.message)))
        } catch (err) {
            console.log('dasjdhas' + err)
        }
    }
    function submit(e) {
        dataApi()
        console.log(data.token)
        e.preventDefault()
    }
    const [toggle,setToggle]=useState('hidden')
    function gapToken() {
        if (data.token) {
            setToggle('flex')
            console.log(data.token)
        } else {
            console.log(err)
        }
    }
  return (
    <div className='md:w-[50%] h-screen relative flex-col  md:h-full flex items-center justify-center bg-white'>
            {/* <h1 className='absolute text-xl font-bold left-9 xl:none top-8'><FaAccusoft className='font-bold me-3'/> Rimayu Ui</h1> */}
            <h1 className='items-center hidden text-xl font-bold xl:flex md:absolute top-7 left-10'><FaAccusoft className='me-3'/>Rimayu Ui</h1>
            <div className=' h-[100%] mt0 md:mt-0   max-w-2xl sm:w-[62%]  md:w-[90%] lg:w-[70%] xl:w-[50%]  flex justify-center items-center'>
                <form action="" onSubmit={(e) => submit(e)} className='w-[100%] md:w-[80%]  relative'>
                    <h1 className='block mb-2 text-4xl font-bold text-gray-800 f'>Welcome Back</h1>
                    <p className='mb-6 font-semibold text-gray-500'>welcome back please enter your details</p>
                    <Daftar setChange={setChange} changee={changee} name={'username'} type={'text'} />
                    {/* <Daftar name={'password'} type={'password'}/> */}
                    <div className='flex justify-between w-full'>

                        {err != '' ?
                            <span className={`mt-3.5  text-lg ${err == 'Invalid credentials' ? 'text-red-600' : 'text-ungu cursor-pointer'}  block `} onClick={gapToken}>{err == 'Invalid credentials' ? err : 'Get Your Token'}</span>
                            : <span></span>
                        }

                        <span className='block mt-4 font-semibold text-right text-ungu' >Forgot password</span>
                    </div>
                    <button className='w-full active:scale-95 py-[9px] font-semibold text-white mt-[30px] rounded-lg bg-ungu'>Sign In</button>
                    <button className='w-full active:scale-95 py-[9px] font-semibold text-slate-600  mt-4 border-2 border-slate-300  rounded-lg bg-white flex items-center justify-center'><img src={google} className='w-6 me-3' alt="" /> Sign in with Google</button>
                    <p className='text-center mt-7 text-slate-600'>Dont have an account? <span className='font-medium text-ungu'>Sign up</span> </p>
                </form>
                <p className='absolute hidden font-semibold tracking-wider text-gray-400 xl:flex left-10 bottom-7'>@rimayuaja</p>

            </div>
            <div className=''>
                <div id="default-modal" tabindex="-1" aria-hidden="true" className={`${toggle}  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
                    <div className="relative w-full max-w-2xl max-h-full p-4">
                        {/* <!-- Modal content --> */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* <!-- Modal header --> */}
                            <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5 dark:border-gray-600">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    Paste Your Token
                                </h3>
                                <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal" onClick={()=>setToggle('hidden')}>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* <!-- Modal body --> */}
                            <div className="p-4 md:p-5">
                                <p className="flex flex-wrap text-base leading-relaxed text-gray-500 bg-red-900 bg- text-wrap dark:text-gray-400">
                                  <textarea name="" value={data.token} className='w-full outline-0' id="" cols="30" rows="10">
                                    {/* {data.token */}
                                  </textarea>
                                </p>
                               
                            </div>
                          
                        </div>
                    </div>
                </div>


            </div>

        </div>
  )
}

export default Login
