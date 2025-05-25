import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";

export default function DashboardMainContent() {
  return (
    <div className="dashboard-content">
      <div>
        <AnatomySection />
      </div>
      <div className="horizontal-section">
        <CalendarView />
        <UpcomingSchedule />
        <ActivityFeed />
      </div>
    </div>
  );
}

