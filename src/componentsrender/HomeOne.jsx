import React from 'react'
import { useState,useRef } from 'react'
import Login from '../layout/Login'
export const HomeOne = () => {
    const [keluar,setKeluar]=useState(true)
    const [count, setCount] = useState(0)
    const sFront=120
    const sBack=400
    const bulte=useRef(null)
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    function handlemouse(e){
      setX(e.clientX )
      setY(e.clientY)
      // setKeluar(false)
     
      // bulte.current.style.transform =`translate:${x/sFront}%, ${y/sFront}%`
      
    }
  return (
    <div className='flex flex-col md:flex-row  w-full  md:h-screen bg-[rgb(234,235,239)]'>
     <Login></Login>
    <div className='w-full md:w-[50%] h-screen xl:h-full relative border-r-4 border-slate-300 flex items-center justify-center' onMouseMove={(e)=>handlemouse(e)}>
        {/* <div className={`${keluar==true?'hidden':'flex'}  size-12 bg-[rgb(94,60,177)] left-20 top-20 rounded-full absolute  `} style={{transform:`translate(${x/100}%,${y/100}%)`}}></div>
        <div className={`${keluar==true?'hidden':'block'} size-[60px] bg-[rgb(94,60,177)] rounded-full absolute   right-20 top-[90px]`} style={{transform:`translate(${x/110}%,${y/110}%)`}}></div>
        <div className={`${keluar==true?'hidden':'block'} size-10 top-40 right-[500px] bg-[rgb(94,60,177)] rounded-full absolute  `} style={{transform:`translate(${x/90}%,${y/90}%)`}}></div>
        <div className={`${keluar==true?'hidden':'block'} size-10 bg-[rgb(94,60,177)] top-5 rounded-full absolute  `} style={{transform:`translate(${x/100}%,${y/100}%)`}}></div>
        <div className={`${keluar==true?'hidden':'block'} size-10 bg-[rgb(94,60,177)] top-1/2.5 left-20 rounded-full absolute  `} style={{transform:`translate(${x/100}%,${y/100}%)`}}></div>
        <div className={`${keluar==true?'hidden':'block'} size-10 bg-[rgb(94,60,177)] top-[53%] right-20 rounded-full absolute  `} style={{transform:`translate(${x/100}%,${y/100}%)`}}></div>

        
        <div className={`${keluar==true?'hidden':'block'} size-12 bg-[rgb(94,60,177)] left-20 bottom-20 rounded-full absolute  `} style={{transform:`translate(${x/100}%,${y/100}%)`}}></div>
        <div className={`${keluar==true?'hidden':'block'} size-[60px] bg-[rgb(94,60,177)] rounded-full absolute   left-20 bottom-[90px]`} style={{transform:`translate(${x/110}%,${y/110}%)`}}></div>
        <div className={`${keluar==true?'hidden':'block'} size-10 bottom-40 left-[500px] bg-[rgb(94,60,177)] rounded-full absolute  `} style={{transform:`translate(${x/90}%,${y/90}%)`}}></div>
        <div className={`${keluar==true?'hidden':'block'} size-10 bg-[rgb(94,60,177)] bottom-5 rounded-full absolute  `} style={{transform:`translate(${x/100}%,${y/100}%)`}}></div>
        <div className={`${keluar==true?'hidden':'block'} size-10 bg-[rgb(94,60,177)] bottom-1/2.5 left-20 rounded-full absolute  `} style={{transform:`translate(${x/100}%,${y/100}%)`}}></div> */}
      <div className={`relative `}ref={bulte} >
        
        <div className={`rounded-full size-[200px] sm:size-[215px] md:size-[230px]  pt-20 bg-[rgb(94,60,177)] `} style={{transform:`translate(${x/120}%,${y/120}%)`}} onMouseEnter={()=>setKeluar(false)}>
          {/* <div className='bottom-0 w-full h-full mt-[20%] backdrop-blur-sm bg-white/30'></div> */}
        </div>

      </div>
        <div className='absolute bottom-0 w-full bg-[rgb(234,235,239)]/30 backdrop-blur-md h-1/2'></div>

    </div>
   </div>
  )
}
