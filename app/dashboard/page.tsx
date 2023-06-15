import { CoachActivityItem, CoachDashboardLayout } from "@/devlink";
import React from "react";

export default function Dashboard() {
  return (
    <CoachDashboardLayout
      isActivityLoading={false}
      isActivityEmpty={false}
      slotCoachActivityItem={
        <>
          <CoachActivityItem />
          <CoachActivityItem />
          <CoachActivityItem />
        </>
      }
    />
  );
}
