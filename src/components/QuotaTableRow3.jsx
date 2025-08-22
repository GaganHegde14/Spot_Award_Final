import React, { useEffect } from "react";
import styles from "../styles/PH_GH_page_styles/Frame1000007501.module.css";

const QuotaTableRow = ({
  departmentName,
  headCount,
  awardAllowed,
  awardInPipeline,
  awardIssued,
  awardBalance,
  selected,
  onSelect,
  onAwardIssuedClick,
}) => {
  console.log(
    `QuotaTableRow render for ${departmentName}, selected: ${selected}`
  );

  useEffect(() => {
    console.log(`QuotaTableRow mounted for ${departmentName}`);
    return () => {
      console.log(`QuotaTableRow unmounted for ${departmentName}`);
    };
  }, [departmentName]);

  const handleChange = () => {
    console.log(`Radio button changed for ${departmentName}`);
    onSelect();
  };

  const handleRowClick = () => {
    console.log(`Row clicked for ${departmentName}`);
    onSelect();
  };

  return (
    <tr
      className={`${styles.row} ${selected ? styles.rowSelected : ""}`}
      onClick={handleRowClick}
      style={{ cursor: "pointer" }}
    >
      <td className={styles.radioCell}>
        <input
          type="radio"
          name="dept-selection"
          value={departmentName}
          id={`radio-${departmentName.replace(/\s+/g, "-")}`}
          checked={selected}
          onChange={handleChange}
          aria-label={`Select ${departmentName}`}
          style={{
            width: 18,
            height: 18,
            cursor: "pointer",
          }}
        />
      </td>
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
