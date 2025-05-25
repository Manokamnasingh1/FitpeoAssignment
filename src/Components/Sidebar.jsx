import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { BiSpreadsheet } from "react-icons/bi";
import { TbInvoice } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
//import "./Sidebar.css"; // Make sure this path is correct

export default function Sidebar() {
  return (
    <aside className="sidebar">
     <div>
  <h2 style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>
    <span style={{ color: "skyblue" }}>Health</span>
    <span style={{ color: "navy" }}>care.</span>
  </h2>
</div>


      <h3 className="sidebar-heading">General</h3>
      <ul className="sidebar-links">
        <li><a href="/dashboard"><MdOutlineDashboard /> <span>Dashboard</span></a></li>
        <li><a href="#"><BiSpreadsheet /> <span>History</span></a></li>
        <li><a href="#"><TbInvoice /> <span>Calendar</span></a></li>
        <li><a href="#"><IoIosPeople /> <span>Appointments</span></a></li>
        <li><a href="#"><MdOutlineDashboard /> <span>Statistics</span></a></li>
        <li><a href="#"><BiSpreadsheet /> <span>Tests</span></a></li>
        <li><a href="#"><IoIosPeople /> <span>Chat</span></a></li>
        <li><a href="#"><TbInvoice /> <span>Support</span></a></li>
        <li><a href="#"><IoSettingsOutline /> <span>Setting</span></a></li>
      </ul>
    </aside>
  );
}

