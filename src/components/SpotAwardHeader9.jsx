import React from "react";
import styles from "../styles/RM_PM_Inititation/SpotAwardHeader.module.css";

const SpotAwardHeader = () => {
  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.titleWrap}>
          <div className={styles.title}>Spot Award Request</div>
        </div>
      </div>
    </div>
  );
};

export default SpotAwardHeader;
