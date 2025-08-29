import React from "react";
import "../styles/PE&O_SPOC_Confirmation/RequiredInfo.css";
import requiredInfoIcon from "../assets/svg/requiredinfo.svg";

const RequiredInfo = ({ onClick, className = "" }) => {
  return (
    <div className={`required-info ${className}`} onClick={onClick}>
      <img
        src={requiredInfoIcon}
        alt="Required Information"
        width="24"
        height="26"
        className="clipboard-icon"
      />
      <span className="required-text">Required Information</span>
    </div>
  );
};

export default RequiredInfo;
