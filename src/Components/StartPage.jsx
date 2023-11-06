import React, { useContext } from 'react'
import { context } from '..'

const StartPage = () => {
    const {setStart} = useContext(context);
  return (
    <div className='w-full h-screen start-div'>
        <div className=' bg-black opacity-80 text-white w-full h-full flex flex-col justify-center items-center gap-4'>

        <p className='text-2xl'>Welcome to Quiz Game</p>
        <button className='text-gray-900 text-2xl uppercase hover:scale-105 duration-300 bg-white rounded-md p-2 px-6 font-bold'
        onClick={()=>{setStart(true)}}
        >Start</button>
        </div>
    </div>
  )
}

export default StartPage