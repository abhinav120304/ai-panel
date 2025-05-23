import React, { useState } from "react";
import { FiSend, FiZap, FiPaperclip, FiSmile } from "react-icons/fi";

export default function MessageInput({ onSend }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input.trim());
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-top bg-white px-3 py-2 d-flex align-items-center gap-2"
      style={{ position: "sticky", bottom: 0, zIndex: 1 }}
    >
      {/* Action icons */}
      <button type="button" className="btn btn-light btn-sm" title="Shortcut">
        <FiZap />
      </button>
      <button type="button" className="btn btn-light btn-sm" title="Upload">
        <FiPaperclip />
      </button>
      <button type="button" className="btn btn-light btn-sm" title="Emoji">
        <FiSmile />
      </button>

      {/* Text input */}
      <input
        type="text"
        className="form-control form-control-sm flex-grow-1"
        placeholder="Use ⌘K for shortcuts"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ minWidth: 0 }}
      />

      {/* Send button */}
      <button type="submit" className="btn btn-primary btn-sm">
        <FiSend />
      </button>
    </form>
  );
}
