import React, { useState } from 'react'
import Header from './Header'
import { LOGIN_BG_IMG } from '../utils/constants'

const Login = () => {
  const [SignIn,setSignIn] = useState(true) ;
  const toggleSignInUp = ()=> {
    setSignIn(!SignIn) ;
  }
  return (
    <div className='relative'>
        <Header/>
        <div className='absolute '>
          <img className=' bg-gradient-to-b from-black' src={LOGIN_BG_IMG} alt='BG' />
        </div>
        {/* Added transform -translate-x-1/2: This shifts the form to the left by 50% of its own width, effectively centering it horizontally. CAn use mx-auto right-0 left-0*/}
        <form className='absolute py-[48px] px-[68px] bg-black w-[450px] mt-24 left-1/2 transform -translate-x-1/2 bg-opacity-80'>
          <h1 className='text-white font-bold text-[2rem] mb-[28px]'>{SignIn? "Sign In": "Sign Up"}</h1>
          {!SignIn && (<input type='text' placeholder='Full name' className='w-full mb-4 p-4 rounded-[0.2rem] bg-slate-800' />)}
          <input type='text' placeholder='Email address' className='w-full mb-4 p-4 rounded-[0.2rem] bg-slate-800' />
          <input type='password' placeholder='Password' className='w-full mb-4 p-4 rounded-[0.2rem] bg-slate-800' />
          <button className='w-full p-2 mb-4 bg-red-600 text-white text-lg rounded-[0.2rem]'>{SignIn? "Sign In": "Sign Up"}</button>
          <p className='text-white cursor-pointer' onClick={toggleSignInUp}>{SignIn ? "New to Netflix? Sign up now." : "Already registered? Sign In now."}</p>
        </form>
    </div>
  )
}

export default Login