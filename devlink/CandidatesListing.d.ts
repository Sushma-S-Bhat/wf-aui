import * as React from "react";
import * as Types from "./types";

declare function CandidatesListing(props: {
  as?: React.ElementType;
  slotSearch?: Types.Devlink.Slot;
  slotCandidateListingCard?: Types.Devlink.Slot;
  isLoading?: Types.Visibility.VisibilityConditions;
  isEmpty?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
