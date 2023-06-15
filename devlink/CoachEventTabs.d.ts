import * as React from "react";
import * as Types from "./types";

declare function CoachEventTabs(props: {
  as?: React.ElementType;
  isUpcomingEventsEmpty?: Types.Visibility.VisibilityConditions;
  slotCoachEventItemPast?: Types.Devlink.Slot;
  slotCoachEventItemUpcoming?: Types.Devlink.Slot;
  isUpcomingEventsLoading?: Types.Visibility.VisibilityConditions;
  isPastEventsEmpty?: Types.Visibility.VisibilityConditions;
  isPastEventLoading?: Types.Visibility.VisibilityConditions;
  slotEventPopupContent?: Types.Devlink.Slot;
}): React.JSX.Element;
