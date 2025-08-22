import React, { useState } from "react";
import styles from "../styles/RM_PM_Inititation/Rectangle3463610.module.css";
import Button from "./Button.jsx";
import viewPoliciesIcon from "../assets/svg/viewpolice.svg";

const SpotAwardForm = ({ onSubmit }) => {
  const [employeeName, setEmployeeName] = useState("");
  const [justification, setJustification] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!employeeName.trim()) {
      newErrors.employeeName = "Employee name is required";
    }

    if (!justification.trim()) {
      newErrors.justification = "Justification is required";
    } else if (justification.trim().length < 10) {
      newErrors.justification = "Justification must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setEmployeeName("");
    setJustification("");
    setErrors({});
  };

  function handleSubmit(e) {
    if (e && typeof e.preventDefault === "function") e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const name = employeeName.trim();
    const just = justification.trim();

    if (onSubmit) {
      onSubmit({ employeeName: name, justification: just });
    }

    // Reset form after successful submission
    resetForm();
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
              style={{ backgroundColor: "#ffffff", color: "#111827" }}
            />
          </div>
          {errors.employeeName && (
            <div
              style={{ color: "#dc2626", fontSize: "12px", marginTop: "4px" }}
            >
              {errors.employeeName}
            </div>
          )}
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
            <textarea
              className={styles.input}
              placeholder="Test"
              value={justification}
              onChange={(e) => setJustification(e.target.value)}
              aria-label="Justification For Nomination"
              style={{
                height: 44,
                backgroundColor: "#ffffff",
                color: "#111827",
                resize: "none",
                fontFamily: "inherit",
                border: "none",
                outline: "none",
              }}
            />
          </div>
          {errors.justification && (
            <div
              style={{ color: "#dc2626", fontSize: "12px", marginTop: "4px" }}
            >
              {errors.justification}
            </div>
          )}
        </div>

        {/* Submit button positioned one line down and to the right */}
        <div
          style={{ marginTop: 24, display: "flex", justifyContent: "flex-end" }}
        >
          <Button label="Submit" onClick={handleSubmit} />
        </div>

        {/* View Policies moved below submit button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginTop: 32,
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
