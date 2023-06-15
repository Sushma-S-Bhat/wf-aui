import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CandidateListingCard.module.css";

export function CandidateListingCard({
  as: _Component = _Builtin.Block,
  imageProfile = "",
  textName = "Name",
  textRole = "This is the default text value",
  textApplied = "0",
  textOffered = "0",
  textDeclined = "0",
  onClickCandidateCard = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "career-candidate-card")}
      tag="div"
      {...onClickCandidateCard}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "candidate-main-detail")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "candidate-profilepic")}
          loading="lazy"
          width="auto"
          height="auto"
          src={imageProfile}
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "profile-content")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-lg-bold")}
            tag="div"
          >
            {textName}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "text-md-default", "text-color-grey")}
            tag="div"
          >
            {textRole}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "candidate-progress-wrap")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "progress-name-text")}
          tag="div"
        >
          {" Candidate Progress"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "candidate-progress-grid")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "candidate-progress-block")}
            id={_utils.cx(
              _styles,
              "w-node-_4af5d672-c6e8-495b-2059-b7e7f7083ec5-f7083eb9"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-xxxl-bold")}
              tag="div"
            >
              {textApplied}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-md-bold")}
              tag="div"
            >
              {"Applied"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "candidate-progress-block")}
            id={_utils.cx(
              _styles,
              "w-node-_4af5d672-c6e8-495b-2059-b7e7f7083eca-f7083eb9"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-xxxl-bold")}
              tag="div"
            >
              {textOffered}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-md-bold")}
              tag="div"
            >
              {"Offered"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "candidate-progress-block")}
            id={_utils.cx(
              _styles,
              "w-node-_4af5d672-c6e8-495b-2059-b7e7f7083ecf-f7083eb9"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-xxxl-bold")}
              tag="div"
            >
              {textDeclined}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-md-bold")}
              tag="div"
            >
              {"Declined"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
