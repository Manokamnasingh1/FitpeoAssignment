import React from "react";
//import "./UpcomingSchedule.css";

export default function UpcomingSchedule() {
  const appointments = [
    { day: "Thursday", events: ["Health checkup complete - 11:00", "Ophthalmologist - 14:00"] },
    { day: "Saturday", events: ["Cardiologist - 12:00", "Neurologist - 16:00"] },
  ];

  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      {appointments.map((item, index) => (
        <div key={index} className="day-schedule">
          <h4>On {item.day}</h4>
          {item.events.map((event, idx) => (
            <div key={idx} className="event-card">{event}</div>
          ))}
        </div>
      ))}
    </div>
  );
}