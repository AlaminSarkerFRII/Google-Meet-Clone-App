import React from "react";
// import "./Header.scss";
import {
  AiFillQuestionCircle,
  AiFillExclamationCircle,
  AiFillSetting,
} from "react-icons/ai";

const Header = () => {

  const showdate = new Date()
  const time = showdate.getHours()+":"+showdate.getMinutes();

  return (

<div class="navbar px-10 w-auto mx-auto">
  <div class="navbar-start">
    <div class="flex flex-row items-center text-xl">
        <img className="w-24 h-24" src="https://www.logo.wine/a/logo/Google_Meet/Google_Meet-Logo.wine.svg" alt="" />

        <span> Google Meet</span>
    </div>
  </div>
  <div className="w-80 flex justify-end items-center absolute right-0">
    <ul tabindex="0" class="flex justify-around mt-3 p-2 w-52 mx-auto">
        <li className="text-xl font-bold">{time}</li>
        <li><AiFillQuestionCircle className="text-2xl"/></li>
        <li><AiFillExclamationCircle className="text-2xl" /></li>
        <li><AiFillSetting className="text-2xl" /></li>
      </ul>
    </div>
</div>



    
  );
};

export default Header;