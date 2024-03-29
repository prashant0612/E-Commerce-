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
import { Link } from "react-router-dom";

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
    id: 27,
    img: dressImg1,
    title: "Lorem ipsum dolor",
    price: "$100",
    aosDelay: "0",
  },
  {
    id: 28,
    img: dressImg2,
    title: "Lorem ipsum dolor",
    price: "$120",
    aosDelay: "200",
  },
  {
    id: 29,
    img: dressImg3,
    title: "Lorem ipsum dolor",
    price: "$130",
    aosDelay: "400",
  },
  {
    id: 30,
    img: dressImg4,
    title: "Lorem ipsum dolor",
    price: "$90",
    aosDelay: "600",
  },
  {
    id: 31,
    img: dressImg5,
    title: "Lorem ipsum dolor",
    price: "$200",
    aosDelay: "800",
  },
];

export const WomenDressListAll = WomenDressList;

const womenFootwearList = [
  {
    id: 32,
    img: footwearImg1,
    title: "Lorem ipsum dolor sit amet.",
    old_price: "$120",
    new_price: "$100",
    aosDelay: "0",
  },
  {
    id: 33,
    img: footwearImg2,
    title: "Lorem ipsum dolor sit amet.",
    old_price: "$120",
    new_price: "$100",
    aosDelay: "200",
  },
  {
    id: 34,
    img: footwearImg3,
    title: "Lorem ipsum dolor sit amet.",
    old_price: "$120",
    new_price: "$100",
    aosDelay: "400",
  },
  {
    id: 35,
    img: footwearImg4,
    title: "Lorem ipsum dolor sit amet.",
    old_price: "$120",
    new_price: "$100",
    aosDelay: "800",
  },
  {
    id: 36,
    img: footwearImg5,
    title: "Lorem ipsum dolor sit amet.",
    old_price: "$120",
    new_price: "$100",
    aosDelay: "1000",
  },
];

export const WomenFootwearListAll = womenFootwearList;

const womenHandbagsList = [
  {
    id: 37,
    img: handbagsImg1,
    title: "Lorem ipsum dolor sit amet.",
    price: "$100",
    aosDelay: "0",
  },
  {
    id: 38,
    img: handbagsImg2,
    title: "Lorem ipsum dolor sit amet.",
    price: "$200",
    aosDelay: "200",
  },
  {
    id: 39,
    img: handbagsImg3,
    title: "Lorem ipsum dolor sit amet.",
    price: "$120",
    aosDelay: "400",
  },
  {
    id: 40,
    img: handbagsImg4,
    title: "Lorem ipsum dolor sit amet.",
    price: "$120",
    aosDelay: "800",
  },
  {
    id: 41,
    img: handbagsImg5,
    title: "Lorem ipsum dolor sit amet.",
    price: "$120",
    aosDelay: "1000",
  },
];

export const WomenHandbagsListAll = womenHandbagsList;

const womenSweatersList = [
  {
    id: 42,
    img: sweaterImg1,
    title: "Lorem ipsum dolor sit amet.",
    old_price: "$120",
    new_price: "$100",
    aosDelay: "0",
  },
  {
    id: 43,
    img: sweaterImg2,
    title: "Lorem ipsum dolor sit amet.",
    old_price: "$120",
    new_price: "$100",
    aosDelay: "200",
  },
  {
    id: 44,
    img: sweaterImg3,
    title: "Lorem ipsum dolor sit amet.",
    old_price: "$120",
    new_price: "$100",
    aosDelay: "400",
  },
  {
    id: 45,
    img: sweaterImg4,
    title: "Lorem ipsum dolor sit amet.",
    old_price: "$120",
    new_price: "$100",
    aosDelay: "800",
  },
  {
    id: 46,
    img: sweaterImg5,
    title: "Lorem ipsum dolor sit amet.",
    old_price: "$120",
    new_price: "$100",
    aosDelay: "1000",
  },
];

