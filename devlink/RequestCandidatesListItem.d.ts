import * as React from "react";
import * as Types from "./types";

declare function RequestCandidatesListItem(props: {
  as?: React.ElementType;
  name?: React.ReactNode;
  daysText?: React.ReactNode;
  postedDate?: React.ReactNode;
  onClickCandidate?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
