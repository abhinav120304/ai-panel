import React from "react";

const Sidebar = ({ conversations, selectedId, onSelect }) => {
  return (
    <div
      className="border-end h-100 overflow-auto bg-white"
      style={{ width: "100%", maxWidth: "300px" }}
    >
      <div className="p-3">
        <h2 className="h5 fw-bold mb-4">Inbox</h2>
        <ul className="list-group">
          {conversations.map((conv) => (
            <li
              key={conv.id}
              className={`list-group-item list-group-item-action rounded mb-2 shadow-sm ${
                selectedId === conv.id ? "active bg-primary text-white border-primary" : ""
              }`}
              onClick={() => onSelect(conv)}
              style={{
                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
              }}
            >
              <div className="fw-semibold">
                {conv.name || conv.sender}
              </div>
              <div className="small text-truncate">
                {conv.message || conv.messages?.[0]?.text}
              </div>
              <div className="small text-muted">
                {conv.time || conv.messages?.[0]?.time}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
