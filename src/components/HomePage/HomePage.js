import React from "react";
import Header from "../UI/Header/Header";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { BsKeyboard } from "react-icons/bs";

const HomePage = () => {
  return (
<>
<Header/>
      <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" alt="" />
    <div className="w-md ">
      <h1 class="text-5xl font-bold">Premium Video Meetings.Now free for every one.</h1>
      <p class="py-6 mx-auto">We re-engineered the service that we built for secure business
           meetings, Google Meet, to make it free and available for all.</p>
      <div className="flex items-center">
      <button class="btn btn-primary">
      <AiOutlineVideoCamera className="" />
            New Meeting
      </button>
      <div className="flex flex-row justify-center items-center">
      <BsKeyboard className="" /> 
      <input type="text"placeholder="Enter a code or link" class="input input-bordered input-md w-full max-w-xs ml-4" />
      </div>
      <a className="ml-4" href="#">Join</a>
      </div>
    </div>
  </div>

</div>

</>
  );
};

export default HomePage;
