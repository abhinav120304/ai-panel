import React from "react";
import { conversations } from "../data/conversations";

export default function InboxSidebar() {
  return (
    <div
      className="h-100 d-flex flex-column p-3 border-end bg-light"
      style={{ minWidth: "260px", maxWidth: "100%", overflow: "hidden" }}
    >
      <h6 className="fw-semibold mb-3">Your Inbox</h6>

      <div className="d-flex justify-content-between align-items-center mb-3 text-muted small">
        <span>{conversations.length} Open</span>
        <span
          className="dropdown-toggle"
          role="button"
          tabIndex="0"
          style={{ cursor: "pointer" }}
        >
          Waiting longest
        </span>
      </div>

      <div className="flex-grow-1 overflow-auto">
        {conversations.map((conv, idx) => (
          <div
            key={idx}
            className={`p-3 mb-2 rounded shadow-sm ${
              conv.active
                ? "bg-primary text-white"
                : "bg-white text-dark"
            }`}
            style={{
              cursor: "pointer",
              transition: "background 0.2s ease",
              overflow: "hidden",
            }}
          >
            <div className="fw-semibold text-truncate">{conv.name}</div>
            <div className="small text-truncate">{conv.snippet}</div>
            <div className="small text-muted mt-1">{conv.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
