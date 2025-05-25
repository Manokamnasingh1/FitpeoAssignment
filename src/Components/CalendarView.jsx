import React from "react";
//import "./CalendarView.css";

export default function CalendarView() {
  return (
    <div className="calendar-view">
      <h3>October 2021</h3>
      <div className="calendar-grid">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="calendar-day">Day {i + 25}</div>
        ))}
      </div>
      <div className="appointments">
        <div className="appointment">Dentist - 09:00 - Dr. Cameron</div>
        <div className="appointment">Physiotherapy - 11:00 - Dr. Kevin</div>
      </div>
    </div>
  );
}