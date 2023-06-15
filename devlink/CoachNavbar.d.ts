import * as React from "react";
import * as Types from "./types";

declare function CoachNavbar(props: {
  as?: React.ElementType;
  isDashboard?: Types.Visibility.VisibilityConditions;
  isCandidate?: Types.Visibility.VisibilityConditions;
  isMeeting?: Types.Visibility.VisibilityConditions;
  isProfile?: Types.Visibility.VisibilityConditions;
  isBadgeVisible?: Types.Visibility.VisibilityConditions;
  slotAvatar?: Types.Devlink.Slot;
  textNotificationCount?: React.ReactNode;
  onClickClearAll?: Types.Devlink.RuntimeProps;
  isNotificationEmpty?: Types.Visibility.VisibilityConditions;
  slotNotificationItem?: Types.Devlink.Slot;
  onClickLogout?: Types.Devlink.RuntimeProps;
  isNotification?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
