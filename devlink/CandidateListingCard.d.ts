import * as React from "react";
import * as Types from "./types";

declare function CandidateListingCard(props: {
  as?: React.ElementType;
  imageProfile?: Types.Asset.Image;
  textName?: React.ReactNode;
  textRole?: React.ReactNode;
  textApplied?: React.ReactNode;
  textOffered?: React.ReactNode;
  textDeclined?: React.ReactNode;
  onClickCandidateCard?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
