import React from "react";

const ChatHeader = () => {
  return (
    <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom bg-white shadow-sm flex-wrap">
      <div className="fw-bold fs-5">Your inbox</div>
      
      <div className="d-flex gap-2 align-items-center mt-2 mt-md-0">
        <span className="fw-semibold text-nowrap">Luis Easton</span>
        <button className="btn btn-sm btn-outline-secondary" title="Toggle dark mode">
          🌙
        </button>
        <button className="btn btn-sm btn-outline-danger" title="Close conversation">
          Close
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
