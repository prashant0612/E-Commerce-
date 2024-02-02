import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiLock } from "react-icons/ci";
import { MdEmojiTransportation } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";

import bg1 from "./images/slider/sale.png";
import bg2 from "./images/slider/shoe.png";
import bg3 from "./images/slider/men1.png";
import bg4 from "./images/slider/shopping.png";
import bg5 from "./images/slider/women.png";

import womenImg1 from "./images/women/women.png";
import womenImg2 from "./images/women/women2.jpg";
import womenImg3 from "./images/women/women3.jpg";
import womenImg4 from "./images/women/women4.jpg";

import kidImg1 from "./images/kids/kid-img1.jpg";
import kidImg2 from "./images/kids/kid-img2.jpg";
import kidImg3 from "./images/kids/kid-img3.jpg";
import kidImg4 from "./images/kids/kid-img4.jpg";
import kidImg5 from "./images/kids/kid-img5.jpg";
import kidImg6 from "./images/kids/kid-img6.jpg";

import tshirt from "./images/tshirt/shirt.png";
import tshirt2 from "./images/tshirt/shirt2.png";
import tshirt3 from "./images/tshirt/shirt3.png";

const WomenProduct = [
  {
    id: 1,
    img: womenImg1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: womenImg2,
    title: "Women western",
    rating: 5.0,
    color: "red",
    aosDelay: "0",
  },
  {
    id: 3,
    img: womenImg3,
    title: "Goggles",
    rating: 5.0,
    color: "brown",
    aosDelay: "0",
  },
  {
    id: 4,
    img: womenImg4,
    title: "Printed T-shirt",
    rating: 5.0,
    color: "yellow",
    aosDelay: "0",
  },
  {
    id: 5,
    img: womenImg2,
    title: "Printed T-shirt",
    rating: 5.0,
    color: "yellow",
    aosDelay: "0",
  },
];

const KidsProduct = [
  {
    id: 1,
    img: kidImg1,
    star: "⭐⭐⭐⭐",
    name: "Product 1",
    price: 454,
  },
  {
    id: 2,
    img: kidImg6,
    star: "⭐⭐⭐",
    name: "Product 2",
    price: 712,
  },
  {
    id: 3,
    img: kidImg3,
    star: "⭐⭐⭐⭐⭐",
    name: "Product 3",
    price: 534,
  },
  {
    id: 4,
    img: kidImg4,
    star: "⭐⭐⭐",
    name: "Product 4",
    price: 626,
  },
  {
    id: 5,
    img: kidImg5,
    star: "⭐⭐⭐⭐",
    name: "Product 5",
    price: 804,
  },
];

