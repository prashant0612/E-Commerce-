import React, { useState } from 'react';
import backgroundImg2 from './images/bg-img2.jpg';
import { Link } from 'react-router-dom';

const Login = () => {

const[email,setEmail] = useState('');
const[pass,setPass] = useState('');

const Email=(e)=>{
  setEmail(e.target.value)
}

const Pass=(e)=>{
setPass(e.target.value)
}

const SubmitForm = (e) =>{
  alert(`${email},${pass}`);
  setEmail('');
  setPass('');
}

  return (
    <div className='relative w-full h-full' data-aos="fade" data-aos-delay="200">
      <img src={backgroundImg2} alt="img" className='w-full h-screen object-cover' />
      <div className='absolute text-center bg-[#8a2387] shadow-3xl p-5 flex flex-col w-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <h1 className='mb-3 text-white font-bold'>Login Here</h1>
        <input type="text" placeholder='Email' required className='mb-3 p-1' value={email} onChange={Email}/>
        <input type="password" placeholder='Password' required className='p-1' value={pass} onChange={Pass}/>
        <div className='flex justify-between mt-2'>
          <span className='flex align-middle items-center'>
            <input type="checkbox" className='mr-1'/><p className='text-[12px] text-white'>Remember Me</p>
            </span>
          <span className='text-[12px] text-white'>Forgot Password?</span>
        </div>
        <p className='text-white text-xs'><Link to={'/signup'} className='underline hover:text-blue-500'>Click here </Link> to create an Account</p>
        <div>
          <button className='bg-yellow-500 p-1 px-3 text-[15px] rounded-md mt-2' onClick={SubmitForm}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login