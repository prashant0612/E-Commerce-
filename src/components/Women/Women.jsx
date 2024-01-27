import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import offer1 from "./images/banners/offer1.jpg";
import offer2 from "./images/banners/offer2.jpg";
import offer3 from "./images/banners/offer3.jpg";

import dressImg1 from "./images/women_dress/img1.jpeg";
import dressImg2 from "./images/women_dress/img2.jpeg";
import dressImg3 from "./images/women_dress/img3.jpeg";
import dressImg4 from "./images/women_dress/img4.jpeg";
import dressImg5 from "./images/women_dress/img5.jpeg";

import footwearImg1 from "./images/women_footwear/img1.jpeg";
import footwearImg2 from "./images/women_footwear/img2.jpeg";
import footwearImg3 from "./images/women_footwear/img3.jpeg";
import footwearImg4 from "./images/women_footwear/img4.jpeg";
import footwearImg5 from "./images/women_footwear/img5.jpeg";

import handbagsImg1 from "./images/women_handbags/img1.jpeg";
import handbagsImg2 from "./images/women_handbags/img2.jpeg";
import handbagsImg3 from "./images/women_handbags/img3.jpeg";
import handbagsImg4 from "./images/women_handbags/img4.jpeg";
import handbagsImg5 from "./images/women_handbags/img5.jpeg";

import sweaterImg1 from "./images/women_sweaters/img1.jpeg";
import sweaterImg2 from "./images/women_sweaters/img2.jpeg";
import sweaterImg3 from "./images/women_sweaters/img3.jpeg";
import sweaterImg4 from "./images/women_sweaters/img4.jpeg";
import sweaterImg5 from "./images/women_sweaters/img5.jpeg";

import watchesImg1 from "./images/women_watches/img1.jpeg";
import watchesImg2 from "./images/women_watches/img2.jpeg";
import watchesImg3 from "./images/women_watches/img3.jpeg";
import watchesImg4 from "./images/women_watches/img4.jpeg";
import watchesImg5 from "./images/women_watches/img5.jpeg";

import makeupImg1 from "./images/makeup/img1.jpeg";
import makeupImg2 from "./images/makeup/img2.jpeg";
import makeupImg3 from "./images/makeup/img3.jpeg";
import makeupImg4 from "./images/makeup/img4.jpeg";
import makeupImg5 from "./images/makeup/img5.jpeg";
import makeupImg6 from "./images/makeup/img6.jpeg";
import makeupImg7 from "./images/makeup/img7.jpeg";

import jewelleryImg1 from "./images/jewellery/img1.jpeg";
import jewelleryImg2 from "./images/jewellery/img2.jpeg";
import jewelleryImg3 from "./images/jewellery/img3.jpeg";
import jewelleryImg4 from "./images/jewellery/img4.jpeg";

import spectImg1 from "./images/women_spectacles/spectImg1.jpg";
import spectImg2 from "./images/women_spectacles/spectImg2.jpg";
import spectImg3 from "./images/women_spectacles/spectImg3.jpg";
import spectImg4 from "./images/women_spectacles/spectImg4.jpg";

import beltImg1 from "./images/women_belt/beltImg1.jpg";
import beltImg2 from "./images/women_belt/beltImg2.jpg";
import beltImg3 from "./images/women_belt/beltImg3.jpg";
import beltImg4 from "./images/women_belt/beltImg4.jpg";

import { FaShoppingCart } from "react-icons/fa";

