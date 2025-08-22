import React, { useEffect } from "react";
import styles from "../styles/Initator_Confirmation/Frame1000007501.module.css";

const QuotaTableRow = ({
  departmentName,
  headCount,
  awardAllowed,
  awardInPipeline,
  awardIssued,
  awardBalance,
  selected,
  onSelect,
  showSelector = true,
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
    if (showSelector) {
      onSelect();
    }
  };

  return (
    <tr
      className={`${styles.row} ${selected ? styles.rowSelected : ""}`}
      onClick={handleRowClick}
      style={{ cursor: "pointer" }}
    >
      {showSelector && (
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
      )}
      <td className={`${styles.cell} ${styles.departmentName}`}>
        {departmentName}
      </td>
      <td className={`${styles.cell} ${styles.center}`}>{headCount}</td>
      <td className={`${styles.cell} ${styles.center}`}>{awardAllowed}</td>
      <td className={`${styles.cell} ${styles.center}`}>{awardInPipeline}</td>
      <td className={`${styles.cell} ${styles.center} ${styles.issued}`}>
        {awardIssued}
      </td>
      <td className={`${styles.cell} ${styles.center}`}>{awardBalance}</td>
    </tr>
  );
};

export default QuotaTableRow;
