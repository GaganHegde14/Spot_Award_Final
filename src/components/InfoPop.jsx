import React, { useEffect, useRef } from "react";
import "../styles//RM_PM_Inititation/InfoPop.css";
import CloseButtonIcon from "../assets/svg/closebutton.svg";

export const InfoPop = ({ isVisible, onClose, position = { x: 0, y: 0 } }) => {
  const tableContainerRef = useRef(null);

  // Scroll to middle when popup opens
  useEffect(() => {
    if (isVisible && tableContainerRef.current) {
      const container = tableContainerRef.current;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      const middlePosition = (scrollHeight - clientHeight) / 2;

      container.scrollTop = middlePosition;
    }
  }, [isVisible]);

  // Quota details data (keeping the same data from InfoPop)
  const quotaData = [
    {
      category: "Information System & AI Data",
      headCount: 17,
      awardAllowed: 4,
      awardInPipeline: 0,
      issuedCount: 0,
      balance: 4,
    },
    {
      category: "Data Tool",
      headCount: 12,
      awardAllowed: 6,
      awardInPipeline: 3,
      issuedCount: 0,
      balance: 2,
    },
    {
      category: "Data Source",
      headCount: 24,
      awardAllowed: 2,
      awardInPipeline: 2,
      issuedCount: 0,
      balance: 7,
    },
    {
      category: "Software Development",
      headCount: 28,
      awardAllowed: 8,
      awardInPipeline: 2,
      issuedCount: 1,
      balance: 5,
    },
    {
      category: "Quality Assurance",
      headCount: 15,
      awardAllowed: 3,
      awardInPipeline: 1,
      issuedCount: 0,
      balance: 2,
    },
    {
      category: "Product Management",
      headCount: 22,
      awardAllowed: 5,
      awardInPipeline: 1,
      issuedCount: 0,
      balance: 4,
    },
    {
      category: "System Architecture",
      headCount: 18,
      awardAllowed: 4,
      awardInPipeline: 1,
      issuedCount: 0,
      balance: 3,
    },
    {
      category: "Network Security",
      headCount: 14,
      awardAllowed: 3,
      awardInPipeline: 2,
      issuedCount: 0,
      balance: 2,
    },
    {
      category: "Cloud Infrastructure",
      headCount: 20,
      awardAllowed: 6,
      awardInPipeline: 1,
      issuedCount: 0,
      balance: 5,
    },
    {
      category: "Mobile Development",
      headCount: 16,
      awardAllowed: 4,
      awardInPipeline: 2,
      issuedCount: 0,
      balance: 3,
    },
    {
      category: "DevOps Engineering",
      headCount: 19,
      awardAllowed: 5,
      awardInPipeline: 1,
      issuedCount: 0,
      balance: 4,
    },
    {
      category: "Database Administration",
      headCount: 13,
      awardAllowed: 3,
      awardInPipeline: 1,
      issuedCount: 0,
      balance: 2,
    },
    {
      category: "UI/UX Design",
      headCount: 21,
      awardAllowed: 5,
      awardInPipeline: 2,
      issuedCount: 0,
      balance: 4,
    },
    {
      category: "Testing & QA",
      headCount: 17,
      awardAllowed: 4,
      awardInPipeline: 1,
      issuedCount: 0,
      balance: 3,
    },
    {
      category: "Project Management",
      headCount: 25,
      awardAllowed: 6,
      awardInPipeline: 2,
      issuedCount: 0,
      balance: 5,
    },
    {
      category: "Business Analysis",
      headCount: 16,
      awardAllowed: 4,
      awardInPipeline: 1,
      issuedCount: 0,
      balance: 3,
    },
    {
      category: "Data Science",
      headCount: 23,
      awardAllowed: 5,
      awardInPipeline: 2,
      issuedCount: 0,
      balance: 4,
    },
    {
      category: "Machine Learning",
      headCount: 19,
      awardAllowed: 4,
      awardInPipeline: 1,
      issuedCount: 0,
      balance: 3,
    },
    {
      category: "Artificial Intelligence",
      headCount: 21,
      awardAllowed: 5,
      awardInPipeline: 2,
      issuedCount: 0,
      balance: 4,
    },
    {
      category: "Cybersecurity",
      headCount: 18,
      awardAllowed: 4,
      awardInPipeline: 1,
      issuedCount: 0,
      balance: 3,
    },
    {
      category: "Web Development",
      headCount: 26,
      awardAllowed: 7,
      awardInPipeline: 2,
      issuedCount: 0,
      balance: 6,
    },
    {
      category: "Backend Development",
      headCount: 24,
      awardAllowed: 6,
      awardInPipeline: 1,
      issuedCount: 0,
      balance: 5,
    },
    {
      category: "Frontend Development",
      headCount: 22,
      awardAllowed: 5,
      awardInPipeline: 2,
      issuedCount: 0,
      balance: 4,
    },
    {
      category: "Full Stack Development",
      headCount: 20,
      awardAllowed: 5,
      awardInPipeline: 1,
      issuedCount: 0,
      balance: 4,
    },
    {
      category: "API Development",
      headCount: 18,
      awardAllowed: 4,
      awardInPipeline: 2,
      issuedCount: 0,
      balance: 3,
    },
    {
      category: "Microservices",
      headCount: 19,
      awardAllowed: 5,
      awardInPipeline: 1,
      issuedCount: 0,
      balance: 4,
    },
    {
      category: "Containerization",
      headCount: 17,
      awardAllowed: 4,
      awardInPipeline: 1,
      issuedCount: 0,
      balance: 3,
    },
    {
      category: "CI/CD Pipeline",
      headCount: 21,
      awardAllowed: 6,
      awardInPipeline: 2,
      issuedCount: 0,
      balance: 5,
    },
    {
      category: "Infrastructure as Code",
      headCount: 16,
      awardAllowed: 4,
      awardInPipeline: 1,
      issuedCount: 0,
      balance: 3,
    },
    {
      category: "Monitoring & Logging",
      headCount: 23,
      awardAllowed: 5,
      awardInPipeline: 2,
      issuedCount: 0,
      balance: 4,
    },
  ];

  if (!isVisible) return null;

  return (
    <div className="info-pop-overlay">
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
          <h3 className="info-pop-title">Quota Details</h3>
          <button className="info-pop-close-btn" onClick={onClose}>
            <img src={CloseButtonIcon} alt="Close" />
          </button>
        </div>

        <div className="info-pop-content">
          <div className="info-pop-table-container" ref={tableContainerRef}>
            <table className="info-pop-table">
              <thead>
                <tr>
                  <th>Department Name</th>
                  <th>Head Count</th>
                  <th>Award Allowed</th>
                  <th>Award in Pipeline</th>
                  <th>Issued Count</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                {quotaData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.category}</td>
                    <td>{item.headCount}</td>
                    <td>{item.awardAllowed}</td>
                    <td>{item.awardInPipeline}</td>
                    <td>{item.issuedCount}</td>
                    <td>{item.balance}</td>
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

export default InfoPop;