const ImageList = [
  {
    id: 1,
    img: offer1,
    title: "Upto 30% off on all Women's Wear",
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

const WomenDressList = [
  {
    id: 1,
    img: dressImg1,
    title: "Lorem ipsum dolor",
    price: "$100",
    aosDelay: "0",
  },
  {
    id: 2,
    img: dressImg2,
    title: "Lorem ipsum dolor",
    price: "$120",
    aosDelay: "200",
  },
  {
    id: 3,
    img: dressImg3,
    title: "Lorem ipsum dolor",
    price: "$130",
    aosDelay: "400",
  },
  {
    id: 4,
    img: dressImg4,
    title: "Lorem ipsum dolor",
    price: "$90",
    aosDelay: "600",
  },
  {
    id: 5,
    img: dressImg5,
    title: "Lorem ipsum dolor",
    price: "$200",
    aosDelay: "800",
  },
];

const womenFootwearList = [
  {
    id: 1,
    img: footwearImg1,
    title: "Lorem ipsum dolor sit amet.",
    old_price: "$120",
    new_price: "$100",
    aosDelay: "0",
  },
  {
    id: 2,
    img: footwearImg2,
    title: "Lorem ipsum dolor sit amet.",
    old_price: "$120",
    new_price: "$100",
    aosDelay: "200",
  },
  {
    id: 3,
    img: footwearImg3,
    title: "Lorem ipsum dolor sit amet.",
    old_price: "$120",
    new_price: "$100",
    aosDelay: "400",
  },
  {
    id: 4,
    img: footwearImg4,
    title: "Lorem ipsum dolor sit amet.",
    old_price: "$120",
    new_price: "$100",
    aosDelay: "800",
  },
  {
    id: 5,
    img: footwearImg5,
    title: "Lorem ipsum dolor sit amet.",
    old_price: "$120",
    new_price: "$100",
    aosDelay: "1000",
  },
];
const womenHandbagsList = [
  {
    id: 1,
    img: handbagsImg1,
    title: "Lorem ipsum dolor sit amet.",
    price: "$100",
    aosDelay: "0",
  },
  {
    id: 2,
    img: handbagsImg2,
    title: "Lorem ipsum dolor sit amet.",
    price: "$200",
    aosDelay: "200",
  },
  {
    id: 3,
    img: handbagsImg3,
    title: "Lorem ipsum dolor sit amet.",
    price: "$120",
    aosDelay: "400",
  },
  {
    id: 4,
    img: handbagsImg4,
    title: "Lorem ipsum dolor sit amet.",
    price: "$120",
    aosDelay: "800",
  },
  {
    id: 5,
    img: handbagsImg5,
    title: "Lorem ipsum dolor sit amet.",
    price: "$120",
    aosDelay: "1000",
  },
];
const womenSweatersList = [
  {
    id: 1,
    img: sweaterImg1,
    title: "Lorem ipsum dolor sit amet.",
    old_price: "$120",
    new_price: "$100",
    aosDelay: "0",
  },
  {
    id: 2,
    img: sweaterImg2,
    title: "Lorem ipsum dolor sit amet.",
    old_price: "$120",
    new_price: "$100",
    aosDelay: "200",
  },
  {
    id: 3,
    img: sweaterImg3,
    title: "Lorem ipsum dolor sit amet.",
    old_price: "$120",
    new_price: "$100",
    aosDelay: "400",
  },
  {
    id: 4,
    img: sweaterImg4,
    title: "Lorem ipsum dolor sit amet.",
    old_price: "$120",
    new_price: "$100",
    aosDelay: "800",
  },
  {
    id: 5,
    img: sweaterImg5,
    title: "Lorem ipsum dolor sit amet.",
    old_price: "$120",
    new_price: "$100",
    aosDelay: "1000",
  },
];
const womenWatchesList = [
  {
    id: 1,
    img: watchesImg1,
    title: "Lorem ipsum dolor sit amet.",
    price: "$120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: watchesImg2,
    title: "Lorem ipsum dolor sit amet.",
    price: "$100",
    aosDelay: "200",
  },
  {
    id: 3,
    img: watchesImg3,
    title: "Lorem ipsum dolor sit amet.",
    price: "$140",
    aosDelay: "400",
  },
  {
    id: 4,
    img: watchesImg4,
    title: "Lorem ipsum dolor sit amet.",
    price: "$120",
    aosDelay: "800",
  },
  {
    id: 5,
    img: watchesImg5,
    title: "Lorem ipsum dolor sit amet.",
    price: "$100",
    aosDelay: "1000",
  },
];

const makeupList = [
  {
    id: 1,
    img: makeupImg1,
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    img: makeupImg2,
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 3,
    img: makeupImg3,
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 4,
    img: makeupImg4,
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 5,
    img: makeupImg5,
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 6,
    img: makeupImg6,
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 7,
    img: makeupImg7,
    title: "Lorem ipsum dolor sit amet.",
  },
];

const jewelleryList = [
  {
    id: 1,
    img: jewelleryImg1,
    title: "Jewellery",
  },
  {
    id: 2,
    img: jewelleryImg2,
    title: "Jewellery",
  },
  {
    id: 3,
    img: jewelleryImg3,
    title: "Jewellery",
  },
  {
    id: 4,
    img: jewelleryImg4,
    title: "Jewellery",
  },
];

const spectList = [
  {
    id: 1,
    img:spectImg1,
    title: "Spect",
  },
  {
    id: 2,
    img:spectImg2,
    title: "Spect",
  },
  {
    id: 3,
    img:spectImg3,
    title: "Spect",
  },
  {
    id: 4,
    img:spectImg4,
    title: "Spect",
  }
];

const beltList =[
  {
    id:1,
    img:beltImg1,
    title:"Belt"
  },
  {
    id:2,
    img:beltImg2,
    title:"Belt"
  },
  {
    id:3,
    img:beltImg3,
    title:"Belt"
  },
  {
    id:4,
    img:beltImg4,
    title:"Belt"
  },
];

const Women = () => {
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
    <div className="w-full py-10 px-8 pt-20">
      <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
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

      {/* Women Dress*/}

      <h2 className="p-1 border-b-2 border-gray-500 mt-8" data-aos="fade-up">
        Women Dress
      </h2>
      <div
        className="px-1 flex justify-between flex-wrap "
        data-aos="fade-up"
        data-aos-offset="10"
        data-aos-delay="50"
        data-aos-duration="700"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-anchor-placement="top-center"
      >
        {WomenDressList.map((data) => (
          <div
            className="p-5"
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
          >
            <div className="w-48 h-64 bg-white shadow-xl">
              <img
                src={data.img}
                alt="image"
                className="w-full h-40 object-contain mb-2"
              />
              <p className="text-xs text-center">{data.title}</p>
              <p className="text-center text-amber-800">{data.price}</p>
              <div className="flex justify-center">
                <button className="text-[10px] flex items-center bg-red-500 text-white p-1 px-3 hover:bg-red-800 duration-300">
                  <FaShoppingCart /> Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Women Footwear */}

      <h2 className="border-b-2 p-1 border-gray-600 mt-8" data-aos="fade-up">
        Women Footwear
      </h2>
      <div className="flex flex-wrap justify-between">
        {womenFootwearList.map((data) => (
          <div
            className="p-5"
            data-aos="flip-left"
            data-aos-delay={data.aosDelay}
          >
            <div className="w-48 h-64 bg-white shadow-xl">
              <img
                src={data.img}
                alt="image"
                className="w-full h-40 object-contain mb-2"
              />
              <p className="text-xs text-center">{data.title}</p>
              <p className="text-center text-amber-800">
                {data.old_price}{" "}
                <span className="line-through">{data.new_price}</span>
              </p>
              <div className="flex justify-center">
                <button className="text-[10px] flex items-center  bg-red-500 text-white p-1 px-3 hover:bg-red-800 duration-300">
                  <FaShoppingCart /> Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Women handbags */}

      <h2 className="p-1 border-b-2 border-gray-500 mt-8" data-aos="fade-up">
        Women Handbags
      </h2>
      <div
        className="px-1 flex justify-between flex-wrap gap-6"
        data-aos="fade-up"
        data-aos-offset="10"
        data-aos-delay="50"
        data-aos-duration="700"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-anchor-placement="top-center"
      >
        {womenHandbagsList.map((data) => (
          <div
            className="p-5"
            data-aos="fade-right"
            data-aos-delay={data.aosDelay}
          >
            <div className="w-48 h-64 bg-white shadow-xl">
              <img
                src={data.img}
                alt="image"
                className="w-full h-40 object-contain mb-2"
              />
              <p className="text-xs text-center">{data.title}</p>
              <p className="text-center text-amber-800">{data.price}</p>
              <div className="flex justify-center">
                <button className="text-[10px] flex items-center bg-red-500 text-white p-1 px-3 hover:bg-red-800 duration-300">
                  <FaShoppingCart /> Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* makeup */}
      <h1 className="mt-8 text-2xl">50% off | Makeup essentials</h1>
      <div
        className=" mt-4  flex flex-wrap justify-around p-8 shadow-2xl"
        data-aos="fade-right"
        data-aos-offset="10"
        data-aos-delay="50"
        data-aos-duration="700"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-anchor-placement="top-center"
      >
        {makeupList.map((data) => (
          <div className="">
            <img
              src={data.img}
              alt="image"
              className="w-full h-40 object-contain mb-2"
            />
          </div>
        ))}
      </div>

      {/* Women Sweaters */}

      <h2 className="border-b-2 p-1 mt-8 border-gray-600" data-aos="fade-up">
        Women Sweaters
      </h2>
      <div className="flex flex-wrap justify-between">
        {womenSweatersList.map((data) => (
          <div
            className="p-5"
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
          >
            <div className="w-48 h-64 bg-white shadow-xl">
              <img
                src={data.img}
                alt="image"
                className="w-full h-40 object-contain mb-2"
              />
              <p className="text-xs text-center">{data.title}</p>
              <p className="text-center text-amber-800">
                {data.old_price}{" "}
                <span className="line-through">{data.new_price}</span>
              </p>
              <div className="flex justify-center">
                <button className="text-[10px] flex items-center  bg-red-500 text-white p-1 px-3 hover:bg-red-800 duration-300">
                  <FaShoppingCart /> Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Women Watches */}

      <h2 className="p-1 border-b-2 border-gray-500 mt-8" data-aos="fade-up">
        Women Watches
      </h2>
      <div
        className="px-1 flex flex-wrap justify-between"
        data-aos="fade-up"
        data-aos-offset="10"
        data-aos-delay="30"
        data-aos-duration="700"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-anchor-placement="top-center"
      >
        {womenWatchesList.map((data) => (
          <div
            className="p-5"
            data-aos="zoom-in-down"
            data-aos-delay={data.aosDelay}
          >
            <div className="w-48 h-64 bg-white shadow-xl">
              <img
                src={data.img}
                alt="image"
                className="w-full h-40 object-contain mb-2"
              />
              <p className="text-xs text-center">{data.title}</p>
              <p className="text-center text-amber-800">{data.price}</p>
              <div className="flex justify-center">
                <button className="text-[10px] flex items-center bg-red-500 text-white p-1 px-3 hover:bg-red-800 duration-300">
                  <FaShoppingCart /> Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* last section */}

      <div className=" mt-20 flex justify-around bg-gradient-to-br from-pink-300 via-transparent to-blue-300 p-10">
        <div className="w-[350px] shadow-2xl p-4 bg-white " data-aos="fade-left" data-aos-delay="200">
          <h1 className="text-2xl">30% sale | Jewellery</h1>
          <div className="mt-4 flex flex-wrap justify-around gap-16">
            {jewelleryList.map((data) => (
              <div>
                <img
                  src={data.img}
                  alt="image"
                  className="w-38 h-20 object-contain mb-2"
                />
                <h1 className="text-center">{data.title}</h1>
              </div>
            ))}
          </div>
        </div>
        

        <div className="w-[350px] shadow-2xl p-4 bg-white " data-aos="fade-up" data-aos-delay="500">
          <h1 className="text-2xl">50% sale | Spectacles</h1>
          <div className="mt-4 flex flex-wrap justify-around gap-16">
            {spectList.map((data) => (
              <div>
                <img
                  src={data.img}
                  alt="image"
                  className="w-28 h-20 object-contain mb-2"
                />
                <h1 className="text-center">{data.title}</h1>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[350px] shadow-2xl p-4 bg-white" data-aos="fade-right" data-aos-delay="800">
          <h1 className="text-2xl">70% sale | Belt</h1>
          <div className="mt-4 flex flex-wrap justify-around gap-16">
            {beltList.map((data) => (
              <div>
                <img
                  src={data.img}
                  alt="image"
                  className="w-28 h-20 object-contain mb-2"
                />
                <h1 className="text-center">{data.title}</h1>
              </div>
            ))}
          </div>
        </div>

      </div>







    </div>
  );
};
AOS.init();

export default Women;