export const WomenSweatersListAll = womenSweatersList ;

const womenWatchesList = [
  {
    id: 47,
    img: watchesImg1,
    title: "Lorem ipsum dolor sit amet.",
    price: "$120",
    aosDelay: "0",
  },
  {
    id: 48,
    img: watchesImg2,
    title: "Lorem ipsum dolor sit amet.",
    price: "$100",
    aosDelay: "200",
  },
  {
    id: 49,
    img: watchesImg3,
    title: "Lorem ipsum dolor sit amet.",
    price: "$140",
    aosDelay: "400",
  },
  {
    id: 50,
    img: watchesImg4,
    title: "Lorem ipsum dolor sit amet.",
    price: "$120",
    aosDelay: "800",
  },
  {
    id: 51,
    img: watchesImg5,
    title: "Lorem ipsum dolor sit amet.",
    price: "$100",
    aosDelay: "1000",
  },
];

export const WomenWatchesListAll = womenWatchesList;

const makeupList = [
  {
    id: 52,
    img: makeupImg1,
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 53,
    img: makeupImg2,
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 54,
    img: makeupImg3,
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 55,
    img: makeupImg4,
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 56,
    img: makeupImg5,
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 57,
    img: makeupImg6,
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 58,
    img: makeupImg7,
    title: "Lorem ipsum dolor sit amet.",
  },
];

export const MakeupListAll = makeupList;

const jewelleryList = [
  {
    id: 59,
    img: jewelleryImg1,
    title: "Jewellery",
  },
  {
    id: 60,
    img: jewelleryImg2,
    title: "Jewellery",
  },
  {
    id: 61,
    img: jewelleryImg3,
    title: "Jewellery",
  },
  {
    id: 62,
    img: jewelleryImg4,
    title: "Jewellery",
  },
];

export const JewelleryListAll = jewelleryList;

const spectList = [
  {
    id: 63,
    img:spectImg1,
    title: "Spect",
  },
  {
    id: 64,
    img:spectImg2,
    title: "Spect",
  },
  {
    id: 65,
    img:spectImg3,
    title: "Spect",
  },
  {
    id: 66,
    img:spectImg4,
    title: "Spect",
  }
];

export const SpectListAll = spectList;

const beltList =[
  {
    id:67,
    img:beltImg1,
    title:"Belt"
  },
  {
    id:68,
    img:beltImg2,
    title:"Belt"
  },
  {
    id:69,
    img:beltImg3,
    title:"Belt"
  },
  {
    id:70,
    img:beltImg4,
    title:"Belt"
  },
];

