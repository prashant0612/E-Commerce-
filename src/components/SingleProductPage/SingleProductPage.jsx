import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductListAll, SpecialProductListAll } from "../Men/Men";
import {MenProductListAll,KidsProductList,WomenProductList} from '../Shop/Shop';
import { WomenDressListAll,WomenFootwearListAll, WomenHandbagsListAll,WomenSweatersListAll,WomenWatchesListAll,MakeupListAll,JewelleryListAll,SpectListAll,BeltListAll, } from "../Women/Women";
import { toyListAll,costumeListAll,teddyListAll } from "../Kids/Kids";
import { FaShoppingCart } from "react-icons/fa";



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

  const { productId } = useParams();

  useEffect(() => {
    // Convert productId to integer for comparison
    const productIdInt = parseInt(productId);

    // Find the product whose ID matches productIdInt
    const productAll = productList.find((p) => p.id === productIdInt);

    // Set the product state
    setProduct(productAll);
  }, [productId]); // Include productId in the dependency array to re-run effect when it changes

  return (
    <>
      <div className="pt-20 ">
        <div className="w-full flex justify-around p-20 flex-wrap">
          <div className="w-[35%] shadow-3xl ">
            <img
              src={product.img}
              alt="images"
              className="w-full bg-cover  bg-center "
            />
          </div>
          <div className="w-[40%] flex flex-col justify-around">
            <div>
              <h1 className="text-[60px] leading-none font-semibold">
                {product.title}{product.name}
              </h1>
              <h1 className="mt-10 text-4xl font-semibold">{product.price}</h1>
              <h1>{product.old_price}</h1>
            </div>
            <div className="flex ">
              <button className="flex items-center bg-red-500 p-2 px-5 font-semibold text-white">
                Add To Cart
                <FaShoppingCart className="ml-2" />
              </button>
              <button className="text-white bg-red-500 p-2 px-5 font-semibold ml-10">
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
