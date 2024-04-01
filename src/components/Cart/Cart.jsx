import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";

const Counter = (props) => {
  let [counter, setCounter] = useState(1);

  const Increment = () => {
    setCounter(counter + 1);
  };

  const Decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div>
        <h2 className="text-xl">
          {props.title}
        </h2>
        <p className="mt-3">In Stock</p>
        <div className="flex justify-between">
          <span className="flex ">
            <button className="bg-white mr-2  px-1" onClick={ Decrement}>
              -
            </button>
            <p>{counter}</p>
            <button className="bg-white ml-2 px-1" onClick={Increment}>
              +
            </button>
          </span>
          <div>
            <button className="bg-red-600 px-2 rounded-lg text-white font-semibold">
              Remove from Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <div className="pt-20 p-1">
        <h1 className="text-2xl font-semibold text-orange-600">
          Shopping Cart
        </h1>
        <div className="w-full h-auto flex flex-col gap-5 p-2">
          {cartItems.map((item, index) => (
            <div className="w-full h-auto bg-blue-500 p-3 flex justify-around align-middle items-center flex-wrap">
              <div className="w-32 h-32">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full bg-cover bg-center"
                />
              </div>
              <Counter title={item.title}/>

              <div className="flex flex-col align-middle items-center">
                <button className="bg-red-600 rounded-lg p-1 text-white font-semibold">
                  30% off
                </button>
                <p>&#x20B9;{item.price}</p>
                <p key={index} className="line-through">
                  {item.old_price}
                </p>
                <p key={index}>{item.new_price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
