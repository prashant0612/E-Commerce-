import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

import offer1 from "./Images/offer/offer1.jpg";
import offer2 from "./Images/offer/offer2.jpg";
import offer3 from "./Images/offer/offer3.jpg";

import toyImg1 from "./Images/toy/toyImg1.jpg";
import toyImg2 from "./Images/toy/toyImg2.jpg";
import toyImg3 from "./Images/toy/toyImg3.jpg";
import toyImg4 from "./Images/toy/toyImg--4.jpg";
import toyImg5 from "./Images/toy/toyImg5.jpg";
import toyImg6 from "./Images/toy/toyImg6.jpg";

import kidImg1 from "./Images/clothes/kid-img1.jpg";
import kidImg2 from "./Images/clothes/kid-img2.jpg";
import kidImg3 from "./Images/clothes/kid-img3.jpg";
import kidImg4 from "./Images/clothes/kid-img4.jpg";
import kidImg5 from "./Images/clothes/kid-img5.jpg";
import kidImg6 from "./Images/clothes/kid-img6.jpg";
import kidImg7 from "./Images/clothes/kid-img7.jpg";
import kidImg8 from "./Images/clothes/kid-img8.jpg";
import kidImg9 from "./Images/clothes/kid-img9.jpg";
import kidImg10 from "./Images/clothes/kid-img10.jpg";
import kidImg11 from "./Images/clothes/kid-img11.jpg";
import kidImg12 from "./Images/clothes/kid-img12.jpg";
import kidImg13 from "./Images/clothes/kid-img13.jpg";
import kidImg14 from "./Images/clothes/kid-img14.jpg";
import kidImg15 from "./Images/clothes/kid-img15.jpg";

import bannerImg1 from "./Images/banner/bannerImg1.png";
import bannerImg2 from "./Images/banner/bannerImg2.png";
import bannerImg3 from "./Images/banner/bannerImg--3.png";
import bannerImg4 from "./Images/banner/bannerImg4.png";

import teddyImg1 from "./Images/teddy/teddyImg1.jpg";
import teddyImg2 from "./Images/teddy/teddyImg2.jpg";
import teddyImg3 from "./Images/teddy/teddyImg3.jpg";
import teddyImg4 from "./Images/teddy/teddyImg4.jpg";
import teddyImg5 from "./Images/teddy/teddyImg5.jpg";
import teddyImg6 from "./Images/teddy/teddyImg6.jpg";
import teddyImg7 from "./Images/teddy/teddyImg7.jpg";

