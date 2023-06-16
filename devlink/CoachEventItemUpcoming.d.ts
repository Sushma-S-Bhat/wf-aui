import * as React from "react";
import * as Types from "./types";

declare function CoachEventItemUpcoming(props: {
  as?: React.ElementType;
  textDate?: React.ReactNode;
  textDay?: React.ReactNode;
  textName?: React.ReactNode;
  onClickJoinMeeting?: Types.Devlink.RuntimeProps;
  slotEventQa?: Types.Devlink.Slot;
  imageProfilePic?: Types.Asset.Image;
}): React.JSX.Element;
