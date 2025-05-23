import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import MessagePanel from '../components/MessagePanel';
import MessageInput from '../components/MessageInput';
import AICopilot from '../components/AICopilot';
import conversations from '../data/conversations';

export default function ChatDashboard() {
  const [selectedConversationId, setSelectedConversationId] = useState(conversations[0]?.id);
  const selectedConversation = conversations.find(c => c.id === selectedConversationId);
  const [messages, setMessages] = useState(selectedConversation?.messages || []);

  const handleSelectConversation = (conv) => {
    setSelectedConversationId(conv.id);
    setMessages(conv.messages);
  };

  const handleSendMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      text,
      isAgent: true,
      meta: 'just now',
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="d-flex vh-100 flex-column flex-md-row overflow-hidden">
      {/* Sidebar */}
      <div className="border-end bg-white" style={{ width: "100%", maxWidth: "300px" }}>
        <Sidebar
          conversations={conversations}
          onSelect={handleSelectConversation}
          selectedId={selectedConversationId}
        />
      </div>

      {/* Main Chat Area */}
      <div className="d-flex flex-column flex-grow-1 border-end bg-light">
        <MessagePanel messages={messages} onSend={handleSendMessage} />

        <div className="border-top">
          <MessageInput onSend={handleSendMessage} />
        </div>
      </div>

      {/* AI Copilot */}
      <div className="bg-white" style={{ width: "100%", maxWidth: "300px" }}>
        <AICopilot conversation={selectedConversation} />
      </div>
    </div>
  );
}