const ImageList = [
  {
    id: 1,
    img: offer1,
    title: "Upto 30% off on all Kids's Wear",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: offer2,
    title: "40% off on all products",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: offer3,
    title: "50% off on all Products Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const toyList = [
  {
    id: 1,
    img: toyImg1,
    title: "Toy Product 1",
    price: 282,
  },
  {
    id: 2,
    img: toyImg2,
    title: "Toy Product 2",
    price: 512,
  },
  {
    id: 3,
    img: toyImg3,
    title: "Toy Product 3",
    price: 702,
  },
  {
    id: 4,
    img: toyImg4,
    title: "Toy Product 4",
    price: 414,
  },
  {
    id: 5,
    img: toyImg5,
    title: "Toy Product 5",
    price: 596,
  },
  {
    id: 6,
    img: toyImg6,
    title: "Toy Product 6",
    price: 385,
  },
];

const costumeList = [
  {
    id: 1,
    img: kidImg1,
    title: "costume1",
    price: 320,
    aosDelay: 200,
    transition: "fade-down",
  },
  {
    id: 2,
    img: kidImg2,
    title: "costume2",
    price: 520,
    aosDelay: 400,
    transition: "flip-down",
  },
  {
    id: 3,
    img: kidImg3,
    title: "costume3",
    price: 512,
    aosDelay: 600,
    transition: "zoom-in-up",
  },
  {
    id: 4,
    img: kidImg4,
    title: "costume4",
    price: 641,
    aosDelay: 800,
    transition: "fade-left",
  },
  {
    id: 5,
    img: kidImg5,
    title: "costume5",
    price: 520,
    aosDelay: 1000,
    transition: "zoom-out-up",
  },
  {
    id: 6,
    img: kidImg6,
    title: "costume6",
    price: 742,
    aosDelay: 1200,
    transition: "flip-left",
  },
  {
    id: 7,
    img: kidImg7,
    title: "costume7",
    price: 699,
    aosDelay: 1400,
    transition: "fade-right",
  },
  {
    id: 8,
    img: kidImg8,
    title: "costume8",
    price: 450,
    aosDelay: 1600,
    transition: "zoom-in-up",
  },
  {
    id: 9,
    img: kidImg9,
    title: "costume9",
    price: 597,
    aosDelay: 1800,
    transition: "fade-down-right",
  },
  {
    id: 10,
    img: kidImg10,
    title: "costume10",
    price: 432,
    aosDelay: 2000,
    transition: "zoom-in",
  },
  {
    id: 11,
    img: kidImg11,
    title: "costume11",
    price: 612,
    aosDelay: 2200,
    transition: "fade-up",
  },
  {
    id: 12,
    img: kidImg12,
    title: "costume12",
    price: 512,
    aosDelay: 2400,
    transition: "flip-down",
  },
  {
    id: 13,
    img: kidImg13,
    title: "costume13",
    price: 699,
    aosDelay: 2600,
    transition: "flip-left",
  },
  {
    id: 14,
    img: kidImg14,
    title: "costume14",
    price: 475,
    aosDelay: 2800,
    transition: "zoom-out-right",
  },
  {
    id: 15,
    img: kidImg15,
    title: "costume15",
    price: 498,
    aosDelay: 3000,
    transition: "fade-down",
  },
];

const teddyList =[
  {
    id:1,
    img:teddyImg1,
    title:"Teddy1",
    price:454
  },
  {
    id:2,
    img:teddyImg2,
    title:"Teddy3",
    price:504
  },
  {
    id:3,
    img:teddyImg3,
    title:"Teddy3",
    price:672
  },
  {
    id:4,
    img:teddyImg4,
    title:"Teddy4",
    price:642
  },
  {
    id:5,
    img:teddyImg5,
    title:"Teddy5",
    price:714
  },
  {
    id:6,
    img:teddyImg6,
    title:"Teddy6",
    price:767
  },
  {
    id:7,
    img:teddyImg7,
    title:"Teddy7",
    price:702
  },
]

const Kids = () => {
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
    <div className="w-full py-10 px-8 pt-20 max-[450px]:p-0">
      <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px]  flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 bg-gradient-to-br from-pink-300 via-transparent to-blue-300">
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
                      className="text-5xl sm:text-5xl lg:text-7xl font-bold"
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
                        className="w-[300px] h-[300px] sm:h-[350px] sm:w-[350px] sm:scale-105 lg:scale-120 object-contain mx-auto max-[1040px]:sm:w-[250px] max-[680px]:sm:w-[200px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* FOR TOYS */}
      <div className="my-10">
        <h1 className="border-b-2 border-black mb-6 text-3xl">TOYS</h1>
        <div className="flex justify-center px-1 gap-10 flex-wrap">
          {toyList.map((data) => (
            <div
              className="w-48 shadow-2xl p-2"
              data-aos="flip-down"
              data-aos-delay="200"
            >
              <div className=" w-46 h-[67%]">
                <img src={data.img} alt="image" className=" w-full h-full" />
              </div>
              <div className="flex items-center justify-between mt-4">
                <p className="font-bold">{data.title}</p>
                <CiHeart className="text-xl" />
              </div>
              <div className="flex justify-between mt-4 items-center">
                <p>&#8377;{data.price}</p>
                <button className="bg-red-600 text-white p-1 px-2 font-bold">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COSTUMES */}

      <h2 className="p-1 border-b-2 border-gray-500 mt-8 text-3xl" data-aos="fade-up">
        Women Watches
      </h2>
      <div
        className="px-1 flex flex-wrap justify-center bg-gradient-to-r from-yellow-400 via-green-400 to-blue-500"
        data-aos="fade-up"
        data-aos-offset="10"
        data-aos-delay="30"
        data-aos-duration="700"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-anchor-placement="top-center"
      >
        {costumeList.map((data) => (
          <div
            className="p-5 mb-5"
            data-aos={data.transition}
            data-aos-delay={data.aosDelay}
          >
            <div className="w-48 h-64 bg-white shadow-xl">
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
            </div>
          </div>
        ))}
      </div>

      {/* FOR-BANNER */}

      <div className="w-full bg-pink-200 flex p-8 mt-10  items-center gap-4 max-[650px]:flex-col">
        <div className="flex items-center  w-[40%] max-[650px]:w-[80%]" data-aos="zoom-in-right" data-aos-delay="200">
          <span className="w-64 flex flex-col items-center">
            <img src={bannerImg1} alt="img" />
            <img src={bannerImg2} alt="img" />
          </span>
          <span className="w-64 flex flex-col items-center">
            <img src={bannerImg3} alt="img" className="w-40"/>
            <img src={bannerImg4} alt="img" />
          </span>
        </div>

        <div className="w-[60%] text-center flex flex-col justify-around max-[650px]:w-[80%]" data-aos="fade-up" data-aos-delay="400">
          <h1 className="text-4xl font-bold mb-2">Upto 30% off on all Kids's Wear</h1>
          <p className=" ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum aperiam quam, sed culpa veritatis fugiat aspernatur aut. Consectetur cumque, laborum facilis eum eveniet nulla dolor rem veniam tempora dicta!</p>
          <span className="mt-4 flex justify-center items-center max-[360px]:flex-col max-[360px]:gap-4">
            <button className="bg-sky-300 p-2 px-4 rounded-xl shadow-button-shadow font-bold  hover:scale-[0.93] transition 0.4 ease-linear ">About</button>
            <button className="ml-10 bg-orange-300 p-2 px-4 rounded-xl shadow-button-shadow hover:scale-[0.93] transition 0.4 ease-linear max-[360px]:ml-0">Shop Now</button>
          </span>
        </div>
      </div>

      {/* TEDDY-SECTION */}

      <h2 className="p-1 border-b-2 border-gray-500 mt-8 text-3xl" data-aos="fade-up">
        Teddy Section
      </h2>
      <div
        className="px-1 flex flex-wrap gap-10 justify-center mt-3 bg-gradient-to-r from-orange-500 to-purple-400 via-blue-400"
        data-aos="fade-up"
        data-aos-offset="10"
        data-aos-delay="30"
        data-aos-duration="700"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-anchor-placement="top-center"
      >
        {teddyList.map((data) => (
          <div
            className="p-5 mb-5 "
            data-aos="flip-left"
            data-aos-delay="400"
          >
            <div className="w-48 h-64 bg-white shadow-xl max-[560px]:w-60">
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
            </div>
          </div>
        ))}
      </div>










    </div>
  );
};

export default Kids;
