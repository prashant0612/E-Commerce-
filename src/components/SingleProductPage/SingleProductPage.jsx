import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductListAll, SpecialProductListAll } from "../Men/Men";
import {MenProductListAll,KidsProductList,WomenProductList} from '../Shop/Shop';
import { WomenDressListAll,WomenFootwearListAll, WomenHandbagsListAll,WomenSweatersListAll,WomenWatchesListAll,MakeupListAll,JewelleryListAll,SpectListAll,BeltListAll, } from "../Women/Women";
import { toyListAll,costumeListAll,teddyListAll } from "../Kids/Kids";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../CartContext";



const productList = [...ProductListAll, 
    ...SpecialProductListAll, 
    ...MenProductListAll, 
    ...KidsProductList, 
    ...WomenProductList,
    ...WomenDressListAll, 
    ...WomenFootwearListAll,
    ...WomenHandbagsListAll, 
    ...WomenSweatersListAll, 
    ...WomenWatchesListAll, 
    ...MakeupListAll, 
    ...JewelleryListAll, 
    ...SpectListAll, 
    ...BeltListAll,
    ...toyListAll,
    ...costumeListAll,
    ...teddyListAll
];

const SingleProductPage = () => {
  const [product, setProduct] = useState({});
  const[message, setMessage] = useState('');
  const { addToCart } = useContext(CartContext);
  const { productId } = useParams();
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    // Convert productId to integer for comparison
    const productIdInt = parseInt(productId);

    // Find the product whose ID matches productIdInt
    const productAll = productList.find((p) => p.id === productIdInt);

    // Set the product state
    setProduct(productAll);
  }, [productId]); // Include productId in the dependency array to re-run effect when it changes

  const handleAddToCart = () => {
    const item = cartItems.find((i)=>i.id == product.id );
    if(item){
      return;
    }
    addToCart(product); 
    setMessage('Product Added');
    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  return (
    <>
      <div className="pt-20 ">
      <div className={`absolute left-[50%] top-[11%] translate-x-[-50%] text-4xl bg-green-500 transition-all ease-linear 0.5s text-white px-4 z-50 ${message ? 'product-added-message' : ''}`}>
          {message}
        </div>
        <div className="w-full flex justify-around p-20 flex-wrap max-[768px]:justify-normal max-[768px]:p-14">
          <div className="w-[35%] shadow-3xl max-[768px]:w-full">
            <img
              src={product.img}
              alt="images"
              className="w-full bg-cover bg-center "
            />
          </div>
          <div className="w-[40%] flex flex-col justify-around max-[768px]:w-full">
            <div className=" max-[768px]:w-full">
              <h1 className="text-[60px] leading-none font-semibold max-[768px]:text-2xl max-[768px]:mt-10">
                {product.title}{product.name}
              </h1>
              <h1 className="mt-10 text-4xl font-semibold max-[768px]:text-xl max-[768px]:mt-5">&#8377; {product.price}</h1>
              <h1>{product.old_price}</h1>
            </div>
            <div className="flex max-[768px]:justify-between max-[768px]:w-full">
              <button className="flex items-center bg-red-500 p-2 px-5 font-semibold text-white max-[768px]:text-[11px] max-[768px]:text-nowrap " onClick={handleAddToCart}>
                Add To Cart
                <FaShoppingCart className="ml-2 max-[768px]:ml-0 max-[768px]:text-xl" />
              </button>
              <button className="text-white bg-red-500 p-2 px-5 font-semibold ml-10  max-[768px]:text-nowrap max-[768px]:ml-0 ">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
