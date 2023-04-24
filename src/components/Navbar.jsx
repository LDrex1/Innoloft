import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { IoIosArrowDown, IoIosNotificationsOutline } from "react-icons/io";
import { VscSearch } from "react-icons/vsc";
import { ReactComponent as Logo } from "../assets/logo.svg";
import Search from "./custom/Search";
import ProfilePic from "./custom/ProfilePic";
// import { allConfig } from "../data/configuration";

function Navbar({ config, user }) {
  const [nav, setNav] = useState(false);
  const { id, logo, maincolor } = config || {};
  //   const id = "" || import.meta.env.VITE_APP_ID;
  //   const [{ mainColor }] = allConfig.filter(({ id }) => id === id);

  const headerColor = id === "1" ? true : false;
  const textColor = id === "1" ? true : false;
  const handleNav = () => {
    setNav((prev) => !prev);
  };
  return (
    <nav
      className={`flex justify-between items-center h-14 md:h-20 max-w[1240px] mx-auto px-[7%] md:px-[10%] lg:px-[13%] ${
        headerColor ? "bg-header-1" : "bg-header-2"
      } ${textColor ? "text-gray-800" : "text-white"}`}
    >
      <div className="w-[120px] md:w-[200px] lg:w-[240px] stroke-white px-2">
        {/* <Logo /> */}
        <img src={logo} alt="logo" />
      </div>
      <div className="hidden md:flex w-15">
        <Search icon={<VscSearch />} />
      </div>
      <ul className="hidden md:flex items-center text-white">
        <li className="p-4">
          <FaRegCommentDots size={12} />
        </li>
        <li className="p-4 flex items-center">
          <span>En</span>
          <span className="ps-1">
            <IoIosArrowDown />
          </span>
        </li>
        <li className="p-4">
          <IoIosNotificationsOutline />
        </li>
        <li className="p-4 flex items-center">
          <ProfilePic profilePicture={user?.profilePicture} />
          <span className="ps-1">
            <IoIosArrowDown />
          </span>
        </li>
      </ul>
      <div
        onClick={handleNav}
        className={`block md:hidden ${
          !textColor ? "text-gray-800" : "text-white"
        }`}
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[40%] h-full border-r-gray-900 ease-in-out duration-500"
            : "hidden"
        }
      >
        <ul className="mt-14 px-2 bg-blue-200">
          <div className="py-1 w-15">
            <Search icon={<VscSearch />} />
          </div>
          <li className="p-2 border-gray-600">
            <FaRegCommentDots size={12} />
          </li>
          <li className="p-2 flex items-center border-gray-600">
            <span>En</span>
            <span>
              <IoIosArrowDown />
            </span>
          </li>
          <li className="p-2 border-gray-600">
            <IoIosNotificationsOutline />
          </li>
          <li className="p-2 border-gray-600 flex items-center">
            <ProfilePic profilePicture={user?.profilePicture} />
            <span>
              <IoIosArrowDown />
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
