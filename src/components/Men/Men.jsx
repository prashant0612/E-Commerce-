import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bg1 from "./image/sale.png";
import bg2 from "./image/shoe.png";
import bg3 from "./image/men1.png";

import productImg1 from "./image/New Product Image/cartImage2.jpg";
import productImg2 from "./image/New Product Image/cartImage3.jpg";
import productImg3 from "./image/New Product Image/cartImage4.jpg";
import productImg4 from "./image/New Product Image/cartImage5.jpg";
import productImg5 from "./image/New Product Image/cartImage6.jpg";
import productImg6 from "./image/New Product Image/cartImage7.jpg";
import productImg7 from "./image/New Product Image/cartImage8.jpg";
import productImg8 from "./image/New Product Image/cartImage9.jpg";

import SpecialProductImg1 from "./image/Special Product Img/SpecialProduct1.jpg";
import SpecialProductImg2 from "./image/Special Product Img/SpecialProduct2.jpg";
import SpecialProductImg3 from "./image/Special Product Img/SpecialProduct3.jpg";
import SpecialProductImg4 from "./image/Special Product Img/SpecialProduct4.jpg";
import SpecialProductImg5 from "./image/Special Product Img/SpecialProduct5.jpg";
import SpecialProductImg6 from "./image/Special Product Img/SpecialProduct6.jpg";
import SpecialProductImg7 from "./image/Special Product Img/SpecialProduct7.jpg";
import SpecialProductImg8 from "./image/Special Product Img/SpecialProduct8.jpg";
import SpecialProductImg9 from "./image/Special Product Img/SpecialProduct9.jpg";
import SpecialProductImg10 from "./image/Special Product Img/SpecialProduct10.jpg";

import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

import shoe1 from "./image/shoes/shoe1.png";
import shoe2 from "./image/shoes/shoe2.png";
import shoe3 from "./image/shoes/shoe3.png";
import shoe4 from "./image/shoes/shoe4.png";
import shoe5 from "./image/shoes/shoe5.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const ImageList = [
  {
    id: 19,
    img: bg1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 20,
    img: bg2,
    title: "30% off on all Shoes Wear",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 21,
    img: bg3,
    title: "70% off on all Products Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const ProductList = [
  {
    id: 22,
    img: productImg1,
    title: "Lorem ipsum dolor",
    price: 100,
    aosDelay: "0",
  },
  {
    id: 23,
    img: productImg2,
    title: "Lorem ipsum dolor",
    price: 120,
    aosDelay: "200",
  },
  {
    id: 24,
    img: productImg3,
    title: "Lorem ipsum dolor",
    price: 130,
    aosDelay: "400",
  },
  {
    id: 25,
    img: productImg4,
    title: "Lorem ipsum dolor",
    price: 90,
    aosDelay: "600",
  },
  {
    id: 26,
    img: productImg5,
    title: "Lorem ipsum dolor",
    price: 200,
    aosDelay: "800",
  },
  {
    id: 27,
    img: productImg6,
    title: "Lorem ipsum dolor",
    price: 70,
    aosDelay: "1000",
  },
  {
    id: 28,
    img: productImg7,
    title: "Lorem ipsum dolor",
    price: 95,
    aosDelay: "1200",
  },
  {
    id: 29,
    img: productImg8,
    title: "Lorem ipsum dolor",
    price: 140,
    aosDelay: "1400",
  },
];

export const ProductListAll = ProductList;

const SpecialProducList = [
  {
    id: 30,
    img: SpecialProductImg1,
    title: "Lorem ipsum dolor sit amet.",
    old_price: 120,
    new_price: 100,
    aosDelay: "0",
  },
  {
    id: 31,
    img: SpecialProductImg2,
    title: "Lorem ipsum dolor sit amet.",
    old_price: 120,
    new_price: 100,
    aosDelay: "200",
  },
  {
    id: 32,
    img: SpecialProductImg3,
    title: "Lorem ipsum dolor sit amet.",
    old_price: 120,
    new_price: 100,
    aosDelay: "400",
  },
  {
    id: 33,
    img: SpecialProductImg4,
    title: "Lorem ipsum dolor sit amet.",
    old_price: 120,
    new_price: 100,
    aosDelay: "800",
  },
  {
    id: 34,
    img: SpecialProductImg5,
    title: "Lorem ipsum dolor sit amet.",
    old_price: 120,
    new_price: 100,
    aosDelay: "1000",
  },
  {
    id: 35,
    img: SpecialProductImg6,
    title: "Lorem ipsum dolor sit amet.",
    old_price: 120,
    new_price: 100,
    aosDelay: "1200",
  },
  {
    id: 36,
    img: SpecialProductImg7,
    title: "Lorem ipsum dolor sit amet.",
    old_price: 120,
    new_price: 100,
    aosDelay: "1400",
  },
  {
    id: 37,
    img: SpecialProductImg8,
    title: "Lorem ipsum dolor sit amet.",
    old_price: 120,
    new_price: 100,
    aosDelay: "1600",
  },
  {
    id: 38,
    img: SpecialProductImg9,
    title: "Lorem ipsum dolor sit amet.",
    old_price: 120,
    new_price: 100,
    aosDelay: "1800",
  },
  {
    id: 39,
    img: SpecialProductImg10,
    title: "Lorem ipsum dolor sit amet.",
    old_price: 120,
    new_price: 100,
    aosDelay: "2000",
  },
];

export const SpecialProductListAll = SpecialProducList;


