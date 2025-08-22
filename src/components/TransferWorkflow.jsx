import React from "react";
import "../styles/PH_GH_page_Styles/TransferWorkflow.css";
import transferworkflowIcon from "../assets/svg/transferworkflow.svg";

const TransferWorkflow = ({ onClick }) => {
  return (
    <div className="transfer-workflow-container" onClick={onClick}>
      <div className="transfer-workflow-content">
        <div className="transfer-workflow-left">
          <div className="transfer-workflow-icon-text">
            <div className="transfer-workflow-icon">
              <img
                src={transferworkflowIcon}
                alt="Transfer Workflow"
                width={24}
                height={24}
              />
            </div>
            <span className="transfer-workflow-text">Transfer Workflow</span>
          </div>
        </div>
        <div className="transfer-workflow-arrow">
          <svg
            width="11"
            height="19"
            viewBox="0 0 11 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L9.5 9.5L1 18"
              stroke="#1d1b20"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TransferWorkflow;
