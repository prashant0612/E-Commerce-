import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import Counter from "./Counter";


const Cart = () => {
  const { cartItems } = useContext(CartContext);


  // Filter out items without price and calculate total price
  const totalPrice = cartItems
  .filter(item => item.price||item.new_price) // Ignore items without price
  .reduce((total, item) => total + (item.price || item.new_price),0);



  return (
    <>
      <div className="pt-20 p-1">
        <h1 className="text-2xl font-semibold text-orange-600">
          Shopping Cart
        </h1>
        <div className="w-full h-auto flex flex-col gap-5 p-2 mb-10">
          {cartItems.map((item,index) => (
            <div className="w-full h-auto bg-blue-500 p-3 flex justify-around align-middle items-center flex-wrap">
              <div className="w-32 h-32">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full bg-cover bg-center"
                />
              </div>

              <Counter title={item.title} id={item.id} price={item.price} price1={item.new_price}/>

              <div className="flex flex-col align-middle items-center">
                <button className="bg-red-600 rounded-lg p-1 text-white font-semibold">
                  30% off
                </button>
                <p>&#x20B9;{item.price}{item.new_price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* TOTAL AMOUNT */}
        <p className="flex justify-end text-2xl font-bold">Total Price= &#8377;{totalPrice}</p>
        <div className="w-full flex justify-end">
          <button className="bg-red-500  text-white font-bold px-2 p-2 ">Proceed to Pay</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
