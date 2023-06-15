import * as React from "react";
import * as Types from "./types";

declare function CoachJobDescription(props: {
  as?: React.ElementType;
  textJobTitle?: React.ReactNode;
  textCompanyAndLocation?: React.ReactNode;
  textPostedDay?: React.ReactNode;
  onClickAddtoWishlist?: Types.Devlink.RuntimeProps;
  onclickGetSalary?: Types.Devlink.RuntimeProps;
  onClickCompanyWebsite?: Types.Devlink.RuntimeProps;
  textJobType?: React.ReactNode;
  isJobRemote?: Types.Visibility.VisibilityConditions;
  isJobOnsite?: Types.Visibility.VisibilityConditions;
  slotSalaryRangeAccordion?: Types.Devlink.Slot;
  textJobDescription?: React.ReactNode;
  textOriginalJobLink?: React.ReactNode;
  onClickOriginalJobLink?: Types.Devlink.RuntimeProps;
  isInWishList?: Types.Visibility.VisibilityConditions;
  isNotInWishlist?: Types.Visibility.VisibilityConditions;
  imageCompanyLogo?: Types.Asset.Image;
}): React.JSX.Element;
