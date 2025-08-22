import React, { useState } from "react";
import styles from "../styles/PE&O_SPOC_Confirmation/Rectangle3463610.module.css";
import Button from "./Button.jsx";
import TransferWorkflow from "./TransferWorkflow.jsx";
import Comment from "./Comment.jsx";
import viewPoliciesIcon from "../assets/svg/viewpolice.svg";

const SpotAwardForm = ({ onSubmit }) => {
  const [employeeName, setEmployeeName] = useState("");
  const [justification, setJustification] = useState("");
  const [comment, setComment] = useState("");

  function handleSubmit(e) {
    if (e && typeof e.preventDefault === "function") e.preventDefault();
    const name = employeeName.trim();
    const just = justification.trim();
    if (!name || !just) {
      alert("Please enter Employee Name and Justification.");
      return;
    }
    if (onSubmit) {
      onSubmit({ employeeName: name, justification: just });
    }
  }

  return (
    <div className={styles.rectangle}>
      <div className={styles.inner}>
        <div
          className={styles.subHeader}
          style={{
            background: "#EFF6FF",
            padding: "8px 16px",
            borderRadius: 6,
            marginLeft: -32,
            marginRight: -32,
          }}
        >
          Employee Details
        </div>

        {/* Frame 1321314584 */}
        <div className={styles.fieldGroup}>
          {/* Label */}
          <div className={styles.label}>Employee Name</div>
          {/* Input Frame */}
          <div className={`${styles.inputFrame} ${styles.grey}`}>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter Employee Name"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              aria-label="Employee Name"
              readOnly
              style={{ backgroundColor: "#f3f4f6", color: "#6b7280" }}
            />
          </div>
        </div>

        {/* Frame 1272628575 */}
        <div className={styles.inner}>
          {/* Label */}
          <div className={styles.sectionTitle}>
            Justification For Nomination
          </div>
          {/* Input Frame (multiline to represent 90px height) */}
          <div
            className={styles.inputFrame}
            style={{ height: 90, alignItems: "flex-start", paddingTop: 22 }}
          >
            <input
              className={styles.input}
              type="text"
              placeholder="Need Proxy Approval for Design Reference"
              value={justification}
              onChange={(e) => setJustification(e.target.value)}
              aria-label="Justification For Nomination"
              readOnly
              style={{
                height: 44,
                backgroundColor: "#f3f4f6",
                color: "#6b7280",
              }}
            />
          </div>
        </div>

        {/* Comment section */}
        <div style={{ marginTop: 16 }}>
          <Comment
            value={comment}
            onChange={(value) => setComment(value)}
            maxLength={500}
          />
        </div>

        {/* Action area: Confirm button */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 12,
            marginTop: 16,
          }}
        >
          <Button label="Confirm" onClick={handleSubmit} />
        </div>

        {/* Transfer Workflow component positioned between buttons and View Policies */}
        <div style={{ marginTop: 16 }}>
          <TransferWorkflow
            onClick={() => console.log("Transfer Workflow clicked")}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginTop: 16,
          }}
        >
          <img
            src={viewPoliciesIcon}
            alt="View Policies"
            width={20}
            height={20}
          />
          <span style={{ color: "#606060", fontSize: 14 }}>View Policies</span>
        </div>
      </div>
    </div>
  );
};

export default SpotAwardForm;
