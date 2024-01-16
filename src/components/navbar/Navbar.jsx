import React from "react";
import { Link } from "react-router-dom";
import { BsFillGiftFill } from "react-icons/bs";
import {
  FaBell,
  FaHome,
  FaQrcode,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      {/* <nav className="fixed md:hidden  bottom-0 left-0 right-0 bg-[#6E205E] h-16 flex justify-around items-center shadow-lg">
        <Link to="/" className="text-white hover:text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-auto mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
          Beranda
        </Link>
        <Link to="/cari" className="text-white hover:text-blue-500">
          <div className="pl-4">
            {" "}
            <BsFillGiftFill />
          </div>
          <span className="text-center">Promo</span>
        </Link>
        <Link to="/keranjang" className="text-white hover:text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-auto mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7M5 5l7 7"
            />
          </svg>
          Keranjang
        </Link>
        <Link to="/profil" className="text-white  hover:text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-auto mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4a4 4 0 100 8 4 4 0 000-8z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 21v-1a4 4 0 00-4-4H8a4 4 0 00-4 4v1"
            />
          </svg>
          Profil
        </Link>
      </nav> */}
      <div className="fixed z-40 bottom-0 left-0 right-0 bg-[#6E205E] h-16   shadow-lg">
        <div className="flex justify-around items-center mt-3">
          <Link
            to="/dashboard"
            className="flex flex-col items-center text-white hover:text-[#f76464]"
          >
            <FaHome size={20} />
            <span>Home</span>
          </Link>
          <Link to="/promo" className="flex flex-col items-center text-white">
            <BsFillGiftFill size={20} />
            <span>Promo</span>
          </Link>
          {/* <Link
            to="/qr"
            className="flex flex-col left-1/2  text-white bg-gradient-to-r from-[#79366b] via-[#8b2677] to-[#93187a] rounded-full p-4 pl-7 pr-7 shadow-md mx-4"
          >
            <FaQrcode size={20} />
            <span>QR</span>
          </Link> */}
          <Link
            to="/notifications"
            className="flex flex-col items-center text-white"
          >
            <FaBell size={20} />
            <span>Notification</span>
          </Link>
          <Link
            to="/profile"
            className={`flex flex-col hover:text-[#c436a7] items-center text-white ${
              location.pathname === "/profile" ? "text-[#c436a7]" : ""
            } `}
          >
            <FaUser size={20} />
            <span>Profile</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
