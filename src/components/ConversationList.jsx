import React, { useState } from "react";
import { conversations } from "../data/conversations";

const ConversationList = ({ onSelectConversation }) => {
  const [selectedId, setSelectedId] = useState(null);

  const sortedConversations = [...conversations].sort(
    (a, b) => b.waitingSince - a.waitingSince
  );

  const handleSelect = (conversation) => {
    setSelectedId(conversation.id);
    onSelectConversation(conversation);
  };

  return (
    <div
      className="w-100 h-100 overflow-auto p-3 border-end bg-white"
      style={{ minWidth: "260px" }}
    >
      <h6 className="fw-semibold mb-3 text-muted">Your Inbox</h6>

      {sortedConversations.map((conv) => (
        <div
          key={conv.id}
          onClick={() => handleSelect(conv)}
          className={`p-3 rounded mb-2 border conversation-item ${
            selectedId === conv.id
              ? "bg-primary bg-opacity-10 border-primary"
              : "bg-light border-light"
          }`}
          style={{
            cursor: "pointer",
            transition: "background 0.2s, box-shadow 0.2s",
            boxShadow:
              selectedId === conv.id
                ? "0 0 0 2px rgba(13, 110, 253, 0.2)"
                : "none",
          }}
        >
          <div className="d-flex justify-content-between align-items-center mb-1">
            <span
              className={`fw-semibold ${
                !conv.seen ? "text-dark" : "text-muted"
              }`}
            >
              {conv.sender}
            </span>
            <span className="small text-muted text-nowrap">
              {conv.messages[0].time}
            </span>
          </div>
          <div
            className="text-secondary small text-truncate"
            style={{ maxWidth: "100%" }}
          >
            {conv.messages[0].text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConversationList;
