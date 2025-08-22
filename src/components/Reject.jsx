import React from "react";
import "../styles/PH_GH_page_Styles/Reject.css";

const Reject = ({ onClick, disabled = false }) => {
  return (
    <button 
      className="reject-button" 
      onClick={onClick}
      disabled={disabled}
    >
      <span className="reject-button-text">Reject</span>
    </button>
  );
};

export default Reject;
