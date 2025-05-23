import React from "react";

export default function AICopilot({ conversation }) {
  return (
    <div
      className="d-flex flex-column justify-content-between h-100 p-3"
      style={{
        background: "linear-gradient(to bottom, #f9f9fc, rgb(248, 238, 247))",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        minHeight: "100vh"
      }}
    >
      {/* Top Content */}
      <div className="text-center mt-4">
        <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🛑</div>
        <h5 className="fw-semibold">Hi, I’m Fin AI Copilot</h5>
        <p className="text-muted">Ask me anything about this conversation.</p>
      </div>

      {/* Suggested and Input */}
      <div className="mt-4 w-100">
        <div
          className="bg-white border rounded shadow-sm p-2 mb-3 d-inline-block text-start"
          style={{ fontSize: "0.85rem" }}
        >
          <strong className="text-muted me-2">Suggested:</strong>
          <a href="#" className="text-decoration-none">
            💡 How do I get a refund?
          </a>
        </div>

        <input
          type="text"
          className="form-control"
          placeholder="Ask a question..."
          style={{
            borderRadius: "10px",
            border: "1px solid #ccc",
            boxShadow: "0 0 0 1px rgba(0,0,0,0.05)"
          }}
        />
      </div>
    </div>
  );
}
