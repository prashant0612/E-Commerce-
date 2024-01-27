import React from 'react'
import americanIcon from './images/american-express.png'
import masterIcon from './images/master-card.png'
import paypalIcon from './images/paypal.png'
import visaIcon from './images/visa.png'
import fbIcon from './images/facebook.png'
import instaIcon from './images/instagram.png'
import twitterIcon from './images/twitter.png'
import youtubeIcon from './images/youtube.png'



const Footer = () => {
  return (
    <footer className='flex justify-evenly p-12 bg-gradient-to-r from-purple-600 via-red-500 to-yellow-300'>
      <div className=' w-1/4 flex flex-col items-center text-center gap-1'>
        <h1 className='font-bold'>ABOUT</h1>
        <p>Bringing quality and convenience together – your go-to destination for Products that inspire and elevate your lifestyle</p>
        <span className='flex'> 
          <img src={americanIcon} alt='image' className=' w-16 h-14' /> 
          <img src={masterIcon} alt='image' className=' w-16 h-14' />
          <img src={paypalIcon} alt='image' className=' w-16 h-14' />
          <img src={visaIcon} alt='image' className=' w-16 h-14' />
        </span>
      </div>
      <div className=' w-1/4 flex flex-col items-center text-center gap-1'>
        <h1 className=' font-bold'>CATEGORIES</h1>
        <ul>
          <li>Clothing</li>
          <li>Footwear</li>
          <li>Hand Bag</li>
          <li>Jwellery</li>
          <li>Belt</li>
        </ul>
      </div>
      <div className=' w-1/4 flex flex-col items-center text-center gap-1'>
        <h1 className=' font-bold'>INFORMATION</h1>
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Terms & Condition</li>
          <li>Returns & Exchange</li>
          <li>Shipping & Delivery</li>
          <li>Private Policy</li>
        </ul>
      </div>
      <div className=' w-1/4 flex flex-col text-center gap-1'>
        <h1 className=' font-bold'>CONTACT</h1>
        <p>XYZ, New Delhi,India<br/>Pin code - 110005</p>
        <p>+91 1234567890</p>
        <div className='flex justify-center mt-4'>
          <img src={fbIcon} alt='image' className=' w-6 h-6 mr-2' />
          <img src={instaIcon} alt='image' className=' w-6 h-6 mr-2' />
          <img src={twitterIcon} alt='image' className=' w-6 h-6 mr-2' />
          <img src={youtubeIcon} alt='image' className=' w-6 h-6 mr-2' />
        </div>
      </div>
    </footer>
  )
}

export default Footer