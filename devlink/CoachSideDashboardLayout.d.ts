import * as React from "react";
import * as Types from "./types";

declare function CoachSideDashboardLayout(props: {
  as?: React.ElementType;
  isRequestEmpty?: Types.Visibility.VisibilityConditions;
  isRequestLoading?: Types.Visibility.VisibilityConditions;
  slotRequestCandidateListItem?: Types.Devlink.Slot;
  isTimelineEmpty?: Types.Visibility.VisibilityConditions;
  slotCoachActivityItem?: Types.Devlink.Slot;
}): React.JSX.Element;
