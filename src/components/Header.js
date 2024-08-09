import React from 'react'
import { LOGO } from '../utils/constants'

const Header = () => {
  return (
    <div className='absolute z-30'> 
      <div className='px-[154px] py-[4px]'>
        <img className='w-[189px]' src={LOGO} alt='logo'/>  
      </div>    
    </div>
    
  )
}

export default Header