import React from 'react'
import shoppingIcon from '../Header/Images/E-commerce Icon.png'
import { FaCartArrowDown } from "react-icons/fa";
import {Link , NavLink } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className=' w-full h-20 bg-slate-300 flex justify-between align-middle items-center fixed z-10'>
      <Link to='/' className='duration-700'>  
        <div className='flex items-center'>
          <img src={shoppingIcon} alt='Image' className=' w-20 h-10' ></img> 
          <p className=''>Shopping Souk</p>
        </div>
      </Link>
      <div className='flex items-center'>
        <input type="text" placeholder='Search' className='w-72 h-8 p-2 rounded-l-lg'/>
        <CiSearch className='text-[20px] font-bold bg-red-500 h-8 w-[30px] text-white p-1 rounded-r-lg'/>
      </div>
      <ul className='flex items-center' data-aos="zoom-in">
        <li className='mr-8 hover:font-bold'>
          <NavLink to="/" className={({isActive}) =>
            ` duration-200  ${isActive ? "border-b-4 border-red-700":" text-black"}`}>
            Shop
          </NavLink>
        </li>
        <li className='mr-8 hover:font-bold'>
          <NavLink to="/Men" className={({isActive}) =>
            `duration-200 ${isActive ? "border-b-4 border-red-700":" text-black"}`}>
            Men
          </NavLink>
        </li>
        <li className='mr-8 hover:font-bold'>
          <NavLink to="/women" className={({isActive}) =>
            ` duration-200 ${isActive ? "border-b-4 border-red-700":" text-black"}`}>
            Women
          </NavLink>
        </li>
        <li className='mr-8 hover:font-bold'>
          <NavLink to="/kids" className={({isActive}) =>
            `duration-200 ${isActive ? "border-b-4 border-red-700":" text-black"}`}>
            Kids
          </NavLink>
        </li>
      </ul>
      <div className='flex items-center'>
        <Link to= "/login"> <button className=' mr-12 bg-red-600 p-2 px-5 rounded-2xl text-white'>Login</button></Link>
        <Link to="/cart"> <FaCartArrowDown className='mr-10 text-2xl'/></Link>
      </div>
    </div>
  )
}

export default Header