import * as React from "react";
import * as Types from "./types";

declare function CandidateDetailTabs(props: {
  as?: React.ElementType;
  slotQa?: Types.Devlink.Slot;
  isQaEmpty?: Types.Visibility.VisibilityConditions;
  isProgressEmpty?: Types.Visibility.VisibilityConditions;
  slotProgress?: Types.Devlink.Slot;
  slotSearchJob?: Types.Devlink.Slot;
  isJobEmpty?: Types.Visibility.VisibilityConditions;
  isJobLoading?: Types.Visibility.VisibilityConditions;
  slotCoachJobCard?: Types.Devlink.Slot;
  isJobListing?: Types.Visibility.VisibilityConditions;
  isJobDetail?: Types.Visibility.VisibilityConditions;
  slotJobDetails?: Types.Devlink.Slot;
  onClickBack?: Types.Devlink.RuntimeProps;
  isPlanAdvanced?: Types.Visibility.VisibilityConditions;
  isPlanUltimate?: Types.Visibility.VisibilityConditions;
  isPlanEssential?: Types.Visibility.VisibilityConditions;
  isPlanLoading?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
