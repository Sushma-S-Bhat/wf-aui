import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CandidateDetailHeader.module.css";

export function CandidateDetailHeader({
  as: _Component = _Builtin.Block,
  textName = "Name",
  textRole = "Role",
  textEmail = "Email",
  textPhone = "Phone",
  textJobPreference = "This is some text inside of a div block.",
  textApplied = "0",
  textOffered = "0",
  textDeclined = "0",
  imageProfilePic = "",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "candidate-detail-header")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "candidates-main-info")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "candidate-profile-wrap")}
          id={_utils.cx(
            _styles,
            "w-node-c6b9cad0-6ab0-1d20-8ebe-e5686d5c2602-6d5c2600"
          )}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "candidate-pic")}
            id={_utils.cx(
              _styles,
              "w-node-c6b9cad0-6ab0-1d20-8ebe-e5686d5c2603-6d5c2600"
            )}
            loading="lazy"
            width="auto"
            height="auto"
            src={imageProfilePic}
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "candidate-content")}
          id={_utils.cx(
            _styles,
            "w-node-c6b9cad0-6ab0-1d20-8ebe-e5686d5c2604-6d5c2600"
          )}
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
          <_Builtin.Block
            className={_utils.cx(_styles, "text-md-default", "text-color-grey")}
            tag="div"
          >
            {textEmail}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "text-md-default", "text-color-grey")}
            tag="div"
          >
            {textPhone}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "candidate-content")}
        id={_utils.cx(
          _styles,
          "w-node-c6b9cad0-6ab0-1d20-8ebe-e5686d5c260d-6d5c2600"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text-lg-bold")}
          tag="div"
        >
          {"Job Preference"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-md-default", "text-color-grey")}
          tag="div"
        >
          {textJobPreference}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "candidate-content")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text-lg-bold")}
          tag="div"
        >
          {"Progress"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "candidate-progress-grid")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "candidate-progress-block")}
            id={_utils.cx(
              _styles,
              "w-node-c6b9cad0-6ab0-1d20-8ebe-e5686d5c2616-6d5c2600"
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
              "w-node-c6b9cad0-6ab0-1d20-8ebe-e5686d5c261b-6d5c2600"
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
              "w-node-c6b9cad0-6ab0-1d20-8ebe-e5686d5c2620-6d5c2600"
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