export const BeltListAll = beltList;

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
    <div className="w-full py-10 px-8 pt-20 max-[768px]:p-0 max-[768px]:pt-20 overflow-hidden">
      <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 bg-gradient-to-br from-pink-300 via-transparent to-blue-300">
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
                      className="text-5xl sm:text-5xl lg:text-7xl font-bold "
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
                        className="w-[300px] h-[300px] sm:h-[350px] sm:w-[350px] sm:scale-105 lg:scale-120 object-contain mx-auto"
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

      <h2 className="p-1 border-b-2 border-gray-500 mt-8 text-3xl" data-aos="fade-up">
        Women Dress
      </h2>
      <div
        className="px-1 flex justify-center flex-wrap bg-gradient-to-r from-yellow-400 via-green-400 to-blue-500"
        data-aos="fade-up"
        data-aos-offset="10"
        data-aos-delay="50"
        data-aos-duration="700"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-anchor-placement="top-center"
      >
        {WomenDressList.map((data) => (
          <Link to={`/singlePage/${data.id}`}
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
          </Link>
        ))}
      </div>

      {/* Women Footwear */}

      <h2 className="border-b-2 p-1 border-gray-600 mt-8 text-3xl" data-aos="fade-up">
        Women Footwear
      </h2>
      <div className="flex flex-wrap justify-center bg-gradient-to-r from-orange-500 via-purple-400 to-blue-300">
        {womenFootwearList.map((data) => (
          <Link to={`/singlePage/${data.id}`}
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
          </Link>
        ))}
      </div>

      {/* Women handbags */}

      <h2 className="p-1 border-b-2 border-gray-500 mt-8 text-3xl" data-aos="fade-up">
        Women Handbags
      </h2>
      <div
        className="px-1 flex justify-center flex-wrap gap-6 bg-gradient-to-r from-orange-500 to-purple-400 via-blue-400 "
        data-aos="fade-up"
        data-aos-offset="10"
        data-aos-delay="50"
        data-aos-duration="700"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-anchor-placement="top-center"
      >
        {womenHandbagsList.map((data) => (
          <Link to={`/singlePage/${data.id}`}
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
          </Link>
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
          <Link to={`/singlePage/${data.id}`} className="mb-4">
            <img
              src={data.img}
              alt="image"
              className="w-full h-40 object-contain mb-2"
            />
          </Link>
        ))}
      </div>

      {/* Women Sweaters */}

      <h2 className="border-b-2 p-1 mt-8 border-gray-600 text-3xl" data-aos="fade-up">
        Women Sweaters
      </h2>
      <div className="flex flex-wrap justify-center bg-gradient-to-r from-orange-500 via-purple-400 to-cyan-400">
        {womenSweatersList.map((data) => (
          <Link to={`/singlePage/${data.id}`}
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
          </Link>
        ))}
      </div>

      {/* Women Watches */}

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
        {womenWatchesList.map((data) => (
          <Link to={`/singlePage/${data.id}`}
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
          </Link>
        ))}
      </div>

      {/* last section */}

      <div className=" mt-20 flex justify-around items-center bg-gradient-to-br from-pink-300 via-transparent to-blue-300 p-10 max-[1230px]:flex-col max-[1230px]:gap-6 ">
        <div className="w-[350px] shadow-2xl p-4 bg-white max-[1230px]:w-[80%]" data-aos="fade-left" data-aos-delay="200">
          <h1 className="text-2xl">30% sale | Jewellery</h1>
          <div className="mt-4 flex flex-wrap justify-around gap-16 ">
            {jewelleryList.map((data) => (
              <Link to={`/singlePage/${data.id}`}>
                <img
                  src={data.img}
                  alt="image"
                  className="w-38 h-20 object-contain mb-2"
                />
                <h1 className="text-center">{data.title}</h1>
              </Link>
            ))}
          </div>
        </div>
        

        <div className="w-[350px] shadow-2xl p-4 bg-white max-[1230px]:w-[80%]" data-aos="fade-up" data-aos-delay="500">
          <h1 className="text-2xl">50% sale | Spectacles</h1>
          <div className="mt-4 flex flex-wrap justify-around gap-16">
            {spectList.map((data) => (
              <Link to={`/singlePage/${data.id}`}>
                <img
                  src={data.img}
                  alt="image"
                  className="w-28 h-20 object-contain mb-2"
                />
                <h1 className="text-center">{data.title}</h1>
              </Link>
            ))}
          </div>
        </div>

        <div className="w-[350px] shadow-2xl p-4 bg-white max-[1230px]:w-[80%]" data-aos="fade-right" data-aos-delay="800">
          <h1 className="text-2xl">70% sale | Belt</h1>
          <div className="mt-4 flex flex-wrap justify-around gap-16">
            {beltList.map((data) => (
              <Link to={`/singlePage/${data.id}`}>
                <img
                  src={data.img}
                  alt="image"
                  className="w-28 h-20 object-contain mb-2"
                />
                <h1 className="text-center">{data.title}</h1>
              </Link>
            ))}
          </div>
        </div>

      </div>







    </div>
  );
};
AOS.init();

export default Women;