const ImageList = [
  {
    id: 1,
    img: bg1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: bg2,
    title: "30% off on all Shoes Wear",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: bg3,
    title: "70% off on all Products Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    img: bg4,
    title: "70% off on kids Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    img: bg5,
    title: "70% off on all Women Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const MenProducts = [
  {
    id: 1,
    img: tshirt,
    title: "Casual Wear",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
  },
  {
    id: 2,
    img: tshirt2,
    title: "Printed Shirt",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
  },
  {
    id: 3,
    img: tshirt3,
    title: "Women Wear",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
  },
];

const Shop = () => {
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
    <div className="p-10 py-0 pt-20 max-[768px]:pt-20 max-[768px]:p-0">
      {/* SLIDER-PART */}
      <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 mb-10 bg-gradient-to-br from-pink-300 via-transparent to-blue-300">
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

      {/* WOMEN-SECTION */}

      <div className="mb-8">
        <h4 className="text-center text-yellow-500">
          TOP SELLING PRODUCTS FOR YOU
        </h4>
        <h2 className="text-center text-2xl font-bold">Women Products</h2>
        <p className="text-center text-gray-500 mb-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex flex-wrap justify-around ">
          {WomenProduct.map((data) => (
            <div className="mb-6 p-4 shadow-xl cursor-pointer hover:scale-[1.04] transition 0.3s ease-linear">
              <div className="w-44 h-52 mb-3">
                <img
                  src={data.img}
                  alt="img"
                  className="w-full h-full bg-contain  rounded-lg"
                />
              </div>
              <p className="font-bold">{data.title}</p>
              <p className="text-gray-400">{data.color}</p>
              <span className="flex justify-between">
                <div className="flex items-center text-[18px]">
                  <p className="text-yellow-500 text-2xl">&#9733;</p>
                  <p>{data.rating}</p>
                </div>
                <button className="text-xs bg-red-600 text-white px-2 p-1 rounded-lg font-bold">
                  Add to Cart
                </button>
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-center text-center mt-3">
          <button className="bg-yellow-500 p-2 rounded-md px-4 text-white font-bold">
            View All Products
          </button>
        </div>
      </div>

      {/* KIDS-SECTION */}
      <div className=" my-20">
        <h4 className="text-center text-yellow-500">
          TOP SELLING PRODUCTS FOR YOU
        </h4>
        <h2 className="text-center text-2xl font-bold">Kid Products</h2>
        <p className="text-center text-gray-500 mb-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex justify-around flex-wrap h-auto">
          {KidsProduct.map((data) => (
            <div className="w-48 shadow-2xl p-3 flex flex-col cursor-pointer hover:scale-[1.04] transition ease-linear mb-6">
              <div className="w-40 h-[70%] p-2">
                <img src={data.img} alt="kid" className=" w-full h-full " />
              </div>
              <div className="">
                <span className="flex  items-center justify-between mt-2">
                  <p>{data.name}</p>
                  <CiHeart className="text-2xl " />
                </span>
                <span className="flex text-yellow-400 text-xl">
                  <p>{data.star}</p>
                </span>
                <div className="flex justify-between mt-2">
                  <p>&#8377;{data.price}</p>
                  <button className="text-xs bg-red-600 text-white px-2 p-2 rounded-lg font-bold ">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MEN-SECTION */}
      <div className="mb-8">
        <p className="text-yellow-500 text-center">
          Top Rated Products for you
        </p>
        <h1 className="font-bold text-2xl text-center">Men Products</h1>
        <p className="text-gray-400 text-sm mb-4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="flex justify-around flex-wrap">
          {MenProducts.map((data) => (
            <div className="w-72  flex flex-col mb-8 relative mt-32  rounded-2xl shadow-2xl cursor-pointer group ">
              <div className="bg-white flex w-full justify-center items-center group-hover:scale-[1.1] transition duration-150">
                <img
                  src={data.img}
                  alt="img"
                  className="h-46 flex w-36 absolute"
                />
              </div>
              <div className="bg-white text-center pt-28 hover:bg-black transition duration-[0.5] ease-linear rounded-2xl px-3">
                <span className=" flex justify-center text-yellow-400 font-bold">
                  <p>&#9733;</p>
                  <p>&#9733;</p>
                  <p>&#9733;</p>
                  <p>&#9733;</p>
                </span>
                <h1 className="text-xl font-bold group-hover:text-white ">
                  {data.title}
                </h1>
                <p className="text-gray-400 mb-2 text-sm group-hover:text-white">
                  {data.description}
                </p>
                <button className="bg-yellow-500 p-1 px-3 rounded-2xl mb-5 text-white group-hover:bg-gray-100 group-hover:text-black font-bold">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Winter-Sale */}
      <div className="w-full flex p-10 justify-around max-[950px]:p-0 max-[600px]:flex-col max-[600px]:items-center max-[600px]:p-0 max-[600px]:mb-6">
        <div className="w-[25%] h-72 shadow-3xl max-[950px]:w-[40%] max-[750px]:h-80 max-[600px]:h-60 max-[600px]:mb-8 max-[600px]:w-[50%]">
          <img src={womenImg2} alt="img" className="w-full h-full" />
        </div>
        <div className="w-[45%] max-[600px]:w-[60%]">
          <h1 className="text-2xl font-bold">Winter Sale upto 50% Off</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
            nostrum doloribus nulla eius neque nam?
          </p>
          <div className="flex align-middle items-center">
            <span className="w-10 h-10 rounded-full bg-purple-200 p-[10px]">
              <CiLock className=" w-full h-full text-xl" />
            </span>
            <p className=" m-4"> Quality Products</p>
          </div>
          <div className="flex align-middle items-center">
            <span className="w-10 h-10 rounded-full bg-orange-200 p-[10px]">
              <MdEmojiTransportation className=" w-full h-full text-xl" />
            </span>
            <p className=" m-4"> Fast Delivery</p>
          </div>
          <div className="flex align-middle items-center">
            <span className="w-10 h-10 rounded-full bg-green-200 p-[10px]">
              <MdOutlinePayment className=" w-full h-full text-xl" />
            </span>
            <p className=" m-4"> Easy Payment Method</p>
          </div>
          <div className="flex align-middle items-center">
            <span className="w-10 h-10 rounded-full bg-yellow-200 p-[10px]">
              <BiSolidOffer className=" w-full h-full text-xl" />
            </span>
            <p className=" m-4"> Get Offers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
