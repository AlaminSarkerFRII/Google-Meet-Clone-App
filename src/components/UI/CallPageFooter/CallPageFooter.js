import React from "react";
import {FaMicrophoneAlt,FaVideo,FaRegClosedCaptioning} from "react-icons/fa"
import {FcMissedCall} from "react-icons/fc"
import {TbRadioactive} from "react-icons/tb"
import {MdOutlinePresentToAll,MdOutlineControlCamera,MdMoreVert} from "react-icons/md"


const CallPageFooter = () => {
  return (
    <div className="bottom-0 text-2xl cursor-pointer absolute w-full h-16 text-white z-50">
      <div class=" flex flex-row items-center justify-around p-4 bg-neutral text-neutral-content">
        <div class="flex gap-4 md:place-self-center md:justify-self-end">
        <span> you </span>
        </div>
        
        <div class="flex gap-5 md:place-self-center md:justify-self-end">
        <span title="Turn on microphone"><FaMicrophoneAlt/></span>
        <span title="Turn on video"><FaVideo/></span>
        <span title="Turn on capture"><FaRegClosedCaptioning/></span>
        <span title="present now"><MdOutlinePresentToAll/></span>
        <span title="more options"><MdMoreVert/></span>
        <span title="Leave now" className="bg-orange-500"><FcMissedCall/></span>
        </div>

        <div class="flex gap-4 md:place-self-center md:justify-self-end">
        <span><TbRadioactive/></span>
        <span><MdOutlineControlCamera/></span>
        </div>
        
      </div>
    </div>
  );
};

export default CallPageFooter;
