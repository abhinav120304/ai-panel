import React, { useState, useEffect, useRef } from "react";

const MessagePanel = ({ conversation }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messageEndRef = useRef(null);

  useEffect(() => {
    if (conversation) {
      setMessages(conversation.messages);
    }
  }, [conversation]);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: input,
      sender: "agent",
      time: "just now",
      seen: true,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  if (!conversation) {
    return (
      <div className="d-flex align-items-center justify-content-center h-100 text-muted">
        Select a conversation to start messaging
      </div>
    );
  }

  return (
    <div className="d-flex flex-column h-100 px-3 px-md-4 py-3 bg-white border-end">
      {/* Header */}
      <div className="pb-2 border-bottom mb-3">
        <h5 className="mb-0 fw-semibold">{conversation.sender}</h5>
        <small className="text-muted">Customer Conversation</small>
      </div>

      {/* Message List */}
      <div className="flex-grow-1 overflow-auto mb-3 pe-1">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-3 rounded mb-2 shadow-sm ${
              msg.sender === "agent"
                ? "bg-primary bg-opacity-10 align-self-end text-end"
                : "bg-light align-self-start"
            }`}
            style={{ maxWidth: "75%", wordWrap: "break-word" }}
          >
            <div className="text-dark">{msg.text}</div>
            <div className="small text-muted mt-1">{msg.time}</div>
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>

      {/* Chat Input */}
      <div className="d-flex gap-2 pt-2 border-top">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="form-control form-control-sm border rounded"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="btn btn-sm btn-primary px-3"
          disabled={!input.trim()}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MessagePanel;
