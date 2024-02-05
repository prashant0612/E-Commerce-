import React, { useEffect, useState } from 'react'

import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';



const list = [
  {
    id: 1,
    title: "Women Floral Print Anarkali Kurta with Pant and Dupatta",
    img: img1,
    old_price: 546,
    new_price: 499,
    stars:"⭐⭐⭐",
    offer: 30,
    color: "black",
    aosData: "fade-up",
    aosDelay:300
  },
  {
    id: 2,
    title: "Rose Gold Dial Watch with Stylish Diamond Studded Watches",
    img: img2,
    old_price: 726,
    new_price: 632,
    stars:"⭐⭐⭐⭐",
    offer: 40,
    color: "gray",
    aosData: "flip-right",
    aosDelay:400
  },
  {
    id: 3,
    title: "Niren Enterprise Baby Girl , Velvet Frock with Sequinns Embroidery",
    img: img3,
    old_price: 843,
    new_price: 702,
    stars:"⭐⭐⭐",
    offer: 29,
    color: "yellow",
    aosData: "flip-down",
    aosDelay:500
  },
  {
    id: 4,
    title: "ASIAN Men's Synthetic Sports,Running,Casual Loafer Shoes",
    img: img4,
    old_price: 566,
    new_price: 432,
    stars:"⭐⭐⭐⭐",
    offer: 21,
    color: "black",
    aosData: "zoom-in-left",
    aosDelay:600
  },
  {
    id: 5,
    title: "EYEBOGLER Polo Neck Half Sleeve Striped Print Casual Men Tshirt",
    img: img5,
    old_price: 666,
    new_price: 599,
    stars:"⭐⭐⭐⭐",
    offer: 54,
    color: "yellow",
    aosData: "flip-right",
    aosDelay:700
  },
  {
    id: 6,
    title: "GRAPHENE Monster Truck Push and Go Friction Powered Car Toys",
    img: img6,
    old_price: 704,
    new_price: 624,
    stars:"⭐⭐⭐",
    offer: 32,
    color: "white",
    aosData: "fade-up",
    aosDelay:800
  }
];

const Counter = (props) => {
  let [counter, setCounter] = useState(1);
  let [pricenew, setpricenew] = useState(props.newprice);
  let [priceold, setpriceold] = useState(props.oldprice);
  
  const Increment = () => {
    setCounter(counter + 1);
    setpricenew(pricenew + props.newprice);
    setpriceold(priceold + props.oldprice);
  };
  
  const Decrement = () => {
    if (counter > 1) {
    setCounter(counter - 1)
    setpriceold(priceold - props.oldprice)
    setpricenew(pricenew - props.newprice)
    }
  }

  return (
    <>
      <div className='w-[380px] text-[20px] flex flex-col gap-3 max-[760px]:text-[16px] max-[760px]:w-[200px] max-[620px]:gap-1 max-[620px]:text-[12px] max-[440px]:w-[100px]'>
         <h2 >{props.title}</h2>
         <p>In Stock</p>
         <p><b className='text-xl max-[620px]:text-[14px]'>Color: </b>{props.colorcolor}</p>
         <div className='flex gap-12 items-center max-[760px]:flex-col max-[760px]:gap-6 max-[760px]:items-start'>
            <div className='flex gap-3 items-center'>
               <button className='bg-white px-1 h-6 flex items-center' onClick={Decrement}>-</button>
               <p className='w-4 text-center'>{counter}</p>
               <button className='bg-white px-1 h-6 flex items-center' onClick={Increment}>+</button>
            </div>
            <button className='bg-red-600 text-white px-3 rounded-lg shadow-sm h-10 max-[760px]:w-[100px] max-[760px]:h-[40px] max-[760px]:text-[12px] max-[320px]:px-0'>Remove From Cart</button>
          </div>
        </div>
        <div className='flex flex-col gap-3 items-center '>
             <div className='bg-red-600 text-white px-4 py-2 rounded-xl max-[320px]:px-1 max-[320px]:text-[12px]'>{props.offer}% off </div>
             <div className='text-[20px] line-through max-[320px]:text-[12px]'>&#8377; {priceold}</div>
             <div className='text-[20px] max-[320px]:text-[12px]'>&#8377; {pricenew}</div>
        </div>
      
    </>
)

}
const Cart = () => {
  
  

  return (
    
    <div className='pt-[130px] pb-[40px] px-6 max-[620px]:px-0'>
      <h1 className='text-4xl text-orange-500 font-bold pb-4'>Shopping Cart</h1>
      <div data-aos="fade-up"
        data-aos-offset="10"
        data-aos-delay="30"
        data-aos-duration="700"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-anchor-placement="top-center">
        {list.map((item) => (
          <div className='flex bg-white justify-around items-center w-[100%] bg-gradient-to-r from-yellow-400 via-green-400 to-blue-500 mt-8 py-6 px-6 max-[620px]:justify-between max-[620px]:px-2' data-aos={item.aosData}
          data-aos-delay={item.aosDelay}>
            <img src={item.img} className='w-40 h-30 max-[620px]:w-20 '></img>
            <Counter title={item.title} color={item.color} newprice={item.new_price} oldprice={item.old_price} offer={item.offer} />
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Cart 
