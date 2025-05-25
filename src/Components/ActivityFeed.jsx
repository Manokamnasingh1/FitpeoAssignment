import React from "react";
//import "./ActivityFeed.css";

export default function ActivityFeed() {
  return (
    <div className="activity-feed">
      <h3>Activity</h3>
      <p>3 appointments on this week</p>
      <div className="bar-chart">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="bar">
            <div className="fill" style={{ height: `${30 + i * 10}px` }}></div>
          </div>
        ))}
      </div>
    </div>
  );
}