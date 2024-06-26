import React, { useState, useContext } from "react";
import shoppingIcon from "../Header/Images/E-commerce Icon.png";
import { FaCartArrowDown } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { CiSearch } from "react-icons/ci";
import { CartContext } from "../CartContext";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { cartItems } = useContext(CartContext);

  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className=" w-full h-20 bg-gradient-to-r from-purple-600 via-red-500 to-yellow-300 flex justify-between align-middle items-center fixed z-10 max-[768px]:flex-col max-[768px]:h-auto max-[768px]:w-full">
      <Link to="/" className="duration-700  ">
        <div className="flex items-center max-[768px]:justify-center max-[768px]:w-full">
          <img src={shoppingIcon} alt="Image" className=" w-20 h-10"></img>
          <p className="text-white font-bold">Shopping Souk</p>
        </div>
      </Link>
      <div className="flex items-center max-[768px]:hidden">
        <input
          type="text"
          placeholder="Search"
          className="w-72 h-8 p-2 rounded-l-lg "
        />
        <CiSearch className="text-[20px] font-bold bg-yellow-300 h-8 w-[30px] text-black p-1 rounded-r-lg cursor-pointer" />
      </div>
      <ul
        className="flex items-center max-[768px]:w-[100%] max-[768px]:flex-wrap max-[768px]:justify-center max-[768px]:mb-4 max-[768px]:mt-2"
        data-aos="zoom-in"
      >
        <li className="mr-8 hover:font-bold max-[768px]:mr-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` duration-200  ${
                isActive
                  ? "border-b-4 border-blue-700 text-blue-700"
                  : " text-white"
              }`
            }
          >
            Shop
          </NavLink>
        </li>
        <li className="mr-8 hover:font-bold max-[768px]:mr-4">
          <NavLink
            to="/Men"
            className={({ isActive }) =>
              `duration-200 ${
                isActive
                  ? "border-b-4 border-blue-700 text-blue-700"
                  : " text-white"
              }`
            }
          >
            Men
          </NavLink>
        </li>
        <li className="mr-8 hover:font-bold max-[768px]:mr-4">
          <NavLink
            to="/women"
            className={({ isActive }) =>
              ` duration-200 ${
                isActive
                  ? "border-b-4 border-blue-700 text-blue-700"
                  : " text-white"
              }`
            }
          >
            Women
          </NavLink>
        </li>
        <li className="mr-8 hover:font-bold max-[768px]:mr-4">
          <NavLink
            to="/kids"
            className={({ isActive }) =>
              `duration-200 ${
                isActive
                  ? "border-b-4 border-blue-700 text-blue-700"
                  : " text-white"
              }`
            }
          >
            Kids
          </NavLink>
        </li>
        <Link to="/cart">
          {" "}
          <FaCartArrowDown className="mr-10 text-2xl hidden max-[768px]:relative max-[768px]:mr-0 max-[768px]:block" />
        </Link>

        <li className="flex items-center justify-center align-middle max-[768px]:hidden mr-2">
          {isAuthenticated && (
            <div className="flex align-middle items-center">
              <p className="text-purple-700 font-semibold">
                Welcome
                <span className="font-bold text-black ml-4">{user.name}</span>
              </p>
              <img
                src={user.picture}
                alt="image"
                className="w-10 rounded-full ml-3"
              />
            </div>
          )}
        </li>

        <li className="max-[768px]:block ">
          {isAuthenticated ? (
            <button
              className=" bg-red-600 p-2 px-5 rounded-2xl text-white font-bold  max-[768px]:px-3 max-[768px]:rounded-xl max-[768px]:ml-2"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              LogOut
            </button>
          ) : (
            <button
              className=" bg-red-600 p-2 px-5 rounded-2xl text-white font-bold max-[768px]:px-3 max-[768px]:rounded-xl max-[768px]:ml-2"
              onClick={() => loginWithRedirect()}
            >
              Login
            </button>
          )}
        </li>
      </ul>
      <div className="max-[768px]:hidden hidden">
        {isAuthenticated ? (
          <button
            className=" bg-red-600 p-2 px-5 rounded-2xl text-white font-bold  max-[768px]:px-3 max-[768px]:rounded-xl max-[768px]:ml-2"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            LogOut
          </button>
        ) : (
          <button
            className=" bg-red-600 p-2 px-5 rounded-2xl text-white font-bold max-[768px]:px-3 max-[768px]:rounded-xl max-[768px]:ml-2"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        )}
      </div>

      <li className="flex items-center justify-center align-middle hidden max-[768px]:block">
          {isAuthenticated && (
            <div className="flex align-middle items-center">
              <p className="text-purple-700 font-semibold">
                Welcome
                <span className="font-bold text-black ml-4">{user.name}</span>
              </p>
              <img
                src={user.picture}
                alt="image"
                className="w-10 rounded-full ml-3"
              />
            </div>
          )}
        </li>

      <Link to="/cart">
        <span className="text-xl font-extrabold text-purple-600 absolute top-1 right-11 z-10 max-[768px]:top-9 max-[768px]:right-[102px]">
          {cartItems.length}
        </span>
        <FaCartArrowDown className="mr-10 text-2xl max-[768px]:hidden relative" />
      </Link>
    </div>
  );
};

export default Header;
