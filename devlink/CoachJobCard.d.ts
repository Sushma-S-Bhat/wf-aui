import * as React from "react";
import * as Types from "./types";

declare function CoachJobCard(props: {
  as?: React.ElementType;
  textJobTitle?: React.ReactNode;
  textLocation?: React.ReactNode;
  textPostedDate?: React.ReactNode;
  textJobType?: React.ReactNode;
  imageLogo?: Types.Asset.Image;
  onClickJobCard?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
