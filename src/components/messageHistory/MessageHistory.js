import React from "react";
import PropTypes from "prop-types";
import "./message-history.css";
export const MessageHistory = ({ msg }) => {
  if (!msg) return null;
  return msg.map((row, i) => (
    <div key={i} className="message-history mt-3">
      <div className="send font-weight-bold text-secondary mt-3">
        <div className="sender">{row.messageby}</div>
        <div className="date">{row.date}</div>
      </div>
      <div className="message">{row.message}</div>
    </div>
  ));
};
MessageHistory.prototype = {
  msg: PropTypes.array.isRequired,
};
