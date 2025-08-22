import React from "react";
import closeButtonIcon from "../assets/svg/closebutton.svg";
import "../styles/Initator_Confirmation/BigPopup.css";

const BigPopup = ({ isOpen, onClose, triggerElement }) => {
  if (!isOpen) return null;

  // Sample award history data
  const awardHistoryData = [
    {
      name: "Aadit Pratik Maniar(22528135)",
      justification: "xxx-xxxxx-xxxxxxxxxxxxxxx--xxxxxxxxxx",
      date: "24-Apr-2024",
    },
    {
      name: "Murali(55423532)",
      justification: "xxx-xxxxx-xxxxxxxxxxxxxxx--xxxxxxxxxx",
      date: "24-May-2024",
    },
    {
      name: "Ravindra(51654121)",
      justification: "xxx-xxxxx-xxxxxxxxxxxxxxx--xxxxxxxxxx",
      date: "28-May-2024",
    },
    {
      name: "John Doe(12345678)",
      justification: "xxx-xxxxx-xxxxxxxxxxxxxxx--xxxxxxxxxx",
      date: "15-Jun-2024",
    },
    {
      name: "Jane Smith(87654321)",
      justification: "xxx-xxxxx-xxxxxxxxxxxxxxx--xxxxxxxxxx",
      date: "20-Jun-2024",
    },
    {
      name: "Mike Johnson(11223344)",
      justification: "xxx-xxxxx-xxxxxxxxxxxxxxx--xxxxxxxxxx",
      date: "25-Jun-2024",
    },
  ];

  // Calculate position based on trigger element
  const getPopupPosition = () => {
    if (!triggerElement) {
      // Default position if no trigger element
      return {
        width: "919px",
        height: "250px",
        left: "198px",
        top: "508px",
      };
    }

    const rect = triggerElement.getBoundingClientRect();
    const popupWidth = 919;
    const popupHeight = 250;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;

    // Position the popup so the close button aligns with the "3"
    // The close button is positioned at the top-right of the popup
    // We want it to be directly below the "3"
    let left = rect.left + scrollLeft - (popupWidth - 50); // 50px from right edge to center of close button
    let top = rect.bottom + scrollTop + 5; // 5px gap below the trigger

    // Ensure popup doesn't go off the left edge
    if (left < scrollLeft + 10) {
      left = scrollLeft + 10;
    }

    // Ensure popup doesn't go off the right edge
    const viewportWidth = window.innerWidth;
    if (left + popupWidth > scrollLeft + viewportWidth - 10) {
      left = scrollLeft + viewportWidth - popupWidth - 10;
    }

    // Ensure popup doesn't go off the bottom edge
    const viewportHeight = window.innerHeight;
    if (top + popupHeight > scrollTop + viewportHeight - 10) {
      // Position above the trigger instead
      top = rect.top + scrollTop - popupHeight - 5;
    }

    return {
      width: `${popupWidth}px`,
      height: `${popupHeight}px`,
      left: `${left}px`,
      top: `${top}px`,
    };
  };

  // Calculate arrow position to point to the "3"
  const getArrowPosition = () => {
    if (!triggerElement) return {};

    const rect = triggerElement.getBoundingClientRect();
    const popupLeft = getPopupPosition().left;
    const popupLeftNum = parseInt(popupLeft);

    // Position arrow to point to the center of the "3"
    const triggerCenterX = rect.left + rect.width / 2;
    const arrowLeft = triggerCenterX - popupLeftNum - 6; // 6px to center the arrow

    return {
      left: `${arrowLeft}px`,
    };
  };

  return (
    <div className="big-popup-overlay">
      <div
        className="big-popup"
        style={getPopupPosition()}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Arrow pointing to the "3" */}
        <div className="big-popup-arrow" style={getArrowPosition()}></div>

        <div className="big-popup-header">
          <h3 className="big-popup-title">Award History</h3>
          <button className="big-popup-close-btn" onClick={onClose}>
            <img src={closeButtonIcon} alt="Close" />
          </button>
        </div>

        <div className="big-popup-content">
          <div className="big-popup-table-container">
            <table className="big-popup-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Justification</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {awardHistoryData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.justification}</td>
                    <td>{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigPopup;
