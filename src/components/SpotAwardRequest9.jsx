import React, { useMemo, useState, useEffect } from "react";
import SpotAwardForm from "./SpotAwardForm.jsx";
import QuotaDetails from "./QuotaDetails.jsx";
import QuotaTableRow from "./QuotaTableRow.jsx";
import NotesPopup from "./NotesPopup.jsx";
import notesIcon from "../assets/svg/notesicon.svg";

const defaultData = {
  SpotAwardRequest: {
    QuotaDetails: [
      {
        DepartmentName: "Information System & AI Data",
        HeadCount: 17,
        AwardAllowed: 4,
        AwardInPipeline: 0,
        AwardIssued: 3,
        AwardBalance: 4,
        Selected: true,
      },
      {
        DepartmentName: "Data Tools",
        HeadCount: 11,
        AwardAllowed: 6,
        AwardInPipeline: 3,
        AwardIssued: 0,
        AwardBalance: 2,
        Selected: false,
      },
      {
        DepartmentName: "Data Source",
        HeadCount: 34,
        AwardAllowed: 2,
        AwardInPipeline: 2,
        AwardIssued: 0,
        AwardBalance: 7,
        Selected: false,
      },
    ],
  },
};

const ui = {
  container: { padding: 16 },
  title: { marginBottom: 12 },
  sectionLabel: {
    fontWeight: 600,
    marginBottom: 8,
    fontSize: 12,
    color: "#6B7280",
  },
  tableWrapper: {
    border: "1px solid #E5E7EB",
    borderRadius: 8,
    overflow: "hidden",
    background: "#fff",
  },
  theadRow: { background: "transparent", borderBottom: "1px solid #E5E7EB" },
  th: {
    textAlign: "center",
    padding: "18px 24px",
    fontSize: 12,
    color: "#101928",
    fontWeight: 700,
  },
  thLeft: {
    textAlign: "left",
    padding: "18px 24px",
    fontSize: 12,
    color: "#101928",
    fontWeight: 700,
  },
  tr: { borderBottom: "1px solid #EAEAEA" },
  td: { padding: "18px 24px", verticalAlign: "middle", fontSize: 14 },
  tdCenter: {
    padding: "18px 24px",
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: 14,
  },
  tdRadio: { width: 56, textAlign: "center" },
  issuedCell: { textAlign: "center", color: "#1976d2", fontWeight: 600 },
  greySection: {
    background: "#f9fafb",
    padding: "24px",
    borderRadius: "8px",
    marginTop: "16px",
  },
};

function SpotAwardRow({ row, isSelected, onSelect, showSelector = true }) {
  const computedBalance = useMemo(() => {
    const allowed = Number(row.AwardAllowed ?? 0);
    const issued = Number(row.AwardIssued ?? 0);
    const pipeline = Number(row.AwardInPipeline ?? 0);
    const provided = row.AwardBalance;
    const balance = allowed - issued - pipeline;
    // Prefer provided value when available to match data source exactly
    return provided ?? (Number.isFinite(balance) ? balance : 0);
  }, [row]);

  return (
    <QuotaTableRow
      departmentName={row.DepartmentName}
      headCount={row.HeadCount}
      awardAllowed={row.AwardAllowed}
      awardInPipeline={row.AwardInPipeline}
      awardIssued={row.AwardIssued}
      awardBalance={computedBalance}
      selected={!!row.Selected}
      onSelect={() => onSelect(row.DepartmentName)}
      showSelector={showSelector}
    />
  );
}

const SpotAwardRequest = ({ data = defaultData, onSelectionChange }) => {
  console.log("SpotAwardRequest component rendering");

  const initialRows = useMemo(
    () => data?.SpotAwardRequest?.QuotaDetails ?? [],
    [data]
  );
  const [rows, setRows] = useState(initialRows);
  const [clickCount, setClickCount] = useState(0);
  const [isNotesPopupOpen, setIsNotesPopupOpen] = useState(false);
  const [notesIconRef, setNotesIconRef] = useState(null);

  const selectedDepartmentName = useMemo(() => {
    const selected = rows.find((r) => r.Selected);
    return selected ? selected.DepartmentName : undefined;
  }, [rows]);

  // Debug effect to monitor state changes
  useEffect(() => {
    console.log("Rows state changed:", rows);
  }, [rows]);

  // Debug effect to track component re-renders
  useEffect(() => {
    console.log("SpotAwardRequest component mounted");
    return () => {
      console.log("SpotAwardRequest component unmounted");
    };
  }, []);

  function handleSelect(departmentName) {
    console.log("Selecting department:", departmentName);
    console.log("Current rows before update:", rows);

    setRows((prev) => {
      const newRows = prev.map((r) => ({
        ...r,
        Selected: r.DepartmentName === departmentName,
      }));
      console.log("New rows state:", newRows);
      return newRows;
    });

    if (onSelectionChange) {
      onSelectionChange(departmentName);
    }
  }

  function handleSubmit(formData) {
    // Basic noop handler if older button onClick passes event
    if (!formData || typeof formData !== "object") {
      alert("Please fill the form before submitting.");
      return;
    }
    const { employeeName, justification } = formData;
    if (!employeeName?.trim() || !justification?.trim()) {
      alert("Employee Name and Justification are required.");
      return;
    }
    console.log("Submitted Spot Award Request", {
      department: selectedDepartmentName,
      employeeName: employeeName.trim(),
      justification: justification.trim(),
    });
    alert(
      `Spot Award Request submitted successfully!\n\nDepartment: ${selectedDepartmentName}\nEmployee: ${employeeName}\nJustification: ${justification}`
    );
  }

  function handleNotesIconClick() {
    setIsNotesPopupOpen(true);
  }

  function handleCloseNotesPopup() {
    setIsNotesPopupOpen(false);
  }

  return (
    <div style={ui.container}>
      <div style={ui.greySection}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              fontWeight: "700",
              color: "#101928",
              textAlign: "left",
            }}
          >
            Spot Award Request
          </div>
          <img
            ref={setNotesIconRef}
            src={notesIcon}
            alt="Note"
            style={{ width: 28, height: 28, cursor: "pointer" }}
            onClick={handleNotesIconClick}
          />
        </div>

        <QuotaDetails />

        <div style={ui.tableWrapper}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={ui.theadRow}>
                <th style={ui.thLeft}>Department Name</th>
                <th style={ui.th}>Head Count</th>
                <th style={ui.th}>Award Allowed</th>
                <th style={ui.th}>Award in Pipeline</th>
                <th style={ui.th}>Award Issued</th>
                <th style={ui.th}>Award Balance</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <SpotAwardRow
                  key={row.DepartmentName}
                  row={row}
                  isSelected={!!row.Selected}
                  onSelect={handleSelect}
                  showSelector={false}
                />
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: 24 }}>
          <SpotAwardForm onSubmit={handleSubmit} />
        </div>
      </div>

      <NotesPopup
        isOpen={isNotesPopupOpen}
        onClose={handleCloseNotesPopup}
        triggerElement={notesIconRef}
      />
    </div>
  );
};

export default SpotAwardRequest;
