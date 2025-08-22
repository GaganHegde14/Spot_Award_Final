import React from "react";
import "../styles//RM_PM_Inititation/InfoPop.css";
import CloseButtonIcon from "../assets/svg/closebutton.svg";

export const InfoPop = ({ isVisible, onClose, position = { x: 0, y: 0 } }) => {
  const tableHeaders = [
    { label: "Department Name", width: "200px", left: "20px" },
    { label: "Head Count", width: "120px", left: "250px" },
    { label: "Award Allowed", width: "140px", left: "400px" },
    { label: "Award in Pipeline", width: "160px", left: "570px" },
    { label: "Issued Count", width: "130px", left: "750px" },
    { label: "Balance", width: "100px", left: "900px" },
  ];

  const dataRows = [
    {
      category: "Information System & AI Data",
      values: [17, 4, 0, 0, 4],
    },
    {
      category: "Data Tool",
      values: [12, 6, 3, 0, 2],
    },
    {
      category: "Data Source",
      values: [24, 2, 2, 0, 7],
    },
    {
      category: "Software Development",
      values: [28, 8, 2, 1, 5],
    },
    {
      category: "Quality Assurance",
      values: [15, 3, 1, 0, 2],
    },
    {
      category: "Product Management",
      values: [22, 5, 1, 0, 4],
    },
  ];

  const columnPositions = [250, 400, 570, 750, 900];

  if (!isVisible) return null;

  return (
    <div className="info-pop-overlay" onClick={onClose}>
      <div
        className="info-pop-modal"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "absolute",
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div className="info-pop-header">
          <h2 className="info-pop-title">Quota Details</h2>
          <button className="info-pop-close" onClick={onClose}>
            <img src={CloseButtonIcon} alt="Close" className="close-icon" />
          </button>
        </div>

        <div className="info-pop-content">
          <div className="table-container">
            <div className="table-header">
              {tableHeaders.map((header, index) => (
                <div
                  key={index}
                  className="table-header-cell"
                  style={{
                    width: header.width,
                    left: header.left,
                    position: "absolute",
                  }}
                >
                  {header.label}
                </div>
              ))}
            </div>

            <div className="table-body">
              {dataRows.map((row, index) => (
                <div key={index} className="table-row">
                  <div className="table-row-content">
                    <div className="category-cell">{row.category}</div>

                    {row.values.map((value, valueIndex) => (
                      <div
                        key={valueIndex}
                        className="value-cell"
                        style={{ left: `${columnPositions[valueIndex]}px` }}
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPop;
