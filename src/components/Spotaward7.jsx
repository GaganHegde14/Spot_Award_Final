import React, { useMemo, useState, useEffect } from "react";
import SpotAwardForm from "./SpotAwardForm7.jsx";
import QuotaDetails from "./QuotaDetails7.jsx";
import QuotaTableRow from "./QuotaTableRow7.jsx";

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
      },
      {
        DepartmentName: "Data Tools",
        HeadCount: 11,
        AwardAllowed: 6,
        AwardInPipeline: 3,
        AwardIssued: 0,
        AwardBalance: 2,
      },
      {
        DepartmentName: "Data Source",
        HeadCount: 34,
        AwardAllowed: 2,
        AwardInPipeline: 2,
        AwardIssued: 0,
        AwardBalance: 7,
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
  issuedCell: { textAlign: "center", color: "#1976d2", fontWeight: 600 },
  greySection: {
    background: "#f9fafb",
    padding: "24px",
    borderRadius: "8px",
    marginTop: "16px",
  },
};

function SpotAwardRow({ row, onAwardIssuedClick }) {
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
      onAwardIssuedClick={onAwardIssuedClick}
    />
  );
}

const SpotAwardRequest = ({ data = defaultData }) => {
  console.log("SpotAwardRequest component rendering");

  const initialRows = useMemo(
    () => data?.SpotAwardRequest?.QuotaDetails ?? [],
    [data]
  );
  const [rows, setRows] = useState(initialRows);
  const [clickCount, setClickCount] = useState(0);
  const [isNotesPopupOpen, setIsNotesPopupOpen] = useState(false);

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
      employeeName: employeeName.trim(),
      justification: justification.trim(),
    });
    alert(
      `Spot Award Request submitted successfully!\n\nEmployee: ${employeeName}\nJustification: ${justification}`
    );
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
                <SpotAwardRow key={row.DepartmentName} row={row} />
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: 24 }}>
          <SpotAwardForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SpotAwardRequest;
