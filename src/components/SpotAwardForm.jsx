import React, { useState } from "react";
import styles from "../styles/Initiate_page_Styles/Rectangle3463610.module.css";
import Button from "./Button.jsx";
import viewPoliciesIcon from "../assets/svg/viewpolice.svg";

const SpotAwardForm = ({ onSubmit }) => {
  const [employeeName, setEmployeeName] = useState("");
  const [justification, setJustification] = useState("");

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
          <div className={styles.inputFrame}>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter Employee Name"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              aria-label="Employee Name"
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
              style={{ height: 44 }}
            />
          </div>
        </div>

        {/* Action area: Submit right, View Policies below left */}
        <div
          style={{ display: "flex", justifyContent: "flex-end", marginTop: 16 }}
        >
          <Button label="Submit" onClick={handleSubmit} />
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
