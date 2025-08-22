import React, { useEffect } from "react";
import styles from "../styles/Initator_Confirmation/Frame1000007501.module.css";

const QuotaTableRow = ({
  departmentName,
  headCount,
  awardAllowed,
  awardInPipeline,
  awardIssued,
  awardBalance,
  onAwardIssuedClick,
}) => {
  console.log(`QuotaTableRow render for ${departmentName}`);

  useEffect(() => {
    console.log(`QuotaTableRow mounted for ${departmentName}`);
    return () => {
      console.log(`QuotaTableRow unmounted for ${departmentName}`);
    };
  }, [departmentName]);

  return (
    <tr className={styles.row}>
      <td className={`${styles.cell} ${styles.departmentName}`}>
        {departmentName}
      </td>
      <td className={`${styles.cell} ${styles.center}`}>{headCount}</td>
      <td className={`${styles.cell} ${styles.center}`}>{awardAllowed}</td>
      <td className={`${styles.cell} ${styles.center}`}>{awardInPipeline}</td>
      <td className={`${styles.cell} ${styles.center} ${styles.issued}`}>
        <span
          onClick={(e) => {
            e.stopPropagation();
            if (onAwardIssuedClick && awardIssued > 0) {
              const rowData = {
                departmentName,
                headCount,
                awardAllowed,
                awardInPipeline,
                awardIssued,
                awardBalance,
              };
              onAwardIssuedClick(rowData, e);
            }
          }}
          style={{
            cursor: awardIssued > 0 ? "pointer" : "default",
            color: awardIssued > 0 ? "#1976d2" : "inherit",
            textDecoration: awardIssued > 0 ? "underline" : "none",
          }}
        >
          {awardIssued}
        </span>
      </td>
      <td className={`${styles.cell} ${styles.center}`}>{awardBalance}</td>
    </tr>
  );
};

export default QuotaTableRow;
