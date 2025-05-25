import React from "react";
//import "./HealthStatusCards.css";

export default function HealthStatusCards() {
  const cards = [
    { title: "Lungs", date: "26 Okt 2021", status: "critical" },
    { title: "Teeth", date: "26 Okt 2021", status: "healthy" },
    { title: "Bone", date: "26 Okt 2021", status: "critical" },
  ];

  return (
    <div className="health-status-cards">
      {cards.map((card, index) => (
        <div key={index} className={`card ${card.status}`}>
          <h4>{card.title}</h4>
          <p>Date: {card.date}</p>
        </div>
      ))}
    </div>
  );
}