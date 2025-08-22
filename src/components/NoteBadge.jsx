import React from "react";
import styles from "../styles/PH_GH_page_Styles/Group1321314688.module.css";

const NoteBadge = () => {
  return (
    <div className={styles.root} aria-label="Note">
      <div className={styles.icon}>
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2C2 0.895431 2.89543 0 4 0H12L18 6V16C18 17.1046 17.1046 18 16 18H4C2.89543 18 2 17.1046 2 16V2Z"
            fill="#5856d6"
          />
        </svg>
        <span className={styles.dot} />
      </div>
      <div className={styles.label}>Note</div>
    </div>
  );
};

export default NoteBadge;
