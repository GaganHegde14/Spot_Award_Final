import React, { useState } from "react";
import "../styles//RM_PM_Inititation/RequiredInfo.css";
import InfoIcon from "../assets/svg/info.svg";
import requiredInfoIcon from "../assets/svg/requiredinfo.svg";
import InfoPop from "./InfoPop.jsx";

const RequiredInfo = ({ onClick, className = "" }) => {
  const [showInfoPop, setShowInfoPop] = useState(false);
  const [iconPosition, setIconPosition] = useState({ x: 0, y: 0 });

  const handleInfoClick = (e) => {
    e.stopPropagation();

    // Get the position of the info icon relative to viewport (not document)
    const rect = e.currentTarget.getBoundingClientRect();

    const position = {
      x: rect.left,
      y: rect.bottom + 8, // 8px gap below the icon
    };

    setIconPosition(position);
    setShowInfoPop(true);
  };

  const handleCloseInfoPop = () => {
    setShowInfoPop(false);
  };

  return (
    <>
      <div className={`required-info ${className}`} onClick={onClick}>
        <img
          src={requiredInfoIcon}
          alt="Required Information"
          width="24"
          height="26"
          className="clipboard-icon"
        />
        <span className="required-text">Required Information</span>
        <img
          src={InfoIcon}
          alt="info"
          className="info-icon"
          onClick={handleInfoClick}
        />
      </div>

      <InfoPop
        isVisible={showInfoPop}
        onClose={handleCloseInfoPop}
        position={iconPosition}
      />
    </>
  );
};

export default RequiredInfo;
