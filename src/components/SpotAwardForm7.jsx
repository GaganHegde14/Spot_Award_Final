import React, { useState } from "react";
import styles from "../styles/Report01/Rectangle3463610.module.css";
import Comment from "./Comment7.jsx";
import SpotAwardRadioGroup from "./SpotAwardRadioGroup7.jsx";
import viewPoliciesIcon from "../assets/svg/viewpolice.svg";

const SpotAwardForm = ({ onSubmit }) => {
  const [employeeName, setEmployeeName] = useState("");
  const [justification, setJustification] = useState("");
  const [comment, setComment] = useState("");
  const [spotAwardReceived, setSpotAwardReceived] = useState("");

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

        {/* Employee Name and Justification in horizontal layout */}
        <div style={{ display: "flex", gap: "24px", marginBottom: "16px" }}>
          {/* Employee Name */}
          <div className={styles.fieldGroup} style={{ flex: 1 }}>
            {/* Label */}
            <div className={styles.label}>Employee Name</div>
            {/* Input Frame */}
            <div className={`${styles.inputFrame} ${styles.grey}`}>
              <input
                className={styles.input}
                type="text"
                placeholder="Chandra Sekhar Mudhragiri Guru"
                value={employeeName}
                onChange={(e) => setEmployeeName(e.target.value)}
                aria-label="Employee Name"
                readOnly
                style={{ backgroundColor: "#f3f4f6", color: "#6b7280" }}
              />
            </div>
          </div>

          {/* Justification For Nomination */}
          <div className={styles.fieldGroup} style={{ flex: 1 }}>
            {/* Label */}
            <div className={styles.label}>Justification For Nomination</div>
            {/* Input Frame */}
            <div className={styles.inputFrame}>
              <input
                className={styles.input}
                type="text"
                placeholder="Test"
                value={justification}
                onChange={(e) => setJustification(e.target.value)}
                aria-label="Justification For Nomination"
                readOnly
                style={{
                  backgroundColor: "#f3f4f6",
                  color: "#6b7280",
                }}
              />
            </div>
          </div>
        </div>

        {/* Spot Award Radio Group */}
        <SpotAwardRadioGroup
          onSelectionChange={(option) => setSpotAwardReceived(option)}
        />

        {/* Comment section */}
        <div style={{ marginTop: 16 }}>
          <Comment
            value={comment}
            onChange={(value) => setComment(value)}
            maxLength={500}
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
