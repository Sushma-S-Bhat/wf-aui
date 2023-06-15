import * as React from "react";
import * as Types from "./types";

declare function CoachNavbar(props: {
  as?: React.ElementType;
  isDashboard?: Types.Visibility.VisibilityConditions;
  isCandidate?: Types.Visibility.VisibilityConditions;
  isMeeting?: Types.Visibility.VisibilityConditions;
  isProfile?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
