import React, { useState,useContext } from 'react'
import { CartContext } from "../CartContext";
const Counter = (props) => {

    const { cartItems, setCartItems } = useContext(CartContext);
    
    let [counter, setCounter] = useState(1);
    const[newprice , setNewprice] = useState(props.price || props.price1);
    
    const Increment = () => {
      setCounter(counter + 1);
      setNewprice(newprice + (props.price || props.price1));
    };
    
    const Decrement = () => {
      if (counter > 1) {
        setCounter(counter - 1);
        setNewprice( newprice - (props.price || props.price1));
      }
    };
    
    console.log(newprice);
    
    const deleteCart = () =>{
      const id = props.id;
      setCartItems(cartItems.filter((item)=>{
        return item.id !== id;
      }));
    }
  
  
  
    return ( 
      <>
        <div className="">
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
              <button className="bg-red-600 px-2 rounded-lg text-white font-semibold" onClick={deleteCart}>
                Remove from Cart
              </button>
            </div>

            <p>{newprice}</p>
          </div>
        </div>
      </>
    );
};

export default Counter