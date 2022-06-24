import React from "react";
import { FiUserPlus } from "react-icons/fi";
import { FaRegCopy } from "react-icons/fa";
import { AiTwotoneSecurityScan } from "react-icons/ai";

const MeetingInfo = () => {
  

  return (
    <div className="ml-10 my-24">
      <div class="card w-80 bg-base-100 text-black shadow-xl">
        <div class="card-body  mx-auto">
         <div className="flex items-center justify-between">
         <h2 className="text-xl ">Your Meeting is Ready</h2>
          <div class="card-actions justify-end flex">
            <button class="btn btn-square btn-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
         </div>
          <div className="flex font-bold">
          <button className="btn btn-primary">
              <FiUserPlus className="text-xl mr-2" />
              Add People
            </button>

          </div>
          <p>Or Share this meeting link to connect other's</p>
         <div className="flex items-center justify-end bg-slate-100 "> 
         <span  type="text" placeholder="You can't touch this" class="input input-bordered outline-0 border-none bg-slate-100 w-full max-w-xs text-black readonly">
         </span>
         <button className="text-xl"><FaRegCopy/></button> 
         </div>
         <div className="flex items-center justify-between">
         <span className="text-green-300 text-xl font-bold"><AiTwotoneSecurityScan/></span>
            <p className="max-w-sm ml-3">People who this is from meeting link , Must be need your permission before they can join </p>  
         </div>
         <p>Join As user Email </p>
        </div>
      </div>
    </div>
  );
};

export default MeetingInfo;
