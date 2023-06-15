import React from "react";
import * as _Builtin from "./_Builtin";
import { CoachSkillOrLanguage } from "./CoachSkillOrLanguage";
import * as _utils from "./utils";
import _styles from "./CoachProfileLayout.module.css";

export function CoachProfileLayout({
  as: _Component = _Builtin.Block,
  textName = "Name",
  textEmail = "Email",
  textPhone = "Phone",
  textProfession = "Profession",
  textCompanyAndLocation = "Location",
  imageProfilePic = "",
  textBio = "Graphic designer with +8 years of experience in branding and print design. Skilled at Adobe Creative Suite (Photoshop, Illustrator) as well as sketching and hand drawing. Supervised 23 print design projects that resulted in an increase of 32% in savings.",
  slotSkill,
  slotLanguage,
  onClickUpdate = "Update",
  isNotEditMode = true,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "coach-profile-layout")}
      tag="div"
    >
      {isNotEditMode ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "coach-profile-wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "coach-stack-row", "space-between")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-xxl-bold")}
              tag="div"
            >
              {"Your Profile"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "buttons-wrap-profilr")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-button")}
                tag="div"
              >
                {"Meeting queries"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "button", "is-green")}
                tag="div"
              >
                {onClickUpdate}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "coach-profile-grid")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "coach-profile-main-details")}
              id={_utils.cx(
                _styles,
                "w-node-d88d2a90-c026-3e82-c22b-bbbe02825f82-02825f77"
              )}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "your-profile-image")}
                loading="lazy"
                width="auto"
                height="auto"
                src={imageProfilePic}
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "profile-content", "stretch")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "text-xl-bold",
                    "margin-bottom-6"
                  )}
                  tag="div"
                >
                  {textName}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "coach-stack-row", "gap-60")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-md-default",
                      "text-color-grey"
                    )}
                    tag="div"
                  >
                    {textEmail}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-md-default",
                      "text-color-grey"
                    )}
                    tag="div"
                  >
                    {textPhone}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "coach-stack-row", "gap-60")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-md-default",
                      "text-color-grey"
                    )}
                    tag="div"
                  >
                    {textProfession}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-md-default",
                      "text-color-grey"
                    )}
                    tag="div"
                  >
                    {textCompanyAndLocation}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "profile-content")}
              id={_utils.cx(
                _styles,
                "w-node-d88d2a90-c026-3e82-c22b-bbbe02825f91-02825f77"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "text-xl-bold",
                  "margin-bottom-6"
                )}
                tag="div"
              >
                {"Bio"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-color-dark-grey")}
                tag="div"
              >
                {textBio}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "coach-profile-content-wrapper")}
              id={_utils.cx(
                _styles,
                "w-node-d88d2a90-c026-3e82-c22b-bbbe02825f96-02825f77"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "profile-content", "gap-18")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-bold")}
                  tag="div"
                >
                  {"Expertise in"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "coach-stack-row", "gap-16")}
                  tag="div"
                >
                  {slotSkill ?? (
                    <>
                      <CoachSkillOrLanguage />
                      <CoachSkillOrLanguage />
                    </>
                  )}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "profile-content", "gap-18")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-bold")}
                  tag="div"
                >
                  {"Fluent in"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "coach-stack-row", "gap-12")}
                  tag="div"
                >
                  {slotLanguage ?? <CoachSkillOrLanguage text="English" />}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "coach-profile-content-wrapper")}
              id={_utils.cx(
                _styles,
                "w-node-d88d2a90-c026-3e82-c22b-bbbe02825fa2-02825f77"
              )}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
