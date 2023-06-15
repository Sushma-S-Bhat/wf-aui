import * as React from "react";
import * as Types from "./types";

declare function EventPopupContent(props: {
  as?: React.ElementType;
  imageProfilePic?: Types.Asset.Image;
  textName?: React.ReactNode;
  slotEventQa?: Types.Devlink.Slot;
}): React.JSX.Element;
