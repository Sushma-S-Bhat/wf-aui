import * as React from "react";
import * as Types from "./types";

declare function CoachProfileLayout(props: {
  as?: React.ElementType;
  textName?: React.ReactNode;
  textEmail?: React.ReactNode;
  textPhone?: React.ReactNode;
  textProfession?: React.ReactNode;
  textCompanyAndLocation?: React.ReactNode;
  imageProfilePic?: Types.Asset.Image;
  textBio?: React.ReactNode;
  slotSkill?: Types.Devlink.Slot;
  slotLanguage?: Types.Devlink.Slot;
  onClickUpdate?: React.ReactNode;
  isNotEditMode?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
