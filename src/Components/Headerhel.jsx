import React from "react";

export default function Headerhel() {
  return (
    <header
      className="header"
      style={{
        
        backgroundColor: "#fff",
        
        width: "100%",
      }}
    >
      <div
        className="same"
        style={{
          display: "flex",
          justifyContent: "flex-end", // 🔵 aligns icons to the right
          alignItems: "center",
          marginLeft: "265px",
          marginTop:"20px"
        }}
      >
        <div
          className="header-icons"
          style={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
          }}
        >
          {/* Profile Icon */}
          <div
            className="profile"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: "#ccc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              color: "#555",
              fontSize: "14px",
            }}
          >
            N
          </div>

          {/* Add Icon */}
          <span
            className="icon"
            style={{
              backgroundColor: "#1E3A8A",
              color: "#fff",
              padding: "8px",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            ➕
          </span>
        </div>
      </div>
    </header>
  );
}