const shoes_product = [
  {
    id: 40,
    name: "Nike Shoes",
    image: shoe1,
    new_price: 90.0,
    old_price: 120.0,
  },
  {
    id: 41,
    name: "Nike Shoes",
    image: shoe2,
    new_price: 200.0,
    old_price: 320.0,
  },
  {
    id: 42,
    name: "Nike Shoes",
    image: shoe3,
    new_price: 100.0,
    old_price: 120.0,
  },
  {
    id: 43,
    name: "Nike Shoes",
    image: shoe4,
    new_price: 120.0,
    old_price: 150.0,
  },
  {
    id: 44,
    name: "Nike Shoes",
    image: shoe5,
    new_price: 250.0,
    old_price: 500.0,
  },
];

const Men = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,  
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="w-full py-10 px-8 pt-20  max-[768px]:p-0 max-[768px]:pt-20">
      <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] mb-4 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 bg-gradient-to-br from-pink-300 via-transparent to-blue-300">
        {/* background pattern */}
        {/* hero section */}
        <div className="container pb-8 sm:pb-0 p-10">
          <Slider {...settings}>
            {ImageList.map((data) => (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content section */}
                  <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {data.title}
                    </h1>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="100"
                      className="text-sm"
                    >
                      {data.description}
                    </p>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    ></div>
                  </div>
                  {/* image section */}
                  <div className="order-1 sm:order-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="relative z-10"
                    >
                      <img
                        src={data.img}
                        alt=""
                        className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* NEW PRODUCTS */}

      <h2 className="p-1 border-b-2 border-gray-500 text-3xl" data-aos="fade-up">
        New Products
      </h2>
      <div
        className="px-1 flex justify-center flex-wrap bg-gradient-to-r from-orange-500 to-purple-400 via-blue-400 mb-4"
        data-aos="fade-up"
        data-aos-offset="10"
        data-aos-delay="50"
        data-aos-duration="700"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-anchor-placement="top-center"
      >
        {ProductList.map((data) => (
          <div
            className="p-5"
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
          >
            <Link className="w-48 h-64 bg-slate-100 " to={`/singlePage/${data.id}`}>
              <img
                src={data.img}
                alt="image"
                className="w-full h-40 object-contain mb-2"
              />
              <p className="text-xs text-center">{data.title}</p>
              <p className="text-center text-amber-800">&#8377;{data.price}</p>
              <div className="flex justify-center">
                <button className="text-[10px] flex items-center bg-red-500 text-white p-1 px-3 hover:bg-red-800 duration-300">
                  <FaShoppingCart /> Add to cart
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* SPECIAL PRODUCT */}

      <h2 className="border-b-2 p-1 border-gray-600 text-3xl" data-aos="fade-up">
        Special Products
      </h2>
      <div className="flex flex-wrap  justify-center bg-gradient-to-r from-yellow-400 via-green-400 to-blue-500 mb-4">
        {SpecialProducList.map((data) => (
          <div
            className="p-5"
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
          >
            <Link className="w-48 h-64 bg-slate-100" to={`/singlePage/${data.id}`}>
              <img
                src={data.img}
                alt="image"
                className="w-full h-40 object-contain mb-2"
              />
              <p className="text-xs text-center">{data.title}</p>
              <p className="text-center text-amber-800">&#8377;
                {data.old_price} {' '}
                <span className="line-through">&#8377;{data.new_price}</span>
              </p>
              <div className="flex justify-center">
                <button className="text-[10px] flex items-center  bg-red-500 text-white p-1 px-3 hover:bg-red-800 duration-300">
                  <FaShoppingCart /> Add to cart
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* SHOES_SECTION */}
      <h2 className="border-b-2 p-1 border-gray-600 mb-5" data-aos="fade-up">
        Shoes
      </h2>
      <div className="flex flex-wrap gap-5 justify-center mb-3" data-aos="fade-up">
        {shoes_product.map((data) => (
          <div className ="w-[38rem] h-[25rem] bg-slate-600 flex p-10 bg-[url('https://www.dropbox.com/s/fuadz3vmw2nsylm/bg.png?raw=1')] bg-cover bg-no-repeat bg-center max-[680px]:h-auto max-[3120px]:p-4">
            <div className="w-full h-full flex bg-slate-700 max-[680px]:flex-col">
              <div dir="rtl" className="w-1/2  bg-orange-500 rounded-s-[50%] max-[680px]:w-[100%]">
                <div className="flex">
                  <img className="mt-2" src={data.image} alt="image" />
                </div>
              </div>
              <div className="w-1/2 bg-slate-700 p-5 max-[680px]:w-[100%]">
                <div className="flex justify-between text-center items-center">
                  <p className=" text-lg text-orange-600 font-bold ">
                    {data.name}
                  </p>
                  <div className="text-white flex">
                    <FaSearch className="mr-3" />
                    <FaUser className="mr-3" />
                    <FaShoppingCart />
                  </div>
                </div>
                <div className="pt-14 flex flex-col gap-4">
                  <p className="text-white">Winter Collection</p>
                  <h1 className="text-white text-xl whitespace-nowrap font-bold">
                    Men Black Sneakers
                  </h1>
                  <div className="flex items-center font-bold">
                    <p className="text-white mr-7 text-xl">${data.new_price}</p>
                    <p className="text-white line-through ">
                      ${data.old_price}
                    </p>
                  </div>
                  <div className="flex justify-between text-xs text-white mt-3">
                    <p>SIZE</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                  </div>
                  <div className="flex justify-between text-xs text-white">
                    <p className="flex items-center">
                      <FaShoppingBag className="mr-4" /> Buy Now
                    </p>
                    <p className="flex items-center">
                      <FaCartPlus className="mr-4" /> Added to Cart{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
AOS.init();
export default Men;
