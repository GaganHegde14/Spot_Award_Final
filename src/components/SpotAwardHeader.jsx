import React from "react";
import styles from "../styles/RM_PM_Inititation/SpotAwardHeader.module.css";
import NoteBadge from "./NoteBadge.jsx";

const SpotAwardHeader = () => {
  return (
    <div
      className={styles.root}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div className={styles.inner}>
        <div className={styles.titleWrap}>
          <div className={styles.title}>Spot Award Request</div>
        </div>
      </div>
      <NoteBadge />
    </div>
  );
};

export default SpotAwardHeader;
