import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Headerhel from "./Headerhel";
import analyticsImage from ".././images/analytics.png";

const Layout = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Automatically close sidebar on resize if going from mobile to desktop
    if (window.innerWidth > 768) {
      setSidebarOpen(false);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100vh" }}>
      {/* Mobile Header with hamburger toggle */}
      {isMobile && (
        <div
          style={{
            padding: "10px",
            backgroundColor: "#f0f0f0",
            borderBottom: "1px solid #ddd",
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => setSidebarOpen((prev) => !prev)}
            style={{
              fontSize: "24px",
              cursor: "pointer",
              background: "none",
              border: "none",
            }}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <div style={{ marginLeft: 10, fontWeight: "bold" }}>Menu</div>
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          flexGrow: 1,
          overflow: "hidden",
          height: isMobile ? "auto" : "100vh",
        }}
      >
        {/* Sidebar */}
        {(sidebarOpen || !isMobile) && (
          <div
            style={{
              width: isMobile ? "80%" : "18%",
              minWidth: isMobile ? "auto" : 200,
              borderRight: isMobile ? "none" : "1px solid #ddd",
              position: isMobile ? "fixed" : "relative",
              height: isMobile ? "100vh" : "auto",
              backgroundColor: "#fff",
              zIndex: 1000,
              top: 0,
              left: 0,
              overflowY: "auto",
              boxShadow: isMobile ? "2px 0 5px rgba(0,0,0,0.3)" : "none",
              transition: "transform 0.3s ease",
              transform: isMobile ? (sidebarOpen ? "translateX(0)" : "translateX(-100%)") : "none",
            }}
          >
            <Sidebar />
          </div>
        )}

        {/* Overlay for mobile when sidebar is open */}
        {isMobile && sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: "80%",
              width: "20%",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.3)",
              zIndex: 999,
            }}
          />
        )}

        {/* Main content + right panel */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            flexGrow: 1,
            gap: 20,
            padding: 10,
            marginLeft: isMobile && sidebarOpen ? "80%" : 0,
            transition: "margin-left 0.3s ease",
            overflowY: "auto",
            height: isMobile ? "auto" : "100vh",
          }}
        >
          {/* Main children content */}
          <div style={{ flex: 1, minWidth: 0 }}>{children}</div>

          {/* Right panel */}
          <div
            style={{
              flex: isMobile ? "none" : 1,
              marginTop: isMobile ? 20 : 0,
              display: "flex",
              flexDirection: "column",
              alignItems: isMobile ? "center" : "flex-start",
            }}
          >
            <Headerhel />
            <img
              src={analyticsImage}
              alt="Health Card"
              style={{
                marginTop: 10,
                width: isMobile ? "100%" : 400,
                maxWidth: "100%",
                borderRadius: 8,
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;



