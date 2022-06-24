import React from "react";
import Header from "../UI/Header/Header";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { BsKeyboard } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate()
  return (
<>
<Header/>
     <div class="hero my-10 ">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img style={{width:"600px"}} src="https://lh3.googleusercontent.com/g6WWfSMs3V0w2hhsaoc9myxQXmfO3IcRPwIsSo7nUJkNDHFb2JT4bffBiNH50_seojxYfC3AfBz8xNHd5k7tqXVsjRVvHGfJfAPx-zz8Lk7EQ0cPuA=rwu-v1-w1400" alt="" />
    <div className="w-md ">
      <h1 class="text-5xl font-bold">Premium Video Meetings.Now free for every one.</h1>
      <p class="py-6">We re-engineered the service that we built for secure business
           meetings, Google Meet, to make it free and available for all.</p>
      <div className="flex items-center">
      <button onClick={()=>navigate('callpage')} class="btn btn-primary font-bold">
      <AiOutlineVideoCamera className="mr-2" />
            New Meeting
      </button>
      <div className="flex flex-row justify-center items-center">
      <BsKeyboard className="ml-4" /> 
      <input type="text"placeholder="Enter a code or link" class="input input-bordered input-md w-full max-w-xs ml-4" />
      </div>
      <a className="ml-4 text-primary" href="#">Join</a>
      </div>
      <div class="divider border-2"></div>
      <p>Learn More About <a href="https://meet.google.com/" className="text-primary">Google Meet</a></p>
    </div>

  </div>
</div>
</>
  );
};

export default HomePage;
