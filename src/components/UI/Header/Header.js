import React from "react";
import "./Header.scss";
import {AiFillQuestionCircle,AiFillExclamationCircle,AiFillSetting} from "react-icons/ai"

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="data:image/png;base64,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"
          alt="logo-meet"
        />
        <span className="help-text">Meet</span>
      </div>


      <div className="action-btn">
<AiFillQuestionCircle className="icon-block"/>
<AiFillExclamationCircle className="icon-block"/>
<AiFillSetting className="icon-block"/>

      </div>
    </div>
  );
};

export default Header;
