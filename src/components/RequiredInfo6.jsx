import React from "react";
import "../styles/Initator_Confirmation/RequiredInfo.css";
import greyInfoIcon from "../assets/svg/greyinfo.svg";
import requiredInfoIcon from "../assets/svg/requiredinfo.svg";

const RequiredInfo = ({ onClick, className = "" }) => {
  return (
    <div className={`required-info ${className}`} onClick={onClick}>
      <img
        src={requiredInfoIcon}
        alt="Required Information"
        width="24"
        height="26"
      />
      <span className="required-text">Required Information</span>
      <img
        src={greyInfoIcon}
        alt="Information"
        width="20"
        height="20"
        style={{ marginLeft: "8px" }}
      />
    </div>
  );
};

export default RequiredInfo;
