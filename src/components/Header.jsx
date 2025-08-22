import React from "react";
import "../styles/PE&O_SPOC_Confirmation/Header.css";
import clockIcon from "../assets/svg/clockicon.svg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Header = ({
  breadcrumb,
  title,
  onBackClick,
  onClockClick,
  showBackArrow = true,
  showClockIcon = true,
}) => {
  const safeTitle = typeof title === "string" ? title : "";
  return (
    <div className="header-section">
      {breadcrumb && (
        <div
          className="breadcrumb"
          onClick={() => onBackClick && onBackClick()}
        >
          {breadcrumb}
        </div>
      )}

      <div className="main-header">
        {showBackArrow && (
          <div className="back-arrow" onClick={onBackClick}>
            <ArrowBackIcon />
          </div>
        )}
        <h1 className="page-title">
          {safeTitle.includes(" - (Initiate)") ? (
            <>
              {safeTitle.replace(" - (Initiate)", "")}
              <span style={{ fontSize: "0.6em", fontWeight: "500" }}>
                {" "}
                - (Initiate)
              </span>
            </>
          ) : safeTitle.includes(" - (PH/GH Approval)") ? (
            <>
              {safeTitle.replace(" - (PH/GH Approval)", "")}
              <span style={{ fontSize: "0.6em", fontWeight: "500" }}>
                {" "}
                - (PH/GH Approval)
              </span>
            </>
          ) : safeTitle.includes(" - (GH/TH Approval)") ? (
            <>
              {safeTitle.replace(" - (GH/TH Approval)", "")}
              <span style={{ fontSize: "0.6em", fontWeight: "500" }}>
                {" "}
                - (GH/TH Approval)
              </span>
            </>
          ) : safeTitle.includes(" - (Report)") ? (
            <>
              {safeTitle.replace(" - (Report)", "")}
              <span style={{ fontSize: "0.6em", fontWeight: "500" }}>
                {" "}
                - (Report)
              </span>
            </>
          ) : safeTitle.includes(" - (Initiator Confirmation)") ? (
            <>
              {safeTitle.replace(" - (Initiator Confirmation)", "")}
              <span style={{ fontSize: "0.6em", fontWeight: "500" }}>
                {" "}
                - (Initiator Confirmation)
              </span>
            </>
          ) : safeTitle.includes(" - (PE&O SPOC Confirmation)") ? (
            <>
              {safeTitle.replace(" - (PE&O SPOC Confirmation)", "")}
              <span style={{ fontSize: "0.6em", fontWeight: "500" }}>
                {" "}
                - (PE&O SPOC Confirmation)
              </span>
            </>
          ) : safeTitle.includes(" - (GH Initiator)") ? (
            <>
              {safeTitle.replace(" - (GH Initiator)", "")}
              <span style={{ fontSize: "0.6em", fontWeight: "500" }}>
                {" "}
                - (GH Initiator)
              </span>
            </>
          ) : (
            title
          )}
        </h1>
        {showClockIcon && (
          <div className="clock-icon" onClick={onClockClick}>
            <img
              src={clockIcon}
              alt="Clock"
              style={{ width: 24, height: 24 }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
