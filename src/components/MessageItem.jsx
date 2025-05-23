import React from "react";

const MessageItem = ({ from, text, time, isAgent }) => {
  return (
    <div className={`my-2 d-flex ${isAgent ? "justify-content-end" : "justify-content-start"}`}>
      <div
        className={`p-3 rounded shadow-sm small ${isAgent ? "bg-primary text-white text-end" : "bg-light text-dark"}`}
        style={{ maxWidth: "75%", wordBreak: "break-word" }}
      >
        {!isAgent && (
          <p className="fw-semibold mb-1" style={{ fontSize: "0.85rem" }}>
            {from}
          </p>
        )}
        <div className="mb-1" style={{ fontSize: "0.95rem" }}>{text}</div>
        <div className="text-muted small" style={{ fontSize: "0.75rem" }}>
          {time}
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
