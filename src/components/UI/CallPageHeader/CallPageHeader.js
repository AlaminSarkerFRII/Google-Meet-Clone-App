import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiMessageRoundedDots, BiUserCircle } from "react-icons/bi";

const CallPageHeader = () => {
  return (
    <div className="navbar-end">
      <div className="flex text-black items-center justify-around w-80 top-0 right-0 absolute rounded-sm text-2xl overflow-hidden bg-white">
        <div className="flex flex-1 items-center justify-center relative h-12 hover:bg-gray-400 cursor-pointer">
          <BsFillPeopleFill />
        </div>
        <div className="flex flex-1 items-center justify-center relative h-12 hover:bg-gray-400 cursor-pointer">
        {/* <span class="indicator-item badge badge-secondary"></span> */}
        <BiMessageRoundedDots/>
        </div>
        <div className="flex flex-1 items-center justify-center relative h-12">
          <span>1.00</span>
        </div>
        <div className="flex flex-1 items-center justify-center relative h-12 hover:bg-gray-400 cursor-pointer">
          <BiUserCircle className="text-green-600" />
        </div>
      </div>
    </div>
  );
};

export default CallPageHeader;
