import * as React from "react";
import * as Types from "./types";

declare function CandidateDetailHeader(props: {
  as?: React.ElementType;
  textName?: React.ReactNode;
  textRole?: React.ReactNode;
  textEmail?: React.ReactNode;
  textPhone?: React.ReactNode;
  textJobPreference?: React.ReactNode;
  textApplied?: React.ReactNode;
  textOffered?: React.ReactNode;
  textDeclined?: React.ReactNode;
  imageProfilePic?: Types.Asset.Image;
}): React.JSX.Element;
