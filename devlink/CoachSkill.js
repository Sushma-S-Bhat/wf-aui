import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CoachSkill.module.css";

export function CoachSkill({
  as: _Component = _Builtin.Block,
  text = "Skill",
}) {
  return (
    <_Component className={_utils.cx(_styles, "coach-skill")} tag="div">
      {text}
    </_Component>
  );
}
