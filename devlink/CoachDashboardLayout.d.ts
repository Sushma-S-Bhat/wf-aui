import * as React from "react";
import * as Types from "./types";

declare function CoachDashboardLayout(props: {
  as?: React.ElementType;
  isActivityLoading?: Types.Visibility.VisibilityConditions;
  isActivityEmpty?: Types.Visibility.VisibilityConditions;
  slotCoachActivityItem?: Types.Devlink.Slot;
}): React.JSX.Element;
