import React, { useState } from "react";
import ChatHeader from "./components/ChatHeader";
import InboxSidebar from "./components/InboxSidebar";
import MessagePanel from "./components/MessagePanel";
import AICopilot from "./components/AICopilot";
import { conversations } from "./data/conversations";

const App = () => {
  const [selectedId, setSelectedId] = useState(conversations[0]?.id);
  const selectedConversation = conversations.find((c) => c.id === selectedId);

  return (
    <div className="vh-100 d-flex flex-column">
      {/* Header */}
      <ChatHeader />

      <div className="flex-grow-1 d-flex overflow-hidden flex-column flex-md-row">
        {/* Sidebar */}
        <div
          className="border-end bg-white shadow-sm"
          style={{ width: "100%", maxWidth: "300px" }}
        >
          <InboxSidebar
            conversations={conversations}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>

        {/* Message Panel */}
        <div className="flex-grow-1 d-flex flex-column bg-light">
          <MessagePanel conversation={selectedConversation} />
        </div>

        {/* AI Copilot */}
        <div
          className="border-start bg-white shadow-sm"
          style={{ width: "100%", maxWidth: "300px" }}
        >
          <AICopilot conversation={selectedConversation} />
        </div>
      </div>
    </div>
  );
};

export default App;
