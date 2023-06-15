import { CoachActivityItem, CoachDashboardLayout } from "@/devlink";
import React from "react";

export default function Dashboard() {
  return (
    <CoachDashboardLayout
      isActivityLoading={false}
      isActivityEmpty={false}
      slotCoachActivityItem={
        <>
          <CoachActivityItem textActivity="You suggested divya"/>
          <CoachActivityItem textActivity="You suggested shwetha"/>
          <CoachActivityItem textActivity="You suggested ravi"/>
        </>
      }
    />
  );
}
