import React from 'react';
import CallPageFooter from '../UI/CallPageFooter/CallPageFooter';
import CallPageHeader from '../UI/CallPageHeader/CallPageHeader';
import Messenger from '../UI/Messanger/Messenger';
import MeetingInfo from '../UI/MettingInfo/MeetingInfo';
// import "./CallPage.scss"

const CallPage = () => {
    return (
        <div className='text-white'>
        <video className='h-screen w-full top-0 left-0 object-cover z-[-1] absolute' src="" controls></video>
            <CallPageHeader/>
            <MeetingInfo/>
            <Messenger/>
            <CallPageFooter/>
        </div>
    );
};

export default CallPage;