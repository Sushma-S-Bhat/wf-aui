import * as React from "react";
import * as Types from "./types";

declare function CoachEventItemUpcoming(props: {
  as?: React.ElementType;
  textDate?: React.ReactNode;
  textDay?: React.ReactNode;
  textName?: React.ReactNode;
  onClickViewDetails?: Types.Devlink.RuntimeProps;
  onClickJoinMeeting?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
