import React from "react";
import styles from "../styles/RM_PM_Inititation/DepartmentRow.module.css";

const DepartmentRow = ({
	departmentName,
	headCount,
	awardAllowed,
	awardInPipeline,
	awardIssued,
	awardBalance,
	selected,
	onSelect,
}) => {
	return (
		<tr className={`${styles.row} ${selected ? styles.rowSelected : ""}`}>
			<td className={styles.radioCell}>
				<input
					type="checkbox"
					name={`dept-${departmentName}`}
					checked={selected}
					onChange={onSelect}
					aria-label={`Select ${departmentName}`}
					className={styles.checkbox}
				/>
			</td>
			<td className={`${styles.cell} ${styles.departmentName}`}>{departmentName}</td>
			<td className={`${styles.cell} ${styles.center}`}>{headCount}</td>
			<td className={`${styles.cell} ${styles.center}`}>{awardAllowed}</td>
			<td className={`${styles.cell} ${styles.center}`}>{awardInPipeline}</td>
			<td className={`${styles.cell} ${styles.center} ${styles.issued}`}>{awardIssued}</td>
			<td className={`${styles.cell} ${styles.center}`}>{awardBalance}</td>
		</tr>
	);
};

export default DepartmentRow;


