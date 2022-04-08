import React from "react";

import "./index.css";

export const Statistic = ({ all, readBooks, notReadBooks, onRemoveAll }) => {
  return (
    <div className="statistic">
      <div className="statistic-data">
        <div>All: {all}</div>
        <div className="read">Read: {readBooks}</div>
        <div className="not-read">Not read: {notReadBooks}</div>
      </div>
      <div>
        <button className="remove-all-button" onClick={onRemoveAll}>
          Remove all
        </button>
      </div>
    </div>
  );
};
