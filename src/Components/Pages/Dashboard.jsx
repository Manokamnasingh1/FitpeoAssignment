
import React, { useState, useEffect } from "react";
import Header from "../Header";
import healthcardImage from "../../images/healthcard.png";
import healthStatusImage from "../../images/healthstatus.png";

function Dashboard() {
  const [selectedWeek, setSelectedWeek] = useState("this");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  return (
    <div
      style={{
        padding: isMobile ? "10px" : "20px 40px",
        maxWidth: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <Header />

      {/* Title + Dropdown */}
      <div
        className="dashboard-top"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "5px",
          marginBottom: "15px",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "10px" : 0,
        }}
      >
        <h4
          style={{
            fontSize: "24px",
            margin: 0,
            color: "navy",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            width: isMobile ? "100%" : "auto",
          }}
        >
          Dashboard
        </h4>

        <select
          value={selectedWeek}
          onChange={(e) => setSelectedWeek(e.target.value)}
          style={{
            padding: "5px 10px",
            borderRadius: "8px",
            backgroundColor: "#f5f5f5",
            border: "1px solid #ccc",
            fontSize: "14px",
            color: "#333",
            minWidth: "140px",
            width: isMobile ? "100%" : "auto",
          }}
        >
          <option value="this">This Week</option>
          <option value="previous">Previous Week</option>
        </select>
      </div>

      {/* Images */}
      <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
        {[healthcardImage, healthStatusImage].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Dashboard Visual ${idx + 1}`}
            style={{
              width: "100%",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
              marginBottom: "20px",
              display: "block",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;




