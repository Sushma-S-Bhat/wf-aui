import * as React from "react";
import * as Types from "./types";

declare function CoachMeetingLayout(props: {
  as?: React.ElementType;
  slotCoachEventTabs?: Types.Devlink.Slot;
  isCalendlyNotConnected?: Types.Visibility.VisibilityConditions;
  isLoading?: Types.Visibility.VisibilityConditions;
  slotCalender?: Types.Devlink.Slot;
  isCalendlyConnected?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
