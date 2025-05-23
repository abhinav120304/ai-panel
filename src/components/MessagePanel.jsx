import React, { useState } from "react";

export default function MessagePanel({ messages: propMessages = [], onSend }) {
  const [newMessage, setNewMessage] = useState("");

  const defaultMessages = [
    {
      text: "I bought a product from your store in November as a Christmas gift for a member of my family...",
      isAgent: false,
      meta: "1min ago",
    },
    {
      text: "Let me just look into this for you, Luis.",
      isAgent: true,
      meta: "Seen · 1min ago",
    },
  ];

  const messages = propMessages.length ? propMessages : defaultMessages;

  const handleSend = () => {
    if (newMessage.trim()) {
      onSend?.(newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="d-flex flex-column h-100">
      {/* Messages */}
      <div className="flex-grow-1 overflow-auto p-3" style={{ backgroundColor: "#f8f9fa" }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`d-flex mb-3 ${msg.isAgent ? "justify-content-end" : "justify-content-start"}`}
          >
            <div
              className={`p-3 rounded shadow-sm ${
                msg.isAgent ? "bg-primary text-white text-end" : "bg-light text-dark"
              }`}
              style={{
                maxWidth: "75%",
                wordBreak: "break-word",
              }}
            >
              <div>{msg.text}</div>
              <div className="text-muted small mt-1" style={{ fontSize: "0.75rem" }}>
                {msg.meta}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-top p-3 bg-white">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button className="btn btn-primary" type="button" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
