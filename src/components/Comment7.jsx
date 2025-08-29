import React, { useState } from "react";
import "../styles/Report01/Comment.css";

const Comment = ({ value, onChange, maxLength = 500 }) => {
  const [comment, setComment] = useState(value || "");

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (newValue.length <= maxLength) {
      setComment(newValue);
      if (onChange) {
        onChange(newValue);
      }
    }
  };

  return (
    <div className="comment-container">
      <div className="comment-label">Comment (Max 500 Chars)</div>
      <div className="comment-input-frame">
        <textarea
          className="comment-textarea"
          placeholder="  Need Proxy Approval for Design Reference"
          value={comment}
          onChange={handleChange}
          maxLength={maxLength}
          rows={4}
          readOnly
          style={{
            backgroundColor: "#f3f4f6",
            color: "#6b7280",
            height: "90px",
          }}
        />
      </div>
    </div>
  );
};

export default Comment;
