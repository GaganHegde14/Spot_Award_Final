import React, { useState } from "react";

const SpotAwardRadioGroup = ({ onSelectionChange }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    if (onSelectionChange) {
      onSelectionChange(option);
    }
  };

  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ marginBottom: 18 }}>
        <p
          style={{
            fontFamily: "Samsung InterFace, Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: "14px",
            color: "#111827",
            margin: 0,
            lineHeight: "20px",
          }}
        >
          Have you received the spot award requested for?
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          }}
          onClick={() => handleOptionChange("yes")}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              border: "2px solid #d0d5dd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                selectedOption === "yes" ? "#1976d2" : "transparent",
            }}
          >
            {selectedOption === "yes" && (
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                }}
              />
            )}
          </div>
          <span
            style={{
              fontFamily: "Samsung InterFace, Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: "14px",
              color: selectedOption === "yes" ? "#111827" : "#6e6e6e",
              lineHeight: "20px",
            }}
          >
            Yes
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          }}
          onClick={() => handleOptionChange("no")}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              border: "2px solid #d0d5dd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                selectedOption === "no" ? "#1976d2" : "transparent",
            }}
          >
            {selectedOption === "no" && (
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                }}
              />
            )}
          </div>
          <span
            style={{
              fontFamily: "Samsung InterFace, Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: "14px",
              color: selectedOption === "no" ? "#111827" : "#6e6e6e",
              lineHeight: "20px",
            }}
          >
            No
          </span>
        </div>
      </div>
    </div>
  );
};

export default SpotAwardRadioGroup;
