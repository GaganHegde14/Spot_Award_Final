import React from "react";
import closeButtonIcon from "../assets/svg/closebutton.svg";
import "../styles/Initiate_page_Styles/NotesPopup.css";

const NotesPopup = ({ isOpen, onClose, triggerElement }) => {
  if (!isOpen) return null;

  // Calculate position based on trigger element
  const getPopupPosition = () => {
    if (!triggerElement) return {};

    const rect = triggerElement.getBoundingClientRect();
    const popupWidth = 521; // Exact width from JSON spec
    const popupHeight = 110; // Exact height from JSON spec
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;

    // Position the tooltip to be within the boundaries of the notes icon
    // Calculate position so the tooltip appears below and to the right of the icon
    // Use page coordinates instead of viewport coordinates to prevent movement on scroll
    let left = rect.right + scrollLeft - popupWidth + 20; // Position so popup right edge aligns with 'Note'
    const top = rect.bottom + scrollTop + 8; // 8px gap below icon

    // Ensure popup doesn't go off the left edge
    if (left < 10) {
      left = 10;
    }

    // Ensure popup doesn't go off the right edge
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    if (left + popupWidth > scrollLeft + viewportWidth - 10) {
      left = scrollLeft + viewportWidth - popupWidth - 10;
    }

    // Ensure popup doesn't go off the bottom edge
    let adjustedTop = top;
    if (top + popupHeight > scrollTop + viewportHeight - 10) {
      // Position above the icon instead
      adjustedTop = rect.top + scrollTop - popupHeight - 8;
    }

    return {
      left: `${left}px`,
      top: `${adjustedTop}px`,
    };
  };

  // Calculate beak position based on JSON spec
  const getBeakPosition = () => {
    if (!triggerElement) return {};

    const rect = triggerElement.getBoundingClientRect();
    const popupLeft = getPopupPosition().left;
    const popupLeftNum = parseInt(popupLeft);

    // Position beak to point to the notes icon
    // From JSON spec: beak is positioned at [503, 6] within the 521px width
    const iconCenterX = rect.left + rect.width / 2;
    const beakLeft = iconCenterX - popupLeftNum - 4; // Center the beak on the icon

    return {
      left: `${beakLeft}px`,
    };
  };

  return (
    <div className="notes-popup-overlay" onClick={onClose}>
      <div
        className="notes-popup"
        style={getPopupPosition()}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Beak (tooltip pointer) based on JSON spec */}
        <div className="notes-popup-beak" style={getBeakPosition()}></div>

        {/* Beak stroke for border effect */}
        <div
          className="notes-popup-beak-stroke"
          style={getBeakPosition()}
        ></div>

        <div className="notes-popup-header">
          <h3 className="notes-popup-title">Note:</h3>
          <button className="notes-popup-close-btn" onClick={onClose}>
            <img src={closeButtonIcon} alt="Close" />
          </button>
        </div>
        <div className="notes-popup-content">
          <p>
            The Award amount of <strong>INR 1000</strong> will be directly
            credited in the employee payroll (Amazon Vouchers have now been
            stopped due to compliance issue).
          </p>
          <p>Badge and Certificate will be issued by the DCs</p>
        </div>
      </div>
    </div>
  );
};

export default NotesPopup;
