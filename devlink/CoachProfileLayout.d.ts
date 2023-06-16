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
  onClickEdit?: Types.Devlink.RuntimeProps;
  onClickMeetingQueries?: Types.Devlink.RuntimeProps;
  isEditVisible?: Types.Visibility.VisibilityConditions;
  isProfileShow?: Types.Visibility.VisibilityConditions;
  textPopupHeader?: React.ReactNode;
  onClickChangePassword?: Types.Devlink.RuntimeProps;
  onClickCalendlySettings?: Types.Devlink.RuntimeProps;
  slotPopup?: Types.Devlink.Slot;
}): React.JSX.Element;
